<template>
  <section class="msite">
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-pro-search"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录1|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <swiper class="swiper-container" :options="swiperOption">
          <swiper-slide class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </nav>
    <!--首页附近商家-->
    <div class="shop_container">
      <div class="shop_header">
        <i class="iconfont icon-icon--"></i>
        <span>商铺列表</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getCategorys')
    },

    data() {
      return {
        baseImageUrl:'https://fuss10.elemecdn.com',
        swiperOption: {
          autoplay: 3000,  //l轮播间隔时间
          loop: true,　　//是否自动轮播
          pagination: {
            el:'.swiper-pagination',
          }, //轮播图中下标点显示
          paginationClickable :true　　 //轮播图中下标点显示
        }
      }
    },
    computed:{
      ...mapState(['address','categorys']),
      //根据categorys一维数组生成一个2维数组
      categorysArr(){
        const {categorys} = this
        //准备空的2维数组
        const arr = []
        //准备小数组，最大长度为8，并不代表一定是8
        let minArr = []
        categorys.forEach(item=>{

          //如果当前小数组 已经满了，创建一个新的
          if(minArr.length === 8){
            minArr = []
          }

          //如果minArr是空的，将小数组保存到大数组中
          if(minArr.length === 0){
            arr.push(minArr)
          }

          //将当前分类保存到小数组中
          minArr.push(item)

        })
        return arr
      }
    },
    components:{
      HeaderTop,
      ShopList
    },
  }
</script>

<style>
  /*顶部*/
  .msite{width:100%;background:#fff;overflow:hidden;}
  .header_search{width:20%;float:left;text-align:left;}
  .header_search .iconfont{font-size:20px;}
  .header_login{width:20%;float:right;font-size:14px;text-align:right;}
  /*滚动菜单*/
  .msite_nav{margin-top:45px;box-shadow:0 0 2px #ccc;padding:5px 0;}
  .swiper-slide{display:flex;flex-wrap:wrap;}
  .link_to_food{width:25%;text-align:center;color:#666;text-align:center;font-size:12px;margin:5px 0;}
  .food_container{width:100%;text-align:center;}
  .food_container img{width:80%;}
  .shop_header{margin-top:10px;font-size:14px;font-weight:bold; color:#555;display:flex;align-items: center;}
  .shop_header .iconfont{font-size:20px;color:#02a774;}
  /*商家列表*/
  .shop_container{padding-bottom:50px;width:96%;margin:0 auto;}
  .shop_detail_header span{background:#02a774;color:#fff;padding:2px 5px; border-radius:2px;margin-right:5px;}
  .shop_detail_header h2{color:#333;font-size:18px;}
  .shop_icon span{border:1px solid #eee;color:#999;text-align:center;width:15px;height:15px;line-height:15px;display:inline-block;}
  .shop_icon2 span{color:#02a774;}
</style>
