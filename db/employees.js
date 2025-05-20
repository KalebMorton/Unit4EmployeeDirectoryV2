const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

function makeNewId(){
  const allIds = employees.map((item) => {
    return item.id
  })

  let newId = null
  let i = 1

  while(!newId){
    if(!allIds.includes(i)){
      newId = i
    }
    i++
  }

  return(newId)
}

export function getEmployees(){
  return employees
}

export function getRandomEmployee(){
  return employees[ Math.floor(Math.random() * employees.length)]
}

export function addEmployee(newName){
  employees.push({id: makeNewId(), name: newName})
}

export function getSingleEmployee(id){
  return employees.find((item)=>{
    return (item.id == id)
  })
}