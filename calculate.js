function sumOfAll(arr) { 
    let sum = 0; 
    for ( let a of arr)
    sum += a;
    return sum;
};
console.log(sumOfAll([1,2,3,4,5,6,,7,8,9,10]));