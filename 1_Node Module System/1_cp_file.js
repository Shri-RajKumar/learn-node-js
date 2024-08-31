// child process module

const cp = require('child_process')

if (cp.execSync('calc')) {
    console.log("calculation started..");
}
if (cp.execSync(`start chrome`)) {
    console.log("chrome opened..");
}

// console.log("output : " + cp.execSync('node test.js'));

