<template>
  <div class="reveiveInfo">
        <top-nav :title="name"></top-nav>
        <div class="main-ct">
            <ul>
                <li>
                    <input placeholder="收货人" class="one-line">
                </li>
                <li>
                     <input placeholder="手机号码" class="one-line">
                </li>
                <li>
                     <input placeholder="邮政编号" class="one-line">
                </li>
                 <li>
                     <textarea placeholder="详细地址" class="more-line" rows="5"></textarea>
                </li>
            </ul>
            <confirm-btn class="confirm"></confirm-btn>
        </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import ConfirmBtn from '@/components/CommonBtn/ConfirmBtn'

export default {
  name: 'reveiveInfo',
  data () {
    return {
      name: '编辑收货地址',
      msg: 'I am reveiveInfo'
    }
  },
  components: {TopNav, ConfirmBtn}
}
</script>

<style  lang="less" scoped>
.reveiveInfo{
    .main-ct{
        ul>li{
            input{
                width: 100%;
                text-indent: 10px;
                border-top: none;
                border-left: none;
                border-right: none;
                border-bottom: 1px solid #ddd; 
                &.one-line{
                    height: .8rem;
                }
            }
            .more-line{
                text-indent: 10px;
                width: 100%;
                border-top: none;
                border-left: none;
                border-right: none;
                border-bottom: 1px solid #ddd; 
                padding-top: 10px;
            }
        }
        .confirm{
            margin: .3rem auto;
            color: #bfbfbf;
            border: 1px solid #bfbfbf;
            width: 80%;
        }
    }
}
</style>
