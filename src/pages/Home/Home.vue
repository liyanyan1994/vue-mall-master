<template>
  <div class='home'>
      <top-nav :title='name'></top-nav>
      <div class='main-ct'>
          <div class='banner-ct'>
                <mt-swipe :auto='5000'>
                    <mt-swipe-item v-for='(banner, index) in bannerUlr' :key='index'><img :src='banner.imgUrl' alt=''></mt-swipe-item>
               </mt-swipe>
          </div>
          <div class='icons-ct'>
              <div class='icons-item' v-for='(item,index) in brandList' :key='index'>
                  <img :src='item.imgUrl'/>
              </div>
          </div>
          <div class='topic-ct'>
              <second-title msg='今日特卖' class='topic-title'></second-title>
              <router-link :to="{ path: '/productList/' + item.type}" v-for='(item,index) in hotTopic' :key='index' @click.native='productId(item.type)'>
                <div class='topic-item'>
                    <img class='topic-img' :src='item.img_url'/>
                    <p class='name'>{{item.msg}}</p>
                    <p class='time'>{{item.pms}}</p>
                </div>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopNav from '@/components/TopNav/TopNav'
import SecondTitle from '@/components/SecondTitle/SecondTitle'
import func from '@/utils/func'

export default {
  name: 'HelloWorld',
  data() {
    return {
      name: '首页',
      bannerUlr: null,
      brandList: {},
      hotTopic: {}
    }
  },
  created() {
    this.getHome()
    this.getSaleProducts()
  },
  methods: {
    getHome() {
      func.axiosGet('/bannerInfo', response => {
        console.log(response.data)
        const returnObj = response.data
        this.bannerUlr = returnObj.banner
        this.brandList = returnObj.brand
      })
    },
    getSaleProducts() {
      func.axiosGet('/saleProducts', response => {
        this.hotTopic = response.data
      })
    },
    productId(id) {
      this.$store.dispatch('chooseProduct', id)
    }
  },
  components: { TopNav, SecondTitle },
  computed: {
    ...mapState(['activeMenu'])
  }
}
</script>

<style lang='less' scoped>
.home {
  .main-ct {
    background-color: #e6e6e6;
    .banner-ct {
      width: 100%;
      height: 3.4rem;
      img {
        width: 100%;
      }
    }
    .icons-ct {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1.6rem;
      background-color: #fff;
      .icons-item {
        flex: 1;
        font-size: 0.3rem;
        img {
          width: 60px;
        }
      }
    }
    .topic-ct {
      margin-top: 0.2rem;
      background-color: #fff;
      .topic-title {
        padding-top: 0.3rem;
        color: #333;
        font-size: 20px;
      }
      .topic-item {
        padding: 0 0.3rem;
        border-bottom: 1px solid #eee;
        .topic-img {
          margin-top: 0.3rem;
          width: 100%;
        }
        .name {
          margin-top: 0.3rem;
          font-size: .4rem;
        }
        .time {
          margin-top: 0.2rem;
          padding-bottom: 0.3rem;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
