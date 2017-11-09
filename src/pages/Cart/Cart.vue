<template>
  <div class="cart">
        <top-nav :title="name"></top-nav>
        <div class="main-ct">
            <div class="list-ct">
                <div class="item" v-for="(cartItem,index) in cartList" :key="index">
                    <div class="check">
                        <span class="circle" @click="chooseOneGood(index)">
                            <i class="icon iconfont icon-weixuanzhong" :class="cartItem.checked ? 'icon-juxing':'icon-icon-weixuanzhong'"></i>
                        </span>
                    </div>
                    <div class="midd">
                        <img :src="cartItem.imgUrl"></img>
                        <div class="info">
                            <p class="name">{{cartItem.name}}</p>
                            <div class="input-number">
                                <span class="reduce" @click="numberChange(index,-1)">
                                    <i class="icon iconfont icon-jian"></i>
                                </span>
                                <input class="good-num" :value="cartItem.num" readonly="readonly">
                                <span class="add" @click="numberChange(index,1)">
                                     <i class="icon iconfont icon-jia"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="count">￥{{cartItem.num * cartItem.price}}</div>
                    <div class="delet-btn" @click="deleteGood(index)">删除</div>
                </div>
            </div>
            <div class="balance-ct">
                <div class="left">
                    <div class="circle" @click="chooseAllGoods">
                         <i class="icon iconfont" :class="allChecked ? 'icon-juxing': 'icon-weixuanzhong'"></i>
                    </div>
                    <span>合计：</span>
                    <span class="counts">￥{{totalMoney}}</span>
                    <span class="no-yun">(不含运费)</span>
                </div>
                <div class="right" @click="toConfirmOrder">结算({{totalNum}})</div>
            </div>
        </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import {MessageBox} from 'mint-ui'

export default {
  data () {
    return {
      name: '购物车',
      msg: 'I am Cart',
      allChecked: false,
      totalMoney: 0,
      totalNum: 0,
      cartList: [{
        imgUrl: 'http://a4.vimage1.com/upload/merchandise/pdc/009/571/462539903222571009/0/6970346130256-5.jpg',
        name: '兰芝 | 睡眠面膜唯品会专供礼盒',
        price: 195,
        num: 1,
        checked: true
      }, {
        imgUrl: 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/03/70/a0fcfbf7477540ebbce334a8103c851a-5.jpg',
        name: '一叶子 | 莲花水漾保湿四件礼盒[补水保湿]',
        price: 288,
        num: 3,
        checked: true
      }, {
        imgUrl: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/08/128/fd43edda4cab49bda79c6dadea48ba2c-5.jpg',
        name: '丸美 |雪绒花水光润颜装',
        price: 376,
        num: 1,
        checked: true
      }, {
        imgUrl: 'http://a4.vimage1.com/upload/merchandise/pdcvis/2017/10/25/15/40867e28-3483-40f6-8271-c5d5e9d6d9d1.jpg',
        name: '春纪 |动感透净基础套装',
        price: 109,
        num: 1,
        checked: false
      }, {
        imgUrl: 'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/31/16/4a27ae60751247a8ba6a8ea4394e013a-5.jpg',
        name: '植美村 |薏仁雪肤美肌组合',
        price: 245,
        num: 2,
        checked: false
      }, {
        imgUrl: 'http://a4.vimage1.com/upload/merchandise/pdc/288/428/34979356476428288/0/105209-2016122898645-5.jpg',
        name: ' 玉兰油 |水漾动力轻透保湿礼盒',
        price: 209,
        num: 2,
        checked: false
      }]
    }
  },
  components: {TopNav},
  created () {
    this.calTotalMoney()
  },
  methods: {
    // 确认订单
    toConfirmOrder () {
      this.$router.push({name: 'confirmOrder'})
    },
    // 商品数量变化
    numberChange (index, numChange) {
      if (numChange === 1) {
        this.cartList[index].num++
      } else if (numChange === -1) {
        this.cartList[index].num--
      }
      if (this.cartList[index].num <= 1) {
        this.cartList[index].num = 1
      }
      this.calTotalMoney()
    },
    // 全部商品选中
    chooseAllGoods () {
      let flag = true
      if (this.allChecked) {
        flag = false
      }
      for (let i = 0, len = this.cartList.length; i < len; i++) {
        this.cartList[i]['checked'] = flag
      }
      this.allChecked = !this.allChecked
      this.calTotalMoney()
    },
    // 单个商品选中
    chooseOneGood (index) {
      if (this.cartList[index]['checked']) { // 当前为选中，点击之后为未选中
        this.cartList[index]['checked'] = false
        this.allChecked = false
      } else { // 当前为未选中，点击之后为选中
        this.cartList[index]['checked'] = true
      }
      this.isChooseAll()
      this.calTotalMoney()
    },
    // 判断是否选中所有商品
    isChooseAll () {
      let flag1 = true
      for (let i = 0, len = this.cartList.length; i < len; i++) {
        if (this.cartList[i]['checked'] === false) {
          flag1 = false
          break
        }
      }
      flag1 === true ? this.allChecked = true : this.allChecked = false
    },
    // 计算所有选中商品的总金额
    calTotalMoney () {
      this.totalMoney = 0
      this.totalNum = 0
      this.cartList.forEach((item, index, arr) => {
        if (this.cartList[index]['checked']) {
          this.totalMoney += parseFloat(item.price) * parseFloat(item.num)
          this.totalNum += item.num
        }
      })
    },
    // 删除某个商品
    deleteGood (index) {
      MessageBox.confirm('确定删除此商品').then(action => {
        this.cartList.splice(index, 1)
      }).then()
    }
  }
}
</script>

