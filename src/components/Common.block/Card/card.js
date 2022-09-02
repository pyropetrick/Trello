import{editItem, deleteItem , renderConfirm} from '../modal/modal'
let btnAddTodo = document.querySelector('.item-todo__button-add-todo');
const todos = [];

function addTodo() {
    let date = new Date();
    let options = {
        hour: 'numeric',
        minute: 'numeric',
    }
    let todo = {
        id: Date.now(),
        titleTask: '',
        description: '',
        time: date.toLocaleString('ru', options)
    }

    todos.push(todo);
    renderTodo();
}

function deleteCard({target}) {
    const card = target.parentNode.parentNode.parentNode
    const cardId = +card.getAttribute('id');
    const cardIdx = todos.findIndex(({id}) => id === cardId);
    todos.splice(cardIdx, 1);
    renderTodo();
}


function renderCounter() {
    const counter = document.querySelector('.item-todo__header-counter');
    counter.innerHTML = todos.length;
    
}

function renderTodo(list = todos) {
    const tasksList = document.querySelector('.tasks-list');
    tasksList.innerHTML = '';
    list.forEach(({id, titleTask, description, time}) => {
        const task = document.createElement('li');
        task.classList.add('tasks-list__item');
        task.setAttribute('id', id);

        // titles 
        const titlesBlock = document.createElement('div');
        titlesBlock.classList.add('tasks-list__item-titles');
        
        // title 

        const title = document.createElement('p');
        title.classList.add('tasks-list__item-title');
        title.innerText = titleTask;

        // desc

        const desc = document.createElement('p');
        desc.classList.add('tasks-list__item-desc');
        desc.innerText = description;

        // user 
        const user = document.createElement('p');
        user.classList.add('tasks-list__item-user');
        user.innerText = '';

        // actions 

        const actionsBlock = document.createElement('div');
        actionsBlock.classList.add('tasks-list__item-actions');

        // editing block

        const editBlock = document.createElement('div');
        editBlock.classList.add('tasks-list__item-actions-editing');

        // buttons

        const btnEdit = document.createElement('button');
        btnEdit.classList.add('tasks-list__item-actions-edit');
        btnEdit.innerHTML = 'Edit';
        btnEdit.addEventListener('click', editItem);

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('tasks-list__item-actions-delete');
        btnDelete.innerHTML = 'Delete';
        btnDelete.addEventListener('click', deleteCard);

        const btnJump = document.createElement('button');
        btnJump.classList.add('tasks-list__item-actions-jump');
        btnJump.innerHTML = '>';

        // time 

        const timeCreate = document.createElement('p');
        timeCreate.classList.add('tasks-list__item-actions-time');
        timeCreate.innerHTML = time;

        // composite to list

        // titles 
        titlesBlock.append(title);
        titlesBlock.append(desc);
        titlesBlock.append(user);

        // actions 

        editBlock.append(btnEdit);
        editBlock.append(btnDelete);
        actionsBlock.append(editBlock);
        actionsBlock.append(btnJump);
        actionsBlock.append(timeCreate);
        
        // task 
        task.append(titlesBlock);
        task.append(actionsBlock);

        // list 
        tasksList.append(task);

        })

        
    renderCounter();
}

btnAddTodo.addEventListener('click', addTodo);
