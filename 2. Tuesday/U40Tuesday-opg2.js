var names = ["Hassan", "Jan", "Peter", "Boline", "Frederik"];

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

function myFilter(array, callback) {
    var newArray = [];
    array.forEach(element => {
        if(callback(element)) {
            newArray.push(element);
        }
    });
    return newArray;
};

function myMap(array, callback) {
    var newArray = [];
    array.forEach(element => {
        newArray.push(callback(element));
    });
    return newArray;
}

console.log("Opgave 2a) ", myFilter(names, containA));
console.log("Opgave 2b) ", myMap(names, reverseString));
