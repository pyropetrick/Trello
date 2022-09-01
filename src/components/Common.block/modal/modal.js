import { addToStorage, removeFromStorage } from "../../../../../../../Library/Mobile Documents/com~apple~CloudDocs/Frontend/TMS/JS/Lesson 11/todo-list-vanilla/scripts/storageHelpers";

let tasks = [];
let IDX = 0;
const UNIQUE_ID_PREFIX = 'Tasks-List_';


const modalBtnConfirm = document.querySelector('.modal__bttn');
const modalBtnCancel = document.querySelector('.modal__btn');

export const renderEdit = () => {
    const modalWrapper = document.querySelector('.modal__wrapper');
    modalWrapper.style.display = "block";
}

export const renderDelete = ({ target }) => {
   if (target.classList.contains('tasks-list__item-actions-delete')) {
      let taskUIndex = target.dataset.taskIndex;
      const taskIndex = tasks.findIndex(({ id }) => === taskUIndex);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);

        if (tasks.length) {
            addToStorage({ key: 'tasks', value: tasks});
        } else {
            removeFromStorage('tasks')
;       }
        renderTodos();
        renderCounters();
      }
   }
}

export const renderConfirm = () => {
    const modalWrapper = document.querySelector('.modal__wrapper');
    modalWrapper.style.display = "none";
}

export const renderCancel = () => {
    const modalWrapper = document.querySelector('.modal__wrapper');
    modalWrapper.style.display = "none";
}

modalBtnConfirm.addEventListener('click', renderConfirm);
modalBtnCancel.addEventListener('click', renderCancel);