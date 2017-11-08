<template>
  <div class="dutyFree">
        <top-nav :title="name"></top-nav>
        <div class="main-ct">
            <div class="brand-ct">
                <div class="brand-icons">
                  <div class="brand-item">韩束</div>
                  <div class="brand-item">雪肌精</div>
                  <div class="brand-item">SK-II</div>
                  <div class="brand-item">innisfree</div>
                </div>
                <div class="brand-icons">
                    <div class="brand-item">韩束</div>
                    <div class="brand-item">雪肌精</div>
                    <div class="brand-item">SK-II</div>
                    <div class="brand-item">innisfree</div>
                </div>
            </div>
            <div class="type-ct">
                <div class="type-icons">
                    <div class="type-item">
                        <img>
                        <p>眼妆</p>
                    </div>
                    <div class="type-item">
                        <img>
                        <p>唇妆</p>
                    </div>
                    <div class="type-item">
                         <img>
                        <p>眼部护理</p>
                    </div>
                </div>
                <div class="type-icons">
                    <div class="type-item">
                        <img>
                        <p>护肤套品</p>
                    </div>
                    <div class="type-item">
                        <img>
                        <p>沐浴用品</p>
                    </div>
                    <div class="type-item">
                         <img>
                        <p>身体护理</p>
                    </div>
                </div>
                <more-btn msg="查看全部分类"></more-btn>
            </div>
            <div class="hotsale-ct">
                <second-title msg="热销产品" class="title"></second-title>
                <div class="hot-ct">
                    <div class="hot-item" @click="toProductDetail">
                        <img src="http://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/02/195/0afbfbdbf4b54039aa0b9e4d8155f9df-5.jpg"/>
                        <p class="name">紫竹控油细肤八件套</p>
                        <p class="count">￥299</p>
                    </div>
                    <div class="hot-item">
                        <img src="http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/02/2/2651b7364f0b4cc09a81afd453401e5d-5.jpg"/>
                        <p class="name">油细肤八件套</p>
                        <p class="count">￥299</p>
                    </div>
                    <div class="hot-item">
                        <img src="http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/02/60/ca958dc50cb441348dbe7a070dd01164-5.jpg"/>
                        <p class="name">韩束</p>
                        <p class="count">￥299</p>
                    </div>
                    <div class="hot-item">
                        <img src="http://a2.vimage1.com/upload/merchandise/pdc/264/667/6926894067798667264/3/6970155254846-5.jpg"/>
                        <p class="name">韩束八件套</p>
                        <p class="count">￥299</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import MoreBtn from '@/components/CommonBtn/MoreBtn'
import SecondTitle from '@/components/SecondTitle/SecondTitle'

export default {
  name: 'dutyFree',
  data () {
    return {
      name: '免税店',
      msg: 'I am dutyFree'
    }
  },
  components: {TopNav, MoreBtn, SecondTitle},
  methods: {
    toProductDetail () {
      this.$router.push({name: 'productDetail'})
    }
  }
}
</script>

<style  lang="less" scoped>
.dutyFree{
    .main-ct{
        margin-bottom: 10px;
        .brand-ct{
            background-color: #fff;
            .brand-icons{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                height: 1.6rem;
                .brand-item{
                    flex: 1;
                    font-size: .3rem;
                    width: 20%;
                }
            }
        }
        .type-ct{
            margin-top: .3rem;
            background-color: #fff;
            .type-icons{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                height: 1.6rem;
                padding:.3rem 0;
                .type-item{
                    flex: 1;
                    font-size: .3rem;
                    width: 20%;
                    img{
                        width: 40px;
                        height: 60px;
                    }
                    p{
                        text-align: center;
                    }

                }
            }
        }
        .hotsale-ct{
            margin-top: .3rem;
            background-color: #fff;
            .title{
                padding: .6rem 0;
            }
            .hot-ct{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-wrap: wrap;
                .hot-item{
                    width: 48%;
                    text-align: left;    
                    img{
                        width: 100%;
                    }
                    .name{
                        font-size: 16px;
                        text-indent: 10px;
                    }
                    .count{
                        font-size: 16px;
                        color: #f44336;
                        text-indent: 10px;
                    }
                }
            }
        }
    }
}
</style>
