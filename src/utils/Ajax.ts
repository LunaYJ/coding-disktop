import axios from 'axios';

const baseUrl = process.env.VUE_APP_BASEURL || '';
axios.defaults.timeout = 60000;

export class Ajax {
  static getPage(api: string, params?: any) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: baseUrl + api,
        params,
      }).then(res => {
        console.log('get succ', res);
        resolve(res.data);
      });
    });
  }
  static get(api: string, params?: any) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: baseUrl + api,
        params,
      }).then(res => {
        console.log('get succ', res);
        const { code, data, message, status } = res.data;
        if (code === 10000) {
          resolve({ code, data, message, status });
        } else {
          const err = { code, data, message, status };
          reject(err);
        }
        resolve(res);
      });
    });
  }
  static post(api: string, data?: any) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: baseUrl + api,
        data,
      }).then(res => {
        console.log('post succ', res);
        const { code, data, message, status } = res.data;
        if (code === 10000) {
          resolve({ code, data, message, status });
        } else {
          const err = { code, data, message, status };
          reject(err);
        }
        resolve(res);
      });
    });
  }
}
