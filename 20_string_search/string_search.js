function testIndexOf(text) {
    let wordToFind = "locate";
    console.log(`index of \'${wordToFind}\' is: ${text.indexOf(wordToFind)}`);
    console.log(`Last index of \'${wordToFind}\' is: ${text.lastIndexOf(wordToFind)}`);

    //search method accepts regex
    console.log(`Search of \'${wordToFind}\' is: ${text.search(wordToFind)}`);
}

function testMatch() {
    const sentence = "The rain in SPAIN stays mainly in the plain";
    const pattern = /ain/g;
    const patternInsensitive = /ain/gi;
    const result = sentence.match(pattern);
    const resultInsensitive = sentence.match(patternInsensitive);
    console.log(`${sentence} \'${pattern}\' search: ${result} and type: ${typeof(result)}`);
    console.log(`${sentence} \'${patternInsensitive}\' search: ${resultInsensitive} and type: ${typeof(resultInsensitive)}`);
}

const text = "Please locate where 'locate' occurs!";


console.log("\n ========== String Search Methods ========== \n");


console.log("\n ========== Index Of Method ========== ");
testIndexOf(text);

console.log("\n ========== Match Method ========== ");
testMatch();
