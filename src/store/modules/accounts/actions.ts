import { State, CurrAccountObj } from '@/store/modules/accounts/interface';
import {
  CHANGE_LOGIN_FORM_SHOW_STATE,
  SET_CURRENT_ACCOUNT,
} from '@/store/modules/accounts/mutationsType';
import { ActionContext } from 'vuex';

export const actions = {
  setCurrAccount(context: ActionContext<State, any>, payload: CurrAccountObj) {
    console.log('1234');
    context.commit(SET_CURRENT_ACCOUNT, payload);
  },
  changeLoginFormShowState(context: ActionContext<State, any>, payload: boolean) {
    context.commit(CHANGE_LOGIN_FORM_SHOW_STATE, payload);
  },
};
