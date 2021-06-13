const form = document.getElementById("form");
const formInput = document.querySelector("form__input").value;
const formSubmit = document.querySelector("form__submit");
const container = document.querySelector("to__do__container");

// Creating elements
const addToDo = document.createElement('button');
addToDo.classList = "add__button";
const deleteToDo = document.createElement("button");
deleteToDo.classList = "delete__button";

