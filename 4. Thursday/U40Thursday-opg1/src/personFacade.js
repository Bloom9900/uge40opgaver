import SERVER_URL from './constants.js'
const URL = "https://bloom-dat.dk/tomcat/U39Wednesday-PART1/api/person/";

function getAll() {
    return fetch(URL+"all")
    .then(handleHttpErrors)
}

function getPerson(id) {
    return fetch(URL+"byid/"+id)
    .then(handleHttpErrors)
}

function addPerson(person) {
    const options = makeOptions("POST", person);
    return fetch(URL, options)
    .then(handleHttpErrors)
}

function editPerson(person) {
    const options = makeOptions("PUT", person)
    return fetch(URL, options)
    .then(handleHttpErrors)
}

function deletePerson(id) {
    const options = makeOptions("DELETE", id);
    return fetch(URL+"delete/"+id, options)
    .then(handleHttpErrors)
}

const personFacade = {
    getAll,
    getPerson,
    addPerson,
    editPerson,
    deletePerson
}

function makeOptions(method, body) {
    var opts =  {
      method: method,
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    if(body){
      opts.body = JSON.stringify(body);
    }
    return opts;
}

function handleHttpErrors(res){
    if(!res.ok){
      return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
}

export default personFacade;