<template>
  <div class="form-wrap">
    <div class="form-container">
      <form class="">
        <div class="form-group">
          <label>登录地址</label>
          <div class="input-group">
            <div class="input-group--prepend">
              <span class="input-group__text">
                https://
              </span>
            </div>
            <input type="text" v-model="formData.url" class="form-control" placeholder="团队域名">
            <div class="input-group--append">
              <span class="input-group__text">
                .coding.net
              </span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>登录邮箱</label>
          <input type="text" v-model="formData.email" class="form-control" placeholder="邮箱">
        </div>
        <div class="form-group">
          <label>登录密码</label>
          <input type="password" v-model="formData.password" class="form-control" placeholder="密码">
        </div>
        <button type="button" class="btn btn--block btn-primary" @click="login">登录</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class AccountForm extends Vue {
// mixins
// data
  formData = {
    url: '',
    email: '',
    password: '',
  }
  // props
  // computed
  // watch
  // life cycle
  // emit
  // methods
  login() {
    console.log(this.formData);
  }
}
</script>

<style scoped lang="scss">

</style>
