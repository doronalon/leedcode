let reversWordInSentence = (s:string): string => {
    let str: string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
    let reverseEntireSentence: string = reverseBySeparator(str, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
    return reverseBySeparator(reverseEntireSentence, " ");

    function reverseBySeparator(str: string, separator: string): string {
        return str.split(separator).reverse().join(separator);
    }
}

console.log(reversWordInSentence('Welcome to this Javascript Guide!'))