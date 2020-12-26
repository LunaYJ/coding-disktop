import { ipcRenderer } from 'electron';
import { AccountItemData } from '@/interface/user';

export function toggleWindowMax(state: boolean) {
  ipcRenderer.send('maximizeWindow', state);
}

export function sendAccountFromRender(account: AccountItemData) {
  ipcRenderer.send('accountFromRender', account);
}
