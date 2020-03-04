import axios from 'axios'
import router from './router'
import iview from 'iview'
import qs from 'qs'



/** 切换不同环境的 URL
axios 参考资料
  https://www.jianshu.com/p/7a9fbcbb1114

let dev = process.env.NODE_ENV, baseURL
if (dev === 'development') baseURL = 'localhost:8080'
else if (dev === 'production') baseURL = 'https://www.lulongwen.com'
else if (dev === 'ceshi') baseURL = 'https://www.ceshi.com'

axios.defaults.baseURL = 'https://www.ceshi.com'
 */

// 参数配置
const options = {
  // 请求的URL
  baseURL: '',
  timeout: 5000,
  // 是否允许带cookie等参数
  withCredentials: true,
  headers: {
    accept: 'Authorization, Set-Cookie, application/json, text/plain, */*',
    post: {
      'customer-header': 'longwen',
      "content-type": "application/x-www-form-urlencoded;charset=utf-8"
    },
    'Content-Type': 'application/json; charset=utf-8'
  },

  // 无论哪种请求方式都会带上这个参数
  params: {
    book: 'nodejs'
  },

  // 请求转换数据，可以序列化 json
  transformRequest: [function(data, headers) {
    console.log(data)
    // 添加请求数据
    data.age = '600'
    return queryString.stringify(data)
  }],

  // 响应转换数据，可添加自定义数据
  transformReponse: [function(data) {
    data.abc = 'longwen'
    return data
  }],

  // 用于 node.js
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
}

// 自定义创建 axios 实例
const instance = axios.create(options)


/**
  全局请求拦截配置

  requset 向后台发送请求之前做的事
  response 后台响应返回数据前做的事情
*/
instance.interceptors.request.use(
  config => {
    // loading({ message: '加载中...' })

    let { headers, method, data } = config
    // let token = store.state.token
    let token = JSON.parse( localStorage.getItem('token') )
    // 每次发送请求之前判断vuex中是否存在token
    // 有，给 header头上加上token，这样后台根据token判断你的登录情况
    // 本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // 在请求拦截中，设置 token 和 loading
    if(token.token) {
      headers.common.Authorization = `Bearer ${token.token}`
      // headers.common['Content-Type'] = 'application/jsoncharset=utf-8'
    }

    // 序列化 json参数
    let arr = ['post', 'put', 'delete']
    if (arr.find(item => item === method)) {
      config.data = qs.stringify(data)
    }
      
    return config
  },
  error => {
    iview.Notice.destroy()
    iview.Notice.error({
      title: '错误！',
      desc: error && error.data.message
    })

    // 请求错误处理
    return Promise.reject(err.data.message)
  }
)


// 响应拦截
instance.interceptors.response.use(
  data => {
    if(res.status !== 200) return Promise.reject(new Error('返回数据失败'))

    // 返回响应时做一些处理
    return data
  },
  error => {
    let { status } = err.response.status
    let token = localStorage.getItem('token')
    // 如果没有 token，直接返回登陆页
    if (!token) {
      router.push({name: '/login'})
      localStorage.clearAll()
    }
    else {
      // 对比时间戳，若当前时间大于 token的时间戳，就退出登录
      let {time} = JSON.parse( sessionStorage.getItem('token') ).time
      // 当前时间戳
      let nowTime = new Date().getTime()
      if (nowTime > time) {
        iview.Notice.warning({
          title: '请重新登录',
          desc: '登录信息已过期，请重新登录'
        })
        router.push({name: 'login'})
      }
      else {
        switch (status) {
          case 403:
          return router.push({name: 'error403'})
          case 404:
          return router.push({name: 'error404'})
          case 500:
          return router.push({name: 'error500'})
        }
      }
    }

    // 当响应异常时做一些处理
    return Promise.reject(error)
  }
)

// 移除拦截器
// axios.interceptors.request.eject(instance)


// 3 封装 get
export const get = (url, params={}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, {params})
    .then(res => {
      if(res.status !== 200) return reject(new Error('请求数据失败'))
      resolve(res.data)
    })
    .catch(err => reject(err))
  })
}

// 封装 JSON post json
export const post = (url, params={}) => {
  return new Promise( (resolve, reject) => {
    instance.post(url, params)
    .then(res => {
      if(res.status !== 200) return reject(new Error('返回数据错误'))
      resolve(res.data)
    })
    .catch(err => reject(err))
  })
}

// 封装序列化参数 post string
export const post2 = (url, params) => {
  return new Promise( (resolve, reject) => {
    // 一般在 request.use 里面序列化参数
    instance.post(url, qs.stringify(params), {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    .then(res => {
      if(res.status !== 200) return reject(new Error('返回数据错误'))
      resolve(res.data)
    })
    .catch(err => reject(err))
  })
}


// delete
export const delete = (url, params={}) => {
  return new Promise((resolve, reject) => {
    instance.delete(url, params)
    .then(res => {
      if(res.status !== 200) return reject(new Error('删除数据错误'))
      resolve(res.data)
    })
    .catch(err => reject(err))
  })
}


// 封装 put
export const put = (url, params={}) => {
  return new Promise((resolve, reject) => {
    instance.put(url, params)
    .then(res => {
      if(res.status !== 200) return reject(new Error('删除数据错误'))
      resolve(res.data)
    })
    .catch(err => reject(err))
  })
}


/**
 * function http() { return instance.get('url') }
 * function http2() { return instance.post('url') }
 * axios.all([http(), http2()]])
 * .then(axios.spread( (res, res2) => { console.log(res, res2) }))
 */
export const all = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.all([fn1(), fn2()])
    .then(instance.spread( (res, res2) => {
      resolve()
    }))
    .catch(err => reject(err))
}


// 嵌套请求 2个接口
fold().then(res => {
  if(res.status !== 200) return
  
  list().then(res => { })
})


// Promise.all() 请求2个接口，推荐的用法
Promise.all([ fold(), list() ])
  .then(res => {
    // 返回的是个数组
  })
  .catch(err => { console.log('err', err) })


// 对 instance实例，封装为一个 plugin，Vue.use(instance)
// export default {
//   install: function(Vue, option) {
//     Object.defineProperty(Vue.prototype, '$axios', {vlaue: instance})
//   }
// }



export default { get, post, delete, put }