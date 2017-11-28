<template>
  <div class="payMoney">
        <top-nav :title="name" class="top-nav"></top-nav>
        <div class="main-ct">
            <div class="one-pay-ct">
                <div class="title">
                    <div class="time">2016-09-10</div>
                    <div class="name">待收货</div>
                </div>
                <div class="one-item-ct">
                    <div class="item-ct">
                        <div class="item" v-for="(payment,index) in payMentGoods" :key="index">
                            <div class="left">
                                <img :src="payment.imgUrl"></img>
                                <div class="info">
                                    <p class="name">{{payment.name}}</p>
                                    <div class="input-number">*{{payment.num}}</div>
                                </div>
                            </div>
                            <div class="count">￥{{payment.price * payment.num}}</div>
                        </div>
                    </div>
                    <div class="total">
                        <span class="jian">共{{totalCount}}件</span>
                        <span class="count">合计：￥{{totalMoney}}</span>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav/TopNav";
import ConfirmBtn from "@/components/CommonBtn/ConfirmBtn";

export default {
  name: "payMoney",
  data() {
    return {
      name: "所有订单"
    };
  },
  computed: {
    payMentGoods() {
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
      if (this.payMentGoods.length) {
        this.payMentGoods.map(item => {
          if (item.checked) {
            money += parseFloat(item.price) * parseFloat(item.num);
          }
        });
      }
      return money;
    },
    totalCount() {
      let total = 0;
      if (this.payMentGoods.length) {
        this.payMentGoods.map(item => {
          if (item.checked) {
            total += item.num;
          }
        });
      }
      return total;
    }
  },
  components: { TopNav, ConfirmBtn }
};
</script>

<style  lang="less" scoped>
.payMoney {
  .top-nav {
    background-color: #fff;
  }
  .main-ct {
    .one-pay-ct {
      .title {
        display: flex;
        padding: 0 0.3rem;
        justify-content: space-between;
        align-items: center;
        height: 0.8rem;
        .name {
          color: #f44336;
        }
      }
      .one-item-ct {
        padding: 0 0.3rem;
        background-color: #fff;
        .item-ct {
          .item {
            display: flex;
            padding: 0.3rem;
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
        .total {
          padding: 0.3rem 0;
          border-bottom: 1px solid #ddd;
          text-align: right;
          .jian {
            font-size: 14px;
            color: #dbdbdb;
          }
          .count {
            margin-left: 15px;
          }
        }
      }
    }
  }
}
</style>
