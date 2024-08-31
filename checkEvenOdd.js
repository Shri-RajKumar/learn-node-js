const checkEvendd = (num) =>{
    if(num <= 0)
        return `${num} is Negative.. `;     
    
    if(num %2 == 0)
        return `${num} is Even.. `;
    else
        return `${num} is Odd.. `;
}



module.exports = {
    checkEvenodd : checkEvendd
}
