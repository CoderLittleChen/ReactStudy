### redux 注意事项

1. reducer 中只负责状态`prsState`的变化，不会重新 render，需要在 store 中设置监听

```
store.subscribe(()=>{
  this.setState({})
})
```

2.  add listen event in component.if there many components,we need add multiple times
    - import store and register is best
    - we can use `provider` from `react-redux` to ensure all the components can receive the store object by props
3.  Create AsyncAction Tips
    - he Redux Toolkit `configureStore` API automatically adds the thunk middleware during the store creation
    - so it should typically be available with no extra configuration needed
4.  Components and Container
    - UI component saved in components folder
    - Containers component saved in container folder
5.  Container store props
    - UI component receive store object from props by parent container component
6.  React-Redux don't need to subscribe root element in index.js
7.  Add `Person` Component and share data with `Count` Component

    - Add Person Component
    - Add Person action and redcer - define `ADDPERSON` in constant - the problem is person reducer can't be called,so we need combine all reducers into a final reducer

      ```
      const finalReducer = combineReducers({
          sum: countReducer,
          persons: personReducer
      });
      ```

    - we can't use pure function in redux,because it doesn't work
    - modify the data type saved in redux.we should saved data what came from different component as `key-value` type
    - just call other component data saved in redux

8.  `we must pay attention about the two params of connect function.they are function type and return object both`
9.  redux-toolkit-extension
    - we can use this tool to check the data saved in redux in the browser
