console.log("Name:Dayana, Group:SE-2425");
alert("Hello, JavaScript World!");

let name = "Name";
let age = 18;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);


let x = 5;
let y = 3;
console.log("Sum:", x + y);
console.log("Product:", x * y);
console.log("Division:", x / y);


let greeting = "Hello, " + name + "!";
console.log(greeting);
function changeText() {
    document.getElementById("text").innerText = "new text!";
}


function changeColor() {
    document.getElementById("box").style.backgroundColor = "lightblue";
}

function changeFontSize() {
    document.getElementById("box").style.fontSize = "20px";
}
function addItem() {
    const li = document.createElement("li");
    li.textContent = "New Item";
    document.getElementById("list").appendChild(li);
}

function removeItem() {
    const list = document.getElementById("list");
    if (list.lastElementChild) list.removeChild(list.lastElementChild);
}
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => hoverBox.style.background = "green");
hoverBox.addEventListener("mouseout", () => hoverBox.style.background = "gray");
const inputField = document.getElementById("inputField");
const display = document.getElementById("display");

inputField.addEventListener("keyup", () => {
    display.textContent = inputField.value;
});
let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
        li.remove();
        tasks = tasks.filter(t => t !== taskText);
    };

    li.onclick = () => li.classList.toggle("completed");
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);
    tasks.push(taskText);
    input.value = "";
}
