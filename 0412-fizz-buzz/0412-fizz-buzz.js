/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arry =[];

for(let i= 0;i<=n;i++){

    if(i%3==0 && i%5==0){
        arry[i]="FizzBuzz";
    }
    else if(i%3==0){
        arry[i]="Fizz";
    }
    else if(i%5==0){
        arry[i]="Buzz";
    }
    else{
        arry[i]= ""+i;
    }
    }

    let newArry = arry.slice(1);

    // return arry;
    return newArry;
    
};

// let a = '' + 50;
// console.log(a);
