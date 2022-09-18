import {
    showEditMenu,
    showWarning,
    modalTitle,
    modalDesc,
    modalWrapper,
    currentUserName,

} from '../modal/modal';

let actionAdd = false;
let currentTaskEditId = 0;
export const btnAddTodo = document.querySelector('.item-todo__button-add-todo');
const todos = [];
const progress = [];
const done = [];
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
    renderTask();
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

function renderCounter(list) {
    const counter = document.querySelector('.item-todo__header-counter');
    counter.innerHTML = list.length;
    
}
function jumpToProgress({ target }) {
    const item = target.parentNode.parentNode;
    const idItem = +item.getAttribute('id');
    const indexItem = todos.findIndex(({id}) => id === idItem);
    progress.push(todos[indexItem])
    renderTask(progress, '.progress-list');
    console.log(progress);
    todos.splice(indexItem, 1);
    renderTask(todos,'.todos-list');
}

function renderTask(list, currentList) {
    const tasksList = document.querySelector(currentList);
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
        if (currentList === '.todos-list') {
            const btnEdit = document.createElement('button');
            btnEdit.classList.add('tasks-list__item-actions-edit');
            btnEdit.classList.add('button-card');
            btnEdit.innerHTML = 'Edit';
            btnEdit.addEventListener('click', onEdit);

            const btnDelete = document.createElement('button');
            btnDelete.classList.add('tasks-list__item-actions-delete');
            btnDelete.classList.add('button-card');
            btnDelete.innerHTML = 'Delete';
            btnDelete.addEventListener('click', deleteCard);

            const btnJump = document.createElement('button');
            btnJump.classList.add('tasks-list__item-actions-jump');
            btnJump.classList.add('button-card');
            btnJump.innerHTML = '>';
            btnJump.addEventListener('click', jumpToProgress);

            editBlock.append(btnEdit);
            editBlock.append(btnDelete);
            actionsBlock.append(editBlock);
            actionsBlock.append(btnJump);

            renderCounter(todos);
        }
        else if (currentList === '.progress-list') {
            const btnBack = document.createElement('button')
            btnBack.classList.add('tasks-list__item-actions-back');
            btnBack.classList.add('button-card');
            btnBack.innerHTML = 'Back';

            const btnComplete = document.createElement('button');
            btnComplete.classList.add('tasks-list__item-actions-complete');
            btnComplete.classList.add('button-card');
            btnComplete.innerHTML = 'Complete';

            editBlock.append(btnBack);
            editBlock.append(btnComplete);
            actionsBlock.append(editBlock);

            renderCounter(progress);
        }
        else if (currentList === '.done-list') {
            const btnDelete = document.createElement('button');
            btnDelete.classList.add('tasks-list__item-actions-delete');
            btnDelete.classList.add('button-card');
            btnDelete.innerHTML = 'Delete';
            btnDelete.addEventListener('click', deleteCard);

            editBlock.append(btnDelete);
            actionsBlock.append(editBlock);
            renderCounter(done);
        }

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
        actionsBlock.append(timeCreate);
        
        // task 
        task.append(titlesBlock);
        task.append(actionsBlock);

        // list 
        tasksList.append(task);

        })

        

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
        todos[currentTaskIdx].userName = currentUserName;    }
    renderTask(todos,'.todos-list');
    modalWrapper.classList.remove('active');
    modalTitle.value = '';
    modalDesc.value = '';
}










