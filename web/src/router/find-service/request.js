import {api_chr} from '../../request/api/api-chr';
import {$http} from '../../request/index';

//登录获取token
// export const login = function(data={}){
//   return $http({
//     url: api_chr.login,
//     method:'post',
//     headers: {
//       'content-type':'application/x-www-form-urlencoded'
//     },
//     data
//   })
// }

//获取服务列表
export const getServiceList = function(params={}){
  return $http({
    url: api_chr.service,
    method:'get',
    params
  })
}

//获取服务列表总数
export const getServiceListCount = function(){
  return $http({
    url: api_chr.serviceCount,
    method: 'get'
  })
}