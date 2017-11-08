<template>
  <div class="dutyFree">
        <top-nav :title="name"></top-nav>
        <div class="main-ct">

        </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'

export default {
  name: 'dutyFree',
  data () {
    return {
      name: '免税店',
      msg: 'I am dutyFree'
    }
  },
  components: {TopNav}
}
</script>

<style  lang="less" scoped>
.dutyFree{
    .main-ct{}
}
</style>
