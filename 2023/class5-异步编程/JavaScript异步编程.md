<h1>JavaScript异步编程</h1>

### 回顾

JavaScript是一门单线程语言，这意味着它只能同时执行一段代码，即一次只能处理一个任务。这与其他一些编程语言不同，例如Java或C++，它们可以同时执行多个线程。

想象一下你是一个餐厅的服务员，你是一个单线程的服务员。你是唯一的服务员，只能一次处理一个顾客的请求。当一个顾客进入餐厅并坐下时，你会主动走过去询问他们的需求，接收点菜信息。然后，你将这些信息传递给厨房，并等待厨师烹饪食物。在这段时间里，你不能离开顾客，因为你是单线程的，只能处理一个任务。

当厨师完成烹饪后，他将食物交给你，然后你将食物送到顾客的桌子上，并确认他们是否满意。如果顾客有任何额外的需求，你会再次与他们交流并提供帮助。

在这个例子中，你是单线程的服务员，只能一次处理一个顾客的请求。你无法同时为多个顾客提供服务，因为你只有一个身体和一对手。这就是单线程的概念，你只能按顺序处理一个任务，不能并行执行多个任务。

## 同步与异步

### 同步

JavaScript中的同步（Synchronous）指的是代码按照顺序逐行执行的方式。在同步代码中，每一行代码的执行都必须等待前一行代码执行完毕才能继续执行下一行代码，这意味着代码的执行是阻塞的，直到当前行的任务完成后才会执行下一行代码。

在同步代码中，如果遇到一个耗时的操作（如网络请求、文件读取、复杂计算等），代码会一直等待该操作完成后才会继续执行下一行代码。这可能导致页面或应用程序的阻塞，因为在等待耗时操作完成期间，JavaScript执行引擎无法执行其他任务，界面可能会冻结或不响应。

下面是一个同步代码示例：

```JavaScript
console.log("开始");
console.log("执行任务1");
console.log("执行任务2");
console.log("结束");
```

在这个示例中，代码会按照顺序执行，每一行代码都会等待前一行代码执行完毕后才会继续执行。输出结果将会是：

```JavaScript
开始
执行任务1
执行任务2
结束
```

在执行同步代码时，如果遇到一个耗时的操作，例如一个循环计算耗费较长的时间，那么代码会一直停留在这个循环中，直到循环计算完成才会继续执行后续代码。

同步代码的执行方式相对简单，因为代码按照顺序执行，开发者可以更容易地理解和控制代码的执行流程。然而，对于需要处理大量数据或耗时操作的情况，同步代码可能会导致性能问题和用户体验下降，因为页面或应用程序可能会在等待操作完成时出现卡顿或无响应的情况。

为了解决同步代码的阻塞问题，JavaScript提供了异步编程的机制，可以使用回调函数、Promise、async/await等方式来处理耗时操作，使得代码在等待操作完成期间可以执行其他任务，从而提高响应性和并发性。

### 异步

JavaScript中的异步（Asynchronous）指的是代码执行的一种非阻塞方式。在异步代码中，代码不会按照顺序逐行执行，而是将耗时的操作委托给其他机制来处理，继续执行后续代码而不等待操作完成。

异步代码的特点是可以同时执行多个任务，并在每个任务完成后触发相应的回调函数或处理异步结果。这样可以在等待一个任务的同时继续执行其他任务，提高代码的并发性和响应性。

以下是一个异步代码的示例：

```JavaScript
console.log("开始");

setTimeout(function() {
  console.log("异步操作完成");
}, 2000);

console.log("结束");
```

在这个示例中，使用了`setTimeout`函数来模拟一个异步操作，它会在2秒后触发回调函数。在执行过程中，代码不会等待`setTimeout`的计时器完成，而是继续执行后续代码。输出结果将会是：

```JavaScript
开始
结束
异步操作完成
```

在执行异步代码时，当遇到一个耗时的操作（如网络请求、文件读写、定时器等），代码会将该操作委托给其他机制处理，并立即继续执行后续代码。当操作完成后，会触发一个回调函数或返回一个Promise对象，以通知代码操作的完成。

