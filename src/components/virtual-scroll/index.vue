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
    <div
      class="list-item"
      v-for="item in items" 
      :key="item.id"
      :style="{
        height: itemHeight + 'px'
      }"
    >
      <slot :data="item">
      </slot>
    </div>
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
    },
    itemHeight: {
      type: Number,
      default: () => 35
    }
  },
  data () {
    return {
      scrollTop: 0,
      scrollItem: true
    }
  },
  computed: {
    startIndex() {
      return Math.floor(this.scrollTop/this.itemHeight)
    },
    endIndex() {
      let index = Math.ceil((this.scrollTop + this.height)/this.itemHeight)
      return Math.min(index, this.listData.length - 1)
    },
    items() {
      let s = this.startIndex
      let e = this.endIndex
      let items = []
      for (let i = s; i < this.listData.length && i <= e; i++) {
        items.push(this.listData[i])
      }
      return items
    },
    dataHeight() {
      return this.listData.length * this.itemHeight
    },
    topHeight() {
      return this.startIndex * this.itemHeight
    },
    bottomHeight() {
      if (this.endIndex === this.listData.length - 1) return 0
      return this.dataHeight - this.topHeight - this.height
    }
  },
  mounted() {
  },
  watch: {
  },
  methods: {
    handleScroll(e) {
      window.requestAnimationFrame(() => {
        this.scrollTop = e.target.scrollTop
        this.$nextTick(() => {   
          e.target.scrollTop = this.scrollTop
        })
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
  .list-item {
    &:nth-child(odd) {
      background: cadetblue;
    }
    &:nth-child(even) {
      background: coral;
    }
  }
  
}
</style>