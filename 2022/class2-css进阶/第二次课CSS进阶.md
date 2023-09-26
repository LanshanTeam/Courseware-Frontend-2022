# CSS文本样式
## 文本装饰（text-decoration）
| text-decoration-line | 用于设置元素中的文本的修饰类型。 |
| --- | --- |
| underline | 下划线 |
| overline | 顶划线 |
| line-through | 删除线 |
| text-decoration-color | 用于设置文本修饰线的颜色。 |
| text-decoration-style | 用于设置由 text-decoration-line 设定的线的样式。 |

## 行间距（line-height）
在 CSS 中 line-height 属性就是用来控制两行元素之间的垂直距离的。
行间距也称为行高指的是两行文本内容中基线的距离，即两条绿色线之间的距离。也就是上图中的 1、2、3 和 4 的区域。
行距指的是上一行的底线到下一行的顶线之间的距离。
line-height 属性的值
CSS line-height 属性的值允许指定如下 4 种类型
1、normal 关键字：该值取决于用户电脑。一般情况下，浏览器使用的默认值为 1.2。
2、数字值：line-height 属性的最终的效果值是该数字值乘以该元素的字体大小（font-size 属性值）。
3、长度值：该值可以使用的单位请参考《单位》一节内容。如果使用 em 单位的可能会产生不确定的效果。
4、百分比值：line-height 属性的最终的效果值是该百分比值乘以该元素的字体大小（font-size 属性值。
line-height 属性设置值时，建议使用数字值。因为使用数字值时，不会在继承时产生不确定的结果。
## 字母间距（letter-spacing）与单词间距（word-spacing）
### 字母间距
CSS letter-spacing 属性原意是用来设置文本字符之间的间距。在英文中是可以分为单词和字符的，但在中文中只有文字，中文中的文字就相当于英文的字符，所以 letter-spacing 属性可以适用于中文环境。
letter-spacing 属性的值具有 2 种类型，如下所示：
1、normal：该值是按照当前字体的正常间距确定的。
2、长度值：指定文字间的间距以替代默认间距，可以是负值。
### 单词间距
CSS word-spacing 属性用来设置 HTML 页面中标签之间或单词之间的距离，该属性对英文是有效的，但对中文是无效的。 word-spacing 属性的值具有 3 种类型，如下所示：
1、normal：该值是按照当前字体的正常间距确定的。
2、长度值：指定单词间的间距以替代默认间距。
3、百分比值：指定单词之间的间距以替代默认间距的百分比。
## 水平对齐方式（text-align）
[https://blog.csdn.net/qq_37899792/article/details/90019385](https://blog.csdn.net/qq_37899792/article/details/90019385)
CSS text-align 属性用来设置 HTML 页面中文本内容相对于其所在元素在水平方式的对齐方式。值得注意的是，text-align 属性并不能设置 HTML 元素本身在水平方向的对齐，而是设置 HTML 元素内部的文本内容在其元素内水平方向的对齐。

| start | 如果内容方向是左至右的话则等于 left，反之则为 right。 |
| --- | --- |
| end | 如果内容方向是左至右的话则等于 right，反之则为 left。 |
| left | 行内内容向左侧边对齐。 |
| center | 行内内容居中。 justify：文字向两侧对齐，对最后一行无效。 |
|  justify | 文字向两侧对齐，对最后一行无效。 |
| justify-all | 和 justify 一致，但是强制使最后一行两端对齐 |
| right | 行内内容向右侧边对齐。 |

## 垂直对齐方式（vertical-align）
[https://www.jianshu.com/p/ce7e4a997a2c](https://www.jianshu.com/p/ce7e4a997a2c)
[https://www.cnblogs.com/starof/p/4512284.html](https://www.cnblogs.com/starof/p/4512284.html)
CSS vertical-align 属性用来设置 HTML 页面中内联元素或表格单元格元素在垂直方向上的对齐方式。vertical-align 属性可以被应用于 2 种环境：
1、设置某个内联元素的盒子模型与该内联元素的父级容器元素的垂直对齐方式。
2、设置表格中某个单元格中内容的垂直对齐方式。
注意： vertical-align 属性只针对内联元素和表单单元格有效，对块级元素是无效的。
有关盒子模型、内联元素、块级元素以及表单单元格等概念会在后续的章节中进行详细讲解。

vertical-align 属性的值根据 2 种应用环境会有所不同：
### 应用于内联元素的值
#### 相对于父级元素的值
| baseline | 使元素的基线与父元素的基线对齐。 |
| --- | --- |
| sub | 使元素的基线与父元素的下标基线对齐。 |
| super | 使元素的基线与父元素的上标基线对齐。 |
| text-top | 使元素的顶部与父元素的字体顶部对齐。 |
| text-bottom | 使元素的底部与父元素的字体底部对齐。 |
| middle | 使元素的中部与父元素的基线加上父元素 x-height 的一半对齐。 |

#### 相对于行的值
| top | 使元素及其后代元素的顶部与整行的顶部对齐。 |
| --- | --- |
| bottom | 使元素及其后代元素的底部与整行的底部对齐。 |

### 应用于表单单元格的值
| baseline。 | 使单元格的基线，与该行中所有以基线对齐的其它单元格的基线对齐。 |
| --- | --- |
| top | 使单元格内边距的上边缘与该行顶部对齐。 |
| middle | 使单元格内边距盒模型在该行内居中对齐。 |
| bottom | 使单元格内边距的下边缘与该行底部对齐。 |

## 文本缩进（text-indent）
CSS text-indent 属性用来设置 HTML 页面中块级元素首行文本内容之前的缩进量。
text-align 属性的值具有 4 种类型，如下所示：
1、长度值：允许使用负值。
2、百分比值：使用所在块级元素的宽度的百分比作为缩进。
3、each-line：文本缩进会影响第一行，以及使用 元素强制断行后的第一行。
4、hanging：该值会对所有的行进行反转缩进：除了第一行之外的所有的行都会被缩进，看起来就像第一行设置了一个负的缩进值。
## 文本阴影（text-shadow）
CSS text-shadow 属性用来设置 HTML 页面中文本内容的阴影。该属性的语法结构如下所示：
```html
selector {
    text-shadow: color offset-x offet-y blur-raduis;
}
```
上述语法结构中的具体值的含义如下：
### color：
可选项，设置文本内容的阴影颜色。
### offset-x：
必选项，设置文本内容的阴影在水平方向的偏移量。
1、如果值小于 0 的话，则表示向左偏移。
2、如果值等于 0 的话，则表示水平方向不发生任何偏移。
3、如果值大于 0 的话，则表示向右偏移。
### offset-y：
必选项，设置文本内容的阴影在垂直方向的偏移量。
1、如果值小于 0 的话，则表示向上偏移。
2、如果值等于 0 的话，则表示垂直方向不发生任何偏移。
3、如果值大于 0 的话，则表示向下偏移。
### blur-raduis：
1、可选项，设置文本内容的阴影模糊半径。
2、如果没有指定，则默认为 0。值越大，模糊半径越大，阴影也就越大越淡。
设置多重阴影效果需要设置多个阴影值，这些值之间需要使用逗号（`,`）分隔。
## 文本换行（word-wrap 和 word-break）
浏览器自身带有文本换行的功能。在浏览器显示文本内容时，让文本和浏览器的右端自动实现换行。具体的情况如下所示：
1、对于西方文本，浏览器会在半角空格或连字符的地方自动换行。
2、对于中文文本，可以在任何文字后面换行。通常标点符号以及前面的文字作为整体统一换行。

在 CSS 中可以用来设置文本换行效果的属性存在 2 个：
1、word-wrap 属性
2、word-break 属性
### word-wrap 属性
word-wrap 属性属于微软的一个私有属性，在 CSS3 的文本规范中被重命名为 overflow-wrap。word-wrap 作为 overflow-wrap 的别名。
CSS overflow-wrap 属性用来设置 HTML 页面中当一个不能被分开的字符串太长而不能填充其包裹盒时，为防止其溢出，浏览器是否允许这样的单词中断换行。
overflow-wrap 属性的值具有如下 2 种：
1、normal：表示在正常的单词结束处换行。
2、break-word：表示如果行内没有多余的地方容纳该单词到结尾，则那些正常的不能被分割的单词会被强制分割换行。
### word-break 属性
CSS word-break 属性用来设置 HTML 页面中文本内容自动换行的处理方式。通过具体的属性值设置，可以告知浏览器实现任意位置的换行。
word-break 属性的值具有如下 3 种：
1、normal：使用默认的断行规则。
2、break-all：对于除中文、日文和韩文外的文本内容，设置可以在任意字符间断行。
3、keep-all：中文、日文和韩文的文本内容不断行，其他语言的文本内容等同于 normal。
## 处理空白（white-space）
CSS white-space 属性用来设置如何处理 HTML 元素中的空白。
代码：
```html
<style>
    p {
      white-space: pre;
    }
  </style>
</head>

<body>
  <!-- 浏览器默认会将所有的空白进行合并为一个 -->
  <p>19级   启嘉班</p>
</body>
```
| normal | 默认值，连续的空白符会被合并，换行符会被当作空白符来处理。填充内联元素的盒子模型时，必要的话会换行。 |
| --- | --- |
| nowrap | 和 `normal` 一样，连续的空白符会被合并。但文本内的换行无效。pre：连续的空白符会被保留。在遇到换行符或者 `<br>` 元素时才会换行。 |
| pre-wrap | 连续的空白符会被保留。在遇到换行符或者 `<br>` 元素，或者需要为了填充内联元素的盒子模型时才会换行。 |
| pre-line | 连续的空白符会被合并。在遇到换行符或者 `<br>`元素，或者需要为了填充内联元素的盒子模型时会换行。 |
| break-spaces | 与 `pre-wrap `的行为相同，除了如下情况：
1、任何保留的空白序列总是占用空间，包括在行尾。
2、每个保留的空格字符后都存在换行机会，包括空格字符之间。
3、这样保留的空间占用空间而不会挂起，从而影响盒子的固有尺寸。 |

# CSS颜色
## RGBA
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2705417/1635484002017-a8bd402b-2ab9-4984-b274-596265113efb.png#averageHue=%23f8f5f3&clientId=uc895af9c-b7db-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=175&id=u11fcee03&margin=%5Bobject%20Object%5D&name=image.png&originHeight=175&originWidth=1014&originalType=binary&ratio=1&rotation=0&showTitle=false&size=35967&status=done&style=none&taskId=u52593796-ec37-4f4e-b4ab-bd92c9924c0&title=&width=1014)
```css
rgba(red, green, blue, alpha)
```
| 值 | 描述 |
| --- | --- |
| red | 将红色强度定义为 0 到 255 之间的整数，或 0％ 到 100％ 之间的百分比值。 |
| green | 将绿色强度定义为 0 到 255 之间的整数，或 0％ 到 100％ 之间的百分比值。 |
| blue | 将蓝色强度定义为 0 到 255 之间的整数，或 0％ 到 100％ 之间的百分比值。 |
| alpha | 将不透明度定义为介于 0.0（完全透明）和 1.0（完全不透明）之间的数字。 |

## HSL
```css
hsla(hue, saturation, lightness)
```
| 值 | 描述 |
| --- | --- |
| 色相（hue） | 是色轮上从 0 到 360 的度数。0 是红色，120 是绿色，240 是蓝色。 |
| 饱和度（saturation） | 是一个百分比值，0％ 表示灰色阴影，而 100％ 是全色。 |
| 亮度（lightness） | 是百分比，0％ 是黑色，50％ 是既不明也不暗，100％是白色。 |

## HSLA
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2705417/1635484410611-276786bf-2fa2-45ac-b457-3c051cca9156.png#averageHue=%23f9f5f3&clientId=uc895af9c-b7db-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=171&id=u2c883835&margin=%5Bobject%20Object%5D&name=image.png&originHeight=171&originWidth=808&originalType=binary&ratio=1&rotation=0&showTitle=false&size=20490&status=done&style=none&taskId=ud08eab1a-1f52-4690-a6f2-8b17725532a&title=&width=808)
```css
hsla(hue, saturation, lightness, alpha)
```
| 值 | 描述 |
| --- | --- |
| hue | 定义色轮上的度数（从 0 到 360）- 0（或 360）为红色，120 为绿色，240 为蓝色。 |
| saturation | 定义饱和度 - 0％ 是灰度，而 100％ 是全彩色（完全饱和）。 |
| lightness | 定义亮度 - 0％ 是黑色、50％ 为正常、100％ 是白色。 |
| alpha | 定义不透明度，介于 0.0（完全透明）和 1.0（完全不透明）之间的数字。 |

## opacity
`opacity`属性指定了一个元素的不透明度。换言之，`opacity`属性指定了一个元素后面的背景的被覆盖程度。
当`opacity`属性的值应用于某个元素上时，是把这个元素（包括它的内容）当成一个整体看待，即使这个值没有被子元素继承。因此，一个元素和它包含的子元素都会具有和元素背景相同的透明度，哪怕这个元素和它的子元素有不同的`opacity`属性值。
使用`opacity`属性，当属性值不为1时，会把元素放置在一个新的层叠上下文中。
```css
/* 完全不透明 */
opacity: 1;
opacity: 1.0;

/* 半透明 */
opacity: 0.6;

/* 完全透明 */
opacity: 0.0;
opacity: 0;

opacity: inherit;
```
属性值:`<number>`
` <number>` 是一个0.0到1.0范围内的数字值,这个数值既包含也代表通道的透明度，也就是alpha通道的值。任何一个溢出这个取值区间的值，尽管有效，但会被解析为在取值范围内最靠近它的值。

| 值 | 释义 |
| --- | --- |
| 0 | 元素完全透明 (即元素不可见). |
| 任何一个位于0.0-1.0之间的<number> | 元素半透明 (即元素后面的背景可见). |
| 1 | 元素完全不透明（即元素后面的背景不可见） |

实例：
```css
  div {
     background-color: aquamarine;
  }
.div1 {
   opacity: 0.1;
}
.div2 {
   opacity: 0.3;
}
.div3 {
   opacity: 0.9;
}
```
```html
<body>
    <div>
        <div class="div1">看不太清</div>
        <div class="div2">能看清一点</div>
        <div class="div3">清楚起来了</div>
    </div>
</body>
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2705417/1635485198702-7e8fe38f-b81f-483b-a02e-2098689785a0.png#averageHue=%237dfcd2&clientId=u932be441-7d18-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=97&id=ub92f6207&margin=%5Bobject%20Object%5D&name=image.png&originHeight=97&originWidth=955&originalType=binary&ratio=1&rotation=0&showTitle=false&size=5304&status=done&style=none&taskId=u2575b2fc-dca5-43c3-b6b3-18154c61f22&title=&width=955)
## WebKit渐变
```html
-webkit-gradient(type, start_point, end_point, / stop...)
-webkit-gradient(type, inner_center, inner_radius, outer_center, outer_radius, / stop...)
```
| 参数类型 | 说明 |
| --- | --- |
| type | 渐变的类型，可以是线性渐变(linear)或是径向渐变(radial) |
| start_point | 渐变图像中渐变的起始点 |
| end_point | 渐变图像中渐变的结束点 |
| stop | color-stop()方法，指定渐变进程中特定的颜色 |
| inner_center | 内部中心点，径向渐变起始圆环 |
| inner_radius | 内部半径，径向渐变起始圆 |
| outer_center | 外部渐变结束圆的中心点 |
| outer_radius | 外部渐变结束圆的半径 |

`start_point(x1,x2)`，`end_point(x2,y2)`，这里的x,y对应左上角为起点的坐标，此处的x,y参数表示与CSS中的`background-position`是一致的，可以使像素值，或是百分比值或是`left`,`top`,`right`,`bottom`。
当x1等于x2，y1不等于y2，实现垂直渐变，调整y1，y2的值可以调整渐变半径大小；
当y1等于y2，x1不等于x2，实现水平渐变，调整x1，x2的值可以调整渐变半径大小；
当y1不等于y2，x1不等于x2，实现角度渐变，当x1,x2,y1,y2取值	为极值的时候接近垂直渐变或水平渐变；
当x1等于x2，y1等于y2，实现没有渐变，取`from`色，即“ `from`(颜色值) ”；
### 1、创建线性渐变
这里展示的是最简单的线性渐变，由蓝色至白色的渐变。代码如下：
```css
.div1{
   width:130px;
   height:130px;
   padding:10px; 
   background:-webkit-gradient(linear, left top, left bottom, from(#00abeb), to(#fff));
   -webkit-background-origin:padding-box;//元素背景相对位置
   -webkit-background-clip:content-box;//元素背景是否延伸
}
```
```html
<div class="div1"></div>
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2705417/1635486572677-79b8e01a-1c5c-4e43-b6b5-0448b992ad9a.png#averageHue=%23a1e0f7&clientId=u932be441-7d18-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=187&id=ua92ead65&margin=%5Bobject%20Object%5D&name=image.png&originHeight=187&originWidth=192&originalType=binary&ratio=1&rotation=0&showTitle=false&size=2853&status=done&style=none&taskId=u3d3729ec-5d23-4b9d-9a2d-6f5fcb0493f&title=&width=192)
参见上面的`background`属性值，可以得到webkit核心浏览器下线性渐变的基本语法，如下：
```css
-webkit-gradient(type,x1 y1, x2 y2, from(开始颜色值), [color-stop(位置偏移-小数,停靠颜色值),...],to(结束颜色值));
```
### 2、创建径向渐变
径向渐变也可以称为放射状渐变，常用来形成环状效果，晕状效果等。如下示例代码：
```css
.div1{
    display:block; 
    width:150px; 
    height:150px; 
    border:1px solid rgb(0, 174, 255); 
    background-image:-webkit-gradient(radial, 45 45, 10,45 45, 30, from(#35ffdd), to(rgb(255, 255, 255)),color-stop(90%,rgb(0, 247, 255)));
}
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2705417/1635488955960-7fc77994-1581-4d59-ae38-dc202450ad3c.png#averageHue=%23ffffff&clientId=u932be441-7d18-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=308&id=u86095786&margin=%5Bobject%20Object%5D&name=image.png&originHeight=308&originWidth=327&originalType=binary&ratio=1&rotation=0&showTitle=false&size=18204&status=done&style=none&taskId=u3346c14a-31fc-4e6b-9dfa-5f83b78b41f&title=&width=327)
### 3、指定过渡颜色点
即使用`color-stop`方法创建色标点。含有两个参数，第一个参数表示渐变点的在整个渐变范围内的位置，以小数表示；第二个参数为颜色，可以使用RGBA的形式表示，这样可以指定颜色的透明度。
使用`color-stop`指定过渡点或称为色标点时，渐变的开始(`from()`)以及结束(`to()`)颜色都是可以省略的。
#### 使用from()以及to()方法
```css
body {
   background: -webkit-gradient(linear, left top, left bottom, from(#ff0), color-stop(0.5, orange), to(rgb(255, 0, 0)));
}
```
#### 不指定起始颜色与结束颜色
```css
background-image:-webkit-gradient(linear, left top, left bottom, color-stop(0.40, #ff0), color-stop(0.5, orange), color-stop(0.60, rgb(255, 0, 0)));
```
#### 多个过渡点在同一位置
```css
width:200px; height:120px; background:-webkit-gradient(linear, left top, left bottom, from(#00abeb), to(#fff), color-stop(0.5, #fff), color-stop(0.5, #66cc00));
```
### 4、创建背景重复渐变
CSS3中有个`background-size`属性，可以改变背景图片的大小，配合背景渐变属性可以实现重复的背景渐变，如下代码：
```css
.div1{
   width:400px;
   height:150px; 
   border: solid 1px blue;
   background:-webkit-gradient(linear, left top, left bottom, from(#ff0000), to(#ffff00)); 
   background-size: auto 50px;
}
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2705417/1635490134445-ae076b26-ec7d-4fb7-ae7c-d0465f6675f9.png#averageHue=%23ff840a&clientId=u932be441-7d18-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=196&id=udaca9eba&margin=%5Bobject%20Object%5D&name=image.png&originHeight=196&originWidth=509&originalType=binary&ratio=1&rotation=0&showTitle=false&size=3918&status=done&style=none&taskId=ucdfaa1dd-6698-4321-8b3a-21e16421136&title=&width=509)
## Gecko渐变
CSS3 Gradient分为linear-gradient(线性渐变)和radial-gradient(径向渐变)。
首先，我们先来了解一下目前的几种现代浏览器的内核，主流的主要有Mozilla（Gecko）（熟悉的有Firefox，Flock等浏览器）、WebKit（熟悉的有Safari、Chrome等浏览器）、Opera(presto)（Opera浏览器）、Trident（IE浏览器）。
接下来，我们就来详解Gradient渐变的具体用法。
### 1、linear-gradient(线性渐变)
```css
linear-gradient( [<point> || <angle>,]? <stop>, <stop> [, <stop>]* }  //标准写法
-webkit-linear-gradient( [<point> || <angle>,]? <stop>, <stop> [, <stop>]* }  //在WebKit浏览器下的应用
-moz-linear-gradient( [<point> || <angle>,]? <stop>, <stop> [, <stop>]* )  //在Mozilla浏览器下的应用
-o-linear-gradient([<point> || <angle>,]? <stop>, <stop> [, <stop>]);  //在Opera浏览器下的应用
```
参数：
`<angle>`：是角度，单位为deg
`point` ： 第一个参数表示线性渐变的方向，可用关键字`top`、`left`、`bottom`、`right`，`to top`是从上到下、`to left`是从左到右，如果定义成`to left top`，那就是从左上角到右下角（to可省略）。
`<stop > = <color> [ <length> | <percentage>]:`
`<color>`：指渐变的起止颜色。
`<length>`：用长度值指定起止色位置，不允许负值。
`<percentage>`：用百分比指定起止色位置。
```css
background: linear-gradient(left,red,orange,yellow,green,blue,indigo,violet);   
background: -webkit-linear-gradient(left,red,orange,yellow,green,blue,indigo,violet);   
background: -moz-linear-gradient(left,red,orange,yellow,green,blue,indigo,violet);   
background: -o-linear-gradient(left,red,orange,yellow,green,blue,indigo,violet);
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2705417/1635490721979-78dc6fe6-878b-43b6-bd68-256ed36e2353.png#averageHue=%232d8f11&clientId=u932be441-7d18-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=115&id=u58c1dc24&margin=%5Bobject%20Object%5D&name=image.png&originHeight=115&originWidth=391&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12706&status=done&style=none&taskId=ued1c9835-0dfa-4194-b500-feafaf010b7&title=&width=391)
### 2、径向渐变（radial-gradient）
径向渐变由它的中心定义。
为了创建一个径向渐变，你也必须至少定义两种颜色结点。颜色结点即你想要呈现平稳过渡的颜色。
同时，你也可以指定渐变的中心、形状（原型或椭圆形）、大小。默认情况下，渐变的中心是 `center`（表示在中心点），渐变的形状是 `ellipse`（表示椭圆形），渐变的大小是` farthest-corner`（表示到最远的角落）
```css
 -moz-radial-gradient([<position> || <angle>,]? [<shape>] [<size>,]? <color-stop>, <color-stop>[, <color-stop>]*);
 -webkit-radial-gradient([<position> || <angle>,]? [<shape>] [<size>,]? <color-stop>, <color-stop>[, <color-stop>]*);
 -o-radial-gradient([<position> || <angle>,]? [<shape>] [<size>,]? <color-stop>, <color-stop>[, <color-stop>]*);
 radial-gradient([<position> || <angle>,]? [<shape>] [<size>,]? <color-stop>, <color-stop>[, <color-stop>]*);
```
参数说明：
`<position>`：用来定义径向渐变的圆心位置，类似`background-position`，默认为`center`。可用关键字`top`、`left`、`bottom`、`right`、`center`、<`length`>、<`percentage`>。
`<angle>`是角度，单位为deg
`<shape>`：定义径向渐变的形状，有两个可选值“`circle`”和“`ellipse`”
`<size>`：用来确定径向渐变的结束形状大小，默认值为“`farthest-corner`”
其他值：
`closest-side`：指定径向渐变的半径长度为从圆心到离圆心最近的边；
`closest-corner`：指定径向渐变的半径长度为从圆心到离圆心最近的角；
`farthest-side`：指定径向渐变的半径长度为从圆心到离圆心最远的边； 
`farthest-corner`：指定径向渐变的半径长度为从圆心到离圆心最远的角；
`<stop > = <color> [ <length> | <percentage>]:`
<`color`>：指渐变的起止颜色。
<`length`>：用长度值指定起止色位置，不允许负值。
<`percentage`>：用百分比指定起止色位置。
## IE渐变
 IE不支持CSS渐变，但提供了渐变滤镜，可以实现简单的渐变效果。IE浏览器渐变滤镜的基本语法如下。
```css
filter:progid:DXImageTransform.Microsoft.Gradient(enabled=bEnabled,startColorStr=iWidth,endColorStr=iWidth)
```
`enabled`:设置或检索滤镜是否激活。可选布尔值，包括true和false；默认值为true，即激活状态。
`startColorStr`: 设置或检索色彩渐变的开始颜色和透明度。可选项，其格式为#AARRGGBB. AA、RR、GG、BB为十六进制正整数，取值范围为00~FF。RR指定红色值，GG指定绿色值，BB指定蓝色值。AA指定透明度，00是完全透明，FF是完全不透明。超出取值范围的值将被恢复为默认值。取值范围为#FF000000~ #FFFFFFFF，默认值为#FF0000FF,即不透明蓝色。
`EndColorStr`:设置或检索色彩渐变的结束颜色和透明度。默认值为#FF000000，即不透明黑色。关于IE渐变滤镜的用法，详细信息请参阅http://msdn.microsoftcom/en-us/library/ms532997(VS.85,loband).aspx
## 补充
对于` rgb()`、`rgba() `、`hsl() `和 `hsla()` ，以往用逗号（`,`）作为分割符，现在可以直接使用空格做分割符，并且`rgb()` 和 `hsl()` 函数在第三个值和第四个值之间加上`/` 可以取替 `rgba()` 和 `hsla()`：
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2705417/1635444075525-f42afac1-576c-40c7-b9fe-dfc82db1ad01.png#averageHue=%230b0905&clientId=u40c52244-7923-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=693&id=uf3788883&margin=%5Bobject%20Object%5D&name=image.png&originHeight=693&originWidth=1338&originalType=binary&ratio=1&rotation=0&showTitle=false&size=384578&status=done&style=none&taskId=u7f59e47b-16af-4b83-89f0-7fbac9933cc&title=&width=1338)
# CSS背景和边框样式
## 边框样式
### 边框背景（border-image）
#### border-image-source
`border-image-source`属性指定要使用的图像，而不是由`border-style`属性设置的边框样式。如果值是"e"，或者`none`，如果无法显示图像，边框样式会被使用。
#### border-image-slice
| 值 | 说明 |
| --- | --- |
| number | 数字表示图像的像素（位图图像）或向量的坐标（如果图像是矢量图像） |
| % | 百分比图像的大小是相对的：水平偏移图像的宽度，垂直偏移图像的高度 |
| fill | 保留图像的中间部分 |

#### border-image-repeat
| 值 | 描述 |
| --- | --- |
| stretch | 默认值。拉伸图像来填充区域 |
| repeat | 平铺（repeated）图像来填充区域。 |
| round | 类似 repeat 值。如果无法完整平铺所有图像，则对图像进行缩放以适应区域。 |

#### border-image-width
`border-image-width` 属性的四个之规定将边框图像分割为九个部分的偏移。它们代表了从区域的上、右、下、左侧向内的距离。如果忽略第四个值，则与第二个值相同。如果省略第三个值，则与第一个值相同。如果省略第二个值，则与第一个值相同。不允许任何负值作为 `border-image-width `值。

| 值 | 描述 |
| --- | --- |
| length | 距离多少像素 |
| percentage | 百分比 |
| number | 边框宽度多少倍数 |

#### border-image-outset
`border-image-outset` 属性规定边框图像超出边框盒的量。在上、右、下、左侧。如果忽略第四个值，则与第二个值相同。如果省略第三个值，则与第一个值相同。如果省略第二个值，则与第一个值相同。不允许任何负值作为 `border-image-outset` 值。

| 值 | 描述 |
| --- | --- |
| length | 距离多少像素 |
| percentage | 百分比 |
| number | 边框宽度多少倍数 |

### 背景裁剪
`border-image-slice` ：上、右、下、左。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2705417/1635492426469-87eaaa1b-78f6-4c4e-bc70-91e104045acb.png#averageHue=%23ebe7de&clientId=u3b70f9be-c781-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=431&id=u3234702e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=431&originWidth=827&originalType=binary&ratio=1&rotation=0&showTitle=false&size=193930&status=done&style=none&taskId=u97d806f7-a02d-4a53-acec-9e1f7afe66a&title=&width=827)
### 设计圆角
```css
border-redius:length;
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2705417/1635493040576-03c9b233-8dc0-47a9-abce-68a66e0b7886.png#averageHue=%23f7faf7&clientId=u3b70f9be-c781-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=408&id=ue996f21e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=408&originWidth=940&originalType=binary&ratio=1&rotation=0&showTitle=false&size=143365&status=done&style=none&taskId=u5ac06e7b-6456-4522-975b-cd4ef6c094d&title=&width=940)
如果想要设置为圆弧形则将数值设置为高度的一般即可：
```css
div {
   background-color: turquoise;
   margin: 10px;
}
.div1 {
   height: 200px;
   width: 200px;
   border-radius: 100px;
   /*和上面的写法效果相同 */
   border-radius: 50%;
}
.div2 {
   height: 100px;
   width: 200px;
   border-radius: 50px;
}
```
```html
<body>
    <div class="div1"></div>
    <div class="div2"></div>
</body>
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2705417/1635493533382-90eeeac9-036b-4b53-98b2-95326a1aa9ee.png#averageHue=%238bece2&clientId=u3b70f9be-c781-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=418&id=ueadfa984&margin=%5Bobject%20Object%5D&name=image.png&originHeight=418&originWidth=305&originalType=binary&ratio=1&rotation=0&showTitle=false&size=8626&status=done&style=none&taskId=u1ec84f62-c0f6-40d6-b64a-f74e2f02b32&title=&width=305)
### 设计倒影
```css
box-reflect:<direction><dffset><mask-box-image>
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2705417/1635494338833-db958a7c-0db8-4187-a55c-78e3d4bd5551.png#averageHue=%23202427&clientId=u3b70f9be-c781-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=449&id=u1e4948b3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=449&originWidth=712&originalType=binary&ratio=1&rotation=0&showTitle=false&size=84175&status=done&style=none&taskId=u0ea5950f-cf3a-4be9-a988-43419924b26&title=&width=712)
### 设计阴影
```css
box-shadow: h-shadow v-shadow blur spread color inset;
```
| h-shadow | 必需设置的值，定义水平阴影的位置。允许负值。 |
| --- | --- |
| v-shadow | 必需设置的值，定义垂直阴影的位置。允许负值。 |
| blur | 可选设置的值，定义模糊距离。 |
| spread | 可选设置的值，定义阴影的尺寸。 |
| color | 可选设置的值，定义阴影的颜色。如果没有设置值，颜色值基于浏览器显示，建议设置。 |
| inset | 可选设置的值，设置后可将外部阴影 (outset) 改为内部阴影。 |

## 背景图片

- **background-image**
- **background-color**
- **background-origin**
- **backgroundclip**
- **background-repeat**
- **background-size**
- **background-position**
- **background-attachment**
### background-origin
```css
background-origin: padding-box|border-box|content-box;
```
| padding-box | 背景图像相对于内边距框来定位。	 |
| --- | --- |
| border-box | 背景图像相对于边框盒来定位。 |
| content-box | 背景图像相对于内容框来定位。 |

### background-clip
```css
/* Keyword values */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

/* Global values */
background-clip: inherit;
background-clip: initial;
background-clip: unset;
```
| border-box | 背景延伸至边框外沿（但是在边框下层）。 |
| --- | --- |
| padding-box | 背景延伸至内边距（padding）外沿。不会绘制到边框处。 |
| content-box | 背景被裁剪至内容区（content box）外沿。 |
| text | 背景被裁剪成文字的前景色。 |

# CSS布局
**关于grid布局这里就详细解说了，但是不代表它不重要，他和flex布局是同等重要的地位！**
**可以通过以下博客学习：**[https://zhuanlan.zhihu.com/p/256353171](https://zhuanlan.zhihu.com/p/256353171)
## flex布局
```html
    <div class="container">
        <div class="box1">1</div>
        <div class="box2">2</div>
        <div class="box3">3</div>
        <div class="box4">4</div>
        <!-- <div class="box4">5</div>
        <div class="box4">6</div>
        <div class="box4">7</div> -->
    </div>
```

```css
.container{
  display: flex;
}
.box1,.box2,.box3{
    width: 100px;
    height: 100px;
    font-size: 30px;
    color:white;
}
.box1{
    background-color: cornflowerblue;
}
.box2{
    background-color: cyan;
}
.box3{
    background-color: darkblue;
}
.box4{
    width: 500px;
    height: 200px;
    font-size: 40px;
    background-color: sienna;
    border: 1px solid seagreen;
}
```
### flex布局是什么？
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

```css
/*我们使用 display: flex 的时候，实际定义的是 display: block flex*/
.box{
  display: flex;
}
/*行内元素使用*/
.box{
  display: inline-flex;
}
```

注意，设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效

### 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![image.png](https://cdn.nlark.com/yuque/0/2021/png/2634470/1631722919836-308213fd-f7b8-4246-806c-4b461fb02ab6.png#averageHue=%23f3e5c2&clientId=ua4862734-942c-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u32abaeda&margin=%5Bobject%20Object%5D&name=image.png&originHeight=333&originWidth=563&originalType=url&ratio=1&rotation=0&showTitle=false&size=30854&status=done&style=none&taskId=u652daeeb-1d4f-44c1-a39f-2a164b3fc1c&title=)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）

### 容器的属性

容器的属性即指盒子的父级的属性

- flex-direction:属性决定主轴的方向（即项目的排列方向）

![image.png](https://cdn.nlark.com/yuque/0/2021/png/2634470/1631722931951-19ac97b2-857d-4840-8e3c-42c4c2b57189.png#averageHue=%23fbeadc&clientId=ua4862734-942c-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uc4c9c8fb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=203&originWidth=796&originalType=url&ratio=1&rotation=0&showTitle=false&size=7519&status=done&style=none&taskId=u51179462-f06b-4e75-ba07-2a8234b4ee2&title=)
```css
.box {
   flex-direction: column | 	column-reverse |row | row-reverse ;
}
```

   - `row`（默认值）：主轴为水平方向，起点在左端。
   - `row-reverse`：主轴为水平方向，起点在右端。
   - `column`：主轴为垂直方向，起点在上沿。
   - `column-reverse`：主轴为垂直方向，起点在下沿。
- flex-wrap
默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。
```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- flex-flow
`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。
```css
.box{
flex-wrap:row wrap;
}
```

- justify-content
`justify-content`属性定义了项目在主轴上的对齐方式。
| 值 | 描述 |
| --- | --- |
| flex-start | 默认值，左对齐 |
| flex-end | 右对齐 |
| center | 居中 |
| space-between | 两端对齐，项目之间的间隔是相等的 |
| space-around | 每个项目两侧的间隔相等 |
| initial | 将此属性设置为属性的默认值 |
| inherit | 从父元素继承属性的值 |

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
/*
注意这俩的区别!!
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
*/
```

- aligin-items
| 值 | 描述 |
| --- | --- |
| stretch | 默认值，项目将被拉伸以适合容器 |
| center | 项目位于容器的中央 |
| flex-start | 项目位于容器的顶部 |
| flex-end | 项目位于容器的底部 |
| baseline | 项目与容器的基线对齐 |
| initial | 将此属性设置为属性的默认值 |
| inherit | 从父元素继承属性的值 |


几个属性值的效果如下图所示：

![](https://cdn.nlark.com/yuque/0/2022/gif/22972177/1667651709375-5b09e3f8-a61f-4891-98dc-2bdbc62b3b30.gif#averageHue=%23c7847e&clientId=ua6d1c5db-8f20-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ufd5d4956&margin=%5Bobject%20Object%5D&originHeight=731&originWidth=616&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u9e9690a9-bfa3-4e4d-af20-49d8bd99857&title=)
```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
/*
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
*/
```

- align-content
- align-content 属性与 justify-content 属性类似，可以在弹性盒子的侧轴还有多余空间时调整容器内项目的对齐方式，属性的可选值如下：

| 值 | 描述 |
| --- | --- |
| stretch | 默认值，将项目拉伸以占据剩余空间 |
| center | 项目在容器内居中排布 |
| flex-start | 项目在容器的顶部排列 |
| flex-end | 项目在容器的底部排列 |
| space-between | 多行项目均匀分布在容器中，其中第一行分布在容器的顶部，最后一行分布在容器的底部 |
| space-around | 多行项目均匀分布在容器中，并且每行的间距（包括离容器边缘的间距）都相等 |
| initial | 将此属性设置为属性的默认值 |
| inherit | 从父元素继承该属性的值 |


几个属性值的效果如下图所示：

![](https://cdn.nlark.com/yuque/0/2022/gif/22972177/1667651955965-53de1864-e76e-4001-9523-ef1f5950897a.gif#averageHue=%23c08381&clientId=ua6d1c5db-8f20-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u69ccd797&margin=%5Bobject%20Object%5D&originHeight=732&originWidth=616&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u5862769b-78b6-4ffe-9f35-1cc3ed7c929&title=)
```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

#### 项目的属性

设置在项目上 即是容器里的小盒子上

- order
属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
```css
.box{
	order:-1;
}
```

- flex-grow属性
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2634470/1631722942759-1c7726fa-386b-4d05-a49f-bd72722c6109.png#averageHue=%23e67f24&clientId=ua4862734-942c-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u6d64a55c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=211&originWidth=802&originalType=url&ratio=1&rotation=0&showTitle=false&size=7337&status=done&style=none&taskId=u1678726a-3c0f-4a8f-914b-d722b3a2f0f&title=)
```css
.item {
  flex-grow: 1;
}
```

- flex-shrink
`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
**这后面的大家可以自己下去看看**
```css
.box{
	flex-shrink:0;
}
```

- flex-basis
`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。
- flex
`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。
- aligin-self
属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`相关知识链接

[flex布局语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

[flex布局实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
### 浮动
[https://blog.csdn.net/ZhengDaHui360/article/details/120629612](https://blog.csdn.net/ZhengDaHui360/article/details/120629612)
# CSS动画
[https://www.w3school.com.cn/css/css3_animations.asp](https://www.w3school.com.cn/css/css3_animations.asp)
## CSS3变形
### 2D

- translate()
- rotate()
- scale()
- skew()
- matrix()
| 函数 | 描述 |
| --- | --- |
| matrix(_n_,_n_,_n_,_n_,_n_,_n_) | 定义 2D 转换，使用六个值的矩阵。 |
| translate(_x_,_y_) | 定义 2D 转换，沿着 X 和 Y 轴移动元素。 |
| translateX(_n_) | 定义 2D 转换，沿着 X 轴移动元素。 |
| translateY(_n_) | 定义 2D 转换，沿着 Y 轴移动元素。 |
| scale(_x_,_y_) | 定义 2D 缩放转换，改变元素的宽度和高度。 |
| scaleX(_n_) | 定义 2D 缩放转换，改变元素的宽度。 |
| scaleY(_n_) | 定义 2D 缩放转换，改变元素的高度。 |
| rotate(_angle_) | 定义 2D 旋转，在参数中规定角度。 |
| skew(_x-angle_,_y-angle_) | 定义 2D 倾斜转换，沿着 X 和 Y 轴。 |
| skewX(_angle_) | 定义 2D 倾斜转换，沿着 X 轴。 |
| skewY(_angle_) | 定义 2D 倾斜转换，沿着 Y 轴。 |

### 3D

- rotateX()
- rotateY()
| 函数 | 描述 |
| --- | --- |
| matrix3d(_n_,_n_,_n_,_n_,_n_,_n_,
_n_,_n_,_n_,_n_,_n_,_n_,_n_,_n_,_n_,_n_) | 定义 3D 转换，使用 16 个值的 4x4 矩阵。 |
| translate3d(_x_,_y_,_z_) | 定义 3D 转化。 |
| translateX(_x_) | 定义 3D 转化，仅使用用于 X 轴的值。 |
| translateY(_y_) | 定义 3D 转化，仅使用用于 Y 轴的值。 |
| translateZ(_z_) | 定义 3D 转化，仅使用用于 Z 轴的值。 |
| scale3d(_x_,_y_,_z_) | 定义 3D 缩放转换。 |
| scaleX(_x_) | 定义 3D 缩放转换，通过给定一个 X 轴的值。 |
| scaleY(_y_) | 定义 3D 缩放转换，通过给定一个 Y 轴的值。 |
| scaleZ(_z_) | 定义 3D 缩放转换，通过给定一个 Z 轴的值。 |
| rotate3d(_x_,_y_,_z_,_angle_) | 定义 3D 旋转。 |
| rotateX(_angle_) | 定义沿 X 轴的 3D 旋转。 |
| rotateY(_angle_) | 定义沿 Y 轴的 3D 旋转。 |
| rotateZ(_angle_) | 定义沿 Z 轴的 3D 旋转。 |
| perspective(_n_) | 定义 3D 转换元素的透视视图。 |

## 过渡样式
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [transition](https://www.runoob.com/cssref/css3-pr-transition.html) | 简写属性，用于在一个属性中设置四个过渡属性。 | 3 |
| [transition-property](https://www.runoob.com/cssref/css3-pr-transition-property.html) | 规定应用过渡的 CSS 属性的名称。 | 3 |
| [transition-duration](https://www.runoob.com/cssref/css3-pr-transition-duration.html) | 定义过渡效果花费的时间。默认是 0。 | 3 |
| [transition-timing-function](https://www.runoob.com/cssref/css3-pr-transition-timing-function.html) | 规定过渡效果的时间曲线。默认是 "ease"。 | 3 |
| [transition-delay](https://www.runoob.com/cssref/css3-pr-transition-delay.html) | 规定过渡效果何时开始。默认是 0。 | 3 |

## 关键帧动画

- @keyframes
- animation-name
- animation-duration
- animation-delay
- animation-iteration-count
- animation-direction
- animation-timing-function
- animation-fill-mode
- animation
```css
@keyframes myfirst{
    0%   {background: red; left:0px; top:0px;transform: rotate(30deg);}
    25%  {background: yellow; left:200px; top:0px;transform: rotate(0deg);}
    50%  {background: blue; left:200px; top:200px;transform: rotate(0deg);}
    75%  {background: green; left:0px; top:200px;transform: rotate(-30deg);}
    100% {background: red; left:0px; top:0px;transform: rotate(0deg);}
}
.box{
    animation: myfirst 5s;
    background-color: red;
    width: 100px;
    height: 100px;
    position: relative;
}
```

想学习更多 请点击—>[CSS3](https://www.w3school.com.cn/css3/css3_animation.asp)
# CSS媒体查询
CSS2 引入了媒体类型
CSS2 中引入了 @media 规则，它让为不同媒体类型定义不同样式规则成为可能。

例如：您可能有一组用于计算机屏幕的样式规则、一组用于打印机、一组用于手持设备，甚至还有一组用于电视，等等。

不幸的是，除了打印媒体类型之外，这些媒体类型从未得到过设备的大规模支持。

CSS3 引入了媒体查询
CSS3 中的媒体查询扩展了 CSS2 媒体类型的概念：它们并不查找设备类型，而是关注设备的能力。

媒体查询可用于检查许多事情，例如：

视口的宽度和高度
设备的宽度和高度
方向（平板电脑/手机处于横向还是纵向模式）
分辨率
使用媒体查询是一种流行的技术，可以向台式机、笔记本电脑、平板电脑和手机（例如 iPhone 和 Android 手机）提供定制的样式表。
## 媒体查询语法
媒体查询由一种媒体类型组成，并可包含一个或多个表达式，这些表达式可以解析为 true 或 false。
@media not|only mediatype and (expressions) {   CSS-Code; } 
如果指定的媒体类型与正在显示文档的设备类型匹配，并且媒体查询中的所有表达式均为 true，则查询结果为 true。当媒体查询为 true 时，将应用相应的样式表或样式规则，并遵循正常的级联规则。
除非您使用 not 或 only 运算符，否则媒体类型是可选的，且隐含 all 类型。
您还可以针对不同的媒体使用不同的样式表：
```css
<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
```
## CSS3 媒体类型
| 值 | 描述 |
| --- | --- |
| all | 用于所有媒体类型设备。 |
| print | 用于打印机。 |
| screen | 用于计算机屏幕、平板电脑、智能手机等等。 |
| speech | 用于大声“读出”页面的屏幕阅读器。 |

## 相对单位和绝对单位
[https://blog.csdn.net/Abudula__/article/details/81433811](https://blog.csdn.net/Abudula__/article/details/81433811)
![](https://cdn.nlark.com/yuque/0/2022/png/22972177/1668231887474-3f6fba43-0b1d-4976-922a-7643f66603fc.png#averageHue=%23fdfdfd&clientId=u6e9e1580-eee3-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u20622911&margin=%5Bobject%20Object%5D&originHeight=244&originWidth=622&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u8bf237e1-26b6-4b4e-b502-5acb655aaef&title=)
## 作业
**完成如下图的内容，截止日期为11.19日中午12:00**

**提交邮箱：** **frontend@lanshan.email    **
**提交格式：**标题命名为**学号-姓名-第二次作业** ,内容为**github地址 或 zip压缩包格式**
### 1.渐变
![image.png](https://cdn.nlark.com/yuque/0/2022/png/22972177/1667653247918-d7fc7963-cf7d-40b2-ba3c-d8ea5cc6d564.png#averageHue=%230f781f&clientId=u83269fe5-1e5d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=137&id=u0fedd9d9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=206&originWidth=1192&originalType=binary&ratio=1&rotation=0&showTitle=false&size=81096&status=done&style=none&taskId=u1e9e7d2a-f491-4c6e-b2eb-95f5d28d2be&title=&width=794.6666666666666)
### 2.用flex或者grid实现如下效果
![](https://cdn.nlark.com/yuque/0/2022/gif/22972177/1667653331061-b297eb8e-3aca-412b-9359-ce0d650e3d5a.gif#averageHue=%23191a4d&clientId=u83269fe5-1e5d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ub95a8a64&margin=%5Bobject%20Object%5D&originHeight=800&originWidth=1170&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u68701c84-1bc2-4241-9f02-ba02ebc3a96&title=)
### 3.（附加题）写一个简单的轮播图
![](https://cdn.nlark.com/yuque/0/2022/gif/22972177/1667653557538-e7159527-d33c-4990-bb11-5b653528aa07.gif#averageHue=%23dcddd9&clientId=u83269fe5-1e5d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ub654a045&margin=%5Bobject%20Object%5D&originHeight=138&originWidth=400&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u95a82828-db0c-4e90-babc-0cb692412f7&title=)

