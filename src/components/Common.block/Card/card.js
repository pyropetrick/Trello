import {
    showEditMenu,
    showWarning,
    modalTitle,
    modalDesc,
    modalWrapper,
    currentUserName,

} from '../modal/modal';

const options = document.querySelector('.optionUser')

let actionAdd = false;
let currentTaskEditId = 0;
export const btnAddTodo = document.querySelector('.item-todo__button-add-todo');
const todos = [];

export function addTodo() {
    actionAdd = true;
    showEditMenu();

}

function randomRGB() {
    const r = Math.floor(Math.random() * (256)),
          g = Math.floor(Math.random() * (256)),
          b = Math.floor(Math.random() * (256)),
          color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    return color
}

function deleteCard({target}) {
    const card = target.parentNode.parentNode.parentNode
    const cardId = +card.getAttribute('id');
    const cardIdx = todos.findIndex(({id}) => id === cardId);
    todos.splice(cardIdx, 1);
    renderTodo();
}

function onEdit({target}) {
    const item = target.parentNode.parentNode.parentNode;
    const itemId = +item.getAttribute('id');
    currentTaskEditId = itemId;
    const title = item.querySelector('.tasks-list__item-title').innerHTML;
    const desc = item.querySelector('.tasks-list__item-desc').innerHTML;
    modalTitle.value = title;
    modalDesc.value = desc;
    actionAdd = false;
    showEditMenu();

}

function renderCounter() {
    const counter = document.querySelector('.item-todo__header-counter');
    counter.innerHTML = todos.length;
    
}

function renderTodo(list = todos) {
    const tasksList = document.querySelector('.tasks-list');
    tasksList.innerHTML = '';
    list.forEach(({id, titleTask, description, time, colorItem, userName}) => {
        const task = document.createElement('li');
        task.classList.add('tasks-list__item');
        task.setAttribute('id', id);
        task.setAttribute('draggable', true);
        task.style.background = colorItem;

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
        user.innerText = userName;

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
        btnEdit.addEventListener('click', onEdit);

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

export function onConfirm()  {
    if (actionAdd) {
        let options = {
            hour: 'numeric',
            minute: 'numeric',
        }
        let date = new Date();
        let color = randomRGB();
        let todo = {
            id: Date.now(),
            titleTask: modalTitle.value,
            description: modalDesc.value,
            time: date.toLocaleString('ru', options),
            colorItem: color,
            userName: currentUserName,
        }

        todos.push(todo);

    } else {
        let currentTaskIdx = todos.findIndex(task => task.id === currentTaskEditId)
        todos[currentTaskIdx].titleTask = modalTitle.value;
        todos[currentTaskIdx].description = modalDesc.value;
        todos[currentTaskIdx].userName = currentUserName;
    }
    renderTodo();
    modalWrapper.classList.remove('active');
    modalTitle.value = '';
    modalDesc.value = '';
    currentUserName = '';
}










