const { error } = require('console');
const fs = require('fs');

fs.copyFile("hello.txt","/copy/bye.txt",function(err){
    if(err) console.error(error.message);
    else console.log("done");
})