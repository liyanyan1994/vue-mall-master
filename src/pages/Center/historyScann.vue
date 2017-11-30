<template>
  <div class="historyScann">
    <top-nav :title="name"></top-nav>
    <div class="main-ct">
        <div class="history-list">
            <div class="history-item" @click="toProductDetail(his)" v-for="(his,index) in historyList" :key="index">
                <a class="item-link">
                    <div class="item-inner">
                        <img :src="his.imgUrl">
                    </div>
                </a>
                <p class="name">{{his.name}}</p>
                <div class="price-wrapper">
                    <span class="grally-price">￥{{his.price}}</span>
                    <span class="mark-price">￥{{his.price}}</span>
                    <span class="discount">6.4折</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav/TopNav";
import localEvent from "@/store/local";

export default {
  name: "historyScann",
  data() {
    return {
      name: "浏览历史",
      msg: "I am historyScann"
    };
  },
  computed: {
    historyList(){
      return localEvent.StorageGetter("localStore")
    }
  },
  methods: {
    toProductDetail(obj) {
      this.$store.dispatch("chooseGoodId", obj.id);
      this.$router.push({ name: "productDetail", params: { detailObj: obj } });
    }
  },
  components: { TopNav }
};
</script>

<style  lang="less" scoped>
.historyScann {
  .main-ct {
    .history-list {
      padding-top: 20px;
      overflow: hidden;
      background-color: #fff;
      .history-item {
        position: relative;
        display: inline-block;
        vertical-align: top;
        margin-left: 1%;
        width: 48%;
        margin-bottom: 25px;
        text-align: left;
        &:nth-child(2n) {
          margin-left: 2%;
        }
        .item-link {
          display: block;
          text-decoration: none;
          .item-inner {
            position: relative;
            width: 100%;
            height: 0;
            overflow: hidden;
            border: 1px solid #efefef;
            padding-bottom: 125%;
            box-sizing: border-box;
            img {
              width: 100%;
            }
          }
        }
        .name {
          margin: 7px 5px 3px 5px;
          height: 34px;
          font-size: 12px;
        }
        .price-wrapper {
          position: relative;
          height: 20px;
          padding: 3px 5px 0;
          margin-bottom: 5px;
          .grally-price {
            font-size: 14px;
            color: #f44336;
          }
          .mark-price {
            text-decoration: line-through;
            color: #888;
            font-size: 12px;
          }
          .discount {
            position: absolute;
            top: 50%;
            right: 4px;
            padding: 4px;
            background-color: #000;
            height: 10px;
            line-height: 10px;
            transform: translateY(-50%);
            font-size: 12px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
