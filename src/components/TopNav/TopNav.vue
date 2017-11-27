<template>
  <div class="top-nav" v-show="bar">
    <div class="nav-left">
      <i class="icon iconfont icon-back" @click="back"></i>
    </div>
    <div class="nav-title">{{title}}</div>
    <div class="nav-right"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
export default {
  props: {
    title: {
      type: String
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapState(["bar"])
  }
};
</script>

<style lang="less" type="text/less">
.top-nav {
  position: fixed;
  display: flex;
  align-content: center;
  justify-content: center;
  top: 0px;
  height: 50px;
  line-height: 50px;
  background: #e6e6e6;
  border-bottom: 1px solid #ddd;
  width: 100%;
  opacity: 1;
  z-index: 9;
  .nav-left {
    flex: 0 0 23px;
    width: 23px;
    margin-left: 5px;
    .icon-back {
      font-size: 28px;
    }
  }
  .nav-title {
    flex: 1;
    //   border: 1px solid red;
    color: #544e4e;
    font-size: 16px;
  }
  .nav-right {
    flex: 0 0 23px;
    // border: 1px solid red;
  }
}
</style>
