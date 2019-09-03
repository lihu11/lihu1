<template>
  <m-navbar :theme="theme.theme.headerTheme">
    <m-navbar-brand>
      <i class="side-switch fa fa-bars" @click="handleSwitchSide"></i>
    </m-navbar-brand>
  </m-navbar>
</template>
<script type="text/javascript">
import { mapActions, mapState } from 'vuex'
import { requestFullScreen, exitFullscreen } from '@/utils'

import themes from './theme'
export default {
  name: 'app-header',
  data () {
    return {
      mini: false,
      isFullScreen: false,
      themes,
      themeType: '',
      showAside: true,
      theme: { theme: { headerTheme: 'info' } }
    }
  },
  computed: {
    ...mapState({
      user: ({ user }) => user.user
    })
  },
  watch: {
    themeType (val) {
      this.theme = this.themes.find(e => e.name === val) || {}
      this.$emit('set-theme', this.theme)
      localStorage.setItem('theme', val)
    }
  },
  methods: {
    ...mapActions(['getLoginUser', 'logout']),
    handleSwitchSide () {
      this.mini = !this.mini
      this.$emit('switch', this.mini)
    },
    handleSwitchScreen () {
      if (this.isFullScreen) {
        exitFullscreen()
        this.isFullScreen = false
      } else {
        requestFullScreen()
        this.isFullScreen = true
      }
    },
    handleSwitchHideSide () {
      console.log('change')
      this.$emit('hide-side')
    }
  },
  created () {
    this.getLoginUser()
    var theme = localStorage.getItem('theme') || 'default'
    this.themeType = theme
  }
}
</script>
<style type="text/css">
.side-switch {
  display: inline-block;
  font-size: 32px;
  cursor: pointer;
  color: inherit;
  margin-top: 10px;
}
.side-switch:hover {
  color: #fff;
}
</style>
