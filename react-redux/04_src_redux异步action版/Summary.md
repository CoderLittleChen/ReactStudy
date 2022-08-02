### redux 注意事项

1. reducer 中只负责状态`prsState`的变化，不会重新 render，需要在 store 中设置监听

```
store.subscribe(()=>{
  this.setState({})
})
```

2. 直接在组件中添加监听事件，如果组件较多则需要多次添加
   最好的做法应该是在 index.js 中引入 store，统一注册

3. Create AsyncAction Tips
   The Redux Toolkit 'configureStore' API automatically adds the thunk middleware during the store creation
   so it should typically be available with no extra configuration needed
