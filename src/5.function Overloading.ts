function fun(a:number,b:number):number;
function fun(a:string,b:string):string;

function fun(a:any,b:any){
    return a+b;
}


//pass Numbers

console.log(fun(2,3));

//Pass  strings

console.log(fun("Ajay","Bhaskar"));






