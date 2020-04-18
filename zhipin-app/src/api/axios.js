import axios from 'axios'
import qs from 'qs'

const ajax = axios.create({
    // http://106.54.247.250:3030/
    baseURL: 'http://localhost:5000/zhipin',
    transformRequest: [function (data, headers) {
        return qs.stringify(data);
    }],
});
// 封装axios 地址 参数 请求方式
export default function Ajax(url = "",data = {},type = 'POST' ){
    if(type === 'GET'){
        let dataStr = ''//数据拼接字符串
        Object.keys(data).forEach(key =>{
            dataStr += key + '=' +data[key] + '&'
        })
        if(dataStr !== ''){
            dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
            url = url +'?' +dataStr
        }
        return ajax.get(url)
    } else {
        console.log(url,data,type)
        return ajax.post( url , data )
    }
}