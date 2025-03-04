//Ex-1

function printt(a:string){
    console.log("Hello "+a);//void function
}

// print(777);//error
printt("777");


//EX-2

function validVoter(age:number):boolean{
    if(age>=18){
        return true;
    }
    return false;
}

const valid=validVoter(20);
console.log("Hello this is validVoter",valid);


//Ex-3 : Diff ways to write Functions


function add(a:number,b:number):number{
    return a+b;
}

console.log("1st way of writing Fun",add(4,6));


//Arrow Functions 
const sub=(num1:number,num2:number):number=>{
    return num1-num2;
}
console.log("2nd way of writing Fun",sub(4,6));


//3rd way - Functional Expressions

const mult=function(a:number,b:number):number{
    return a*b;
}

console.log("3rd way of Writing: ",mult(2,3));





//EX-4 : pass array as an argument


function add2(num1:number,num2:number,...num3:number[]):number{
    return num1+num2+num3.reduce((acc,currNum)=>acc+currNum,0);
}


// let arr=[4,5,6];
// console.log(add2(1,2,...arr));

console.log(add2(1,2,3,4,5,6));



