<template>
  <section class="msite">
    <HeaderTop title="昌平区北七家宏福科技园1区">
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
          <swiper-slide class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon1.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon2.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon3.jpg">
              </div>
              <span>商品超市</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon4.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon5.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon6.jpg">
              </div>
              <span>鲜花蛋糕</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon7.jpg">
              </div>
              <span>汉堡炸鸡</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon8.jpg">
              </div>
              <span>日韩料理</span>
            </a>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon9.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon10.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon11.jpg">
              </div>
              <span>商品超市</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon12.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon13.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon14.jpg">
              </div>
              <span>鲜花蛋糕</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon15.jpg">
              </div>
              <span>汉堡炸鸡</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/icon16.jpg">
              </div>
              <span>日韩料理</span>
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
  export default {
    data() {
      return {
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
