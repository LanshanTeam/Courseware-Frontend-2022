// (1)
const bubble = () =>{
    var arr = [3,5,7,8,10,1,66,4];
    console.log(arr);
    for(var i = 0;i < arr.length;i++){
        for(var j = 0; j < arr.length - i ; j++){
            if(arr[j] < arr[j-1]){
                var tmp = arr[j-1];
                arr[j-1]=arr[j];
                arr[j] = tmp;
            }
        }
    }
    console.log(arr);
}

// (2) 一般答案
const dedubble1 = () =>{
    var arr = [1,2,3,4,3,4,3,5,5,6,4,1,1,]
    var ans = []
    console.log(arr);
    for(var i = 0; i < arr.length;i++){
        if(ans.indexOf(arr[i]) === -1){//判断是否重复  indexOf搜索元素 如果没找到则indexOf返回-1
            ans.push(arr[i])        //输出数组还没有的元素push到ans里就不会重复啦
        } 
    } 
  console.log(ans);
}
// (2) 高阶函数写法  filter方法
const dedubble2 = () =>{
    var arr = [1,2,3,4,3,4,3,5,5,6,4,1,1,]
    console.log(arr); 
     var deArr = arr.filter(
        function(item,index){
            return arr.indexOf(item) === index;  
        });
  console.log(deArr);
}

// (3) 打印99乘法表
const print99 = () =>{
    for(var i = 0; i < 10; i++){
        var s = "";
        for(var j = 0; j < i + 1; j++){
            s += (i+"*"+j+"="+(i*j)+"\t")
        }
        console.log(s)
    }
}

// (4) 爬楼梯 递归实现 
const climb = () =>{
    let n = 2;
    console.log("n="+n);
    var ans = [];
    ans[0] = ans[1] = 1;
    for(let i = 2; i <= n; i++) {
        ans[i] = ans[i - 1] + ans[i - 2];
    }
    console.log(ans[n]);
}