
const {readFile} = require('fs')

readFile('books.json','utf-8',(err,data)=>{
    if(err) throw err ;
    // console.log(data);
    console.log(JSON.parse(data));
})