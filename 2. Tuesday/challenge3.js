var numbers = [1, 3, 5, 10, 11];

function makeListItem(number) {
  return `<li>${number}</li>`
}

let listItems = numbers.map(makeListItem).join("\n")
//console.log(listItems)
/*
Jeg ville vælge ovenstående metode da jeg synes den er mest overskuelig + at den minder mest om andre programmeringssprog.
Syntaksen på de andre metoder er nem at glemme.
*/





listItems = numbers.map(function (number) {
  return `<li>${number}</li>`
}).join("\n")
//console.log(listItems)

listItems = numbers.map(number => `<li>${number}</li>`).join("\n")
//console.log(listItems)

listItems = numbers.map(number => {
  `<li>${number}</li>`
}).join("\n")
//console.log(listItems)
