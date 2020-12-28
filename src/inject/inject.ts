import { AccountItemData } from '@/interface/user';

export function loginInject(url: string, account: any) {
  if (url.indexOf('login') >= 0) {
    console.log(123, account);
    const timer: any = {};
    for (const key in account) {
      console.log('key', key);
      timer[key] = setInterval(() => {
        if (document.getElementById(key)) {
          clearInterval(timer[key]);
          console.log(key, document.getElementById(key));
          const dom = document.getElementById(key) as HTMLInputElement;

          // todo 修改表单的值
          dom.value = account[key];
        }
      }, 100);
      // (document.getElementById(key) as HTMLInputElement).value = account[key];
    }
    // alert(1);
  }
}
