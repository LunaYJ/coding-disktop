import { State, CurrAccountObj } from '@/store/modules/accounts/interface';
import {
  CHANGE_LOGIN_FORM_SHOW_STATE,
  SET_CURRENT_ACCOUNT,
  REFRESH_ACCOUNTS_LIST,
} from '@/store/modules/accounts/mutationsType';
import { ActionContext } from 'vuex';

export const actions = {
  setCurrAccount(context: ActionContext<State, any>, payload: CurrAccountObj) {
    context.commit(SET_CURRENT_ACCOUNT, payload);
    context.dispatch('refreshAccountsList');
  },
  changeLoginFormShowState(context: ActionContext<State, any>, payload: boolean) {
    context.commit(CHANGE_LOGIN_FORM_SHOW_STATE, payload);
  },
  refreshAccountsList(context: ActionContext<State, any>) {
    context.commit(REFRESH_ACCOUNTS_LIST);
  },
};
