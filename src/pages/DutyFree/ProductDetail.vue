<template>
  <div class="productDetail">
        <top-nav :title="name"></top-nav>
        <div class="main-ct">
            <div class="top-ct">
                <div class="swpier-ct"></div>
                <div class="title-ct">
                    <p class="name">兰芝兰芝兰芝 类d 带回家 端口似累死李老师 的话</p>
                    <p class="count">￥1829</p>
                </div>
            </div>
            <div class="detail-ct">
                <second-title msg="商品详情" class="second-t"></second-title>
            </div>
        </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import SecondTitle from '@/components/SecondTitle/SecondTitle'

export default {
  name: 'dutyFree',
  data () {
    return {
      name: '商品详情',
      msg: 'I am productDetail'
    }
  },
  components: {TopNav, SecondTitle}
}
</script>

<style  lang="less" scoped>
.productDetail{
    .main-ct{
        .top-ct{
            .swpier-ct{
                height: 3rem;
                width: 100%;
                border: 1px solid #ddd;
            }
            .title-ct{
                padding: .4rem;
                background-color: #fff;
                .name{
                    font-size: 16px;
                    margin-bottom: .1rem;
                }
                .count{
                    color: #f44336;
                    font-size: 16px;
                }
            }
        }
        .detail-ct{
            margin-top: .3rem;
            background-color: #fff;
            .second-t{
                padding: .3rem 0;
            }
        }
    }
}
</style>
