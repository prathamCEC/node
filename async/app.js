//async
const {readFile,writeFile}=require("fs")
console.log("1")
//callback function is a function passed inside another function as an arugment
writeFile('./simple/first.txt','hi',(err,res) =>{
    if(err) {
        return
    }
    console.log("2")
})
readFile('./simple/first.txt','utf-8',(err,res) =>{
    if(err) {
  
        return
    }
    // const read=res;
    console.log("3")
})
console.log("4")


// const{readFileSync,writeFileSync}=require('fs')
// console.log("1")
// const read=readFileSync('./simple/first.txt','utf-8')
// console.log("2")
// writeFileSync('./simple/first.txt','I changed my text',{flag:'a'})
// console.log("3")
// writeFileSync('./simple/second.txt','another file',{flag:'a'})

