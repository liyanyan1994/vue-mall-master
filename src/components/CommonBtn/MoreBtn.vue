<template>
  <div class='more-btn' :style='btnStyle'>{{msg}}</div>
</template>

<script>
export default {
  name: 'more-btn',
  data() {
    return {}
  },
  props: {
    msg: {
      type: String,
      default: '查看更多宝贝'
    },
    height: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: '#f44336'
    },
    fontSize: {
      type: Number,
      default: 16
    }
  },
  computed: {
    btnStyle() {
      const newHeight = this.height + 'rem'
      const newSize = this.fontSize + 'px'
      return {
        height: newHeight,
        lineHeight: newHeight,
        color: this.color,
        fontSize: newSize
      }
    }
  }
}
</script>

<style  lang='less' scoped>
.more-btn {
  width: 100%;
  background: #fff;
  text-align: center;
  border-top: 1px solid #eee;
}
</style>
