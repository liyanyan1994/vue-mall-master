<template>
  <div class="second-title">
      <span>
          {{msg}}
      </span>
      </div>
</template>

<script>

export default {
  name: 'second-title',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style  lang="less" scoped>
.second-title{
    text-align: center;
    font-size: 18px;
    span{
        position: relative;
        display: block;
        font-size: 18px;
        &::before,&::after{
            position: absolute;
            content: '';
            top: 50%;
            width: 30%;
            height: 1px;
            background-color: #ddd; 
        }
        &::before{
            left: 0;
        }
        &::after{
            right: 0;
        }
    }
}
</style>
