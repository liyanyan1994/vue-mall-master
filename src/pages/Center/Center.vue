<template>
  <div class="center">
    <top-nav :title="name"></top-nav>
        <div class="main-ct">
            <div class="head-ct">
                <img class="header-img" :src="headImgUrl"/>
                <p class="name">{{userName}}</p>
            </div>
            <div class="status-ct">
                <div class="will-pay">
                    <router-link to="/payMoney">
                        <i class="icon iconfont icon-daifukuan1"></i>
                        <span>待付款</span>
                    </router-link>
                </div>
                <div class="will-shouhuo">
                    <router-link to="/beingReceive">
                        <i class="icon iconfont icon-daishouhuo"></i>
                        <span>待收货</span>
                    </router-link>
                </div>
                <div class="will-all">
                    <router-link to="/allOrder">
                        <i class="icon iconfont icon-quanbudingdan"></i>
                        <span>全部订单</span>
                    </router-link>
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
                        <router-link class="more-link" to="/cart">
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
import TopNav from "@/components/TopNav/TopNav";
import func from "@/utils/func";

export default {
  name: "center",
  data() {
    return {
      name: "我的",
      msg: "I am Center",
      userName: "",
      headImgUrl: ""
    };
  },
  created() {
    this.getUserInfo(1);
  },
  methods: {
    getUserInfo(id) {
      func.axiosGet("/userInfo?id=" + id, response => {
        const returnObj = response.data[0];
        this.userName = returnObj.name;
        this.headImgUrl = returnObj.imgUrl;
      });
    }
  },
  components: { TopNav }
};
</script>

<style lang="less" scoped>
.center {
  .main-ct {
    .head-ct {
      height: 2.6rem;
      text-align: center;
      border-bottom: 1px solid #ddd;
      background-color: #fff;
      .header-img {
        width: 1.2rem;
        height: 1.2rem;
        margin-top: 0.6rem;
        border: 1px solid #ddd;
        border-radius: 50%;
      }
    }
    .status-ct {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.3rem 0;
      background-color: #fff;
      div {
        flex: 1;
        .iconfont {
          font-size: 24px;
          display: block;
          margin-bottom: 5px;
        }
      }
    }
    .more-ct {
      background-color: #fff;
      .more-list {
        .more-item {
          padding: 0.2rem 0.3rem;
          .more-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            .title {
              width: 100%;
              font-size: 16px;
            }
            .iconfont {
              font-size: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
