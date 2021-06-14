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

    // Making a container for each individual to do 
    let information = document.createElement('div');
    information.style.width = "100%";
    information.style.display = "flex";
    information.style.alignItems = "center";
    information.style.justifyContent = "space-between";

    // Get the input from the form
    var formInput = document.getElementById("form-input").value;

    // giving the information container html with input
    information.innerHTML = `
        <span class="toDoResult">${formInput}</span>
        <div class="button__container">
            <button class="delete__button">-</button>  
        </div>
    `;

    // Add if form is not empty, otherwise, warn the user
    if (form !== ''){
        container.appendChild(information);
    } else alert("Please enter a To Do");
    
})


// // Delete to do
// function deleteToDo (element) {
//     element.parentNode.removeChild(element);
// }

// Get delete button from the new to do
let deleteButton = document.querySelector('delete__button');

// Delete specific to do on click
deleteButton.addEventListener('click', (e) => {
    e.remove();
})