<template>
  <div class="topic">
    <top-nav :title="name"></top-nav>
      <div class="main-ct">
          <div>
            <p class="topic-title">lalallalal 啦啦啦啦啦了啦啦啦啦啦啦啦啦拉拉啦啦啦啦</p>
            <div class="topic-item">
                <img></img>
                <p class="detail">大家好地方 的话端口交电话费 地方接口和地方 绝地反击</p>
            </div>
            <div class="topic-item">
                <img></img>
                <p class="detail">hj 的海景房 发达国家看看多个的话看多发几个 东方国际多个 </p>
            </div>
            <div class="topic-item">
                <img></img>
                <p class="detail">好久大师傅个 东方国际地方个个飞机客观 </p>
            </div>
          </div>
          <more-btn msg="查看更多宝贝" :height=0.5></more-btn>
     </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import MoreBtn from '@/components/CommonBtn/MoreBtn'

export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '专题',
      msg: 'Topic'
    }
  },
  components: {TopNav, MoreBtn}
}
</script>

<style lang="less" scoped>
.topic{
    .main-ct{
        overflow: hidden;
        padding-bottom: 0;
        div{
            padding: .2rem .3rem;
            .topic-title{
                text-align: left;
                font-size: 16px;
                color: #333;
            }
            .topic-item{
                padding: .3rem 0;
                background-color: #fff;
                text-align: left;
                img{
                    width: 100%;
                    height: 3rem;
                }
                .detail{
                    font-size: 16px;
                    color: #333;
                    padding: 0 .3rem;
                    margin-top: .1rem;
                }
            }
        }
    }
}
</style>
