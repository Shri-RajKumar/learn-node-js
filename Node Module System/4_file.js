// // file system  with file

// const fs = require('fs')

// // const readFile = fs.readFileSync(`D:\\Work\\NODE JS\\Node Module System\\resource\\f1.txt`)

// // console.log("---------------file content : -----------------\n" + readFile);

// // const writeFile = fs.writeFileSync("./resource/f1.txt" , "file system f1.txt file content.")

// // console.log("created and wirtten the file." + writeFile);

// // const appendf1file = fs.appendFileSync("./resource/f1.txt" , "\n file aapend : file system f1.txt file content.")

// // console.log("created file f1 has now append some data : " + appendf1file);


// // if(fs.unlinkSync("\\resource\\f1.txt"))
// //     console.log("f2.txt file deleted");


// // file system  with Directory

// // create a dir

// // fs.mkdirSync("resource 2")
// // console.log("resource 2 dir create.");

// // check the content in the resource 2 folder.

// let folderPath1 = "D:\\Work\\NODE JS\\Node Module System\\resource";
// let folderPath2 = "D:\\Work\\NODE JS\\Node Module System\\resource 2";
// let contentInFolder1 = fs.readdirSync(folderPath1);
// let contentInFolder2 = fs.readdirSync(folderPath2);
// console.log(contentInFolder1);
// console.log(contentInFolder2);


// let exitFolder1 = fs.existsSync("resource")
// let exitFolder2 = fs.existsSync("resource 2")
// let exitFolder3 = fs.existsSync("source")
// console.log("resource folder is exists : " , exitFolder1);
// console.log("resource 2 folder is exists : " , exitFolder2);
// console.log("source folder is exists : " , exitFolder3);



// // fs.rmdirSync("D:\\Work\\NODE JS\\Node Module System\\resource 2");


