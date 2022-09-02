


const modalBtnConfirm = document.querySelector('.modal__bttn');


    export const renderEdit = () => {
        const modalWrapper = document.querySelector('.modal__wrapper');
        modalWrapper.style.display = "block";
    }

    export const renderDelete = () => {
        const modalWrapper = document.querySelector('')
    }

    export const renderConfirm = () => {
        const modalWrapper = document.querySelector('.modal__wrapper');
        modalWrapper.style.display = "none";
    }


    modalBtnConfirm.addEventListener('click', renderConfirm);
