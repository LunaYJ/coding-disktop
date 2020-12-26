<template>
  <sidebar class="sidebar--left">
    <template v-if="allAccounts">
      <template v-for="(val, key) in allAccounts">
        <div class="side-function switcher" :class="{'active': key === selectedKey}" :key="key" @click="switchAccount(key)">
          <div class="switcher-avatar">
            <default-avatar color="#fff"></default-avatar>
          </div>
          <p class="switcher-title">{{key}}</p>
        </div>
      </template>
    </template>
    <div class="side-function add-btn" @click="addAccount">
      <i class="fa fa-plus"></i>
    </div>
  </sidebar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import { changeCurrAccount, hideLoginForm, showLoginForm } from '@/apis/accountsApi';
import DefaultAvatar from '@/components/default-avatar/DefaultAvatar.vue';
import { sendAccountFromRender } from '@/electron-api/renderer/send';

@Component({
  components: { DefaultAvatar, Sidebar },
})
export default class LeftSidebar extends Vue {
// mixins
// data
  selectedKey = ''
  // props
  // computed
  get allAccounts() {
    return this.$store.state.accounts.allAccounts;
  }
  // watch
  // life cycle
  created() {
    // todo
  }
  // emit
  // methods
  switchAccount(key: string) {
    this.selectedKey = key;
    localStorage.setItem('accountKey', key);
    const account = this.allAccounts[key];
    // console.log(account);
    hideLoginForm();
    changeCurrAccount(account);
    sendAccountFromRender(account);
  }
  addAccount() {
    console.log('add btn');
    showLoginForm();
  }
}
</script>

<style scoped lang="scss">
.sidebar--left {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  color: #fff;
  padding: 40px 5px 0;
  .side-function {
    min-height: 34px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 10px;
    &.switcher {
      font-size: 12px;
      word-break: break-all;
      text-align: center;
      opacity: .7;
      transition: opacity .5s 0s;
      &:hover {
        opacity: 1;
      }
      &.active {
        opacity: 1;
      }
    }
    &.add-btn {
      width: 34px;
      height: 34px;
      line-height: 34px;
      font-size: 20px;
      color: #e2edf2;
      opacity: .5;
      transition: all .3s ease;
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
.switcher-avatar {
  line-height: 0;
  width: 34px;
  margin: 0 auto;
}
.switcher-title {
  margin-top: 5px;
}
</style>
