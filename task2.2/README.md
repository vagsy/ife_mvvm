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


```
filters: {
    number: function (value) {
      return isNaN(parseInt(value)) ? undefined : parseInt(value);
    }
},
```
通过添加number过滤器，年龄输入非数字时不显示
