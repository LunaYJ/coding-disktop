<template>
  <div class="login-wrap">
    <div class="login-container">
      <div class="logo">
        <img src="https://assets.codehub.cn/micro-frontend/login-tencent/837bb508dc4a944c9aa293bebaf4231d.png" alt="">
      </div>
      <account-form></account-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AccountForm from '@/components/account-form/AccountForm.vue';
@Component({
  components: { AccountForm },
})
export default class AccountLogin extends Vue {
// mixins
// data
// props
// computed
// watch
// life cycle
// emit
// methods
}
</script>

<style scoped lang="scss">
.login-wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://assets.codehub.cn/images/bg-road.8a072346.png") no-repeat scroll top left transparent;
  background-size: cover;
}
.login-container {
  background: url("https://assets.codehub.cn/images/code-bg.4c9a3bb4.png") no-repeat center transparent;
  background-size: contain;
}
.logo {
  line-height: 0;
  text-align: center;
  margin-bottom: 30px;
  img {
    height: 30px;
  }
}
</style>
