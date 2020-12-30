import { AccountItem, AccountItemData } from '@/interface/user';

export class Storage {
  /**
   * 获取账户
   */
  static getAccounts() {
    return this.parseAccounts();
  }

  /**
   * 增加账户
   * @param data
   * @returns {Object}
   * @returns {String} .status - 处理状态 ok：成功 / fail：失败
   * @returns {String} .message - 处理信息
   */
  static addAccount(data: AccountItemData) {
    const accountsObj = this.parseAccounts();
    console.log('add Account', data);
    if (accountsObj) {
      for (const key in accountsObj) {
        if (key === data.label) {
          return {
            status: 'fail',
            message: '域名已存在',
          };
        }
      }
      const newAccounts = this.formatAccount(data);
      Object.assign(accountsObj, newAccounts);
      console.log('new accounts obj', accountsObj);
      localStorage.setItem('accounts', this.stringifyAccounts(accountsObj));
      return {
        status: 'ok',
        message: '',
      };
    } else {
      const accounts = this.formatAccount(data);
      localStorage.setItem('accounts', this.stringifyAccounts(accounts));
      return {
        status: 'ok',
        message: '',
      };
    }
  }

  /**
   * 格式化account 对象
   * @param data
   */
  static formatAccount(data: AccountItemData) {
    const _data = {
      [data.label as string]: data,
    };
    const accounts = this.parseAccounts() || {};
    Object.assign(accounts, _data);
    return accounts;
  }

  /**
   * 将JSON字符串转为JSON
   */
  static parseAccounts() {
    const localAccounts = localStorage.getItem('accounts');
    if (localAccounts) {
      const accountJSON = JSON.parse(localAccounts);
      return accountJSON;
    }
    return null;
  }

  /**
   * 将Object转为JSON字符串
   * @param data
   */
  static stringifyAccounts(data: AccountItem) {
    return JSON.stringify(data);
  }
}
