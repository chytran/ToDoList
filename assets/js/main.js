const form = document.getElementById("form");
var formSubmit = document.getElementById("form-submit");
const container = document.querySelector(".to__do__container");

// Creating elements
const addToDo = document.createElement('button');
addToDo.classList = "add__button";
const deleteToDo = document.createElement("button");
deleteToDo.classList = "delete__button";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var formInput = document.getElementById("form-input").value;
    let information = document.createElement('information');

    information.innerHTML = `
            <span class="toDoResult">${formInput}</span>
            <button class="add__button">+</button>
            <button class="delete__button">-</button>
    `;

    if (form !== ''){
        container.appendChild(information);
    } else alert("Please enter a To Do");
    
})