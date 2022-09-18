import {
  onConfirm,
  btnAddTodo,
  addTodo

} from '../components/Common.block/Card/card';

import {

} from '../components/Common.block/Done/done';

import {
  getListUsers,
  updateTrelloTime,
  modalBtnCancel,
  onCancel,
  modalBtnConfirm,
  setItem, userList,


} from '../components/Common.block/modal/modal';

import {

} from '../components/Common.block/In_progress/in_progress';

export function init() {
  // add users list to modal
  getListUsers();

  // time updater
  setInterval(updateTrelloTime, 1000);

  // add modal cancel
  modalBtnCancel.addEventListener('click', onCancel);

  // add modal confirm
  modalBtnConfirm.addEventListener('click', onConfirm);

  // add card
  btnAddTodo.addEventListener('click', addTodo);


  // set item
  userList.addEventListener('change', setItem);
}
