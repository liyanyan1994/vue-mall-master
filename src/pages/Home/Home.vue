<template>
  <div class='home'>
      <top-nav :title="name"></top-nav>
      <div class="main-ct">
          <img class="banner-ct" src="http://mz.djmall.xmisp.cn//files//banner//20161222//148238831285.png"></img>
          <div class="icons-ct">
              <div class="icons-item">韩束</div>
              <div class="icons-item">雪肌精</div>
              <div class="icons-item">SK-II</div>
              <div class="icons-item">innisfree</div>
          </div>
          <div class="topic-ct">
              <p class="topic-title">热门专题</p>
              <router-link to="/topic">
                <div class="topic-item">
                <img class="topic-img" src="http://mz.djmall.xmisp.cn//files//banner//20161219//148211980641.png"/>
                <p class="name">杨亚宇全攻略洁面产品</p>
                <p class="time">仅限5月17日-5月19日</p>
              </div>
              </router-link>
              <router-link to="/topic">
                <div class="topic-item">
                <img class="topic-img" src="http://mz.djmall.xmisp.cn//files//banner//20161222//14823895573.png"/>
                <p class="name">杨亚宇全攻略洁面产品</p>
                <p class="time">仅限5月17日-5月19日</p>
              </div>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import TopNav from '@/components/TopNav/TopNav'
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: 'home',
      msg: 'i am home'
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
        background-color: #dbdbdb;
        .banner-ct{
            height: 2.4rem;
            width: 100%;
            background-color: #707070;
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
                    width: 100%;
                    height: 2.4rem;
                    margin-top: .3rem;
                    // border: 1px solid red;
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
