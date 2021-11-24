/**
 * api管理
 */
import request from './../utils/request'
export default {
  login (params) {
    return request({
      url: '/users/login',
      method: 'post',
      // mock: true,
      data: params,
    })
  }
}