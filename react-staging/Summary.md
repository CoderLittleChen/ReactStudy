## 在 SpringCloud 中:EurekaServer 做服务治理和服务发现、Hystrix 做熔断降级、Zuul 做网关

## 在 NanoFabric 中:Consul 做服务治理和服务发现、Polly 做熔断降级、Ocelot 做网关

## 样式的模块化

1. 当两个组件的 index.css 文件中 定义的样式名相同 后来者会把前者替换
2. 在 jsx 中引入 css(import hello from './index.module.css') 这样引入 hello 不能大写
3. 调用的时候 直接通过对象.的方式(hello.title)

## ToDoList Demo

1. 动态展示 Item
   - Item 信息存在 state 中,但是 state 写在哪？ App?
   - 把 todoList 作为 props 传递给 List 组件，
   - App 给 List 组件传的参数是数组的时候 直接传参数就好
2. 在 Input 输入之后，点击回车直接添加到 List 中
   - 监听 Enter 回车事件 onKeyUp 需要拿到对应的 keyCode
3. 在 Item 中选中某一项之后，isDone 的值要更新到父组件中，因为 todoList 是保存在父组件 App.js 中
4. 点击删除按钮 删除 Item
5. CheckBox 选中全部 全不选
6. 清除所有已经完成的任务

## 配置代理服务器的两种方式

1. 直接在 package 中设置 proxy:"http://localhost:5000" 这个 5000 端口是要请求的接口的端口地址,然后要将请求的接口地址改成
   代理服务器的地址 也就是 3000 2.在 src 根目录下 创建 setupProxt.js 文件，采用 CommonJS 语法，通过 require 来引入模块

## 在 react 中引入 bootstrap.min.css

1. npm i bootstrap@3 2.在 index.js 中直接引入 import 'bootstrap/dist/css/bootstrap.min.css'; 这里对应的是在 node_modules 中的路径

## 兄弟组件之间传递参数 发布 订阅模式

1. 可以调用 PubSub-js 库来实现

## 路由链接 属性:to

1. 注册路由 Route 属性:path component 2.路由组件和一般组件 -一般组件 props 传什么 就接收什么
   - 路由组件会有三个额外的参数
     1. history:
     - go:f go(n)
     - goBack:f goBack()
     - goForward:f goForward()
     - push:f push(path,state)
     - replace:f replace(path,state)
     2. location:
     - pathname: "/home"
     * search: "?id=1&title='张三'"
     * state: undefined
     3. match:
     - params: {id:1,title:"张三"}

## NavLink 的使用

1. 自带导航链接高亮效果 默认的类名是 activeClassName="active",
2. 类名可以自定义 test,但是注意自定义的属性需要提高权重(!important),
   否则会与 bootstrap 中的原生样式产生冲突

## 封装 NavLink 实现 MyNavLink 注意点

1. 自定义的组件 可以通过 this.props 来获取属性 其中特殊的是非自闭和标签中的 title 会保存的 props.children 属性中
2. 以下两种写法等价

```
<MyNavLink>{title}</MyNavLink> == <MyNavLink children="home" />
```

3. 所以通过`<NavLink activeClassName="customizeStyle" className="list-group-item" {...this.props} />`中的
   this.props 可以直接解析到 to children 等属性

## Switch 的使用

1. 如果一个路径匹配了多个组件 Switch 会指定单一匹配 匹配成功之后 不会继续向下匹配

## 解决多级路径路由刷新样式丢失的问题 这里如果是不是按照 link 形式引入 而是通过 import 来引入样式 会不会有问题？ 经过测试 多级路径也是正常的

1. 将引入 bootstrap.css 样式的路径中的相对路径 ./ 改成 /
2. 将引入 bootstrap.css 样式的路径中的相对路径 ./ 改成 %PUBLIC_URL%
3. 将 BrowserRouter 改成 HashRouter

## 路由模糊匹配和严格匹配 严格匹配不要随便开启

1. 严格匹配 在注册路由中 Route 标签中加上 exact={true},简写 exact
2. 一切以注册路由时 定义的 path 为标准(/home)，定义路由可以在后面增加(/home/a/b)

## Redirect 重定向的问题

1. 当路由匹配不到指定的组件的时候 会返回 index.html
2. 使用 Redirect 来定义路由无匹配的时候 使用默认路由

## 定义路由和注册路由的位置问题 主要是根据切换 tab 选项卡来展示不同的内容

1. 定义路由 一般是在导航链接处 替换成 Link 或者 NavLink(如果需要高亮)
2. 注册路由 一般实在内容展示区来使用 Route 来注册路由
   `<Route path='/home/message' component={Message} />`

## 给路由组件传 params 参数 会显示在地址栏

1. 传参

- `<Link to={"/home/message/detail/${obj.id}"}>{obj.title}</Link> `
- `<Route path="/home/message/detail/:id/:title" component={Detail} />`

2. 获取参数
   - this.props.match.params(可以直接拿到对象)

## 给路由组件传 search 参数 会显示在地址栏

1. 传参 ?前面的/可有可无

- `<Link to={"/home/message/detail/?id=${obj.id}&title=${obj.title}"}>{obj.title}</Link>`

2. 获取参数
   - this.props.location.search(这里拿到的字符串是 urlencoded 编码字符串 需要通过 react 内置的 queryString 模块来解析字符串得到对应键值对)

## 向路由组件传递 state 参数 不会显示在地址栏

1. 这里的 state 和组件状态中的 state 完全没关系。当浏览器清空 Cookie,Cache 之后 state 中的参数会丢失
2. 传参 to 参数作为对象来传递
3. 获取参数
   - this.props.location.state(拿到的是直接对象)

## Push 和 Replace 默认是 push 模式 想要开去 replace 模式 直接加上 replace 关键字

1. Push 会保存每一次路由 压栈形式
2. Replace 会替换上一次的路由

## withRouter

1. 本质是一个函数(首字母小写),返回值是一个新组件 2.作用是让一般组件也拥有路由组件类似的属性

## BrowsweRouter 和 HashRouter 的区别

1. HashRouter 没有使用 history 来保存数据，所以刷新之后会导致 state 对象丢失

## Antd UI 组件的使用

1. 注意引入 css 样式文件
