const { error } = require('console');
const fs = require('fs');

fs.readFile("./bye.txt",'utf8',function(err,data){
    if(err) console.error(error.message);
    else console.log(data);
})