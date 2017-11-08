<template>
  <div class="cart">
        <top-nav :title="name"></top-nav>
        <div class="main-ct">
            <div class="list-ct">
                <div class="item">
                    <div class="check">
                        <span class="circle">
                            <i class="icon iconfont icon-juxing"></i>
                        </span>
                    </div>
                    <div class="midd">
                        <img></img>
                        <div class="info">
                            <p class="name">兰芝 兰芝兰蔻是你 说真的吗就当是真的啦</p>
                            <div class="input-number">加减算法</div>
                        </div>
                    </div>
                    <div class="count">￥1293</div>
                    <div class="delet-btn">删除</div>
                </div>
                <div class="item">
                    <div class="check">
                        <span class="circle">
                            <i class="icon iconfont icon-weixuanzhong"></i>
                        </span>
                    </div>
                    <div class="midd">
                        <img></img>
                        <div class="info">
                            <p class="name">兰芝 兰芝兰蔻是你 说真的吗就当是真的啦</p>
                            <div class="input-number">加减算法</div>
                        </div>
                    </div>
                    <div class="count">￥1293</div>
                    <div class="delet-btn">删除</div>
                </div>
                <div class="item">
                    <div class="check">
                        <span class="circle">
                             <i class="icon iconfont icon-weixuanzhong"></i>
                        </span>
                    </div>
                    <div class="midd">
                        <img></img>
                        <div class="info">
                            <p class="name">兰芝 兰芝兰蔻是你 说真的吗就当是真的啦</p>
                            <div class="input-number">加减算法</div>
                        </div>
                    </div>
                    <div class="count">￥1293</div>
                    <div class="delet-btn">删除</div>
                </div>
                <div class="item">
                    <div class="check">
                        <span class="circle">
                             <i class="icon iconfont icon-weixuanzhong"></i>
                        </span>
                    </div>
                    <div class="midd">
                        <img></img>
                        <div class="info">
                            <p class="name">兰芝 兰芝兰蔻是你 说真的吗就当是真的啦</p>
                            <div class="input-number">加减算法</div>
                        </div>
                    </div>
                    <div class="count">￥1293</div>
                    <div class="delet-btn">删除</div>
                </div>
                <div class="item">
                    <div class="check">
                        <span class="circle">
                             <i class="icon iconfont icon-weixuanzhong"></i>
                        </span>
                    </div>
                    <div class="midd">
                        <img></img>
                        <div class="info">
                            <p class="name">兰芝 兰芝兰蔻是你 说真的吗就当是真的啦</p>
                            <div class="input-number">加减算法</div>
                        </div>
                    </div>
                    <div class="count">￥1293</div>
                    <div class="delet-btn">删除</div>
                </div>
                <div class="item">
                    <div class="check">
                        <span class="circle">
                             <i class="icon iconfont icon-weixuanzhong"></i>
                        </span>
                    </div>
                    <div class="midd">
                        <img></img>
                        <div class="info">
                            <p class="name">兰芝 兰芝兰蔻是你 说真的吗就当是真的啦</p>
                            <div class="input-number">加减算法</div>
                        </div>
                    </div>
                    <div class="count">￥1293</div>
                    <div class="delet-btn">删除</div>
                </div>
                <div class="item">
                    <div class="check">
                        <span class="circle">
                             <i class="icon iconfont icon-weixuanzhong"></i>
                        </span>
                    </div>
                    <div class="midd">
                        <img></img>
                        <div class="info">
                            <p class="name">兰芝 兰芝兰蔻是你 说真的吗就当是真的啦</p>
                            <div class="input-number">加减算法</div>
                        </div>
                    </div>
                    <div class="count">￥1293</div>
                    <div class="delet-btn">删除</div>
                </div>
            </div>
            <div class="balance-ct">
                <div class="left">
                    <div class="circle">
                         <i class="icon iconfont icon-weixuanzhong"></i>
                    </div>
                    <span>合计：</span>
                    <span class="counts">￥1250</span>
                    <span class="no-yun">(不含运费)</span>
                </div>
                <div class="right" @click="toConfirmOrder">结算(1)</div>
            </div>
        </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'

export default {
  data () {
    return {
      name: '购物车',
      msg: 'I am Cart'
    }
  },
  components: {TopNav},
  methods: {
    toConfirmOrder () {
      this.$router.push({name: 'confirmOrder'})
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
                    margin-left: .5rem;
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
