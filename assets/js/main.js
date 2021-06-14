const form = document.getElementById("form");
var formSubmit = document.getElementById("form-submit");
const container = document.querySelector(".to__do__container");

// Creating elements
const addToDo = document.createElement('button');
addToDo.classList = "add__button";
const deleteToDo = document.createElement("button");
deleteToDo.classList = "delete__button";

// Keep track of maximum to do one can do at once
let count = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Making a container for each individual to do 
    let information = document.createElement('li');
    information.classList.add('information');
    information.style.width = "100%";
    information.style.display = "flex";
    information.style.alignItems = "center";
    information.style.justifyContent = "space-between";

    // Get the input from the form
    var formInput = document.getElementById("form-input").value;

    // giving the information container html with input
    information.innerHTML = formInput;

    // Add if form is not empty, otherwise, warn the user
    if (form !== ''){
        if (count <= 9){
            container.insertBefore(information, container.childNodes[0]);
            formInput.value = '';
            count++;
        }
         else {
             alert("You reached the maximum To do's at the moment");
         }
    } else alert("Please enter a To Do");   
})


// Delete to do
container.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
    }
})