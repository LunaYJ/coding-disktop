import { ipcMain } from 'electron';

export function ipcMainRecive(win: any) {
  /**
   * 最大化/取消最大化窗口
   */
  ipcMain.on('maximizeWindow', (evt, arg) => {
    if (arg) {
      win.maximize();
    } else {
      win.unmaximize();
      win.setSize(1200, 900);
    }
  });
}
