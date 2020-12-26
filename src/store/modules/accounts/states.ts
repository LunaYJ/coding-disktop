import { State } from '@/store/modules/accounts/interface';
import { Storage } from '@/utils/Storage';

export const state: State = {
  isLoginFormShow: false,
  currAccount: null, // 当前选中的账号
  allAccounts: Storage.getAccounts() || null,
};
