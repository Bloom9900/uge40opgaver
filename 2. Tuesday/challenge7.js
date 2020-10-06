let members = [
    {
        "name": "Peter",
        "age": 14,
        "gender": "male"
    },
    {
        "name": "Lisa",
        "age": 27,
        "gender": "female"
    },
    {
        "name": "Karl",
        "age": 58,
        "gender": "male"
    },
    {
        "name": "Maria",
        "age": 19,
        "gender": "female"
    }
]

function addMayDrivePropertyToAll(members) {
    let clone = members;
    clone.map(member => {
        member.mayDrive = true;
    })
    return clone;
}
const addJusted = addMayDrivePropertyToAll(members);
console.log(members)
console.log(addJusted)
   