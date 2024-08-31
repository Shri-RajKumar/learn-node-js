const { log } = require('console')
const path = require('path')


const fileExtention = path.extname("D:\\Work\\NODE JS\\calculator.js")
console.log(fileExtention);



const fileBasename = path.basename("D:\\Work\\NODE JS\\calculator.js")
console.log(fileBasename);


console.log("full path with file name :: " + __filename);
console.log("full directory name where is file present :: " +__dirname);