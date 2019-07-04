//通过mutations间接更新state的多个方法的对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-type'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'


export default{
  //异步获取 地址
  async getAddress({commit,state}){
    //发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const address = await reqAddress(geohash)
    //提交一个mutation
    // if(result.code === 0){
    //   const address = result.data
    // }
    commit(RECEIVE_ADDRESS,{address})
  },
  //异步获取食品分类列表
  async getCategorys({commit}){
    //发送异步ajax请求
    const categorys = await reqFoodCategorys()
    //提交一个mutation
    // if(result.code === 0){
    //   const address = result.data
    // }
    commit(RECEIVE_CATEGORYS,{categorys})
  },
  //异步获取商家列表
  async getShops({commit,state}){
    //发送异步ajax请求
    const {longitude,latitude,offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []} = state
    const shops = await reqShops(longitude,latitude,offset, restaurant_category_id, restaurant_category_ids, order_by, delivery_mode, support_ids)
    //提交一个mutation
    // if(result.code === 0){
    //   const address = result.data
    // }
    commit(RECEIVE_SHOPS,{shops})
  }
}
