<template>
  <div class="hello">
        <top-nav :title="name"></top-nav>
   {{ msg }}
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'

export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '我的',
      msg: 'I am Center'
    }
  },
  components: {TopNav}
}
</script>

<style scoped>
</style>
