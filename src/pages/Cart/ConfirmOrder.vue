<template>
  <div class="dutyFree">
        <top-nav :title="name"></top-nav>
        <div class="main-ct">
            <div class="add-qu-info">
                <div v-if="addReceive" class="add-ct"> 
                    <i class="icon iconfont icon-add"></i>
                    <span class="add-span" @click="toReceiveInfo" >添加收货地址</span>
                </div>
                <div v-else class="receive-info">
                    <div>
                        <div class="one">收货人</div>
                        <span class="two">陈冰</span>
                        <span class="three">13824596154</span>
                    </div>
                    <div>
                        <div class="one">收货地址</div>
                        <span class="two">仁川机场T航站楼</span>
                    </div>
                </div>
            </div>
            <div class="choosed-ct">
                <div class="title">已购商品</div>
                <div class="choosed-list">
                    <div class="item">
                        <div class="left">
                            <img></img>
                            <div class="info">
                                <p class="name">兰芝 兰芝兰蔻是你 说真的吗就当是真的啦</p>
                                <div class="input-number">*1</div>
                            </div>
                        </div>
                        <div class="count">￥1293</div>
                    </div>
                    <div class="item">
                        <div class="left">
                            <img></img>
                            <div class="info">
                                <p class="name">兰芝 兰芝兰蔻是你 说真的吗就当是真的啦</p>
                                <div class="input-number">*1</div>
                            </div>
                        </div>
                        <div class="count">￥1293</div>
                    </div>
                    <div class="item">
                        <div class="left">
                            <img></img>
                            <div class="info">
                                <p class="name">兰芝 兰芝兰蔻是你 说真的吗就当是真的啦</p>
                                <div class="input-number">*1</div>
                            </div>
                        </div>
                        <div class="count">￥1293</div>
                    </div>
                </div>
            </div>
            <bottom-confirm name="确认" :number="123" @click.native="toPayMoney"></bottom-confirm>
        </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import BottomConfirm from '@/components/BottomConfirm/BottomConfirm'

export default {
  name: 'dutyFree',
  data () {
    return {
      name: '确认订单',
      addReceive: true
    }
  },
  components: {TopNav, BottomConfirm},
  methods: {
    toReceiveInfo () {
      this.$router.push({name: 'receiveInfo'})
    },
    toPayMoney () {
      this.$router.push({name: 'payMoney'})
    }
  }
}
</script>

<style  lang="less" scoped>
.dutyFree{
    .main-ct{
        .add-qu-info{
            background-color: #fff;
            height: 1rem;
            line-height: 1rem;
            .add-ct{
                .iconfont{
                    font-size: 24px;
                    // border:1px solid red;
                    display: inline-block;
                }
               .add-span{
                    color:#f44336;
                    font-size: 16px;
                    // border:1px solid red;
                } 
            }
            .receive-info{
                padding: .3rem;
                text-align: left;
                div{
                    padding: .1rem 0;
                    .one{
                        display: inline-block;
                        width: 1rem;
                        height: .3rem;
                        line-height: .3rem;
                        text-align: center;
                        color: #8a8a8a;
                        border:1px solid #8a8a8a;
                        border-radius: 2px;
                        font-size: 12px;
                    }
                    .two{
                        font-size: 16px;
                        color: #333;
                        margin-left: 10px;
                    }
                    .three{
                        font-size: 16px;
                        margin-left: 10px;
                    }
                }
            }
        }
        .choosed-ct{
            background-color: #fff;
            text-align: left;
            .title{
                height: .6rem;
                line-height: .6rem;
                background-color: #e6e6e6;
                text-indent: .3rem;
                font-size: 16px;
            }
            .choosed-list{
                .item{
                    display: flex;
                    padding: .2rem .3rem;
                    justify-content: flex-start;
                    align-items: flex-start;
                    border-bottom: 1px solid #ddd;
                    .left{
                        img{
                            height: 1.6rem;
                            width: 1.4rem;
                            float: left;
                        }
                        .info{
                            display: inline-block;
                            width: 3rem;
                            margin-left: .3rem;
                            text-align: left;
                            .name{
                                color: #333;
                            }
                            .input-number{
                                margin-top: .2rem;
                                color: #bbb;
                            }
                        }
                    }
                    .count{
                        flex: 1;
                        font-size: 16px;
                        text-align: right;
                        color: #333;
                    }
                }
            }
        }
    }
}
</style>
