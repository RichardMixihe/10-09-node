// 对于fs、文件系统来说，我们学readFile和writeFile两个方法

// const { readFile } = require("fs");
const {readFile,writeFile} = require('fs');

// ---------------readFile---------------
// 语法
// readFile('文件名','可选的utf-8',(err,data) => {
//     err表示错误信息；【没有错误err=null】【有错误err=错误信息】
//     data表示读取的结果
// })

// readFile('05-test.txt',('utf-8'),(err,data) =>{
//     if(err) throw err; //throw err 跑出错误，抛出后后面的代码不会执行
//     console.log(data);
// })



// ---------------writeFile---------------
//写入文件（向文件中添加内容）
// writeFile('05-test.txt','写入内容',err=>{

// })
// 特点：
// 特点一：如果写入的文件不存在，会自动创建文件（但是不会递归创建）
// 特点二：会覆盖文件中原有的内容
writeFile('test.txt','12345',err=>{
    if(err) throw err
    console.log('写入成功');
})