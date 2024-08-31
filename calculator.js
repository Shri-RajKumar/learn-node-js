
// Arithmatic calculation modules

function add(a , b) {
    console.log("add results is " + (a+b));
}
function sub(a , b) {
    console.log("substraction results is " + (a - b));
}
function mul(a , b) {
    console.log("multiplication results is " + (a * b));
}
function div(a , b) {
    console.log("division results is " + (a  / b));
}

module.exports = {   
    addition : add,
    multiplication : mul,
    substraction : sub,
    division : div
};