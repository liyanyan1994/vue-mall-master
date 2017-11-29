<template>
    <div class="receiveAdress">
         <top-nav :title="name"></top-nav>
        <div class="main-ct">
            <div class="adress-ct">
                <div class="item" v-for="(address,index) in addressList" :key="index">
                    <div class="check">
                        <span class="circle"  @click="chooseOneAddress(index)">
                            <i class="icon iconfont icon-weixuanzhong" :class="index === defaultIndex? 'icon-juxing':'icon-icon-weixuanzhong'"></i>
                        </span>
                    </div>
                    <div class="midd">
                        <div class="info">
                            <span class="name">{{address.customerName}}</span>
                            <span class="tel">{{address.customerPhone}}</span>
                        </div>
                        <p class="detail">{{address.detailAdress}}</p>
                    </div>
                    <div class="delet-btn" @click="deleteOneAddress(address.id)">删除</div>
                </div>
            </div>
            <div class="add-address-btn">
                <router-link to="/receiveInfo">
                    <i class="icon iconfont icon-jia"></i>新增地址
                </router-link>
            </div>
        </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav/TopNav";
import func from "@/utils/func";
import { Toast, MessageBox } from "mint-ui";
import localEvent from "@/store/local";

export default {
  name: "center",
  data() {
    return {
      name: "收货地址",
      msg: "I am receive Address",
      defaultIndex: null,
      addressList: null
    };
  },
  created() {
    this.getAddressInfoList();
    this.defaultIndex = localEvent.StorageGetter("defaultIndex")
      ? localEvent.StorageGetter("defaultIndex")
      : 0;
  },
  methods: {
    // 获取所有的地址
    getAddressInfoList() {
      func.axiosGet("/getReceiveByUserId?userId=1", response => {
        this.addressList = response.data;
        localEvent.StorageSetter(
          "AdressInfo",
          this.addressList[this.defaultIndex]
        );
      });
    },
    // 选中某个地址
    chooseOneAddress(index) {
      this.defaultIndex = index;
      localEvent.StorageSetter("defaultIndex", index);
      localEvent.StorageSetter("AdressInfo", this.addressList[index]);
    },
    // 删除某个地址
    deleteOneAddress(id) {
      MessageBox.confirm("确定删除本地址")
        .then(action => {
          func.axiosGet("/delReceiveById?id=" + id, response => {
            Toast(response.data.msg);
            this.getAddressInfoList();
          });
        })
        .then();
    }
  },
  components: { TopNav }
};
</script>

<style lang="less" scoped>
.receiveAdress {
  .main-ct {
    background-color: #fff;
    padding-bottom: 0;
    .adress-ct {
      .item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.3rem;
        margin-left: 0.3rem;
        border-bottom: 1px solid #ddd;
        .check {
          width: 24px;
          height: 1rem;
          position: relative;
          .circle {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: -12px;
            margin-left: -12px;
            .iconfont {
              font-size: 24px;
            }
          }
        }
        .midd {
          flex: 1;
          text-align: left;
          margin-left: 0.3rem;
          .info {
            display: inline-block;
            width: 3rem;
            text-align: left;
            color: #000;
            .tel {
              margin-left: 4px;
            }
          }
          .detail {
            margin-top: 0.3rem;
          }
        }
        .delet-btn {
          width: 40px;
        }
      }
    }
    .add-address-btn {
      margin: 0.3rem auto;
      width: 80%;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 14px;
      background-color: #e6e6e6;
      .icon-jia {
        margin-right: 3px;
      }
    }
  }
}
</style>
