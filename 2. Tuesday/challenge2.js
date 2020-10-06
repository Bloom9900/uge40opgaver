var numbers = [1, 3, 5, 10, 11];

function makeListItem(number) {
  return `<li>${number}</li>`
}

function myMap(data,array){
    var newArray = [];
    array.forEach(element => {
        newArray.push(data(element));
    });
    return newArray;
}

//let listItems = numbers.map(makeListItem); I don’t exist :-( 
let listItems = myMap(makeListItem, numbers);
console.log("Challenge 2: \n", listItems);