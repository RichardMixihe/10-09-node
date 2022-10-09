//需求：向book.json，增加一本书（朝花夕拾，鲁迅，商务出版社——

const {readFile,writeFile} = require("fs");


// 1.先读取原有的图书
readFile('books.json','utf-8',(err,data)=>{
    if(err) throw err;
    let arr = JSON.parse(data);
    arr.push({id:Date.now(),bookname:'朝花夕拾',author:'鲁迅',publisher:'商务出版社'})
    writeFile('books.json',JSON.stringify(arr),err=>{
        if(err) throw err;
        console.log('添加成功');
    })
})
// 2.push，向数组中新增一本书
// 3.把数组重新存入books.json






