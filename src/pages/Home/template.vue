<template>
    <div class="receiveAdress">
         <top-nav :title="name"></top-nav>
        <div class="main-ct">
        </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav/TopNav";
export default {
  name: "center",
  data() {
    return {
      name: "收货地址",
      msg: "I am receive Adress"
    };
  },
  created() {},
  methods: {},
  components: { TopNav }
};
</script>

<style lang="less" scoped>
.receiveAdress {
  .main-ct {
  }
}
</style>
