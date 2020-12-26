<template>
  <div class="mask-wrap" :class="{'no-mask': noMask}">
    <div class="mask-container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class EMask extends Vue {
// mixins
// data
// props
  @Prop({ type: Boolean, default: false }) readonly noMask!: boolean
// computed
// watch
// life cycle
// emit
// methods
}
</script>

<style scoped lang="scss">
.mask-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  display: flex;
  justify-content: center;
  align-items: center;
  &.no-mask {
    background-color: transparent;
  }
}
</style>
