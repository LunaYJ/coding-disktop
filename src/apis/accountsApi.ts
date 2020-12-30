import store from '../store';
import { CurrAccountObj } from '@/store/modules/accounts/interface';
import { Storage } from '@/utils/Storage';
import { sendAccountFromRender } from '@/electron-api/renderer/send';
import { AccountItemData } from '@/interface/user';

export function changeCurrAccount(account: CurrAccountObj) {
  store.dispatch('setCurrAccount', account);
}

export function changeLoginFormState(state: boolean) {
  store.dispatch('changeLoginFormShowState', state);
}
export function showLoginForm() {
  changeLoginFormState(true);
}
export function hideLoginForm() {
  changeLoginFormState(false);
}
export function addAccount(account: AccountItemData) {
  const { status, message } = Storage.addAccount(account);
  if (status === 'fail') {
    alert(message);
  } else {
    hideLoginForm();
    store.dispatch('setCurrAccount', account);
    sendAccountFromRender(account);
  }
}
export default {
  changeCurrAccount,
  changeLoginFormState,
  showLoginForm,
  hideLoginForm,
  addAccount,
};
