var numbers = [1, 3, 5, 10, 11];

var result = numbers.map(function(num, index) {
    if(index == numbers.length-1) {
        return num;
    } else {
        num += numbers[index+1];
        return num;
    }
});


console.log("Opgave 3a) ", result);

var names = ["Hassan", "Jan", "Peter", "Boline", "Frederik"];

var html = names.map(function(str) {
    return '<a href="">' + str + '</a>';
});

html = html.join('\n');

console.log("Opgave 3b) ", html);

var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];

function makeTable(array) {
    var table = 
 `<table>
    <tr>
        <th>Name</th>
        <th>Phone</th>
    </tr>
        `+array.map(getList).join('')+ `
</table>`;

    return table;
}

function getList(person) {
    return '\t<tr><td>'+person.name+'</td><td>'+person.phone+'</td></tr>\n';
}

console.log("Opgave 3c) \n", makeTable(persons));