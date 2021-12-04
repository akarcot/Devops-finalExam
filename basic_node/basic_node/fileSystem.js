const fs = require('fs')

fs.readFile('./story.txt', (err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

