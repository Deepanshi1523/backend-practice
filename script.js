const { error } = require('console');
const fs = require('fs');

fs.unlink("hello.txt",function(err){
    if(err) console.error(error.message);
    else console.log("done");
})