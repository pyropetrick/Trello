const modalBtnConfirm = document.querySelector('.button2');
const modalBtnCancel = document.querySelector('.button1');
const modalWrapper = document.querySelector('.modal__wrapper');
const userList = document.querySelector('.user__list');
const tasksList = document.querySelector('.tasks-list');


export const editItem = () => {
    modalWrapper.style.display = "flex";
}

export const deleteItem = (event) => {
    if (!event.target.classList.contains('tasks-list__item-actions-delete')) {
        return;
    }

    let taskListItem = event.target.parentNode.parentNode.parentNode;
    tasksList.removeChild(taskListItem);     
}

export const renderConfirm = () => {
    modalWrapper.style.display = "none";
}

export const renderCancel = () => {
    modalWrapper.style.display = "none";
}

export const retrieveUserList = () => {
    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
    return users;
}

modalBtnConfirm.addEventListener('click', renderConfirm);
modalBtnCancel.addEventListener('click', renderCancel);

retrieveUserList().forEach((item, index) => {
   const userOption = document.createElement("option");
   userOption.value = index;
   userOption.innerHTML = item;
   userList.appendChild(userOption);
});