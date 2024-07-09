import { parseISO, startOfToday } from '../node_modules/date-fns';
import { clearForm, displayToDO } from './dom-manip';
import localToDoStorage from './localStorage';

let toDoArray = [];

const createToDO = () => {
    // Retrieve form values
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let dueDate = document.querySelector('#DueDate').value;
    let priority = document.querySelector('#priority').value;

    // Validate form inputs
    if (title === '' || description === '' || dueDate === '') {
        alert('The title, description, and due date are required');
        return;
    }

    // Validate due date
    if (parseISO(dueDate) < startOfToday()) {
        console.log(parseISO(dueDate));
        console.log(startOfToday());
        alert('The due date cannot be in the past');
        return;
    }

    // Retrieve checklist items
    const li = document.querySelectorAll('.todo-ul li');
    console.log('checklist come from input' , li);
    let checkListArray = [];
    for (let i = 0; i < li.length; i++) {
        let strippedCheckList = li[i].textContent.replace('\u00D7', '').trim();
        console.log('after trim' , strippedCheckList);
        checkListArray.push({ item: strippedCheckList, status: 'incomplete' });
        console.log('the array of checklist have trim text' , checkListArray);
    }

    // Create the to-do item object
    const toDoItem = { 
        title, 
        description, 
        dueDate, 
        priority, 
        CheckList: checkListArray 
    };

    // Add to the local array and local storage
    toDoArray.push(toDoItem);
    localToDoStorage(toDoItem);

    
    // Clear the form
    clearForm();

    displayToDO();

    // Return the to-do item
    return toDoItem;
};

export default createToDO;


