## 1.setState(update,callback)

1. 对象式 setState 的第二个参数是状态更新成功之后的回调函数
2. 函数式 setState 参数是一个函数，能接收到 state 和 props

## 2.LazyLaod

1. 引入组件的时候进行设置，要配合 Suspense fallback 来使用

## 3.setState

1. `const [count, setCount] = React.useState(0);` 这里 count 为存储的变量 setCount 为更新变量的方法
2. 两种写法 `setState(newValue)` or `setState(value => return value)`
3. useEffect 在函数式组件中使用生命周期钩子
4. 如何在子组件中调用 root.unmount()? 目前直接调用会有 waring,
   - 可以将 unmount 作为方法 通过 context 来给子组件调用

## 4.context

1. 父组件传递 value，将子组件用 Provider 包裹
2. 子组件接收父组件的两种方式
   - static 关键字声明 `static contextType = myContext`
   - Consumer 接收,其内部是一个 Function,receive the current context value and return a React Node
