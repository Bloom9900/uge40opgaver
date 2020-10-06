let peter= { name: "Peter", age: 14, gender: "male" }

function addMayDriveProperty(member) {
  let clone = {...member}
  for(const [key, value] of Object.entries(clone)) {
      if (key == "age" && value >= 18) {
          clone.mayDrive = true;
      } else {
          clone.mayDrive = false;
      }
  }
  return clone;
}
const adjustedMember = addMayDriveProperty(peter)
console.log(adjustedMember)
console.log(peter)
