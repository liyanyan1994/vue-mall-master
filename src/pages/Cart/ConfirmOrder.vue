<template>
  <div class="dutyFree">
        <top-nav :title="name"></top-nav>
        <div class="main-ct">
            <div class="add-qu-info">
                <div v-if="addReceive" class="add-ct"> 
                    <i class="icon iconfont icon-add"></i>
                    <span class="add-span" @click="toReceiveInfo" >添加收货地址</span>
                </div>
                <div v-else class="receive-info">
                    <div>
                        <div class="one">收货人</div>
                        <span class="two">陈冰</span>
                        <span class="three">13824596154</span>
                    </div>
                    <div>
                        <div class="one">收货地址</div>
                        <span class="two">仁川机场T航站楼</span>
                    </div>
                </div>
            </div>
            <div class="choosed-ct">
                <div class="title">已购商品</div>
                <div class="choosed-list">
                    <div class="item" v-for="(good,index) in orderGood" :key="index">
                        <div class="left">
                            <img :src="good.imgUrl"></img>
                            <div class="info">
                                <p class="name">{{good.name}}</p>
                                <div class="input-number">*{{good.num}}</div>
                            </div>
                        </div>
                        <div class="count">￥{{good.price * good.num}}</div>
                    </div>
                </div>
            </div>
            <bottom-confirm name="确认" :number="totalMoney" @click.native="toPayMoney"></bottom-confirm>
        </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav/TopNav";
import BottomConfirm from "@/components/BottomConfirm/BottomConfirm";

export default {
  name: "dutyFree",
  data() {
    return {
      name: "确认订单",
      addReceive: true
    };
  },
  computed: {
    orderGood() {
      var arr = [];
      const cartGoods = this.$store.state.cartGoods;
      for (let index in cartGoods) {
        if (cartGoods[index].checked) {
          arr.push(cartGoods[index]);
        }
      }
      return arr;
    },
    totalMoney() {
      let money = 0;
      if (this.orderGood.length) {
        this.orderGood.map(item => {
          if (item.checked) {
            money += parseFloat(item.price) * parseFloat(item.num);
          }
        });
      }
      return money;
    }
  },
  components: { TopNav, BottomConfirm },
  methods: {
    toReceiveInfo() {
      this.$router.push({ name: "receiveInfo" });
    },
    toPayMoney() {
      this.$router.push({ name: "payMoney" });
    }
  }
};
</script>

<style  lang="less" scoped>
.dutyFree {
  .main-ct {
    .add-qu-info {
      background-color: #fff;
      height: 1rem;
      line-height: 1rem;
      .add-ct {
        .iconfont {
          font-size: 24px;
          // border:1px solid red;
          display: inline-block;
        }
        .add-span {
          color: #f44336;
          font-size: 16px;
          // border:1px solid red;
        }
      }
      .receive-info {
        padding: 0.3rem;
        text-align: left;
        div {
          padding: 0.1rem 0;
          .one {
            display: inline-block;
            width: 1rem;
            height: 0.3rem;
            line-height: 0.3rem;
            text-align: center;
            color: #8a8a8a;
            border: 1px solid #8a8a8a;
            border-radius: 2px;
            font-size: 12px;
          }
          .two {
            font-size: 16px;
            color: #333;
            margin-left: 10px;
          }
          .three {
            font-size: 16px;
            margin-left: 10px;
          }
        }
      }
    }
    .choosed-ct {
      background-color: #fff;
      text-align: left;
      .title {
        height: 0.6rem;
        line-height: 0.6rem;
        background-color: #e6e6e6;
        text-indent: 0.3rem;
        font-size: 16px;
      }
      .choosed-list {
        .item {
          display: flex;
          padding: 0.2rem 0.3rem;
          justify-content: flex-start;
          align-items: flex-start;
          border-bottom: 1px solid #ddd;
          .left {
            img {
              height: 1.6rem;
              width: 1.4rem;
              float: left;
            }
            .info {
              display: inline-block;
              width: 3rem;
              margin-left: 0.3rem;
              text-align: left;
              .name {
                color: #333;
              }
              .input-number {
                margin-top: 0.2rem;
                color: #bbb;
              }
            }
          }
          .count {
            flex: 1;
            font-size: 16px;
            text-align: right;
            color: #333;
          }
        }
      }
    }
  }
}
</style>
