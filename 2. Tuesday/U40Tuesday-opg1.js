var names = ["Hassan", "Jan", "Peter", "Boline", "Frederik"];
var newNames = names.filter(containA);
var reversedNames = names.map(reverseString);

function containA(name) {
    if(name.includes("a")) {
        return name;
    }
}

function reverseString(str) {
    var retVal = "";
    for (var i = str.length - 1; i >= 0; i--) {
        retVal += str[i];
    }
    return retVal;
}

console.log("Vores array i starten: ", names);
console.log("Opgave 1a) ", newNames);
console.log("Opgave 1b) ", reversedNames);