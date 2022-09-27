import {
    showEditMenu,
    showWarning,
    modalTitle,
    modalDesc,
    modalWrapper,
    currentUserName,
    warningBtnConfirm,
    warningBtnCancel,
    closeWarning,
} from '../modal/modal';

let actionAdd = false;
let currentTaskEditId = 0;
const todos = [];
const progress = [];
let done = [];
const deleteAllBtn = document.querySelector('.delete-all__btn');
export const btnAddTodo = document.querySelector('.item-todo__button-add-todo');
export function addTodo() {
    actionAdd = true;
    showEditMenu();
}

{
deleteAllBtn.addEventListener('click',()=>{
if( done != 0){
    showWarning('Are you sure?');
}
warningBtnConfirm.addEventListener('click', () => {
        done = [];
        renderTask(done, '.done-list');
        closeWarning()});
    warningBtnCancel.addEventListener('click', () => {
        closeWarning();
        })
    })
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
    renderTask(todos, '.todos-list');
}

function deleteCardDone({target}) {
    const card = target.parentNode.parentNode.parentNode
    const cardId = +card.getAttribute('id');
    const cardIdx = done.findIndex(({id}) => id === cardId);
    done.splice(cardIdx, 1);
    renderTask(done, '.done-list');
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

function renderCounter(list, currentList) {
    let counter = document.querySelector(currentList);
    counter.innerText = list.length;
}

function jumpToDone({ target }) {
    const item = target.parentNode.parentNode.parentNode;
    const idItem = +item.getAttribute('id');
    const indexItem = progress.findIndex(({id}) => id === idItem);
    done.push(progress[indexItem])
    progress.splice(indexItem, 1);
    renderTask(progress,'.progress-list');
    renderTask(done, '.done-list');
}

function jumpToDo({ target }) {
    const item = target.parentNode.parentNode.parentNode;
    const idItem = +item.getAttribute('id');
    const indexItem = progress.findIndex(({id}) => id === idItem);
    todos.push(progress[indexItem])
    progress.splice(indexItem, 1);
    renderTask(progress,'.progress-list');
    renderTask(todos,'.todos-list');
}


function jumpToProgress({ target }) {
    const item = target.parentNode.parentNode;
    const idItem = +item.getAttribute('id');
    const indexItem = todos.findIndex(({id}) => id === idItem);
    if (progress.length === 2){
        showWarning('aaaa')
        console.log('start')
        warningBtnConfirm.addEventListener('click', jumpTest(indexItem));
    }
    else  {
        jumpTest(indexItem);
        console.log('end')
    } 
}

function jumpTest(idx) {
    progress.push(todos[idx])
    todos.splice(idx, 1);
    renderTask(todos,'.todos-list');
    renderTask(progress, '.progress-list');
}

warningBtnCancel.addEventListener('click', closeWarning)




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
            btnJump.addEventListener('click', jumpToProgress );

            editBlock.append(btnEdit);
            editBlock.append(btnDelete);
            actionsBlock.append(editBlock);
            actionsBlock.append(btnJump);


        }
        else if (currentList === '.progress-list') {
            const btnBack = document.createElement('button')
            btnBack.classList.add('tasks-list__item-actions-back');
            btnBack.classList.add('button-card');
            btnBack.innerHTML = 'Back';
            btnBack.addEventListener('click', jumpToDo )
            // TODO добавить слушатель события для кнопки back

            const btnComplete = document.createElement('button');
            btnComplete.classList.add('tasks-list__item-actions-complete');
            btnComplete.classList.add('button-card');
            btnComplete.innerHTML = 'Complete';
            btnComplete.addEventListener('click', jumpToDone)
            // TODO добавить слушатель события для кнопки complete

            editBlock.append(btnBack);
            editBlock.append(btnComplete);
            actionsBlock.append(editBlock);
        }
        else if (currentList === '.done-list') {
            const btnDelete = document.createElement('button');
            btnDelete.classList.add('tasks-list__item-actions-delete');
            btnDelete.classList.add('button-card');
            btnDelete.innerHTML = 'Delete';
            btnDelete.addEventListener('click', deleteCardDone); // сейчас она будет удалять из туду
            // TODO Довести до ума и сделать универсальной либо сделать новую такую же функцию с удалением


            editBlock.append(btnDelete);
            actionsBlock.append(editBlock);

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
    renderCounter(todos, '.todos-counter');
    renderCounter(done, '.done-counter');
    renderCounter(progress, '.progress-counter');

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










