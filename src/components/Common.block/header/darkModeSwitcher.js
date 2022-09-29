import {addToStorage} from "../../../js/storage";

export const inputSwitcher = document.getElementById('slider')
export const body = document.querySelector('body');

inputSwitcher.addEventListener('change', ({target: {checked}}) => {
    if (checked) {
        body.classList.add('dark-mode');
        addToStorage({key: 'theme', value: checked});
    }
    else {
        body.classList.remove('dark-mode');
        addToStorage({key: 'theme', value: checked});
    }
})