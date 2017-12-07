<template>
  <div class='cart'>
        <top-nav :title='name'></top-nav>
        <div class='main-ct' v-if='cartGoods.length'>
            <div class='list-ct'>
                <div class='item' v-for='(cartItem,index) in cartGoods' :key='index'>
                    <div class='check'>
                        <span class='circle' @click='chooseOneGood(index)'>
                            <i class='icon iconfont icon-weixuanzhong' :class="cartItem.checked ? 'icon-juxing':'icon-icon-weixuanzhong'"></i>
                        </span>
                    </div>
                    <div class='midd'>
                        <img :src='cartItem.imgUrl'></img>
                        <div class='info'>
                            <p class='name'>{{cartItem.name}}</p>
                            <div class='input-number'>
                                <span class='reduce' @click='cartGoodReduce(cartItem.id)'>
                                    <i class='icon iconfont icon-jian'></i>
                                </span>
                                <input class='good-num' :value='cartItem.num' readonly='readonly'>
                                <span class='add' @click='cartGoodAdd(cartItem.id)'>
                                     <i class='icon iconfont icon-jia'></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class='count'>￥{{cartItem.num * cartItem.price}}</div>
                    <div class='delet-btn' @click='deleteGood(index)'>删除</div>
                </div>
            </div>
            <div class='balance-ct'>
                <div class='left'>
                    <div class='circle' @click='chooseAllGoods'>
                         <i class='icon iconfont' :class="allChecked ? 'icon-juxing': 'icon-weixuanzhong'"></i>
                    </div>
                    <span class='he-ji'>合计：</span>
                    <span class='counts'>￥{{totalMoney}}</span>
                    <!-- <span class='no-yun'>(不含运费)</span> -->
                </div>
                <div class='right' @click='toConfirmOrder'>结算({{totalNum}})</div>
            </div>
        </div>
        <div class='main-ct' v-else>
            <data-null dataText='购物车是空的'></data-null>
        </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import DataNull from '@/pages/DataNull'
import { MessageBox } from 'mint-ui'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      name: '购物车',
      msg: 'I am Cart'
    }
  },
  components: { TopNav, DataNull },
  created() {},
  computed: {
    ...mapGetters(['cartGoods', 'allChecked']),
    // 计算所有选中商品的总金额
    totalMoney() {
      let money = 0
      if (this.cartGoods.length) {
        this.cartGoods.map(item => {
          if (item.checked) {
            money += parseFloat(item.price) * parseFloat(item.num)
          }
        })
      }
      return money
    },
    // 计算所有选中商品的数量
    totalNum() {
      let total = 0
      if (this.cartGoods.length) {
        this.cartGoods.map(item => {
          if (item.checked) {
            total += item.num
          }
        })
      }
      return total
    }
  },
  methods: {
    ...mapActions([
      'cartGoodAdd',
      'cartGoodReduce',
      'chooseOneGood',
      'chooseAllGoods'
    ]),
    toConfirmOrder() {
      this.$router.push({ name: 'confirmOrder' })
    },
    // 删除某个商品
    deleteGood(index) {
      MessageBox.confirm('确定删除此商品')
        .then(action => {
          this.$store.dispatch('deleteOneGood', index)
        })
        .then()
    }
  }
}
</script>

<style lang='less' scoped>
.cart {
  .main-ct {
    margin-bottom: 1.6rem;
    .list-ct {
      .item {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0.3rem;
        margin-bottom: 0.3rem;
        background-color: #fff;
        .check {
          width: 20px;
          height: 1.6rem;
          position: relative;
          .circle {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: -10px;
            margin-left: -10px;
            .iconfont {
              font-size: .5rem;
            }
          }
        }
        .midd {
          margin-left: 0.3rem;
          img {
            height: 1.6rem;
            width: 1.6rem;
            float: left;
          }
          .info {
            display: inline-block;
            width: 3rem;
            margin-left: 0.3rem;
            text-align: left;
            .name {
              color: #dd9988;
            }
            .input-number {
              margin-top: 0.2rem;
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
          }
        }
        .count {
          flex: 1;
          font-size: 16px;
          color: #f44336;
          text-align: right;
        }
        .delet-btn {
          position: absolute;
          right: 0.3rem;
          bottom: 0.3rem;
        }
      }
    }
    .balance-ct {
      position: fixed;
      display: flex;
      justify-content: flex-start;
      bottom: 60px;
      left: 0;
      right: 0;
      border-top: 1px solid #ddd;
      font-size: 16px;
      .left {
        flex: 1;
        position: relative;
        height: 50px;
        line-height: 50px;
        background-color: #fff;
        .circle {
          position: absolute;
          margin-left: 10px;
          .iconfont {
            font-size: .5rem;
          }
        }
        .he-ji{
            margin-left: 20px;
        }
        .counts {
          color: #f44336;
        }
        .no-yun {
          font-size: 14px;
          color: #dbdbdb;
        }
      }
      .right {
        flex: 0 0 120px;
        width: 120px;
        height: 50px;
        line-height: 50px;
        background-color: #f44336;
        color: #fff;
      }
    }
  }
}
</style>
