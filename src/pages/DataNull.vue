<template>
  <div class="data-null">
    <i class="icon iconfont" :class="dataIcon"></i>
    <p>{{dataText}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    dataText: {
      type: String,
      default: "数据为空"
    },
    dataIcon: {
      type: String,
      default: "icon-meiyoushuju"
    }
  }
};
</script>
<style  lang="less" scoped>
.data-null {
  padding: 2rem .2rem;
  height: 2rem;
  text-align: center;
  .icon {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  p {
    margin-top: 0.5rem;
  }
}
</style>