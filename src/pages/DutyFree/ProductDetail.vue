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
                 <div class="count-of-car">
                    <i class="icon iconfont icon-cart"></i>
                </div>
                <div class="submit-box">加入购物车</div>
            </div>
        </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import SecondTitle from '@/components/SecondTitle/SecondTitle'

export default {
  name: 'dutyFree',
  data () {
    return {
      name: '商品详情',
      msg: 'I am productDetail',
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
  components: {TopNav, SecondTitle}
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
}
</style>
