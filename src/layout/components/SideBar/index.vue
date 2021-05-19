<template>
  <div :class="{'has-logo': showLogo}">
    <Logo v-if="showLogo" :collapse="isCollapse"></Logo>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        ></SidebarItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'
import Logo from '@/layout/components/SideBar/Logo'
import { mapGetters } from 'vuex'
import SidebarItem from '@/layout/components/SideBar/SidebarItem'

export default {
  components: {
    Logo,
    SidebarItem
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    showLogo () {
      return this.$store.state.settings.sidebarLogo
    },
    isCollapse () {
      return !this.sidebar.opened
    },
    variables () {
      return variables
    },
    activeMenu () {
      const route = this.$route
      const {
        meta,
        path
      } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
