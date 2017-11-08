<template>
    <div class="bottom-confirm">
        <div class="left">
            <span class="heji">合计：</span>
            <span class="counts">￥{{number}}</span>
        </div>
        <div class="right">{{name}}</div>
  </div>
</template>

<script>

export default {
  name: 'bottom-confirm',
  props: {
    number: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: '结算'
    }
  }
}
</script>

<style  lang="less" scoped>
.bottom-confirm{
    position: fixed;
    display: flex;
    justify-content: flex-start;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #ddd;
    font-size: 16px;
    .left{
        flex: 1;
        position: relative;
        height: 1rem;
        line-height: 1rem;
        background-color: #fff;
        text-align: left;
        padding-left: .3rem;
        .heji{
            color: #333;
        }
        .counts{
            color: #f44336;
        }
        .no-yun{
            font-size: 14px;
            color: #dbdbdb;
        }
    }
    .right{
        flex: 0 0 120px;
        width: 120px;
        height: 1rem;
        line-height: 1rem;
        background-color: #f44336;
        color: #fff;
    }
}
</style>
