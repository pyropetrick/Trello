export const modalTitle = document.querySelector('.modal__input-title');
export const modalDesc = document.querySelector('.modal__input-description ');
export const modalBtnConfirm = document.querySelector('.modal__btn-confirm');
export const modalBtnCancel = document.querySelector('.modal__btn-cancel');
export const modalWrapper = document.querySelector('.modal__wrapper');
export const userList = document.querySelector('.user__list');
export let currentUserName = '';

export const showEditMenu = () => {
    modalWrapper.classList.add('active');
}


export const onCancel = () => {
    modalWrapper.classList.remove('active');
    modalDesc.value = '';
    modalTitle.value = '';
}

export const showWarning = (text) => {
    const warning = document.querySelector('.warning');
    const textWarning = warning.querySelector('.warning__text');
    textWarning.innerText = text;
    warning.style.display = 'flex';
    
}
export function setItem({ target }) {
    const indexSelect = target.value;
    currentUserName = target.children[indexSelect - 1].innerHTML;
    console.log(currentUserName);
}

function retrieveUserList(users) {
    users.forEach(({id, username}) => {
        const userOption = document.createElement("option");
        userOption.classList.add('optionUser');
        userOption.value = id;
        userOption.innerHTML = username;
        userList.append(userOption);
    })
}



export function updateTrelloTime () {
    let date = new Date();
    let options = {
        hour: 'numeric',
        minute: 'numeric',
    }
    let currentTime = document.querySelector('.header__time');
    currentTime.innerText = date.toLocaleString('ru', options);
}

export async function getListUsers() {
    console.log('start');
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.status === 200) {
        const users = await response.json();
        retrieveUserList(users);
    }

}




