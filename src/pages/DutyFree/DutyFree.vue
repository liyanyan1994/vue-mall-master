<template>
  <div class='dutyFree'>
        <top-nav :title='name'></top-nav>
        <div class='main-ct'>
            <div class='brand-ct'>
                <ul class='brand-icons'>
                    <li class='brand-item'  v-for='(brand,index) in brandList' :key='index'>
                        <a class='brand-link'>
                            <div class='brand-inner'>
                                <img :src='brand'>
                            </div>
                        </a>
                    </li>
                </ul>   
            </div>
            <div class='type-ct'>
                <div class='type-icons'>
                    <div class='type-item' v-for='(classify,index) in classifyList' :key='index'>
                        <a class='type-link'>
                            <div class='type-inner'>
                                <img :src='classify.imgUrl'>
                                <p class='type-name'>{{classify.name}}</p>
                            </div>
                        </a>
                    </div>
                </div>
                <more-btn msg='查看全部分类'></more-btn>
            </div>
            <div class='hotsale-ct'>
                <second-title msg='热销产品' class='title'></second-title>
                <div class='hot-ct'>
                    <div class='hot-item' @click='toProductDetail' v-for='(hot,index) in hotList' :key='index'>
                        <img :src='hot.imgUrl'/>
                        <p class='name'>{{hot.name}}</p>
                        <p class='count'>￥{{hot.count}}</p>
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
  data() {
    return {
      name: '免税店',
      msg: 'I am dutyFree',
      brandList: [
        'http://img.alicdn.com/tps/i2/T1nHK9FUFaXXb1upjX.jpg_140x140Q50s50.jpg',
        'http://img.alicdn.com/tps/i2/TB125kPGVXXXXa6XpXXSutbFXXX.jpg_140x140Q50s50.jpg',
        'http://img.alicdn.com/tps/i2/TB1qtTcGVXXXXXnXpXXSutbFXXX.jpg_140x140Q50s50.jpg',
        'http://img.alicdn.com/tps/i2/T1uLZuFX0bXXb1upjX.jpg_140x140Q50s50.jpg',
        'http://img.alicdn.com/tps/i2/TB1MQ7sGVXXXXakXFXXXXXXXXXX_140x140Q50s50.jpg',
        'http://img.alicdn.com/tps/i2/TB1mHqvGXXXXXavXpXXSutbFXXX.jpg_140x140Q50s50.jpg'
      ],
      classifyList: [
        {
          imgUrl:
            'http://a3.vimage1.com/upload/goadmin/2017/11/06/24/15099654645020.png',
          name: '眼妆'
        },
        {
          imgUrl:
            'http://a4.vimage1.com/upload/category/2017/07/25/67/a4015dda-87d1-4bfc-925a-449e1ced28a6.jpg',
          name: '唇妆'
        },
        {
          imgUrl:
            'http://a3.vimage1.com/upload/goadmin/2017/11/08/155/15101051598009.png',
          name: '眼部护理'
        },
        {
          imgUrl:
            'http://img.alicdn.com/tps/i4/TB1ZsMAGVXXXXcMaXXXMxXJVFXX-100-100.jpg_140x140Q50s50.jpg_.webp',
          name: '护肤套装'
        },
        {
          imgUrl:
            'http://img.alicdn.com/tps/i2/TB1YQwBGVXXXXbtXVXXMxXJVFXX-100-100.jpg_140x140Q50s50.jpg',
          name: '沐浴用品'
        },
        {
          imgUrl:
            'http://img.alicdn.com/tps/i4/TB19M7HGVXXXXaGXpXXMxXJVFXX-100-100.jpg_140x140Q50s50.jpg',
          name: '身体护理'
        }
      ],
      hotList: [
        {
          imgUrl:
            'http://a4.vimage1.com/upload/merchandise/pdc/009/571/462539903222571009/0/6970346130256-5.jpg',
          name: '兰芝 | 睡眠面膜唯品会专供礼盒',
          count: '195'
        },
        {
          imgUrl:
            'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/03/70/a0fcfbf7477540ebbce334a8103c851a-5.jpg',
          name: '一叶子 | 莲花水漾保湿四件礼盒[补水保湿]',
          count: '288'
        },
        {
          imgUrl:
            'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/08/128/fd43edda4cab49bda79c6dadea48ba2c-5.jpg',
          name: '丸美 |雪绒花水光润颜装',
          count: '376'
        },
        {
          imgUrl:
            'http://a4.vimage1.com/upload/merchandise/pdcvis/2017/10/25/15/40867e28-3483-40f6-8271-c5d5e9d6d9d1.jpg',
          name: '春纪 |动感透净基础套装',
          count: '109'
        },
        {
          imgUrl:
            'http://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/31/16/4a27ae60751247a8ba6a8ea4394e013a-5.jpg',
          name: '植美村 |薏仁雪肤美肌组合',
          count: '245'
        },
        {
          imgUrl:
            'http://a4.vimage1.com/upload/merchandise/pdc/288/428/34979356476428288/0/105209-2016122898645-5.jpg',
          name: ' 玉兰油 |水漾动力轻透保湿礼盒',
          count: '209'
        }
      ]
    }
  },
  components: { TopNav, MoreBtn, SecondTitle },
  methods: {
    toProductDetail() {
      this.$router.push({ name: 'productDetail' })
    }
  }
}
</script>

<style  lang='less' scoped>
.dutyFree {
  .main-ct {
    margin-bottom: 10px;
    .brand-ct {
      .brand-icons {
        overflow: hidden;
        background-color: #fff;
        .brand-item {
          list-style-type: none;
          float: left;
          width: 33.33%;
          margin: 5px 0;
          box-sizing: border-box;
          .brand-link {
            position: relative;
            display: block;
            text-decoration: none;
            .brand-inner {
              padding: 38% 0 0;
              margin: 24px auto;
              width: 60%;
              position: relative;
              overflow: hidden;
              img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
              }
            }
          }
        }
      }
    }
    .type-ct {
      margin-top: 0.3rem;
      .type-icons {
        overflow: hidden;
        background-color: #fff;
        .type-item {
          list-style-type: none;
          float: left;
          width: 33.33%;
          margin: 5px 0;
          box-sizing: border-box;
          .type-link {
            position: relative;
            display: block;
            text-decoration: none;
            .type-inner {
              margin: 10px auto;
              width: 60%;
              position: relative;
              overflow: hidden;
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
    .hotsale-ct {
      margin-top: 0.3rem;
      background-color: #fff;
      .title {
        padding: 0.6rem 0;
      }
      .hot-ct {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        .hot-item {
          width: 48%;
          margin-left: 1%;
          text-align: left;
          margin-bottom: 0.3rem;
          img {
            width: 100%;
            border: 1px solid #efefef;
          }
          .name {
            font-size: 14px;
            // text-indent: 10px;
            // text-align: center;
          }
          .count {
            font-size: 16px;
            color: #f44336;
            // text-align: center;
          }
        }
      }
    }
  }
}
</style>
