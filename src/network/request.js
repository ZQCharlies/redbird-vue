import axios from 'axios'
export default function request(config,success,failuer){

    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:8090',
        timeout: 5000
    })
    /*2.axios拦截器*/
    //2.1请求拦截的作用
    instance.interceptors.request.use(config=>{//请求成功时回调config方法，返回的是config信息
        // console.log(config);
        //1.过滤config中的一些信息不符合服务器的要求
        //2、每次发送网络请求时，都希望界面显示有个请求的图标
        //3.网站请求比如登录token，必须在header中携带一些特殊信息
        config.headers.Authorization = window.sessionStorage.getItem('token');
        return config;//放行
    },err=>{//请求失败时回调err方法，返回错误的信息
        // console.log(err);
    })
    //2.2响应拦截
    instance.interceptors.response.use(res=>{
        //成功时拿到的是结果
        // console.log(res);
        return res.data
    },err=>{
        //console.log(err);
    })
    //发送请求
    return instance(config);




    /*回调方式
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://127.0.0.0:8090',
        timeout: 5000
    })
    //2.发送真正的网络请求
    instance(config)
    .then(res =>{
        console.log(res);
        success(res)
    })
    .catch(err =>{
        console.log(err);
        failuer(err)
    })*/
}