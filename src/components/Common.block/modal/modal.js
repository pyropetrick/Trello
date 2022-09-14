

export const modalTitle = document.querySelector('.modal__input-title');
export const modalDesc = document.querySelector('.modal__input-description ');
export const modalBtnConfirm = document.querySelector('.modal__btn-confirm');
export const modalBtnCancel = document.querySelector('.modal__btn-cancel');
export const modalWrapper = document.querySelector('.modal__wrapper');







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