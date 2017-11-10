<template>
  <div class="productDetail">
        <top-nav :title="name"></top-nav>
        <div class="main-ct">
            <div class="top-ct">
                <div class="swpier-ct">
                    <img :src="productInfo.headImgUrl">
                </div>
                <div class="title-ct">
                    <p class="name">{{productInfo.name}}</p>
                    <p class="count">￥{{productInfo.count}}</p>
                </div>
            </div>
            <div class="detail-ct">
                <second-title msg="商品详情" class="second-t"></second-title>
                <div class="product-img-ct">
                    <img v-for="(detail,index) in productInfo.detailImg" :key=index  :src="detail"/>
                </div>
            </div>
        </div>
        <div class="bottom-ct">
            <div class="bottom-inner">
                 <div class="count-of-car" @click="popupVisible = true">
                    <i class="icon iconfont icon-cart"></i>
                </div>
                <div class="submit-box" @click="popupVisible = true">加入购物车</div>
            </div>
        </div>
         <mt-popup v-model="popupVisible"  position="bottom" class="popup">
            <div class="popup-ct">
                <div class="popup-one">
                    <div class="img-ct">
                        <img :src="productInfo.headImgUrl">
                    </div>
                    <div class="pro-guige">
                        <p class="count">￥{{productInfo.count}}</p>
                        <p class="cun">库存12332件</p>
                        <p class="size">已选："100ml"</p>
                    </div>
                    <div class="close-ct" @click="popupVisible=false">
                        <i class="icon iconfont icon-guanbi"></i>
                    </div>
                </div>
                <div class="popup-two">
                    <p class="title">化妆品净含量</p>
                    <div class="size-div">100ml</div>
                </div>
                <div class="popup-three">
                    <div>购买数量</div>
                    <add-reduce-btn :goodNum="1"></add-reduce-btn>
                </div>
            </div>
            <confirm-btn class="popup-btn" @click.native="toCart"></confirm-btn>
        </mt-popup>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import ConfirmBtn from '@/components/CommonBtn/ConfirmBtn'
import SecondTitle from '@/components/SecondTitle/SecondTitle'
import AddReduceBtn from '@/components/StyleCommon/AddReduceBtn'
import { Popup } from 'mint-ui'

export default {
  name: 'dutyFree',
  data () {
    return {
      name: '商品详情',
      msg: 'I am productDetail',
      popupVisible: false,
      productInfo: {
        headImgUrl: 'http://a.vimage1.com/upload/merchandise/pdcvis/2017/08/16/75/a8b5302f-bdb8-487b-9845-de9e60478679_384x484_70.jpg',
        name: '巨遮瑕清透水润气垫BB（自然色）',
        count: '298',
        detailImg: [
          'http://a.vimage1.com/upload/merchandise/pdcvis/2017/08/16/175/cc7a3be0-28e5-4a3c-b15c-135b5820b1fd.jpg',
          'http://a.vimage1.com/upload/merchandise/pdcvis/2017/08/16/40/6c98b525-f933-4f92-888d-eb15934ed061.jpg',
          'http://a.vimage1.com/upload/merchandise/pdcvis/2017/08/16/73/4413ff20-cd1a-4ee9-8a0e-f214f0a5272e.jpg',
          'http://a.vimage1.com/upload/merchandise/pdcvis/2017/08/16/13/7a562bb7-ec00-4a26-856e-20bf4a2f13be.jpg',
          'http://a.vimage1.com/upload/merchandise/pdcvis/2017/08/16/158/2583153c-7bce-4158-9026-3bba69f04f67.jpg',
          'http://a.vimage1.com/upload/merchandise/pdcvis/2017/08/16/54/4489f2c0-ca83-4ad3-a2fb-3703c9e7fbe5.jpg',
          'http://a.vimage1.com/upload/merchandise/pdcvis/2017/08/16/59/d188bf24-eb57-416b-a7f8-987222034dbc.jpg',
          'http://a.vimage1.com/upload/merchandise/pdcvis/2017/08/16/66/508bf06e-5a42-41d4-9cd8-17fa8787ec12.jpg'
        ]
      }
    }
  },
  components: {TopNav, SecondTitle, Popup, AddReduceBtn, ConfirmBtn},
  methods: {
    showBottom () {
      console.log('enen')
      this.popupVisible = true
    },
    toCart () {
      this.$router.push({path: '/cart'})
    }
  }
}
</script>

<style  lang="less" scoped>
.productDetail{
    .main-ct{
        .top-ct{
            .swpier-ct{
                overflow: hidden;
                width: 100%;
                height: auto;
                vertical-align: middle;
                img{
                    width: 100%;
                }
            }
            .title-ct{
                padding: .4rem;
                background-color: #fff;
                .name{
                    font-size: 16px;
                    margin-bottom: .1rem;
                }
                .count{
                    color: #f44336;
                    font-size: 16px;
                }
            }
        }
        .detail-ct{
            margin-top: .3rem;
            background-color: #fff;
            .second-t{
                padding: .3rem 0;
            }
            .product-img-ct{
                font-size: 0;
                img{
                    width: 100%;
                    vertical-align: middle;
                }
            }
        }
    }
    .bottom-ct{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 10;
        background-color: #fff;
        .bottom-inner{
            padding: .2rem;
            display: flex;
            .count-of-car{
                border: 1px solid #ddd;
                flex: 0 0 2rem;
                width: 2rem;
                height: 1rem;
                line-height: 1rem;
                box-sizing: border-box;
                .icon-cart{
                    font-size: 24px;
                }
            }
            .submit-box{
                flex: 1;
                height: 1rem;
                line-height: 1rem;
                color: #fff;
                background-color: #f44336;
            }
        }
    }
    .popup{
      width: 100%;
      height: 70%;
      padding: .2rem;
      .popup-ct{
        position: relative;
        width: 100%;
        background-color: #fff;
        .popup-one{
            display: flex;
            position: relative;
            justify-content: flex-start;
            align-items: flex-start;
            padding-bottom: .3rem;
            border-bottom: 1px solid #ddd;
            .img-ct{
                height: 2rem;
                width: 2rem;
                margin-top: -0.5rem;
                margin-left: .1rem;
                border: 1px solid #ddd;
                border-radius: 3px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .pro-guige{
                margin-left: 10px;
                padding: .1rem;
                text-align: left;
                .count{
                    color: #f44336;
                    font-size: 16px;
                }
            }
            .close-ct{
                position: absolute;
                right: .2rem;
                .iconfont{
                    font-size: 24px;
                }
            }
          }
          .popup-two{
              padding: .1rem .3rem;
              border-bottom: 1px solid #ddd;
              text-align: left;
              .title{
                  margin-bottom: .1rem;
              }
              .size-div{
                  width: 1rem;
                  height: .5rem;
                  margin-bottom: .1rem;
                  line-height: .5rem;
                  display: inline-block;
                  text-align: center;
                  color: #f44336;
                  border: 1px solid #ddd;
                  border-radius: 5px;
              }
          }
          .popup-three{
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: .3rem;
              border-bottom: 1px solid #ddd;
          }
      }
      .popup-btn{
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
