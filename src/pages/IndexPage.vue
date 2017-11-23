<template>
  <div class="indexPage">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <div class="bottom-nav">
        <router-link to="/home">
            <div>
                 <i class="icon iconfont icon-shouye"/>
                <span>首页</span>
            </div>
        </router-link> 
        <router-link to="/dutyFree">
            <div>
                <i class="icon iconfont icon-discount"/>
                <span>免税店</span>
            </div>
        </router-link>
        <router-link :to="{path:'/cart',activeClass:'bottom-nav-class'}">
            <div>
                <i class="icon iconfont icon-cart"/>
                <span>购物车</span>
            </div>
        </router-link>
        <router-link to="/center">
            <div>
                <i class="icon iconfont icon-account"/>
                <span>我的</span>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexPage',
  data () {
    return {
      selected: 'home'
    }
  },
  methods: {
    showCart (type) {
      this.$store.dispatch('chooseMenu', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.indexPage{
    .bottom-nav{
        position: fixed;
        display: flex;
        bottom: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid #ddd;
        background-color: #e6e6e6;
        z-index: 99;
        a{
            flex: 1;
            padding: .16rem 0;
            &.router-link-active{
                >span{
                    color: red;
                }
            }
            div{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .iconfont{
                    font-size:28px;
                }
                 span{
                    margin-top: 3px;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>
