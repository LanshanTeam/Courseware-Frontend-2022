function fn(){ 
    // 1//.typeof 2//instanceof 3.tostring
    var a;
var name= new Object
console.log(name.__proto__);
    // console.log (a instanceof String); //type of打印null 对象显示的使object
    var b = null;
    // var b = {}
    console.log ("b="+b); //type of打印null 对象显示的使object
    console.log (b instanceof Object); //type of打印null 对象显示的使object
    var c = 1;
    console.log (typeof(c));  
    var d = false;
    console.log (typeof(d))
    //对象
    console.log (typeof(fun1()))
    var obj ={
        key1:'31',
        key2:'5'
    }
    console.log (typeof(obj))
    // var obj2 = {
    //     name: "lpc",
    //     sex:"man"
    // }
   
    // var obj2=new Object();
    // obj2.name = "lpc"
    // obj2.sex = "man"
    // console.log(obj2)
    // console.log(obj2.name)
    // console.log(obj2.sex)

   let obj3 = createobj(1,2);

    console.log(obj3.key)
    const arr =[0,1,2,3];
    arr.forEach((item,index)=>{
        console.log(item)
    })
    console.log(arr);
    arr.push("6")
    console.log(arr);
    arr.pop()
    console.log(arr);
    arr.push(createobj())
    console.log(arr);


    console.log(0+"*"+0+"="+ans)
    // console ={
    //     log();
    //     alert();
    //     warn()
    // }
    console.log()

var fruits = new Array(3); //创建一个长度为3的空数组
 console.log(fruits);
fruits[0] = "apple";      
fruits[1] = "banana";
// fruits[2] = "pear";
 console.log(fruits);
}

function createobj(a,b){
    console.log(sss)
    var tmp = {
        key : a,
        name: b
    }
    return tmp;
}
function fun3(){

}
function fun1(){
    a = 2
    function fun2(){
        fun3()
    }
    fun1();
}


// function fn(){ 
//     t = true  
//     if(t){
//        var name = 'LanMei';
//        console.log (name);  //LanMei
//      }
//       console.log (name);  //LanMei
//      if(t){
//           let birth = 1010; 
//           console.log ();  //1010
//       }
// //    console.log (birth); //errr //undefined
//    console.log (name);  //LanMei 
// }     

function sum(){
   console.log(a)
}

const v=()=>{
    console.log(b*b)
}


function hanshuming(a,b){

}

function OpenDoor(){
    console.log("OpenDoor")
}
function opendoor(){
    console.log("opendoor")
}
// function varLetConst(){
//    var a = 1
// }

// function newNum(){
//     console.log("来蓝山找灿狗学前端！");
// }


// function newNum(){
//     console.log("来蓝山找灿狗学前端！");
// }
