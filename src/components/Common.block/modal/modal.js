
export const modalTitle = document.querySelector('.modal__input-title');
export const modalDesc = document.querySelector('.modal__input-description ');
export const modalBtnConfirm = document.querySelector('.modal__btn-confirm');
export const modalBtnCancel = document.querySelector('.modal__btn-cancel');
export const modalWrapper = document.querySelector('.modal__wrapper');
const userList = document.querySelector('.user__list')


export const showEditMenu = () => {
    modalWrapper.classList.add('active');
}


export const onCancel = () => {
    modalWrapper.classList.remove('active');
    modalDesc.value = '';
    modalTitle.value = '';
}


modalBtnCancel.addEventListener('click', onCancel);


export const showWarning = (text) => {
    const warning = document.querySelector('.warning');
    const textWarning = warning.querySelector('.warning__text');
    textWarning.innerText = text;
    warning.style.display = 'flex';
    
}

export const retrieveUserList = () => {
    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
    return users;
}

retrieveUserList().forEach((item, index) => {
   const userOption = document.createElement("option");
   userOption.value = index;
   userOption.innerHTML = item;
   userList.appendChild(userOption);
});

function updateTrelloTime () {
    let date = new Date();
    let options = {
        hour: 'numeric',
        minute: 'numeric',
    }
    let currentTime = document.querySelector('.header__time');
    currentTime.innerText = date.toLocaleString('ru', options);
}
setInterval(updateTrelloTime, 1000);
