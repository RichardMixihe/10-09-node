console.log(JSON.stringify(obj));
console.log(obj);


// JSON的作用一：浏览器和服务器传输数据的时候，都需要把数据转成JSON,然后再传输
// JS0N的作用二：向本地存储，存储JS对象或数组的时候，都需要先转成JS0N格式
// JS0N的作用三：向文件中写入JS对象或数组的时候，都需要先转成JSON格式
// JSON的作用四：当做配置文件（项目的配置文件、vscode的配置文件等等）

// JSON的写法：
// JS0N中，允许的类型有字符串、数字、布尔、nuLL、数组、对象
// JSON中，不允许的有undefined、函数、注释
// JS0N中，只要出现字符串，必须加双引号
// 一个完整的 JSON数据，只能有一部分数据