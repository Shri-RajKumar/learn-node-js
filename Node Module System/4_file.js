// file system

const fs = require('fs')

const readFile = fs.readFileSync(`D:\\Work\\NODE JS\\Node Module System\\resource\\f1.txt`)

console.log("---------------file content : -----------------\n" + readFile);

const writeFile = fs.writeFileSync("./resource/f1.txt" , "file system f1.txt file content.")

console.log("created and wirtten the file." + writeFile);

const appendf1file = fs.appendFileSync("./resource/f1.txt" , "\n file aapend : file system f1.txt file content.")

console.log("created file f1 has now append some data : " + appendf1file);


if(fs.unlinkSync("\\resource\\f1.txt"))
    console.log("f2.txt file deleted");


