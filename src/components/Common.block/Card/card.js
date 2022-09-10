import{
    showEditMenu,  
    showWarning, 
    modalTitle, 
    modalDesc,
    modalWrapper,
    modalBtnConfirm,

} from '../modal/modal'

const btnAddTodo = document.querySelector('.item-todo__button-add-todo');
const todos = [];

function addTodo() {

    if (todos.length >= 6) {
        showWarning('Вы пытаетесь добавить больше 6 карточек, удалить первую?');
    } else {
        showEditMenu();
    }
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

    
    showEditMenu();
}

function renderCounter() {
    const counter = document.querySelector('.item-todo__header-counter');
    counter.innerHTML = todos.length;
    
}

function renderTodo(list = todos) {
    const tasksList = document.querySelector('.tasks-list');
    tasksList.innerHTML = '';
    list.forEach(({id, titleTask, description, time, colorItem}) => {
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

function confirmEdit()  {
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
    }

    todos.push(todo);
    renderTodo();
    modalWrapper.classList.remove('active');
    modalTitle.value = '';
    modalDesc.value = '';
}

btnAddTodo.addEventListener('click', addTodo);
modalBtnConfirm.addEventListener('click', confirmEdit);



