import createToDO from "./create-to-do";
import { displayTheForm, addItemsToCheckList, clearForm, displayToDO } from './dom-manip';


displayToDO();

const todoBtn = document.querySelector(".add-todo-btn");
todoBtn.addEventListener('click', displayTheForm);

const addToChecklist = document.querySelector('.add-to-checklist');
addToChecklist.addEventListener('click', (e) => {
    e.preventDefault();
    addItemsToCheckList();
});

const clearButton = document.querySelector('.resetbtn');
clearButton.addEventListener('click', clearForm);

const submitButton = document.querySelector('.submitbtn');
submitButton.addEventListener('click', createToDO);