![img](https://lanshanteam.feishu.cn/space/api/box/stream/download/asynccode/?code=NjRmYTUyZjllNzk5ZGM2NzBhNjQ0MzZkNDIzYjViMjNfZ0tJNHJTVWttYnk5NUVXRTZPSnNVWlJtVmFtY1VEMGtfVG9rZW46VWRsM2JPcFVob1BoTGJ4aUxhc2NpamtXbkFiXzE2OTgyNDAyNDM6MTY5ODI0Mzg0M19WNA)

## 任务队列与事件循环

在JavaScript中，任务队列（Task Queue）是一种用于管理异步代码执行顺序的机制。任务队列维护着待执行的任务列表，根据特定规则将任务按顺序添加到队列中，并在适当的时机执行这些任务。任务队列主要与事件循环（Event Loop）机制密切相关。

### 宏任务与微任务

JavaScript中的任务队列分为两种类型：宏任务（macrotask）和微任务（microtask）。

1. 宏任务（macrotask）：宏任务代表着较大的任务单元，通常包括整体的一段代码或者回调函数。常见的宏任务包括 `setTimeout`、`setInterval`、`XHR` 请求、事件回调等。当宏任务被添加到任务队列时，它会等待事件循环的下一轮循环来执行。
2. 微任务（microtask）：微任务代表着较小的任务单元，通常是在当前任务执行完毕后立即执行的任务。常见的微任务包括 `Promise` 的 `then`、`catch`、`finally` 方法、`MutationObserver` 等。当微任务被添加到任务队列时，它会优先于下一个宏任务执行。

事件循环是一个持续运行的循环，它不断地从任务队列中获取任务并执行。事件循环的运行过程如下：

1. 从宏任务队列中取出一个任务执行。
2. 执行过程中，如果遇到微任务，将其添加到微任务队列中。
3. 当前宏任务执行完毕后，检查微任务队列，依次执行所有微任务。
4. 检查是否需要渲染页面的更新。
5. 执行下一个宏任务（从宏任务队列中取出）。
6. 重复上述步骤，循环执行。

暂时无法在飞书文档外展示此内容

这个过程保证了任务的执行顺序和异步代码的管理。通过将任务按照宏任务和微任务的方式添加到队列中，并通过事件循环的机制来执行任务，JavaScript能够实现高效的异步编程和处理。

需要注意的是，微任务在每个宏任务执行完毕后立即执行，而不是等待所有的宏任务执行完毕。这意味着微任务能够在同一轮事件循环中快速执行，而不需要等待下一轮事件循环。

任务队列和事件循环机制是 JavaScript 异步编程的核心概念，理解它们能够帮助开发者更好地处理异步代码的执行顺序和控制程序的流程。

### 小测试

```TypeScript
console.log("桂花鸭围月季红");

setTimeout(() => {
  console.log("陈皮牛肉干");
  new Promise((resolve) => {
    console.log("红椒米熏鸡");
    resolve;
  }).then(() => {
    console.log("八宝菠菜炝鱼片");
  });
}, 0);

new Promise((resolve) => {
  console.log("黄瓜烤去皮虾");
  resolve;
});

Promise.resolve().then(() => {
  console.log("果藕");
  Promise.resolve().then(() => {
    console.log("红烧鱼翅");
  });
  setTimeout(() => {
    console.log("清汤燕菜");
  }, 0);
});

console.log("口蘑白菜卷");

Promise.resolve().then(() => {
  Promise.resolve().then(() => {
    console.log("炸鸡腿");
    Promise.resolve().then(() => {
      console.log("鸡油兰笋");
    });
  });
});

setTimeout(() => {
  console.log("樟茶去骨鸭");
  console.log("烧四素");
}, 0);

Promise.resolve().then(() => {
  console.log("核桃酪");
});
桂花鸭围月季红
黄瓜烤去皮虾
口蘑白菜卷
果藕
核桃酪
红烧鱼翅
炸鸡腿
鸡油兰笋
陈皮牛肉干
红椒米熏鸡
樟茶去骨鸭
烧四素
清汤燕菜
```

## 常见的异步形式

### 回调函数

回调函数是一种传递给异步函数的函数，在异步操作完成后被调用。通过将回调函数作为参数传递给异步函数，可以在异步操作完成后执行相应的处理逻辑。

#### 1.定时器回调函数

在使用`setTimeout`或`setInterval`函数创建定时器时，可以传递一个回调函数作为参数，用于指定需要在一定时间后执行的操作。

```TypeScript
setTimeout(function () {
  console.log("定时器回调函数");
}, 1000);
```

#### 2.事件处理回调函数

在处理DOM事件或其他异步事件时，通常需要指定一个回调函数来处理事件触发时的操作。

```TypeScript
document.addEventListener("click", function () {
  console.log("点击事件回调函数");
});
```

#### 3.AJAX回调函数

在进行异步请求（如通过XMLHttpRequest或fetch发送请求）时，可以指定回调函数来处理响应结果。

```TypeScript
fetch("https://api.example.com/data")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("AJAX回调函数", data);
  });
```

### 回调地狱

回调地狱（Callback Hell）是指在异步编程中，多个嵌套的回调函数形成的复杂和难以维护的代码结构。当有多个异步操作需要依次执行，并且后一个操作依赖于前一个操作的结果时，代码会出现深层嵌套的回调函数，导致代码可读性差、难以理解和调试。

以下是一个典型的回调地狱示例：

```TypeScript
asyncFunc1(function (result1) {
  asyncFunc2(result1, function (result2) {
    asyncFunc3(result2, function (result3) {
      asyncFunc4(result3, function (result4) {
        // 更多回调函数...
      });
    });
  });
});
```

这种嵌套回调的代码结构使得代码难以理解，可读性差，同时也增加了出错的可能性。当需要处理大量的异步操作时，回调地狱会导致代码的可维护性和可扩展性变差。

### Promise

在 JavaScript 中，Promise 是一种用于处理异步操作的对象。它表示一个异步操作的最终完成或失败，并提供了一种更优雅的方式来处理异步代码。

创建 Promise 对象可以使用 Promise 构造函数，它接受一个执行器函数作为参数。执行器函数会立即执行，通常包含异步操作，并决定 Promise 是成功还是失败。执行器函数带有两个参数，它们是 resolve 和 reject 函数，用于将 Promise 标记为成功或失败。

暂时无法在飞书文档外展示此内容

我们在使用构造Promise的时候，构造函数内部的代码是立即执行的

```TypeScript
new Promise((resolve, reject) => {
    console.log("Promise start")
    resolve('success')
})
console.log("End")
//Promise start
//End
```

我们可以利用Promise的特性进行实例化

```TypeScript
const myPromise = new Promise( resolve => {
    setTimeOut( () => {
        console.log('执行完成')
        resolve('win')
    })
    myPromise.then(()=>{})
})
```

也可以使用返回实例函数的方式接收(推荐)

```TypeScript
const setPromise = () => {
    return new Promise( resolve => {
         setTimeOut(()=>{
             resolve('在蓝山学习真是太有趣了')
         }, 1000)   
    })
}
const myPromise = setPromise()
myPromise.then( res =>{
    console.log(res)
})
```

Promise的构造函数接收一个参数(函数)，该函数接收两个参数：

- resolve：异步操作执行成功时的回调函数
- reject：异步操作执行失败时的回调函数

### then()方法的链式调用

在 JavaScript 的 Promise 中，`then` 方法用于处理 Promise 成功的情况，并支持链式调用。通过链式调用 `then` 方法，可以在一个 Promise 的成功回调函数中返回另一个 Promise，从而形成一个 Promise 链。

在链式调用中，每个 `then` 方法都会返回一个新的 Promise 对象，该对象可以用于注册下一个 `then` 方法的回调函数。这样，可以将多个异步操作链接在一起，并按顺序处理它们的结果。

下面是一个简单的示例，演示了 `then` 方法的链式调用：

```TypeScript
asyncFunc1()
  .then((result1) => {
    console.log("操作 1 成功:", result1);
    return asyncFunc2(result1);
  })
  .then((result2) => {
    console.log("操作 2 成功:", result2);
    return asyncFunc3(result2);
  })
  .then((result3) => {
    console.log("操作 3 成功:", result3);
    // 更多操作...
  })
  .catch((error) => {
    console.log("操作失败:", error);
  });
```

在上述示例中，`asyncFunc1`、`asyncFunc2`、`asyncFunc3` 是三个异步函数，它们返回 Promise 对象。通过链式调用 `then` 方法，每个操作的结果都会传递给下一个操作。如果任何一个操作失败，则会跳过后续的 `then` 方法，直接执行 `catch` 方法中的错误处理逻辑。

需要注意的是，在链式调用中，每个 `then` 方法都可以返回一个新的 Promise 对象，从而允许进一步的链式调用。这使得代码更具可读性和可维护性，避免了回调地狱的问题。

此外，`then` 方法还可以接受两个参数，分别是成功回调函数和失败回调函数。如果只关心成功的情况，也可以省略失败回调函数。

### catch()的用法

`catch` 方法用于处理 Promise 失败的情况。它是 `then` 方法的一个特殊形式，用于注册 Promise 的错误处理回调函数。

`catch` 方法接受一个回调函数作为参数，该回调函数会在 Promise 被拒绝（rejected）时被调用，并接收拒绝的原因（通常是一个 Error 对象）作为参数。通过 `catch` 方法，可以集中处理 Promise 链中的错误，避免在每个 `then` 方法中都编写错误处理逻辑。

下面是一个简单的示例，演示了 `catch` 方法的使用：

```TypeScript
asyncFunc()
  .then((result) => {
    console.log("操作成功:", result);
  })
  .catch((error) => {
    console.log("操作失败:", error);
  });
```

在上述示例中，`asyncFunc` 是一个返回 Promise 对象的异步函数。通过 `then` 方法注册了成功回调函数，通过 `catch` 方法注册了错误处理回调函数。如果 Promise 成功，则会执行成功回调函数；如果 Promise 失败，则会执行错误处理回调函数。

需要注意的是，`catch` 方法只会捕获最近的 Promise 链中的错误。如果在链式调用中的某个 `then` 方法中抛出了错误，但没有使用 `catch` 方法进行处理，那么错误将会被传递到下一个 `catch` 方法中。因此，建议在 Promise 链的末尾使用一个最终的 `catch` 方法，以确保能够处理所有可能的错误。

除了使用 `catch` 方法，还可以在 `then` 方法中的第二个参数中指定失败回调函数来处理 Promise 的失败情况。这种方式与 `catch` 方法类似，但它只处理当前 `then` 方法的失败，不会捕获后续 `then` 方法中的错误。

### all()方法

`Promise.all` 是 JavaScript 中 Promise 的一个静态方法，用于处理多个 Promise 对象，并在所有 Promise 都成功完成时返回一个新的 Promise 对象。如果其中任何一个 Promise 失败，则返回的 Promise 会立即被拒绝，并传递失败的原因。

`Promise.all` 方法接受一个 Promise 数组作为参数，并返回一个新的 Promise。返回的 Promise 将在所有的 Promise 都成功解决后解决，并将解决值作为一个数组传递。数组中的值的顺序与输入的 Promise 数组中的顺序一致。

下面是一个示例，演示了 `Promise.all` 方法的使用：

```JavaScript
const promise1 = asyncFunc1();
const promise2 = asyncFunc2();
const promise3 = asyncFunc3();
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("所有操作都成功:", results);
  })
  .catch((error) => {
    console.log("至少有一个操作失败:", error);
  });
```

在上述示例中，`promise1`、`promise2`、`promise3` 是三个 Promise 对象，它们分别表示三个异步操作。通过 `Promise.all` 方法将它们作为数组传递，并使用 `then` 方法注册成功回调函数。当所有的 Promise 都成功解决时，成功回调函数将被调用，并接收一个包含所有结果的数组。

如果其中任何一个 Promise 失败，则返回的 Promise 会立即被拒绝，并传递失败的原因。在上述示例中，如果任何一个 Promise 失败，`catch` 方法中的错误处理回调函数将被调用。

需要注意的是，传递给 `Promise.all` 的 Promise 数组中的 Promise 可以是异步操作的返回值，也可以是已经解决的（已完成或已拒绝）Promise。如果传递一个空数组给 `Promise.all`，则返回的 Promise 将立即解决为一个空数组。

### race()方法

`Promise.race` 是 JavaScript 中 Promise 的一个静态方法，用于处理多个 Promise 对象，并在其中任意一个 Promise 完成（无论是成功还是失败）时返回一个新的 Promise 对象。返回的 Promise 将与第一个完成的 Promise 具有相同的状态和结果。

`Promise.race` 方法接受一个 Promise 数组作为参数，并返回一个新的 Promise。返回的 Promise 将与第一个完成的 Promise 具有相同的状态和结果。

下面是一个示例，演示了 `Promise.race` 方法的使用：

```JavaScript
const promise1 = asyncFunc1();
const promise2 = asyncFunc2();
const promise3 = asyncFunc3();
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log("第一个完成的操作:", result);
  })
  .catch((error) => {
    console.log("所有操作都失败:", error);
  });
```

在上述示例中，`promise1`、`promise2`、`promise3` 是三个 Promise 对象，它们分别表示三个异步操作。通过 `Promise.race` 方法将它们作为数组传递，并使用 `then` 方法注册成功回调函数。当其中任意一个 Promise 完成时（无论是成功还是失败），成功回调函数将被调用，并接收第一个完成的 Promise 的结果。

如果其中任何一个 Promise 失败，返回的 Promise 也会被拒绝，并传递失败的原因。在上述示例中，如果所有的 Promise 都失败，则 `catch` 方法中的错误处理回调函数将被调用。

需要注意的是，`Promise.race` 方法只关注第一个完成的 Promise，而忽略其他 Promise 的状态和结果。一旦第一个 Promise 完成，返回的 Promise 将立即完成，而不会等待其他 Promise 的完成。

### Generator*

JavaScript Generator（生成器）是一种特殊类型的函数，它可以通过多次返回值的方式来生成一系列的值。Generator 函数使用 `function*` 语法进行定义，并使用 `yield` 关键字来产生（yield）值。

下面是一个简单的示例，展示了 Generator 函数的定义和使用：

```JavaScript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = numberGenerator();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }
```

在上面的示例中，`numberGenerator` 是一个 Generator 函数，通过使用 `function*` 语法进行定义。函数体内使用 `yield` 关键字来产生一系列的值。每次调用 `yield` 语句时，函数会返回一个对象，其中 `value` 属性表示生成的值，而 `done` 属性表示是否已经生成完所有的值。

通过调用 `numberGenerator` 函数，可以获得一个 Generator 对象 `generator`。然后，可以使用 `generator.next()` 方法来获取生成器生成的值。每次调用 `next()` 方法，生成器都会从上一个 yield 语句处继续执行，直到遇到下一个 yield 语句或函数结束。

当生成器生成完所有的值后，再次调用 `next()` 方法时，会返回一个值为 `undefined` 的对象，并将 `done` 属性设为 `true`，表示生成器已经完成。

除了使用 `next()` 方法来遍历生成器生成的值之外，还可以使用 `for...of` 循环来遍历生成器。这样可以更方便地获取生成器生成的所有值。

Generator 函数还支持通过 `yield*` 语法来委托给另一个 Generator 函数。这样可以将多个 Generator 函数组合在一起，形成一个更复杂的生成器。

## 终极操作： async

在 JavaScript 中，`async/await` 是一种用于处理异步操作的语法糖（syntactic sugar）。它建立在 Promise 的基础上，提供了一种更简洁、更直观的方式来编写异步代码。

`async/await` 结合使用两个关键字：`async` 和 `await`。

1. `async` 关键字用于修饰函数，将其标记为异步函数。异步函数内部可以使用 `await` 关键字来等待（await）一个 Promise 对象的解决（resolve）或拒绝（reject）。
2. `await` 关键字用于等待一个 Promise 对象的解决或拒绝，并暂停异步函数的执行，直到 Promise 对象完成。

下面是一个示例，演示了 `async/await` 的使用：

```JavaScript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunc() {
  console.log("开始");
  
  await delay(2000);
  console.log("等待 2 秒");
  
  await delay(1000);
  console.log("又等待 1 秒");
  
  console.log("完成");
}

asyncFunc();
```

在上述示例中，`delay` 函数返回一个 Promise 对象，用于模拟一个异步操作。`asyncFunc` 是一个异步函数，使用 `async` 关键字进行修饰。在函数内部，通过使用 `await` 关键字等待 `delay` 函数返回的 Promise 对象。

当遇到 `await` 关键字时，`asyncFunc` 函数会暂停执行，直到等待的 Promise 对象解决或拒绝。在等待期间，控制权会返回给调用者，允许其他操作或函数继续执行。

在上述示例中，`asyncFunc` 函数会依次等待 2 秒和 1 秒，然后打印出一系列的日志。由于使用了 `await` 关键字，这些操作看起来像是同步的，代码的执行顺序更直观、易读。

需要注意的是，`await` 关键字只能在异步函数（使用 `async` 关键字修饰的函数）内部使用。在非异步函数中使用 `await` 关键字会导致语法错误。
