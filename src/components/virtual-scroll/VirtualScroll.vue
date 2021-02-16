<template>
  <div 
    class="scroll-contanier"
    :style="{height: height + 'px'}" 
    @scroll="handleScroll"
  >
    <div v-for="item in items" :key="item.id">
      <slot :data="item">
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    listData: {
      type: Array,
      default: []
    },
    height: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    handleScroll(e) {
      console.log(e)
    }
  }
}
</script>