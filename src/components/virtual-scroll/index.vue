<template>
  <div 
    class="scroll-contanier"
    :style="{height: height + 'px'}" 
    @scroll="handleScroll"
  >
    <div 
      class="place-top"
      :style="{height: topHeight + 'px'}"
    ></div>
    <!-- <div v-for="item in items" :key="item.id">
      <slot :data="item">
      </slot>
    </div> -->
    <div 
      class="content"
      :style="{height: height + 'px'}" 
    ></div>
    <div 
      class="place-bottom"
      :style="{height: bottomHeight + 'px'}"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    listData: {
      type: Array,
      default: () => []
    },
    height: {
      type: Number,
      default: () => 300
    }
  },
  data () {
    return {
      items: [],
      scrollTop: 0
    }
  },
  computed: {
    dataHeight() {
      return 1000
    },
    topHeight() {
      return this.scrollTop
    },
    bottomHeight() {
      return this.dataHeight - this.scrollTop - this.height
    }
  },
  methods: {
    handleScroll(e) {
      this.scrollTop = e.target.scrollTop
      this.$nextTick(() => {
        e.target.scrollTop = this.scrollTop
      })
    }
  }
}
</script>
<style lang="less" scoped>
.scroll-contanier {
  overflow: scroll;
  border: 1px solid #ccc;
  border-radius: 8px;
  .place-top {
    background: palevioletred;
  }
  .content {
    background: green;
  }
  .place-bottom {
    background: brown;
  }
}
</style>