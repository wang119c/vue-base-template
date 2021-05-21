<template>
  <div>
    <div class="main" style="width: 100px;height: 100px">
      <div id="money" class="loading"></div>
    </div>
    <el-button @click="show()">播放</el-button>
    <el-button @click="hidden()">暂停</el-button>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import dataJson from '@/assets/progress.json'

export default {
  name: 'index',
  components: {},
  data () {
    return {
      showLoading: true
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const icon = document.getElementById('money')
      lottie.loadAnimation({
        container: icon,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: dataJson
      })
    },
    show () {
      lottie.play()
    },
    hidden () {
      lottie.stop()
    }
  }

}
</script>

<style scoped>

</style>
