# Vue-axios

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

####	vue_axios请求封装、请求拦截、配置请求头、异常拦截统一处理

vue中采用axios来处理网络请求，为了避免请求接口时出现大量重复代码，以及各种网络情况造成异常的判断，使用axios请求封装和异常拦截等操作，统一管理接口。

####	项目介绍

- `src/http/`该目录下是封装好的axios请求文件存储位置；
- `src/http/config`该文件是接口配置文件（请求方式、地址配置、请求头配置等）；
- `src/http/api`该文件是对axios请求的拦截操作，分为`request`和`response`拦截器
  - `request`拦截器可以用来配置请求头，请求参数处理以及请求失败时的操作处理等；
  - `response`拦截器主要是请求完成后的处理，需要前后端提前约定好code值来处理返回操作；
- `src/http/interface`该文件是将接口统一起来管理便于维护；

####	使用方式

#####	安装依赖

```javascript
npm install --save axios;//axios路由请求
npm install --save qs;//序列化数据请求（在src/http/api文件中会做请求数据处理）
npm install --save ...;//根据自己需要安装（例如element来处理异常显示）
```

在`main.js`文件中引入

```javascript
import config from './http/config.js'//引入配置
import api from './http/interface.js' //引入接口文件
//环境判断（编译时自动使用对应地址）
if(process.env.NODE_ENV === 'development'){//开发环境
  config.baseURL = '/api';//本地代理跨域请求地址（下方介绍配置）
  console.log(config.baseURL)
}else{//线上环境
  config.baseURL = config.baseURL;
  console.log(config.baseURL)
}
```

####	代理请求配置

在`./config/index.js`文件中配置

```javascript
//......上省略
proxyTable: {
	'/api':{
		target:"http://api.yckindergarten.com.cn",//设置你调用的接口域名和端口号 别忘了加http
        changeOrigin:true,
        pathRewrite:{
            '^/api':''
            //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 
            //比如我要调用'http://40.00.100.133:3002/user/login'，直接写‘/api/user/login’即可
        }
      }
},
//......下省略
```

