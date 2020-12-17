<template>
  <div class="sidebar" :style="{backgroundColor: bgColor, width: width + 'px'}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class Sidebar extends Vue {
// mixins
// data
// props
  @Prop({
    type: String,
    default: '#282A36',
  }) bgColor?: string;
  @Prop({
    type: [Number, String],
    default: 66,
  }) width?: number | string
// computed
// watch
// life cycle
// emit
// methods
}
</script>

<style scoped lang="scss">
  .sidebar {
    position: relative;
  }
</style>
