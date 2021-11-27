/**
 * api管理
 */
import request from './../utils/request'
export default {
    login(params) {
        return request({
            url: '/users/login',
            method: 'post',
            data: params,
            mock: false
        })
    },
    noticeCount() {
        return request({
            url: '/leave/count',
            method: 'get',
            mock: true,
            data: {},
        })
    },
    menuList() {
        return request({
            url: '/menu/list',
            method: 'get',
            mock: true,
            data: {},
        })
    },
    userList(params) {
        return request({
            url: '/users/list',
            method: 'get',
            mock: false,
            data: params
        })
    },
    userDelete(params) {
        return request({
            url: '/users/delete',
            method: 'post',
            mock: true,
            data: params
        })
    },
    getRoleList() {
        return request({
            url: '/roles/allList',
            method: 'get',
            mock: true,
        })
    },
    getDeptList() {
        return request({
            url: '/dept/list',
            method: 'get',
            mock: true,
        })
    },
    userSubmit(params) {
        return request({
            url: '/users/operate',
            method: 'post',
            mock: true,
            data: params
        })
    }

}