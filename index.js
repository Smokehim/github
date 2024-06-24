const name = require('http');
const file = require('fs');
const link = require('url')
const os = require('os')
const path = require('path')

// const name = file.parse('')
const input = name
.createServer((req, res)=>{
    file.read('name.html',(err, result)=>{
        if(err){
            res.write("not able to ready")
        }else{
            res.write(result)
            res.end()
        }
    })
    // file.mkdtemp('goo', (err, result)=>{
    //     if(err){
    //         res.write("not able to create a folder")
    //     }else{
    //         res.write(result)
    //         res.end()
    //     }
    // })
})
input.listen(7000, (err, result)=>{
    if(err){
        console.log("error here")
    }else{
        console.log("connected to the internet")
  
  }
});
file.writeFile('it.txt', (err,result)=>{
    if(err){
        console.log("not able to ready file");
    }else{
        console.log("readdy file", result)
    }
})
path.extname('name.html')
console.log(path)