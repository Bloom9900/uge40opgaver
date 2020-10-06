var members = [
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
    function removeGenderOnAll(members) {
        let clone = members;
        clone.map(member => {
            delete member["gender"]
        })
        return clone;
    }
    
const addJusted = removeGenderOnAll(members);
console.log(members)
console.log(addJusted)
    