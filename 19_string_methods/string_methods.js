function testStringLength(text) {
    console.log(`length of \"${text}\" is: ${text.length}`);
}

//slice(start, end), end excluded, negative values accepted
function testStringSlice(text) {
    console.log(`Slice of \"${text}\" is: ${text.slice(2, 6)}`);
}

//substring(start, end), end excluded
function testStringSubstring(text) {
    console.log(`Substring of \"${text}\" is: ${text.substring(2, 6)}`);
}

//substring(start, length)
function testStringSubstr(text) {
    console.log(`Substr of \"${text}\" is: ${text.substr(2, 3)}`);
}

//replace() method returns a new string, does not change original string
//changes first match, also regex are fine
function testStringReplace(text) {
    console.log(`Replacement of \"${text}\" is: ${text.replace("ABC", "abc")}`);
}

function testStringReplaceAll(text) {
    console.log(`Replacement all of \"${text}\" is: ${text.replaceAll("ABC", "abc")}`);
}

function testStringUpperLowerCase(text) {
    console.log(`To Lower Case of \"${text}\" is: ${text.toLowerCase()}`);
}

function testStringConcat(text) {
    let text2 = "Additional text";
    console.log(`Concat strings: ${text.concat(", ", text2)}`);
}

function testStringTrim() {
    let textToTrim = "   To Trim   ";
    console.log(`${textToTrim} trimm: ${textToTrim.trim()}`);
}

//trimEnd also available
function testStringTrimStart() {
    let textToTrim = "   To Trim   ";
    console.log(`${textToTrim} trimm: ${textToTrim.trimStart()}`);
}

function testStringPadStart(text) {
    console.log(`${text} with padding: ${text.padStart(4,"x")}`);
}

function testStringCharAt(text) {
    const bIndex = 1;
    console.log(`${text} char at 2: ${text.charAt(bIndex)}`);
    console.log(`${text} char code at 2: ${text.charCodeAt(bIndex)}`);
}

function testStringSplit() {
    let textToSplit = "text, separated, with, commas";
    let textToSplitArray = textToSplit.split(",");
    console.log(`${textToSplit} to array with type ${typeof(textToSplitArray)}:`);
    console.log(textToSplitArray);
}

const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log("\n ========== String Methods ========== \n");

console.log("\n ========== String Length Method ========== ");
testStringLength(text);

console.log("\n ========== String Slice Method ========== ");
testStringSlice(text);

console.log("\n ========== String Substring Method ========== ");
testStringSubstring(text);

console.log("\n ========== String Substr Method ========== ");
testStringSubstr(text);

console.log("\n ========== String Replace Method ========== ");
testStringReplace(text);

console.log("\n ========== String Replace All Method ========== ");
testStringReplaceAll(text);

console.log("\n ========== String To Upper And Lower Case Methods ========== ");
testStringUpperLowerCase(text);

console.log("\n ========== String Concat Method ========== ");
testStringConcat(text);

console.log("\n ========== String Trim Method ========== ");
testStringTrim();

console.log("\n ========== String Trim Start Method ========== ");
testStringTrimStart();

console.log("\n ========== String Pad Start Method ========== ");
testStringPadStart(text);

console.log("\n ========== String Char At Method ========== ");
testStringCharAt(text);

console.log("\n ========== String Split Method ========== ");
testStringSplit();


