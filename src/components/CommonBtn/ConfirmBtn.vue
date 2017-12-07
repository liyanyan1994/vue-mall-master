<template>
  <div class='confirm-btn' :style='btnStyle'>{{msg}}</div>
</template>

<script>
export default {
  name: 'confirm-btn',
  data() {
    return {}
  },
  props: {
    msg: {
      type: String,
      default: '确认'
    },
    height: {
      type: Number,
      default: 0.8
    },
    fontSize: {
      type: Number,
      default: 16
    },
    backColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    btnStyle() {
      const newHeight = this.height + 'rem'
      const newSize = this.fontSize + 'px'
      return {
        height: newHeight,
        lineHeight: newHeight,
        fontSize: newSize,
        backgroundColor: this.backColor
      }
    }
  }
}
</script>

<style  lang='less' scoped>
.confirm-btn {
  text-align: center;
  border-radius: 4px;
}
</style>
