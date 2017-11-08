<template>
  <div class="center">
    <top-nav :title="name"></top-nav>
        <div class="main-ct">
            <div class="head-ct">
                <img class="header-img"/>
                <p class="name">Name I</p>
            </div>
            <div class="status-ct">
                <div class="will-pay">
                    <i class="icon iconfont icon-daifukuan1"></i>
                    <span>待付款</span>
                </div>
                <div class="will-shouhuo">
                    <i class="icon iconfont icon-daishouhuo"></i>
                    <span>待收货</span>
                </div>
                <div class="will-all">
                    <i class="icon iconfont icon-quanbudingdan"></i>
                    <span>全部订单</span>
                </div>
            </div>
            <div class="more-ct">
                <ul class="more-list">
                    <li class="more-item">
                        <router-link class="more-link" to="">
                            <p class="title">我的收藏</p>
                            <i class="icon iconfont icon-more"></i>
                        </router-link>
                    </li>
                    <li class="more-item">
                        <router-link class="more-link" to="">
                            <p class="title">浏览历史</p>
                            <i class="icon iconfont icon-more"></i>
                        </router-link>
                    </li>
                    <li class="more-item">
                        <router-link class="more-link" to="">
                            <p class="title">我的购物车</p>
                            <i class="icon iconfont icon-more"></i>
                        </router-link>
                    </li>
                    <li class="more-item">
                        <router-link class="more-link" to="">
                            <p class="title">收货地址</p>
                            <i class="icon iconfont icon-more"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'

export default {
  name: 'center',
  data () {
    return {
      name: '我的',
      msg: 'I am Center'
    }
  },
  components: {TopNav}
}
</script>

<style lang="less" scoped>
.center{
    .main-ct{
        .head-ct{
            height: 2.6rem;
            text-align: center;
            border-bottom: 1px solid #ddd;
            background-color: #fff;
            .header-img{
                width: 30px;
                height: 30px;
                margin-top: 30px;
                border: 1px solid #ddd;
                border-radius: 50%;
            }
            .name{

            }
        }
        .status-ct{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .3rem 0;
            background-color: #fff;
            div{
                flex: 1;
                .iconfont{
                    font-size: 24px;
                    display: block;
                    margin-bottom: 5px;
                }
            }
        }
        .more-ct{
            background-color: #fff;
            .more-list{
                .more-item{
                    padding: .2rem .3rem;
                    .more-link{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        text-align: left;
                        .title{
                            width: 100%;
                            font-size: 16px;
                        }
                        .iconfont{
                            font-size: 24px;
                        }
                    }
                }
            }
        }
    }
}
</style>
