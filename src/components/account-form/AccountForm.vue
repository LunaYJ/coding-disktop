<template>
  <div class="form-wrap">
    <div class="form-container">
      <form class="">
        <div class="form-group">
          <label class="domian-label">
            <span>{{$t('login.urlLabel')}}</span>
            <a :href="registUrl" target="_blank" @click.prevent="openInOutBrowser(registUrl)">{{ $t('login.createTeam') }}</a>
          </label>
          <div class="input-group">
            <div class="input-group--prepend">
              <span class="input-group__text">
                https://
              </span>
            </div>
            <input type="text" v-model="formData.url" :class="{'ipt--err': errIpt === 'url'}" class="form-control" :placeholder="$t('login.placeholderUrl')">
            <div class="input-group--append">
              <span class="input-group__text">
                .coding.net
              </span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>{{ $t('login.email') }}</label>
          <input type="text" v-model="formData.email" :class="{'ipt--err': errIpt === 'email'}" class="form-control" :placeholder="$t('login.placeholderEmail')">
        </div>
        <div class="form-group">
          <label>{{ $t('login.password') }}</label>
          <input type="password" v-model="formData.password" :class="{'ipt--err': errIpt === 'password'}" class="form-control" :placeholder="$t('login.placeholderPwd')">
        </div>
        <button type="button" class="btn btn--block btn-primary" @click="login">{{ $t('login.login') }}</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { shell } from 'electron';
import { Storage } from '@/utils/Storage';
import { AccountItemData } from '@/interface/user';
import { hideLoginForm } from '@/apis/accountsApi';
import { sendAccountFromRender } from '@/electron-api/renderer/send';

interface ErrMsg {
  url: any;
  email: any;
  password: any;
}
@Component
export default class AccountForm extends Vue {
// mixins
// data
  formData: AccountItemData = {
    url: '',
    email: '',
    password: '',
  }
  errIpt = ''
  registUrl = 'https://e.coding.net/register'
  // props
  // computed
  get errMsg() {
    return {
      url: this.$t('err.teamDomain'),
      email: this.$t('err.loginEmail'),
      password: this.$t('err.loginPwd'),
    };
  }
  // watch
  // life cycle
  // emit
  // methods
  openInOutBrowser(url: string) {
    shell.openExternal(url);
  }

  /**
   * 检查输入项是否都已填写
   * @returns {Boolean} - 表单是否都已填写
   */
  verifyForm() {
    for (const key in this.formData) {
      const item = this.formData[key as keyof AccountItemData];
      if (!item) {
        console.log(key);
        alert(`${this.errMsg[key as keyof ErrMsg]}`);
        this.errIpt = key;
        return false;
      }
    }
    return true;
  }

  /**
   * 登录
   */
  login() {
    console.log(this.formData);
    if (!this.verifyForm()) {
      return;
    }
    const url = `https://${this.formData.url}.coding.net/`;
    const data = {
      account: this.formData.email,
      password: this.formData.password,
    };
    const account: AccountItemData = {
      url,
      email: data.account,
      password: data.password,
      label: this.formData.url,
    };
    const { status, message } = Storage.addAccount(account);
    if (status === 'fail') {
      alert(message);
    } else {
      hideLoginForm();
      this.$store.dispatch('setCurrAccount', account);
      sendAccountFromRender(account);
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/style/variables.scss";
  .domian-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
