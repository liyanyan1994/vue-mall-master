<template>
    <div class='add-reduce'>
        <span class='reduce'>
            <i class='icon iconfont icon-jian' @click='reduceGood'></i>
        </span>
        <input class='good-num' :value='goodNum' readonly='readonly'>
        <span class='add'>
                <i class='icon iconfont icon-jia'  @click='addGood' ></i>
        </span>
    </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    goodNum: {
      type: Number,
      default: 0
    }
  },
  methods: {
    reduceGood() {
      this.$emit('numReduce')
    },
    addGood() {
      this.$emit('numAdd')
    }
  }
}
</script>

<style lang='less'>
.add-reduce {
  color: #dd9988;
  font-size: 0;
  .reduce,
  .add {
    display: inline-block;
    border: 1px solid #ddd;
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 16px;
    color: #f44336;
  }
  .good-num {
    display: inline-block;
    width: 1rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 16px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-left: none;
    border-right: none;
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
  }
  .reduce {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .add {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>

