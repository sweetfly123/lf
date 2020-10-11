import {api_chr} from '../../request/api/api-chr';
import {$http} from '../../request/index';

//获取招商列表
export const getBusinessList = function(params={}){
  return $http({
    url: api_chr.business,
    method:'get',
    params
  });
}

//获取招商总数
export const getBusinessCount = function(){
  return $http({
    url: api_chr.businessCount,
    method: 'get'
  })
}