import { ipcRenderer } from 'electron';

export function toggleWindowMax(state: boolean) {
  ipcRenderer.send('maximizeWindow', state);
}
