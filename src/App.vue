<template>
  <div id="app">
    <div class="window-drag" @dblclick="toggleWindowMax"></div>
    <div class="main-container">
      <sidebar class="sidebar--left">
        <div class="side-function add-btn" @click="addAccount">
          <i class="fa fa-plus"></i>
        </div>
      </sidebar>
      <div class="page-wrap">
        <template v-if="isAccountFormShow">
          <account-login></account-login>
        </template>
        <template v-else>
<!--          todo: web界面-->
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
@Component({
  components: { AccountLogin, Sidebar },
})
export default class App extends Vue {
  // mixins
  // data
  isAccountFormShow = false
  isMaximizeWindow = false
  // props
  // computed
  // watch
  // life cycle
  created() {
    const localAccounts = Storage.getAccounts();
    if (!localAccounts) {
      this.isAccountFormShow = true;
    }
  }
  // emit
  // methods
  addAccount() {
    console.log('add btn');
    this.isAccountFormShow = true;
  }

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
.sidebar--left {
  padding-top: 25px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  .side-function {
    width: 34px;
    height: 34px;
    text-align: center;
    &.add-btn {
      line-height: 34px;
      font-size: 20px;
      color: #e2edf2;
      opacity: .5;
      transition: all .3s ease;
      cursor: pointer;
      position: absolute;
      bottom: 0;
      margin-bottom: 10px;
      transform: scale(1);
      &:active {
        transform: scale(1.5);
      }
      &:hover {
        opacity: 1;
      }
    }
  }
}
.page-wrap {
  width: 100%;
  height: 100%;
  position: relative;
}

</style>
