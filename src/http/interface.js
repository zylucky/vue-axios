import axios from './api'
// 将所有的接口统一起来便于维护

// 用户登录
export const login = data => {
    return axios({
        url: '/api/auth/login',
        method: 'post',
        data
    })
}
// 空气质量接口
export const airQuality = (data) => {
    return axios({
        url: '/util/getAirData',
        method: 'POST', 
        data,
		// handle:true
    })
}

// 默认全部导出
export default {
    login,//登录
    airQuality
}