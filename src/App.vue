<template>
  <div id="app">
    <div class="window-drag"></div>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import AccountLogin from '@/views/account-login/AccountLogin.vue';
@Component({
  components: { AccountLogin, Sidebar },
})
export default class App extends Vue {
  // mixins
  // data
  isAccountFormShow = false
  // props
  // computed
  // watch
  // life cycle
  // emit
  // methods
  addAccount() {
    console.log('add btn');
    this.isAccountFormShow = true;
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
}

</style>
