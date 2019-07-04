// 包含n个接口请求函数的模块
// 函数返回值promise
import ajax from './ajax'
// const BASE_URL = "http://localhost:8001"
const BASE_URL = "/api"
// 1.根据经纬度获取位置详情
export const reqAddress = (geohash) =>ajax(BASE_URL + '/v2/pois/'+geohash)
// 2.获取食品分类列表
export const reqFoodCategorys = () =>ajax(BASE_URL + '/v2/index_entry')
// 3.根据经纬度获取商铺列表
export const reqShops = (longitude,latitude,offset,restaurantCategoryId,restaurantCategoryIds,sortByType,deliveryMode,supportIds) =>ajax(BASE_URL + '/shopping/restaurants',{
  longitude,
  latitude,
  offset,
  limit:'20',
  'extras[]': 'activities',
  keyword: '',
  restaurant_category_id:'',
  'restaurant_category_ids[]':''
})
// 4.根据经纬度和关键字搜索商铺列表

// 5.获取一次性验证码/shopping/restaurants
// 6.用户名密码登录
// 7.发送短信验证码
// 8.手机号验证码登录
// 9.根据会话获取用户信息
// 10.用记登出

// export function(){
//
// }
