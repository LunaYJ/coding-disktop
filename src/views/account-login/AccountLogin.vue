<template>
  <div class="login-wrap">
    <div class="login-container">
      <div class="logo">
        <img src="../../assets/images/login-logo.png" alt="">
      </div>
      <account-form></account-form>
      <div class="language-container ta--center" @mouseenter="toggleLangOpts" @mouseleave="toggleLangOpts">
        <span class="language__selected" >
          <i class="fa fa-globe"></i>
          {{$t('system.lang')}}
          <i class="fa fa-chevron-down"></i>
        </span>
        <template v-if="isLangOptsShow">
          <div class="language-selection-container">
            <h6 class="ta--center">Language</h6>
            <ul class="language-selection">
              <li v-for="(item, key) in langOpts" :key="key" class="ta--center" @click="selectLang(key)">
                {{$t('system.' + item)}}
              </li>
            </ul>
          </div>
        </template>
      </div>
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
  isLangOptsShow = false
  langOpts = {
    zh: 'zh',
    en: 'en',
  }
  // props
  // computed
  // watch
  // life cycle
  // emit
  // methods
  toggleLangOpts() {
    this.isLangOptsShow = !this.isLangOptsShow;
  }
  selectLang(lang: string) {
    this.$i18n.locale = lang;
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables";
.login-wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/images/bg-road.8a072346.png") no-repeat scroll top left transparent;
  background-size: cover;
}
.login-container {
  background: url("../../assets/images/code-bg.4c9a3bb4.png") no-repeat center transparent;
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
.language-container {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  .language__selected {
    cursor: pointer;
  }
  .language-selection-container {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    min-width: 150px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, .12), 0 .5px 1.5px 0 rgba(0, 0, 0, .08);
    h6 {
      color: $text-sub-color;
      font-size: 12px;
      line-height: 16px;
      padding: 8px 12px;
    }
    ul {
      li {
        padding: 8px 12px;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          background-color: $hover-bg;
        }
      }
    }
  }
}
</style>
