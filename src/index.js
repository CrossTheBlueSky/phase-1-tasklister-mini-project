document.addEventListener("DOMContentLoaded", () => {
  // your code here



});

const toDoList = document.getElementById("tasks")
const listForm = document.getElementById("create-task-form")
const newTask = document.getElementById("new-task-description")
const sorter = document.getElementById("drop-sort")
let itemArr = []

function colorPicker(item){
  switch(item){
  case "1":
    return "lightskyblue";
  case "2":
    return "rgb(209, 120, 19)";
  case "3":
    return "red"
  default:
    console.log("how did you fuck this up?")
  }
}

function itemMaker(event){
  event.preventDefault()
  console.log(event)
  const newItem = {
    id: event.target[1].value + event.target[0].value,
    value: event.target[1].value,
    color: colorPicker(event.target[0].value),
    priority: event.target[0].value}

    itemArr.push(newItem)
    addListItem(newItem)
}

function addListItem(item){

  const container = document.createElement("div")
  const newItem = document.createElement("li")
  const newButton = document.createElement("button")
  newItem.innerHTML = `${item.value}`
  newItem.contentEditable="true"
  newButton.innerHTML = "X"
  
  newItem.style.color=`${item.color}`
  container.append(newItem)
  newButton.onclick = (e)=> {
    itemArr = itemArr.filter((obj)=> obj.id !== item.id)
    container.remove()}
  container.append(newButton)
  toDoList.append(container)
  
}

function sortList(event){

  
  if(event.target.value === "ascending"){
    toDoList.innerHTML = ""
    itemArr.sort((a, b)=> a.priority - b.priority)
    itemArr.forEach(addListItem)

  } else if (event.target.value === "descending"){
    toDoList.innerHTML = ""
    itemArr.sort((a, b)=> b.priority -  a.priority )
    itemArr.forEach(addListItem)
  }
  
}

sorter.addEventListener("change", sortList)
listForm.addEventListener("submit", itemMaker)
