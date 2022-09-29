import {
  onConfirm,
  btnAddTodo,
  addTodo,
  deleteAllCards,
  btnDeleteAll,
  onWarningConfirm,
  initStorage
} from '../components/Common.block/Card/card';

import {
  getListUsers,
  updateTrelloTime,
  modalBtnCancel,
  onCancel,
  modalBtnConfirm,
  setItem,
  userList,
  warningBtnCancel,
  closeWarning,
  warningBtnConfirm,
  retrieveUserList,

} from '../components/Common.block/modal/modal';

import {getFromStorage} from "./storage";
import {body, inputSwitcher} from '../components/Common.block/header/darkModeSwitcher';


export function init() {
  // add users list to modal
  if (getFromStorage('users')) {
    retrieveUserList(getFromStorage('users'))
  } else  {
    getListUsers()
  }
  if (getFromStorage('theme')) {
    body.classList.add('dark-mode');
    inputSwitcher.checked = true;
  }

  // time updater
  setInterval(updateTrelloTime, 1000);

  // add modal cancel
  modalBtnCancel.addEventListener('click', onCancel);

  // add modal confirm
  modalBtnConfirm.addEventListener('click', onConfirm);

  warningBtnCancel.addEventListener('click', closeWarning);
  warningBtnConfirm.addEventListener('click', onWarningConfirm);

  // add card
  btnAddTodo.addEventListener('click', addTodo);

  // delete all cards
  btnDeleteAll.addEventListener('click', deleteAllCards);

  // set item
  userList.addEventListener('change', setItem);

  initStorage();


}