<style lang="less" scoped>
.cart{
    .main-ct{
        margin-bottom: 1.6rem;
        .list-ct{
            .item{
                position: relative;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                padding: .3rem;
                margin-bottom: .3rem;
                background-color: #fff;
                .check{
                    width: 20px;
                    height: 1.6rem;
                    position: relative;
                    .circle{
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        margin-top:-10px;
                        margin-left: -10px;
                        .iconfont{
                            font-size: 24px;
                        }
                    }
                }
                .midd{
                    margin-left: .3rem;
                    img{
                        height: 1.6rem;
                        width: 1.6rem;
                        float: left;
                    }
                    .info{
                        display: inline-block;
                        width: 3rem;
                        margin-left: .3rem;
                        text-align: left;
                        .name{
                             color: #dd9988;
                        }
                        .input-number{
                            margin-top: .2rem;
                            color: #dd9988;
                            font-size: 0;
                            .reduce,.add{
                                display: inline-block;
                                border: 1px solid #ddd;
                                width: .5rem;
                                height: .5rem;
                                line-height: .5rem;
                                text-align: center;
                                font-size: 16px;
                                color: #f44336;
                            }
                            .good-num{
                                display: inline-block;
                                width: 1rem;
                                height: .5rem;
                                line-height: .5rem;
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
                            .reduce{
                                border-top-left-radius: 5px;
                                border-bottom-left-radius:5px; 
                            }
                            .add{
                                border-top-right-radius: 5px;
                                border-bottom-right-radius: 5px;
                            }
                        }
                    }
                }
                .count{
                    flex: 1;
                    font-size: 16px;
                    color: #f44336;
                    text-align: right;
                }
                .delet-btn{
                    position: absolute;
                    right: .3rem;
                    bottom: .3rem;
                }
            }
        }
        .balance-ct{
            position: fixed;
            display: flex;
            justify-content: flex-start;
            bottom: 1.2rem;
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
                .circle{
                    position: absolute;
                    margin-left: 10px;
                    .iconfont{
                        font-size: 24px;
                    }
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
    }
}
</style>
