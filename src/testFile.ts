import * as xml2js from 'xml2js-es6-promise';


function extractedUrl(data: any): Promise<string> {
    return new Promise((resolve, reject) => {
        xml2js(data, {trim: true})
            .then(js => {

                console.info(JSON.stringify(js))
                console.info(JSON.stringify("&&&&&&&&&&&&&&&&&&"))
                console.info(JSON.stringify(js.file['file-info'][0]))

                let fileInfoFromMstore: string [] = js.file['file-info'][0];
                let url: string = fileInfoFromMstore['data'][0]['$']['url'];
                console.info({
                    action: `extracted Url from mstore data response`,
                    url: url
                });
                resolve('d');
            })
            .catch(error => {
                reject(new Error(error.message));
            });
    });
}

// let data = {
//     file: {
//         "file-info": [
//             {
//                 "data": [{
//                     $: {
//                         url: "e2e-mStore-url"
//                     }
//                 }]
//             }
//         ]
//     }
// }

// let data = "<file> <file-info> <data><url>e2e-mStore-url</url></data></file-info></file>"
let data = "<file><file-info><data url='2e-mStore-url'></data></file-info></file>"

// extractedUrl(data)

function xmlParse(xml) {
    xml2js(xml).then((js) => {
        console.log(JSON.stringify(js));
    });
}

let xml = "<root>Hello xml2js!</root>"
extractedUrl(data)