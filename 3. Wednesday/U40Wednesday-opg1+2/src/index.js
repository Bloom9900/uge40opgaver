import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import jokeFacade from "./jokeFacade"
import userFacade from "./userFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
//Render all jokes
function getAllJokes() {
  const jokes = jokeFacade.getJokes();
  //let jokeList = jokes.map(joke => "<li>" + joke + "</li>"); Next line is more common JS code
  let jokeList = jokes.map(joke => `<li>${joke}</li>`);
  document.getElementById("jokes").innerHTML = jokeList.join("");
}
getAllJokes();
//Get joke by ID
let getJokeBtn = document.getElementById("getJokeBtn");
getJokeBtn.addEventListener('click', (event) => {
  event.preventDefault;
  let id = document.getElementById("jokeID").value;
  document.getElementById("joke").innerHTML = jokeFacade.getJokeById(id);
})

//Add new joke
let addJokeBtn = document.getElementById("addJokeBtn");
addJokeBtn.addEventListener('click', (event) => {
  event.preventDefault;
  let newJoke = document.getElementById("addJoke").value;
  jokeFacade.addJoke(newJoke);
  getAllJokes();
})

/* JS For Exercise-2 below */
let quoteBtn = document.getElementById("quoteBtn");
quoteBtn.addEventListener('click', (event) => {
  let quote = document.getElementById("quote");
  let url = "https://studypoints.info/jokes/api/jokes/period/hour";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.getElementById("quote").innerText = getKeyValuePairs(data);
    })
})

function quoteEachHour() {
  let quote = document.getElementById("quote");
  let url = "https://studypoints.info/jokes/api/jokes/period/hour";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.getElementById("quote").innerText = getKeyValuePairs(data);
    })
}

setInterval(quoteEachHour(), 3600000);

function getKeyValuePairs(obj) {
  let str = "";
  for (const [key, value] of Object.entries(obj)) {
    str += `${key}: ${value}\n`;
  }
  return str;
}


/* JS For Exercise-3 below */
function getAllUsers() {
  userFacade.getUsers()
    .then(data => {
      const userRows = data.map(user => `
    <tr>
      <th>${user.id}</th>
      <th>${user.age}</th>
      <th>${user.name}</th>
      <th>${user.gender}</th>
      <th>${user.email}</th>
    </tr>
    `)

      const userRowString = userRows.join('');
      document.getElementById("allUserRows").innerHTML = userRowString;
    })
}



let findBydIDbtn = document.getElementById("findBydIDbtn");
findBydIDbtn.addEventListener('click', (event) => {
  event.preventDefault;
  let id = document.getElementById("findByID").value;
  userFacade.getUser(id)
    .then(data => {
      document.getElementById("showUser").innerText = getKeyValuePairs(data);
    })
    getAllUsers();
})

let addUserBtn = document.getElementById("addUserBtn");
addUserBtn.addEventListener('click', (event) => {
  event.preventDefault;
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let gender = document.getElementById("gender").value
  const newUser = {
    name,
    age,
    email,
    gender
  }
  userFacade.addUser(newUser);
  getAllUsers();
})

let editUserBtn = document.getElementById("editUserBtn");
editUserBtn.addEventListener('click', (event) => {
  event.preventDefault;
  let name = document.getElementById("nameEdited").value;
  let age = documenet.getElementById("ageEdited").value;
  let email = document.getElementById("emailEdited").value;
  let gender = document.getElementById("genderEdited").value;
  const editedUser = {
    name,
    age,
    email,
    gender
  }
  userFacade.editUser(editedUser);
  getAllUsers();
})

let deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener('click', (event) => {
  event.preventDefault;
  let id = document.getElementById("deleteID").value;
  userFacade.deleteUser(id);
  console.log(id);
  getAllUsers();
})

getAllUsers();

/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



