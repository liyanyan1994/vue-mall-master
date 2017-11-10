<template>
  <div class='home'>
      <top-nav :title="name"></top-nav>
      <div class="main-ct">
          <!-- <img class="banner-ct" :src="bannerUlr[0]"></img> -->
          <div class="banner-ct">
                <mt-swipe :auto="5000">
                    <mt-swipe-item v-for="(banner, index) in bannerUlr" :key="index"><img :src="banner" alt=""></mt-swipe-item>
               </mt-swipe>
          </div>
          <div class="icons-ct">
              <div class="icons-item" v-for="(item,index) in pingList" :key="index">
                  <img :src="item"/>
              </div>
          </div>
          <div class="topic-ct">
              <p class="topic-title">今日特卖</p>
              <router-link to="/topic" v-for="(item,index) in hotTopic" :key="index">
                <div class="topic-item">
                    <img class="topic-img" :src="item.imgUrl"/>
                    <p class="name">{{item.name}}</p>
                    <p class="time">{{item.time}}</p>
                </div>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import TopNav from '@/components/TopNav/TopNav'
// import {Swipe, SwipeItem} from 'mint-ui'

export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '首页',
      bannerUlr: ['http://b.vimage1.com/upload/mst/2017/11/09/185/3a33d0f8bd05226ff1ccf77ac551ec25_604x290_80.jpg',
        'http://b.vimage1.com/upload/mst/2017/11/04/139/23b96f0e89abed2d9415e848fc3715ff_604x290_80.jpg',
        'http://b.vimage1.com/upload/mst/2017/11/09/79/db80a964d68929ee76f44244dd2d52d7_604x290_80.jpg'
      ],
      pingList: ['http://img.alicdn.com/tps/i2/TB1qtTcGVXXXXXnXpXXSutbFXXX.jpg_140x140Q50s50.jpg',
        'http://img.alicdn.com/tps/i2/T1uLZuFX0bXXb1upjX.jpg_140x140Q50s50.jpg',
        'http://img.alicdn.com/tps/i2/TB1mHqvGXXXXXavXpXXSutbFXXX.jpg_140x140Q50s50.jpg',
        'http://img.alicdn.com/tps/i2/T1mWLhFTBaXXb1upjX.jpg_140x140Q50s50.jpg'
      ],
      hotTopic: [{
        imgUrl: 'http://a.vimage1.com/upload/brand//upcb/2017/10/31/141/ias_150944373875129_604x290_80.jpg',
        name: 'SK-II化妆品专场',
        time: '仅限11月7日-11月30日'
      }, {
        imgUrl: 'http://a.vimage1.com/upload/brand//upcb/2017/10/12/148/ias_150777161492603_604x290_80.jpg',
        name: '膜法世家·1908护肤品专场',
        time: '仅限11月7日-11月30日'
      }, {
        imgUrl: 'http://a.vimage1.com/upload/brand//upcb/2017/10/24/102/ias_150883120949985_604x290_80.jpg',
        name: '玉兰油OLAY护肤品专场',
        time: '仅限11月7日-11月30日'
      }, {
        imgUrl: 'http://a.vimage1.com/upload/brand//upcb/2017/10/11/172/ias_150769399748474_604x290_80.jpg',
        name: '雪肌精化妆品专场',
        time: '仅限11月7日-11月30日'
      }, {
        imgUrl: 'http://a.vimage1.com/upload/brand//upcb/2017/10/24/41/ias_150883813874658_604x290_80.jpg',
        name: 'MAKE UP FOR EVER玫珂菲彩妆专场',
        time: '仅限11月7日-11月30日'
      }]
    }
  },
  components: {TopNav},
  computed: {
    ...mapState([
      'activeMenu'
    ])
  }
}
</script>

<style lang="less" scoped>
.home{
    .main-ct{
        background-color: #e6e6e6;
        .banner-ct{
            width: 100%;
            height: 3.4rem;
            img{
                width: 100%;
            }
        }
        .icons-ct{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 1.6rem;
            background-color: #fff;
            .icons-item{
                flex: 1;
                font-size: .3rem;
                img{
                    width: 60px;
                }
            }
        }
        .topic-ct{
            margin-top: .2rem;
            background-color: #fff;
            .topic-title{
                padding-top: .3rem;
                text-align: center;
                color: #333;
                font-size: 20px;
            }
            .topic-item{
                padding: 0 .3rem;
                border-bottom: 1px solid #eee;
                .topic-img{
                    margin-top: .3rem;
                    width: 100%;
                }
                .name{
                    margin-top: .3rem;
                    font-size: 20px;
                }
                .time{
                    margin-top: .2rem;
                    padding-bottom: .3rem;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>
