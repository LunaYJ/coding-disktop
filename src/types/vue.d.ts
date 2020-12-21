import Vue from 'vue';
declare module 'vue/types/vue' {
  interface Vue {
    $ajax: any;
    $remote: any;
    $ipcRenderer: any;
  }
}
