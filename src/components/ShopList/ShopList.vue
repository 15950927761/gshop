<template>
  <div>
    <ul class="shop_list">
      <li class="shop_li" v-for="(shop,index) in shops" :key="index">
        <a class="shop_flex">
          <div class="shop_left">
            <img :src="shop.image_path" class="shop_img">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <span>品牌</span>
              <h2>{{shop.name}}</h2>
            </section>
            <section class="shop_star">
              <span></span>
              <div>月售{{shop.recent_order_num}}单</div>
            </section>
            <section class="shop-bottom">
              ￥{{shop.float_minimum_order_amount}}起送/配送费约{{shop.float_delivery_fee}}元
            </section>
          </div>
          <div class="shop-ps">
            <div class="shop_icon">
              <span v-for="(item,index) in shop.supports" :key="index">{{item.icon_name}}</span>
            </div>
            <div class="shop_icon2"><span v-if="shop.delivery_mode.is_solid">{{shop.delivery_mode.text}}</span></div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      data(){
         return{
           // baseImageUrl:'/img/'
         }
      },
      mounted() {
        this.$store.dispatch('getShops')
      },
      computed:{
        ...mapState(['shops'])
      }
    }
</script>

<style>
  .shop_li{font-size:12px;color:#666;padding:15px 0;}
  .shop_flex{display:flex;}
  .shop_left{width:15%;}
  .shop_right{width:62%;margin-left:3%;}
  .shop_img{width:100%;}
  .shop_detail_header{display:flex;}
  .shop_star{margin:8px 0;}
  .shop_icon2{margin-top:10px;text-align:center;}
</style>
