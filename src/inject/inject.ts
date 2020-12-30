export function loginInject(url: string) {
  if (url.indexOf('login') >= 0) {
    return `
    const { remote: ERemote } = require('electron');

    console.log("account");
    console.log(ERemote.getGlobal('currAccount'));
    const account = ERemote.getGlobal('currAccount').email;
    const password = ERemote.getGlobal('currAccount').password;
    let checkCount = 0;
    const timer = setInterval(() => {
      console.log('timer');
      if (document.getElementById('account')) {
        console.log('account: ', account);
        console.log('password: ', password);
        if (document.getElementById('account').value !== account ) {
          checkCount = 0;
          document.getElementById('account').value = account;
          document.getElementById('password').value = password;
        } else {
          checkCount++;
        }
        if (checkCount >= 3) {
          clearInterval(timer);
        }
      }
    }, 100);
    `;
  }
}
