import { State, CurrAccountObj, Mutations } from '@/store/modules/accounts/interface';
import { SET_CURRENT_ACCOUNT, CHANGE_LOGIN_FORM_SHOW_STATE, REFRESH_ACCOUNTS_LIST } from '@/store/modules/accounts/mutationsType';
import { Storage } from '@/utils/Storage';

export const mutations: Mutations = {
  [SET_CURRENT_ACCOUNT](state: State, payload: CurrAccountObj) {
    state.currAccount = payload;
  },
  [CHANGE_LOGIN_FORM_SHOW_STATE](state: State, payload: boolean) {
    state.isLoginFormShow = payload;
  },
  [REFRESH_ACCOUNTS_LIST](state: State) {
    state.allAccounts = Storage.getAccounts();
  },
};
