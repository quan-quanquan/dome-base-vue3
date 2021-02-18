<template>
  <div>
    <virtual-scroll
      :listData=data
    >
      <template v-slot="{data}">
        <div :style="{
          height: '100%',
        'background': data.color
      }">
          {{data.label}}
        </div>
      </template>
    </virtual-scroll>
  </div>
</template>
<script>
import VirtualScroll from '@/components/virtual-scroll'
export default {
  components: {
    VirtualScroll
  },
  data () {
    return {
      data: []
    }
  },
  mounted() {
    this.setData()
  },
  methods: {
    setData() {
      for (let i = 0; i < 100; i++) {
        this.data.push({
          id: (new Date()) + 1,
          label: i,
          color: i%2 ? 'cadetblue' : 'coral'
        })
      }
    }
  }
}
</script>