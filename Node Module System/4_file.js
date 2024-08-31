// file system

const fs = require('fs')

const readFile = fs.readFileSync('D:\\Work\\NODE JS\\Node Module System\\resource\\f1.txt')

console.log("---------------file content : -----------------\n" + readFile);

const writeFile = fs.writeFileSync("./resource/f2.txt" , "file system f2.txt file content.")

console.log("created and wirtten the file." + writeFile);

const appendf2file = fs.appendFileSync("./resource/f2.txt" , "\n file aapend : file system f2.txt file content.")

console.log("created file f2 has now append some data : " + appendf2file);



