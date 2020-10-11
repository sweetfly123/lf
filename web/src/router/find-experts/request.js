import {api_chr} from '../../request/api/api-chr';
import {$http} from '../../request/index';

//获取专家列表
export const getExpertsList = function(params={}){
  return $http({
    url: api_chr.experts,
    method:'get',
    params
  })
}

//获取专家列表总数
export const getExpertsListCount = function(){
  return $http({
    url: api_chr.expertsCount,
    method: 'get'
  })
}

