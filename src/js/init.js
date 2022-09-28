import {
  onConfirm,
  btnAddTodo,
  addTodo,
  deleteAllCards,
  btnDeleteAll,
  onWarningConfirm

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

} from '../components/Common.block/modal/modal';


export function init() {
  // add users list to modal
  getListUsers()

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


}
