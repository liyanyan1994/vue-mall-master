<template>
  <div class='productDetail'>
        <top-nav :title='name'></top-nav>
        <div class='main-ct'>
            <div class='top-ct'>
                <div class='swpier-ct'>
                    <img :src='productInfo.head_img'>
                </div>
                <div class='title-ct'>
                    <p class='name'>{{productInfo.name}}</p>
                    <p class='count'>￥{{productInfo.price}}</p>
                </div>
            </div>
            <div class='detail-ct'>
                <second-title msg='商品详情' class='second-t'></second-title>
                <div class='product-img-ct'>
                    <img v-for='(detail,index) in detailImgUrl' :key=index  :src='detail'/>
                </div>
            </div>
        </div>
        <div class='bottom-ct'>
            <div class='bottom-inner'>
                 <div class='count-of-car' @click='popupVisible = true'>
                    <i class='icon iconfont icon-cart'></i>
                </div>
                <div class='submit-box' @click='popupVisible = true'>加入购物车</div>
            </div>
        </div>
         <mt-popup v-model='popupVisible'  position='bottom' class='popup'>
            <div class='popup-ct'>
                <div class='popup-one'>
                    <div class='img-ct'>
                        <img :src='productInfo.head_img'>
                    </div>
                    <div class='pro-guige'>
                        <p class='count'>￥{{productInfo.price}}</p>
                        <p class='cun'>库存12332件</p>
                        <p class='size'>已选：'100ml'</p>
                    </div>
                    <div class='close-ct' @click='popupVisible=false'>
                        <i class='icon iconfont icon-guanbi'></i>
                    </div>
                </div>
                <div class='popup-two'>
                    <p class='title'>化妆品净含量</p>
                    <div class='size-div'>100ml</div>
                </div>
                <div class='popup-three'>
                    <div>购买数量</div>
                    <add-reduce-btn :goodNum='productInfo.num' @numAdd='goodNumAdd' @numReduce='goodNumReduce'></add-reduce-btn>
                </div>
            </div>
            <confirm-btn class='popup-btn' @click.native='toCart(productInfo)'></confirm-btn>
        </mt-popup>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import ConfirmBtn from '@/components/CommonBtn/ConfirmBtn'
import SecondTitle from '@/components/SecondTitle/SecondTitle'
import AddReduceBtn from '@/components/StyleCommon/AddReduceBtn'
import { Popup } from 'mint-ui'
import { mapGetters } from 'vuex'
import localEvent from '@/store/local'
export default {
  name: 'dutyFree',
  data() {
    return {
      name: '商品详情',
      msg: 'I am productDetail',
      popupVisible: false
      //   productInfo: {}
    }
  },
  components: { TopNav, SecondTitle, Popup, AddReduceBtn, ConfirmBtn },
  created() {
    if (this.$route.params.detailObj.goodId) {
      this.$store.dispatch('getGoodDetail', this.$route.params.detailObj.goodId)
    }
  },
  destroyed() {
    console.log('destoryed')
    localEvent.LocalStoreSetting(this.productInfo)
  },
  computed: {
    ...mapGetters({
      productInfo: 'goodDetail'
    }),
    detailImgUrl() {
      if (this.productInfo.detail_img) {
        return this.productInfo.detail_img.split(',')
      }
    }
  },
  methods: {
    showBottom() {
      this.popupVisible = true
    },
    goodNumAdd() {
      this.$store.dispatch('goodNumAdd', this.productInfo.id)
    },
    goodNumReduce() {
      console.log(this.productInfo.id)
      this.$store.dispatch('goodNumReduce', this.productInfo.id)
    },
    toCart(p) {
      this.$store.dispatch('addToCart', p)
      this.$router.push({ path: '/cart' })
    }
  }
}
</script>

<style  lang='less' scoped>
.productDetail {
  .main-ct {
    .top-ct {
      .swpier-ct {
        overflow: hidden;
        width: 100%;
        height: auto;
        vertical-align: middle;
        img {
          width: 100%;
        }
      }
      .title-ct {
        padding: 0.4rem;
        background-color: #fff;
        .name {
          font-size: 16px;
          margin-bottom: 0.1rem;
        }
        .count {
          color: #f44336;
          font-size: 16px;
        }
      }
    }
    .detail-ct {
      margin-top: 0.3rem;
      background-color: #fff;
      .second-t {
        padding: 0.3rem 0;
      }
      .product-img-ct {
        font-size: 0;
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
    }
  }
  .bottom-ct {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    .bottom-inner {
      padding: 0.2rem;
      display: flex;
      .count-of-car {
        border: 1px solid #ddd;
        flex: 0 0 2rem;
        width: 2rem;
        height: 1rem;
        line-height: 1rem;
        box-sizing: border-box;
        .icon-cart {
          font-size: 24px;
        }
      }
      .submit-box {
        flex: 1;
        height: 1rem;
        line-height: 1rem;
        color: #fff;
        background-color: #f44336;
      }
    }
  }
  .popup {
    width: 100%;
    height: 70%;
    padding: 0.2rem;
    .popup-ct {
      position: relative;
      width: 100%;
      background-color: #fff;
      .popup-one {
        display: flex;
        position: relative;
        justify-content: flex-start;
        align-items: flex-start;
        padding-bottom: 0.3rem;
        border-bottom: 1px solid #ddd;
        .img-ct {
          height: 2rem;
          width: 2rem;
          margin-top: -0.5rem;
          margin-left: 0.1rem;
          border: 1px solid #ddd;
          border-radius: 3px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .pro-guige {
          margin-left: 10px;
          padding: 0.1rem;
          text-align: left;
          .count {
            color: #f44336;
            font-size: 16px;
          }
        }
        .close-ct {
          position: absolute;
          right: 0.2rem;
          .iconfont {
            font-size: 24px;
          }
        }
      }
      .popup-two {
        padding: 0.1rem 0.3rem;
        border-bottom: 1px solid #ddd;
        text-align: left;
        .title {
          margin-bottom: 0.1rem;
        }
        .size-div {
          width: 1rem;
          height: 0.5rem;
          margin-bottom: 0.1rem;
          line-height: 0.5rem;
          display: inline-block;
          text-align: center;
          color: #f44336;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
      }
      .popup-three {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem;
        border-bottom: 1px solid #ddd;
      }
    }
    .popup-btn {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: #f44336;
      color: #fff;
    }
  }
}
</style>
