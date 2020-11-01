### 完成度：


__Details:__

- \- 功能完成度低于三分之二
- \- 添加学员是需要发送API请求的，由后台server完成的

### 测试：


__Details:__



### 知识点：


__Details:__

- \- syntax error: 你的state上面的定义的变量是members,不是member
- \- 不建议给回调函数直接传入一个新的方法定义，这样会有性能问题
- \- 没有写css, 所以css这个维度无法考察
- \- React里面，每一个列表元素都应该有一个key
- \- 从设计思路上说，应该要存在一个Group的组件，然后GroupList应该是由多个Group组成
- \- 这个方法没有明确的return语句，那么它的返回值就是undefined

### 工程实践：


__Details:__

- \- 有小步提交，但是git message可以内容再具体一点
- \- callBack这个prop的命名没有体现业务逻辑
- \- MembersList这个命名没有体现业务逻辑，可以取名叫traineeList
- \- Card这个命名没有体现业务逻辑，可以取名叫traineeItem
- \- RouteConfig.js这种命名在前端一般是用来做前端路由的配置，而不是发API的配置
- \- 依然是命名的问题。Members这个命名太宽泛了，建议改为trainee

### 综合：


__Details:__



