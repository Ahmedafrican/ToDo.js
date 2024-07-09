

export  function displayTheForm(){
    const showForm = document.querySelector('.add-todo-form')
    showForm.style.display = 'block'
}


export function addItemsToCheckList() {
    const addItem = document.querySelector('#addtochecklist').value;
    if (addItem !== '') {
        const ol = document.querySelector('.todo-ul');
        const li = document.createElement('li');
        li.textContent = addItem;
        const span = document.createElement('span');
        span.className = 'removeCheckListItem';
        const removeIcon = document.createTextNode('\u00D7');
        span.appendChild(removeIcon);
        li.appendChild(span);
        ol.appendChild(li);
        console.log('checkList' , li);
        document.querySelector('#addtochecklist').value = '';
        span.addEventListener('click', (event) => {
            event.stopPropagation();
            li.remove();
        });
    }
}







export function clearForm(){
    const checkNodeList = document.querySelectorAll('li')
    for(let i = 0 ; i < checkNodeList.length ; i++){
       checkNodeList[i].remove()
    }
    
    document.getElementById('form-todo').reset()
}



// export function displayToDO() {
    
//     const existingCards = document.querySelectorAll('.card');
//     existingCards.forEach(card => card.remove());

    
//     const toDoListJSON = localStorage.getItem('toDoList');
//     const toDoList = toDoListJSON ? JSON.parse(toDoListJSON) : [];

//     if (toDoList.length === 0) {
//         return;
//     }

//     let toDoHeading = document.querySelector('.todo-heading');
//     let projects = document.querySelector('.projects');

//     console.log('array come from local storage' , toDoList);
    
//     toDoList.forEach(toDoItem => {
//         let card = document.createElement('div');
//         card.classList.add('card');
//         projects.appendChild(card); 
//         toDoHeading.appendChild(projects); 

//         let displayObj = {
//             title: toDoItem.title,
//             description: toDoItem.description,
//             dueDate: toDoItem.dueDate,
//             priority: toDoItem.priority,
//             checkList: toDoItem.CheckList.map(item => item.item).join(', ')
//         };

//         for (let key in displayObj) {
//             const para = document.createElement('p');
//             para.textContent = `${key}: ${displayObj[key]}`;
//             card.appendChild(para);
//         }


        
//         let btnRemove = document.createElement('button');
//         btnRemove.classList.add('removeToDo');
//         btnRemove.textContent = 'Delete ToDo';
//         card.appendChild(btnRemove);
//         btnRemove.addEventListener('click', () => {
//             card.remove();
//             const indexToRemove = toDoList.indexOf(toDoItem);
//             if (indexToRemove !== -1) {
//                 toDoList.splice(indexToRemove, 1);
//                 localStorage.setItem('toDoList', JSON.stringify(toDoList));
//             }
//         });
//     });
// }




export function displayToDO() {
    // Clear any existing displayed to-do items
    const existingCards = document.querySelectorAll('.card');
    existingCards.forEach(card => card.remove());

    // Get the to-do list from local storage
    const toDoListJSON = localStorage.getItem('toDoList');
    const toDoList = toDoListJSON ? JSON.parse(toDoListJSON) : [];

    if (toDoList.length === 0) {
        return;
    }

    // Select the container elements
    let toDoHeading = document.querySelector('.todo-heading');
    let projects = document.querySelector('.projects');

    toDoList.forEach(toDoItem => {
        let card = document.createElement('div');
        card.classList.add('card');
        projects.appendChild(card); 
        toDoHeading.appendChild(projects); 

        let displayObj = {
            title: toDoItem.title,
            description: toDoItem.description,
            dueDate: toDoItem.dueDate,
            priority: toDoItem.priority
        };

        for (let key in displayObj) {
            const para = document.createElement('p');
            para.textContent = `${key}: ${displayObj[key]}`;
            card.appendChild(para);
        }

        if(toDoItem.CheckList && toDoItem.CheckList.length>0){
            console.log('hello');
            const ol = document.createElement('ol')
            ol.classList.add('ulCheckList');
            toDoItem.CheckList.forEach((checkListItem)=>{
                const li = document.createElement('li')
                li.textContent = checkListItem.item
                if(checkListItem.status === 'complete'){
                    li.classList.add('completed')
                    console.log('iam good');
                }
                li.addEventListener('click',()=>{
                    li.classList.toggle('completed')
                    checkListItem.status = li.classList.contains('completed')?'complete':'incomplete'
                    localStorage.setItem('toDoList' , JSON.stringify(toDoList))
                })
                ol.appendChild(li);
            })
            card.appendChild(ol);
        }

        // Add a remove button
        let btnRemove = document.createElement('button');
        btnRemove.classList.add('removeToDo');
        btnRemove.textContent = 'Delete ToDo';
        card.appendChild(btnRemove);
        btnRemove.addEventListener('click', () => {
            card.remove();
            const indexToRemove = toDoList.indexOf(toDoItem);
            if (indexToRemove !== -1) {
                toDoList.splice(indexToRemove, 1);
                localStorage.setItem('toDoList', JSON.stringify(toDoList));
            }
        });
    });
}

