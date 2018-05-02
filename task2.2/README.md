#### 初始化项目 ####

```
npm install
```

#### 开发环境 ####

```
npm run dev
```

[http://localhost:8080/][1]

#### 生产环境打包 ####
```
npm run build
```

  [1]: http://localhost:8080/


#### 添加 ####
unshift
```
{number} unshift({string|Object}expr, {*}value, {Object?}option)
```
在数组开始插入一条数据。
```
this.data.unshift('persons', {name: '小明', status: 2});```
```

#### 删除 ####
remove
```
remove({string|Object}expr, {*}item, {Object?}option)
```
传入for循环的该项
```
<button s-if="item.status!=2" on-click="del(item)">删除</button>
```

```
del (person) {
  this.data.remove('persons', person);
}
```

#### 审核 ####
用到set
```
set({string|Object}expr, {*}value, {Object?}option)
```
set 方法是最常用的操作数据的方法，作用相当于 JavaScript 中的赋值 (=)。

option第三个参数很重要强制触发视图变更

每个数据操作方法，最后都可以包含一个类型为Object的数据操作选项参数对象，该对象中的参数可控制视图更新行为。
force
版本：>= 3.5.5
设置相同的数据时，强制触发视图变更。该参数仅对 set 方法有效

代码举例
```
this.data.set('persons', _persons, {force: true});
```
