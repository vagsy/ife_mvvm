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

注意点：

```
import HighParent from "./HighParent";
export default {
    components: {
      'ui-highparent': HighParent
    }
}
```

components这里模板另命名一定要用小写，大写识别不了
