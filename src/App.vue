<template>
  <div>
    <a-menu class="nav" v-model="current" mode="horizontal">
      <a-menu-item key="virtaulScroll">
        <router-link to="/virtual-scroll">虚拟滚动</router-link>
      </a-menu-item>
      <a-menu-item key="richEditor">
        <router-link to="/rich-editor">富文本</router-link>
      </a-menu-item>
    </a-menu>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      current: ''
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  margin-bottom: 24px;
}
</style>>

