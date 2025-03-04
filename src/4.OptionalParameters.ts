function addd(num1:number,num2:number,num3?:number):number{
    return num3 ?num1+num2+num3 : num1+num2;
}

//pass 2 parameters:
console.log(addd(1,2));
//pass 3 parameters:
console.log(addd(1,2,3));





