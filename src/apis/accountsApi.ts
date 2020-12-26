import store from '../store';
import { CurrAccountObj } from '@/store/modules/accounts/interface';

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

export default {
  changeCurrAccount,
  changeLoginFormState,
  showLoginForm,
  hideLoginForm,
};
