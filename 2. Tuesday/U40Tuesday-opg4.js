var all= ["Hassan", "Peter", "Carla", "Boline"];

console.log("Opgave 4a) ", all.join("#"));

var numbers = [2, 3, 67, 33];

function getSum(total, num) {
    return total + num;
}

console.log("Opgave 4b) ", numbers.reduce(getSum));

var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}];

function getAvg(sum, member, index, array) {
    sum.age += member.age;
    return sum;
}

let sum = members.reduce(getAvg);
let average = sum.age / members.length;
console.log("Opgave 4c) Average Age: ", average)


/*
function countVotes(acc, vote) {
    if(vote === "Trump") {
        acc.Trump ++;
    } else if(vote === "Biden") {
        acc.Biden ++;
    } else if(vote === "None") {
        acc.None ++;
    }
    return acc;
}

var a = {
    Trump: 0,
    Biden: 0,
    None: 0
}
*/

const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];

function countVotes(acc, current) {
    if(acc[current]) {
        acc[current] ++;
    } else {
        acc[current] = 1;
    }
    return acc;
}

let result = votes.reduce(countVotes, a);
console.log("Opgave 4d) ", result);


