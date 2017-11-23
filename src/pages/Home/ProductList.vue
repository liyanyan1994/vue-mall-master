<template>
  <div class="dutyFree">
    <top-nav :title="name"></top-nav>
    <div class="main-ct">
        <div class="product-list">
            <div class="product-item" @click="toProductDetail(pro)" v-for="(pro,index) in productList" :key="index">
                <a class="item-link">
                    <div class="item-inner">
                        <img :src="pro.imgUrl">
                    </div>
                </a>
                <p class="name">{{pro.name}}</p>
                <div class="price-wrapper">
                    <span class="grally-price">￥{{pro.price}}</span>
                    <span class="mark-price">￥{{pro.price}}</span>
                    <span class="discount">6.4折</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import func from '@/utils/func'

export default {
  name: 'dutyFree',
  data () {
    return {
      name: '免税店',
      msg: 'I am dutyFree',
      productList: null
    }
  },
  created () {
    console.log(this.$route.params.id)
    this.getProductById(this.$route.params.id)
  },
  methods: {
    getProductById (id) {
      func.axiosGet('/getProductsById?id=' + id, response => {
        this.productList = response.data
      })
    },
    toProductDetail (obj) {
      this.$router.push({name: 'productDetail', params: {detailObj: obj}})
    }
  },
  components: {TopNav}
}
</script>

<style  lang="less" scoped>
.dutyFree{
    .main-ct{
        .product-list{
            padding-top: 20px;
            overflow: hidden;
            background-color: #fff;
            .product-item{
                position: relative;
                display: inline-block;
                vertical-align: top;
                margin-left: 1%;
                width: 48%;
                margin-bottom: 25px;
                text-align: left;
                &:nth-child(2n){
                    margin-left: 2%;
                }
                .item-link{
                    display: block;
                    text-decoration: none;
                    .item-inner{
                        position: relative;
                        width: 100%;
                        height: 0;
                        overflow: hidden;
                        border:1px solid #efefef;
                        padding-bottom: 125%;
                        box-sizing: border-box;
                        img{
                            width: 100%;
                        }
                    }
                }
                .name{
                    margin: 7px 5px 3px 5px;
                    height: 34px;
                    font-size: 12px;
                }
                .price-wrapper{
                    position: relative;
                    height: 20px;
                    padding: 3px 5px 0;
                    margin-bottom: 5px;
                    .grally-price{
                        font-size: 14px;
                        color: #f44336;
                    }
                    .mark-price{
                        text-decoration: line-through;
                        color: #888;
                        font-size: 12px;
                    }
                    .discount{
                        position: absolute;
                        top: 50%;
                        right: 4px;
                        padding: 4px;
                        background-color: #000;
                        height: 10px;
                        line-height: 10px;
                        transform: translateY(-50%);
                        font-size: 12px;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
