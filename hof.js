const arr = [1,2,3 , 4, 5];

let ans = arr.map(n=> n*n);

let divisiblebyfive = arr.filter(n=> n%2==0);
console.log(divisiblebyfive);

let sum = arr.reduce((sm , curVal)=>{
    return sm +curVal;
})

const mult = arr.reduce((mul , curVal)=>{
    return mul*curVal;
})

console.log(sum)
console.log(mult)

console.log(ans);