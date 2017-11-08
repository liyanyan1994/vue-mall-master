<template>
  <div class="payMoney">
        <top-nav :title="name" class="top-nav"></top-nav>
        <div class="main-ct">
            <div class="one-pay-ct">
                <div class="title">
                    <div class="time">2016-09-10</div>
                    <div class="name">待付款</div>
                </div>
                <div class="one-item-ct">
                    <div class="item-ct">
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
                    <div class="total">
                        <span class="jian">共3件</span>
                        <span class="count">合计：￥1287</span>
                    </div>
                    <div class="pay">
                        <confirm-btn class="btn" msg="去付款"></confirm-btn>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import ConfirmBtn from '@/components/CommonBtn/ConfirmBtn'

export default {
  name: 'payMoney',
  data () {
    return {
      name: '待付款',
      msg: 'I am payMoney'
    }
  },
  components: {TopNav, ConfirmBtn}
}
</script>

<style  lang="less" scoped>
.payMoney{
    .top-nav{
        background-color: #fff;
    }
    .main-ct{
        .one-pay-ct{
            .title{
                display: flex;
                padding: 0 .3rem;
                justify-content: space-between;
                align-items: center;
                height: .8rem;
                .name{
                    color: #f44336;
                }
            }
            .one-item-ct{
                padding: 0 .3rem;
                background-color: #fff;
                .item-ct{
                    .item{
                        display: flex;
                        padding: .3rem;
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
                .total{
                    padding: .3rem 0;
                    border-bottom: 1px solid #ddd;
                    text-align: right;
                    .jian{
                        font-size: 14px;
                        color: #dbdbdb;
                    }
                    .count{
                        margin-left: 15px;
                    }
                }
                .pay{
                    background-color: #fff;
                    padding:.4rem 0;
                    .btn{
                        margin: 0 auto;
                        background-color: #f44336;
                        color: #fff;
                        width: 90%;
                    }
                }
            }
        }
    }
}
</style>
