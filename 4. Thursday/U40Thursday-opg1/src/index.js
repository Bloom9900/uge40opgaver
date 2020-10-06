import "./style.css"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import personFacade from "./personFacade"

function getAll() {
    personFacade.getAll()
        .then(data => {
            const personer = data.all;
            const tableRows = personer.map(person => `
        <tr>
            <td>${person.id}</td>
            <td>${person.fName}</td>
            <td>${person.lName}</td>
            <td>${person.phone}</td>
            <td>${person.street}</td>
            <td>${person.zip}</td>
            <td>${person.city}</td>
            <td>
                <a href="#" class="btndelete" id="${person.id}">delete</a>
                /
                <a href="#" class="btnedit" id="${person.id}">edit</a>
            </td>
        </tr>
    `)
            const tableRowsStr = tableRows.join("");
            document.getElementById("tbody").innerHTML = tableRowsStr;
        })
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => {
                    console.log(e.message);
                    document.getElementById("error").innerHTML = e.message;
                })
            } else {
                console.log("Network Error");
            }
        })
}


/*
Jeg kan benytte event.target.className til at se hvilken knap der bliver trykket på,
men har ikke nogen felter til at editere brugeren så har udkommenteret.
const tbody = document.getElementById("tbody");
tbody.addEventListener('click', (event) => {
    if(event.target.className === "btndelete") {
        personFacade.deletePerson(event.target.id);
    } else if(event.target.className === "btnedit") {
        personFacade.editPerson();
    }
    getAll();
})
*/

const tbody = document.getElementById("tbody");
tbody.addEventListener('click', (event) => {
    personFacade.deletePerson(event.target.id);
})

const reload = document.getElementById("reload");
reload.addEventListener('click', (event) => {
    getAll();
});

const addPerson = document.getElementById("savebtn");
addPerson.addEventListener('click', (event) => {
    let fName = document.getElementById("fname").value;
    let lName = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    const newUser = {
        fName,
        lName,
        phone
    }
    personFacade.addPerson(newUser);
    getAll();
})

getAll();
