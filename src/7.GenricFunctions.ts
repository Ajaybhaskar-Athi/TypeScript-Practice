//EX-1
function getFirstEle<T>(arr:T[]):T{
    return arr[0];
}


// console.log(getFirstEle<number>([1,2,3,4,5]));
// console.log(getFirstEle<string>(["A","B","C"])); //You can call like below one also

console.log(getFirstEle([1, 2, 3, 4, 5]));   
console.log(getFirstEle(["A", "B", "C"]));




//EX-2

function merge<T,U>(obj1:T,obj2:U):T&U{
    return {...obj1,...obj2};
}

console.log(merge({name:"Ajay"},{age:21}));


//EX-3

function getNewArr<T>(arr:T[]):T[]{
    return new Array<T>().concat(arr);
}

const arr=[11,22,33];
const newArr=getNewArr(arr); //TS infere its type automatically otherwise u can call getNewArr<number>(arr)


console.log(arr,newArr);
