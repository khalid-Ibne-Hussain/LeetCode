/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // let temp = x.toString().split("").reverse().join("")*1;
    let temp = x.toString().split("").reverse().join("");

    // if(x=== parseInt(temp)){
    //     return true;
    // }else{
    //     return false;
    // }
    return (x===parseInt(temp)? true: false)


};