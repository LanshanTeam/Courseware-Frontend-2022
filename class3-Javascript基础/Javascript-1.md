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
  
       <img src="img/basic/xns.png" width="50%"/>
  - 红宝书——《JavaScript高级程序设计 第4版》版本越新越好
  
      <img src="img/basic/HB.png" width="50%"/>
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
        <!DOCTYPE html>
          <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>JavaScript基础知识</title>
              </head>
              <body>
                  <div>
                    <input class="btn-1" type="button" value="行内引入方式" onclick="fn()";>
                  </div>
              </body>
          </html>
           <script type="text/javascript" src="./first.js"></script>
    ```
  - CSS文件 index.css
    ```
        .body{
          width:100%;
          height:100%;
          margin:25% 25%;
          background-color:#efefef
        }
        .btn-1{
          width:"3rem";
          border:none;
          border-radius:8px;
          background-color:#012eef
        }
        
    ```
  - JS文件 first.js
    ``` 
      function fn(){
       console.log("来蓝山找灿灿学前端！");
    }
    ```
  -  ![](./img/basic/file.png)
#### 3.2 执行第一个JS程序
  - 页面事件(event)
       - 发生在html标签元素上的事情 
       - 一般通过事件的触发让html元素和js函数建起联系，也叫**事件绑定函数**
       - 几个常见的事件:

|   事件名  |   执行含义  |参数约定|
| :------:| :----: | :----: |
| onclick |  鼠标点击事件 | event.target(点击事件源元素) |
| onmouseover |  光标移动到元素上方时 |event.clientX(横坐标) event.clientY(纵坐标) |
| onmouseout |  光标移出元素上方时 |event.clientX(横坐标) event.clientY(纵坐标) |
| onkeydown |  键盘按键按下事件 |key:键位编号 |
| onkeyup |  键盘按键松开事件 |key:键位编号 |
| onfocus |  输入框获取焦点事件 |event.clientX(横坐标) event.clientY(纵坐标)|
| onblur | 输入框失去焦点事件 |event.clientX(横坐标) event.clientY(纵坐标)|
| onstroll | 文档被滚动时 |————|

- Console 对象
  |   控制台方法  |   执行含义  |参数约定|
  | :------:| :----: | :----: |
  | log() |  控制台输出一条信息 | Number String Object Array |
  | clear() | 清空控制台 | ——  |
  | warn() | 控制台输出警告 | ——  |
  | assert() | 断言(断言为false打印err)) | Boolean  |
  | count() | 调用次数计数器 | Number  |
  - 例子
    ```
      console.log("来蓝山找灿灿学前端!")
    ```
  - **提问: 对象？**

- 查看控制台:
  - 在浏览器打开HTML文件,"右键"——>"检查" 或者 F12打开控制台
  - Edge
    - ①

    <img src="img/basic/console1.png" width="50%"/>
   
    - ②
 
        <img src="img/basic/console2.png" width="50%"/>
  - Chrome
    - ①
  
        <img src="img/basic/console3.png" width="50%"/>
    - ②
     
        <img src="img/basic/console4.png" width="50%"/>

    - 调试器按键简介:
  
        <img src="img/basic/console5.png" width="50%"/>
  - 点击按钮运行第一个js程序:

       <img src="img/basic/console6.png" width="50%"/>
 
#### 3.3 Javascript 的语法规则特点
  - 3.3.1 句末分号
      JS并不想C语言等编译类语言需要严格地使用分号来表征换行,句末分号可以省略。在初学阶段,为了易于理解语句逻辑,**推荐将分号带上**。
  - 3.3.2 大小写与中英文
     - 在JS中一切的命名(标识符)、关键字和操作符等,都是区分大小写的,比如:
  ```
    function OpenDoor(){
        console.log("OpenDoor")
    }
    function opendoor(){
        console.log("opendoor")
    }  
  ```
   当调用OpenDoor,只会执行第一个函数,因此可以利用区分大小写的特性对标识符的命名进行规范化命名。

  - 3.3.2 严格模式
    ```
     'use strict';
    ```
  - 3.3.3 规范化标识符  
    - 驼峰法
      - 每一个单词为单位,每一个新单词,eg. `nameList`
    - 下划线法
      - 单词统一使用小写,单词之间用下划线连接,eg. `name_list` 
  - 3.3.4 注释
      ```  
           //	单行注释
            /*
              多行注释
            */
      ```
  - 3.3.5 函数 
    - 普通函数(关键字function)  
     ```
        function 函数名(参数名1,参数名2,...){
          return 参数名1;//返回值 可有可无
        }
      ```
    - 箭头函数(ES6以后的语法)  
     ```
      //匿名函数写法
        (参数名1,参数名2,...)=>{
          return 参数名1;//返回值 可有可无
        }
      //可以将函数赋给一个常量
      const fn = (参数名1,参数名2,...)=>{
          return 参数名1;//返回值 可有可无
        }
      ```
 #### 3.4 ES6中标识符初始化
  -  3.4.1 作用域(scope)
       - 作用域包括全局(global)与局部(part)两种
         - 全局作用域在页面打开时创建，页面关闭时销毁
         - 局部作用域是在函数内创建的作用域,函数执行完毕,局部作用域会销毁
      ```
          var num = 10;
          function nu(){
          var num = 20;
          console.log(num);   
          }
         nu();
         console.log(num); 
      ```
  -  3.4.2 var
       - 用于声明一个可变变量,因为是“弱类型”声明,该变量可以赋为任意值。var 声明初始化可以在分离也可以同时完成,但是要注意的是,在未赋值时,变量默认为undefined。
       ```
          var a; 
          console.log(a) //undefined
          a = "1";
          var b = "2";
          console.log(a,b)  //1 2
          var c = 3;
          console.log(a + c) //13
          console.log(c + a) //4
       ```    
       - var 的变量提升
         - 以var为界以下到结束,为var声明变量的作用域,但函数体会自动提升到作用域顶层,变量可以先于声明语句调用。
          ```
              ()=>{
                console.log(b)
                var b = 2;
              }
          ```
  -  3.4.3 let
      - let的用法与var很接近,初学只需要记得三点区别
        - var声明范围是**函数作用域**， 而let声明的范围是**块级作用域**
           ```
             if(true){
                var name = 'LanMei';
                console.log (name);  //LanMei
             }
              console.log (name);  //LanMei
              if(true){
                  let birth = 1010;
                  console.log (birth);  //1010
              }
              console.log (birth);  //Uncaught ReferenceError: birth is not defined
           ``` 
        - 全局作用域下,var变量会指向window,而let变量只会指向变量本身
           ```
             var name = 'LanMei';
               let birth = 1010;
               console.log(window.name)            //LanMei
               console.log(window.birth)           //undefined
               console.log(birth)               //1010
            ```
        - var可以重复声明同一变量,但是let不能
          ```
              let birth = 1010;
              let birth = 1030;
              console.log (birth);  //Uncaught SyntaxError: Identifier 'birth' has already been declared
              var name = 'LanMei';
              var name = 'HongMei';
              var name = 'HuangMei';
              console.log (name);  //HuangMei
          ```  
          若一定要用let,也可以使用如下写法:
           ```
           ()=>{
            let birth = 1010;
            console.log(birth)
            }
           let birth = 1030;   
           console.log(birth)
          ```    
  -  3.4.4 const
     -  const 声明一个常量,常量不可修改,即无法被重新赋值,并且常量声明时**必须初始化**。
        ```
          const birth = 1010;
          birth = 1030;/Uncaught TypeError: Assignment to constant variable.
           const name;//Uncaught SyntaxError: Missing initializer in const declaration
         ```
 #### 3.5 Javascript 六大基本数据类型
  -  3.5.1 Number
     - 数值型
       - JS不像C/C++、Java、Python等语言严格区分出浮点型和整型,JS会根据声明情况及运算调整精度位,浮点数和整数都归入数值型数据。
     - 创建一个数值型
          ``` 
              a = new Number()
              console.log(a)
               console.log(typeof(a))
              b = 1
              a = 2.333
                console.log(a)
                console.log(b)
              console.log(typeof(b))
          ```
  -  3.5.2 String
        - 字符串型
          - JS中不对字符串的长度做约束,可以声明空字符串。
        - 创建一个字符串
          ``` 
            str1 = " "
             console.log(typeof(str1)) //null
            str2 = '12356'
            console.log(typeof(str2))  //string
          ``` 
        - 字符串操作方法 
          
  -  3.5.3 Boolean
      -  创建一个布尔型
    
  -  3.5.4 null
      -  创建一个null类
  -  3.5.5 undefined
          -  创建一个undefined类型
          -  数组操作方法 
  -  3.5.6 Object
     -  **对象成员**
       
     -  **数组(Array)**
          -  创建一个数组
          -  数组操作方法 
     -  **函数方法**


### **四、JavaScript程序结构设计**
   #### 4.1 JS程序设计基本原则
         4.1.1 避免非必要的程序闭包

         4.1.2 避免过多的值与函数返回
   #### 4.2 顺序结构
    -  4.1.1 与或非
    -  4.1.2 
   #### 4.3 选择结构
   #### 4.4 循环结构
   #### 4.5 顺序结构
   #### 4.6 递归嵌套


