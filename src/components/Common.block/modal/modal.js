import { addToStorage, removeFromStorage } from "../../../../../../../Library/Mobile Documents/com~apple~CloudDocs/Frontend/TMS/JS/Lesson 11/todo-list-vanilla/scripts/storageHelpers";

const modalBtnConfirm = document.querySelector('.modal__bttn');
const modalBtnCancel = document.querySelector('.modal__btn');
const modalWrapper = document.querySelector('.modal__wrapper');
let todos = [];
let IDX = 0;

export const editItem = () => {
    modalWrapper.style.display = "flex";
}

export const deleteItem = (event) => {
    if (event.target.classList.contains('tasks-list__item-actions-delete')) {
        let 
    }     
    })
    
}

export const renderConfirm = () => {
    modalWrapper.style.display = "none";
}

export const renderCancel = () => {
    modalWrapper.style.display = "none";
}

modalBtnConfirm.addEventListener('click', renderConfirm);
modalBtnCancel.addEventListener('click', renderCancel);