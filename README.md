# rnpro
react-native总结：
1.rn是面向组件的，所有的页面元素都是组件，包括页面本身也是组件，但是它的组件化并没有那么彻底，比如在flutter中布局也是组件
2.把页面需要的数据存放在state里面，调用setState函数异步执行刷新，如果立刻取得this.state得到的数据不一定是最新的
3.
