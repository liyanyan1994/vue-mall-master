<template>
  <div class="reveiveInfo">
        <top-nav :title="name"></top-nav>
        <div class="main-ct">
            <form action="">
                <ul>
                    <li>
                        <input placeholder="收货人" class="one-line" v-model="cusInfo.customerName">
                    </li>
                    <li>
                        <input placeholder="手机号码" class="one-line" v-model="cusInfo.customerPhone">
                    </li>
                    <li>
                        <input placeholder="邮政编号" class="one-line" v-model="cusInfo.postalNumber">
                    </li>
                    <li>
                        <textarea placeholder="详细地址" class="more-line" rows="5" v-model="cusInfo.detailAdress"></textarea>
                    </li>
                </ul>
                <confirm-btn class="confirm" @click.native="vaildReceiveInfo"></confirm-btn>
            </form>
        </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav/TopNav";
import ConfirmBtn from "@/components/CommonBtn/ConfirmBtn";
import { Toast } from "mint-ui";
import func from "@/utils/func";
export default {
  name: "reveiveInfo",
  data() {
    return {
      name: "编辑收货地址",
      msg: "I am reveiveInfo",
      cusInfo: {
        customerName: "liyanyan",
        customerPhone: "15848525632",
        postalNumber: "000000",
        detailAdress: "四川省资阳市安悦溪",
        userId: 1
      }
    };
  },
  components: { TopNav, ConfirmBtn },
  methods: {
    vaildReceiveInfo() {
      if (this.cusInfo.customerName.trim() === "") {
        Toast("请输入收件人");
      } else if (this.cusInfo.customerPhone.trim().length > 12) {
        Toast("电话号码不正确");
      } else if (this.cusInfo.detailAdress.trim().length > 30) {
        Toast("详细地址不能超过30个字节");
      } else {
        this.sumbitReceiveInfo();
      }
    },
    sumbitReceiveInfo() {
      func.axiosPost("/receiveInfo", this.cusInfo, response => {
        Toast(response.data.msg);
        // localEvent.StorageSetter('AdressInfo', this.cusInfo)
        this.$router.go(-1);
      });
    }
  }
};
</script>

<style  lang="less" scoped>
.reveiveInfo {
  .main-ct {
    form {
      ul > li {
        input {
          width: 100%;
          text-indent: 10px;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 1px solid #ddd;
          &.one-line {
            height: 0.8rem;
          }
        }
        .more-line {
          text-indent: 10px;
          width: 100%;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 1px solid #ddd;
          padding-top: 10px;
        }
      }
      .confirm {
        margin: 0.3rem auto;
        color: #bfbfbf;
        border: 1px solid #e6e6e6;
        width: 80%;
      }
    }
  }
}
</style>
