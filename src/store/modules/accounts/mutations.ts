import { State, CurrAccountObj, Mutations } from '@/store/modules/accounts/interface';
import { SET_CURRENT_ACCOUNT, CHANGE_LOGIN_FORM_SHOW_STATE } from '@/store/modules/accounts/mutationsType';
export const mutations: Mutations = {
  [SET_CURRENT_ACCOUNT](state: State, payload: CurrAccountObj) {
    state.currAccount = payload;
  },
  [CHANGE_LOGIN_FORM_SHOW_STATE](state: State, payload: boolean) {
    state.isLoginFormShow = payload;
  },
};
