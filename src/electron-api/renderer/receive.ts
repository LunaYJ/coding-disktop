import { ipcRenderer } from 'electron';

export function getAccountFromMain(callback: Function) {
  ipcRenderer.on('accountFromMain', (evt, arg) => {
    if (callback) {
      callback(evt, arg);
    }
  });
}
