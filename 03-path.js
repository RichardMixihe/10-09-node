const { default: test } = require('node:test');
const {join} = require('path')
// join()的作用是智能拼接路径，参数个数随意，每个参数都是一段路径
// console.log(join('a','b','../c','index.js'));
console.log('查看filename的结果：',__filename);//表示当前js文件的绝对路径
console.log('查看dirname的结果：',__dirname);//表示当前js文件的绝对路径（不包括最后的文件名）