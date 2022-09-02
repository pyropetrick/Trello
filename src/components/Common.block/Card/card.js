import{editItem, deleteItem , renderConfirm} from '../modal/modal'
let btnAddTodo = document.querySelector('.item-todo__button-add-todo');

function renderTodo() {
    const tasksList = document.querySelector('.tasks-list');
    // task
    const task = document.createElement('li');
    task.classList.add('tasks-list__item');

    // titles 
    const titlesBlock = document.createElement('div');
    titlesBlock.classList.add('tasks-list__item-titles');
    
    // title 

    const title = document.createElement('p');
    title.classList.add('tasks-list__item-title');
    title.innerText = 'Title';

    // desc

    const desc = document.createElement('p');
    desc.classList.add('tasks-list__item-desc');
    desc.innerText = 'Description';

    // user 
    const user = document.createElement('p');
    user.classList.add('tasks-list__item-user');
    user.innerText = 'User';

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
    btnDelete.addEventListener('click', deleteItem);

    const btnJump = document.createElement('button');
    btnJump.classList.add('tasks-list__item-actions-jump');
    btnJump.innerHTML = '>';

    // time 

    const time = document.createElement('p');
    time.classList.add('tasks-list__item-actions-time');
    time.innerHTML = 'Time';

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
    actionsBlock.append(time);
    
    // task 
    task.append(titlesBlock);
    task.append(actionsBlock);

    // list 
    tasksList.append(task);

}

btnAddTodo.addEventListener('click', renderTodo);


