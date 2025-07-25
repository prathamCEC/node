//fs module

//couirenst path = require('fs') //filesystem(fs) has 2 operation read, write can be either (synchronus or async)
// const read=fs.readFileSync
// const write=fs.writeFileSync

const{readFileSync,writeFileSync}=require('fs')
console.log("1")
const read=readFileSync('./simple/first.txt','utf-8')
console.log(read)
writeFileSync('./simple/first.txt','I changed my text',{flag:'a'})
writeFileSync('./simple/second.txt','another file',{flag:'a'})

