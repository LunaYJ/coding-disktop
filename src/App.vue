<template>
  <div id="app">
    <div class="window-drag" @dblclick="toggleWindowMax"></div>
    <div class="main-container">
      <left-sidebar></left-sidebar>
      <div class="page-wrap">
        <template v-if="isAccountFormShow">
          <account-login></account-login>
        </template>
        <template v-else>
<!--          todo: web界面-->
          <e-webview v-if="currAccount" :src="currAccount.url"></e-webview>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import AccountLogin from '@/views/account-login/AccountLogin.vue';
import { toggleWindowMax } from '@/electron-api/renderer/send';
import { Storage } from '@/utils/Storage';
import LeftSidebar from '@/components/left-sidebar/LeftSidebar.vue';
import { showLoginForm } from '@/apis/accountsApi';
import EWebview from '@/components/e-webview/EWebview.vue';

@Component({
  components: { EWebview, LeftSidebar, AccountLogin, Sidebar },
})
export default class App extends Vue {
  // mixins
  // data
  isMaximizeWindow = false
  // props
  // computed
  get currAccount() {
    return this.$store.state.accounts.currAccount;
  }
  get isAccountFormShow() {
    return this.$store.state.accounts.isLoginFormShow;
  }
  // watch
  // life cycle
  created() {
    const localAccounts = Storage.getAccounts();
    if (!localAccounts) {
      showLoginForm();
    }
  }
  // emit
  // methods
  /**
   * 最大化窗口
   */
  toggleWindowMax() {
    console.log('toggle window max');
    this.isMaximizeWindow = !this.isMaximizeWindow;

    console.log(this.isMaximizeWindow);
    toggleWindowMax(this.isMaximizeWindow);
  }
}
</script>

<style lang="scss">
@import "./assets/style/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main-container {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  height: 100vh;
  position: relative;
}

.page-wrap {
  width: 100%;
  height: 100%;
  position: relative;
}

</style>
