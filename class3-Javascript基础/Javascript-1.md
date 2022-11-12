# JavaScript语法基础知识        ——林培灿
![](/class3-JavaScript基础/img/basic/banner1.png)
## 
### **一、复习回顾HTML、CSS，Javasripts引入**
#### 1.1 一个基本HTML、CSS页面

#### 1.2 实现页面的功能
### **二、JavaScript基础背景知识储备**
#### 2.1 JavaScript介绍
- JavaScript是什么？
  - JavaScript是一种浏览器**脚本语言**，是一种运行在浏览器中的**解释型的、弱类型的**编程语言。诞生之初是专门为浏览器环境设计，但是现在也广泛地运用在各种场景下。
  - Java和JavaScript的关系:取名为JavaScript最初是网景(navigator开发商)希望能借Java名气作推广，实际**二者毫不相干**...emmm
- JavaScript有什么用？
  - 在Web设计时,如果只能把图片、文本等元素贴在页面上,那页面就是一张大号的静态海报，显然，这种效果并不理想。
  - JS的在元素和数据之间架起了桥梁，通过变量、常量等的数据变化，使在页面上可以有实现交互。
  - JS的运用可以嵌入**动态文本**让页面有丰富的变化,借助JS还可以实现**动画/3D等**效果
- JavaScript和编译类语言的区别？   
    - 相信大部分同学或多或少都已经学习了一定的C语言基础，学习JS和学习C语言的方法类似,**记忆语法,多动手实践操作**。C语言是一种典型的编译类语言，需要使用gcc编译库对自然语言(待编译文件.c)处理成机器语言(可执行文件.exe)才能够运行。JS则不需要,JS是脚本语言,可以**实时**将高级语言转为机器语言**自动执行**。
    - 相比**HTML和CSS**来说,可以真的称得上是在**编程**,HTML和CSS是**标记语言**,而JS具有**逻辑性**、有编程语言的**函数**、**IPO结构**等,学好JS是成为前端程序猿**必要前提**。
  
  [【文章推荐: JavaScript的语言基本特点】](https://www.php.cn/js-tutorial-477720.html)
#### 2.2 JavaScript的构成及代码规范
- JavaScript的[组成](https://www.cnblogs.com/Shyno/p/15262099.html)

   一个完整的 JavaScript 实现由以下 3 个不同部分组成：
    - 核心（**ECMAScript**）：语言核心部分，描述了该语言的语法和基本对象。

    - 文档对象模型（Document Object Model，**DOM**）：网页文档操作标准，描述处理网页内容的方法和接口。

    - 浏览器对象模型（**BOM**）：客户端和浏览器窗口操作基础，描述与浏览器进行交互的方法和接口。
    
- JavaScript代码规范
  - 关于ES6
    - ES 的全称是 ECMAScript , 它是由 ECMA 国际标准化组织,制定的一项脚本语言的标准化规范。每一次标准的诞生都意味着语言的完善，功能的加强。
  - 初学JS为什么从ES6开始
    - ES6中引入了对变量、常量、作用域等解释,利用**变量提升***(弱类型)特性可以有丰富的运用,语法不严格。
    - 从一开始就规范编程,可以避免后期的**踩坑**,以及**代码质量**难以提高。

#### 2.3 用什么**参考书**
  - 犀牛书-《JavaScript——The Definitive Guide》
       <img src="img/basic/xns.png" width="40%"/>
  - 红宝书——《JavaScript高级程序设计 第4版》版本越新越好
      <img src="img/basic/HB.png" width="40%"/>
  - 吃透这两本书你就是JS大佬了。

同学们都急不可耐地想开始编程了吧，下面开始正式实操干货。

### **三、JavaScript保姆教学**
#### 3.1 引入一个JS程序的三种方法

- 1.外部引入(&#x2728;推荐)
```
<script type="text/javascript" src="路径/文件名.js"></script>
```
  - 如在与html文件同一文件夹下面创建一个.js格式文件,任意命名。例"first.js"
  - 那么引入
    `<script type="text/javascript" src="./first.js"></script> `
  - 如果script标签外部引入js文件，那么此标签当中就不能再写js程序
  
`*注:为了方便教学,课堂将使用外引式教学`

- 2.内部引入
```
<script type="text/javascript">
    //js代码
    alert('js hello world!');//弹窗
</script>
```
- 3.行内引入
```
<input type="button" value="行内引入方式" onclick="javascript:alert('蓝山学前端');">
```
<input type="button" value="行内引入方式" onclick="javascript:alert('蓝山学前端');">

- 附: 外引式代码框架:
  - HTML文件 index.html
    ```

    ```
  - HTML文件 index.css
    ```

    ```
  - HTML文件 first.js
    ```

    ```

