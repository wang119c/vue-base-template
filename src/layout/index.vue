<template>
  <div class="app-wrapper">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
      <div>
        <div>top</div>
        <div>tags</div>
      </div>
      <div>main</div>
      <div>right-main</div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { Sidebar } from '@/layout/components'

export default {
  name: 'Layout',
  components: {
    Sidebar
  },
  computed: {
    ...mapState({
      device: (state) => state.app.device,
      sidebar: (state) => state.app.sidebar
    }),
    classObj () {
      return {}
    }
  },
  methods: {
    handleClickOutside () {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.app-wrapper {
  @include clearfix ;
  position: relative;
  height: 100%;
  width: 100%;
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 9999;
}

</style>
