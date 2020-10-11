/**
 * 请求通用方法
 */
import React from "react";
import ReactDOM from "react-dom";
import {message, Spin} from "antd";
import axios from 'axios';

//发送网络请求
const $http = function(reqData){
  return reqData.method==='post' ? axios({
    url:reqData.url,
    method:reqData.method,
    headers: reqData.headers || 'application/json',
    data:reqData.data || {}
  }).then(res => {return res.data}).catch(err => message.error(err, 2.0))
  : axios({url:reqData.url, method:reqData.method, params:reqData.params || {}})
    .then(res => {return res.data}).catch(err => message.error(err, 2.0));
}

export {$http};