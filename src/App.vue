<template>
    <div id="app">
      <router-view/>
      <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqFoodTypes,reqAddress} from "./api";

  export default {
    data(){
      return{
        guessCity: '',   //当前城市
        guessCityid: '', //当前城市id
        hotcity: [],     //热门城市列表
        groupcity: {},   //所有城市列表
      }
    },
    async mounted(){
      const result =  await reqFoodTypes()
      console.log(result)
      const address = await reqAddress('31.22299,121.36025')
      console.log(address);

    },
    components:{
        FooterGuide
      }
    }
</script>

<style>
  #app{width:100%;height:100%;background:#f5f5f5;}
</style>
