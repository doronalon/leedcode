import * as ffmpeg from 'fluent-ffmpeg'
import * as fs from 'fs-extra'


export class FileUploadService {

    constructor(

    ) {
    }



    static async runFfmpeg(): Promise<void> {

            let mp4File: string ="9578429.mp4"
            let webmFile: string ="./9578429.webm"

        console.info(`is file exist: ${webmFile } ? ${await fs.pathExists(webmFile)}`)
            console.info({
                    action: `Start converting file`,
                    sourceFile: webmFile,
                    destinationFile: mp4File
                }
            )
            try {

                await ffmpeg(webmFile)
                    .inputFormat('webm')
                    .outputOptions(['-vcodec copy', '-movflags +faststart'])
                    // .outputOptions([ '-vcodec copy'])
                    .output(mp4File)
                    .on('progress', function (progress) {
                        console.info({
                            action: `Converting webm file to in progress`,
                            destinationFile: mp4File,
                            convertedSize: `${progress.targetSize} KB`
                        })
                    })
                    .on('end', function () {
                        console.info({
                            action: `Converting finished!`,
                            destinationFile: mp4File,
                            status: "Success"
                        })
                        return (mp4File)
                    })
                    .on('error', function (error) {
                        console.error({error: error.stack})

                    })
                    .run()
            } catch (e) {
                console.error({error: e.stack})

            }

    }
}

FileUploadService.runFfmpeg()