


const localToDoStorage = (toDoItem) => {
    
    const existingToDoListJSON = localStorage.getItem('toDoList');
    const existingToDoList = existingToDoListJSON ? JSON.parse(existingToDoListJSON) : [];


    existingToDoList.push(toDoItem);


    const updatedToDoListJSON = JSON.stringify(existingToDoList);
    localStorage.setItem('toDoList', updatedToDoListJSON);

    return existingToDoList; 
};

export default localToDoStorage;

