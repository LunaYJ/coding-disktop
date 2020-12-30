<template>
  <div class="webview-wrap">
    <webview
      ref="webview"
      class="webview"
      :src="src"
      nodeintegration
      disablewebsecurity
      allowpopups
      enableremotemodule="true"
    ></webview>
    <loading v-if="isLoadingShow"></loading>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Loading from '@/components/loading/Loading.vue';
import { loginInject } from '@/inject/inject';
import { getAccountFromMain } from '@/electron-api/renderer/receive';

@Component({
  components: { Loading },
})
export default class EWebview extends Vue {
// mixins
// data
  isLoadingShow = false
  // preloadPath = 'file://'
  // props
  @Prop({
    type: String,
    default: '',
  }) readonly src!: string
  // computed
  // watch
  // life cycle
  mounted() {
    this.$nextTick(() => {
      const webview = this.$refs.webview as any;

      webview.addEventListener('did-start-loading', () => {
        console.log('loading');
        this.isLoadingShow = true;
      });
      webview.addEventListener('did-stop-loading', () => {
        console.log('loading stop');
        this.isLoadingShow = false;
      });
      webview.addEventListener('dom-ready', () => {
        webview.openDevTools();
        const webUrl = webview.getURL();
        webview.executeJavaScript(loginInject(webUrl));
      });
      // this.preloadPath = `file://${require('path').resolve('public/js/extra/login-fill.js')}`;
    });
  }
// emit
// methods
}
</script>

<style scoped lang="scss">
.webview-wrap {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
