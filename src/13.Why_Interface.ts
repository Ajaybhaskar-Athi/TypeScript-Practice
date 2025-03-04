

// function isLegal(user:{
//     fName:string;
//     lName:string;
//     age:number;
// }):boolean{
//     if(user.age>=18)return true;
//     return false;
// }


// console.log(isLegal({fName:"Ajay",lName:"Bhaskar",age:20}));



//Suppose same user we need to use in someother function, we need to write everyThing in the function argument type and also code was not clean

//So create Interface


interface User{
    fName:String;
    lName:String;
    age:number;
    email?:string;
}

function isLegal(user:User){
    if(user.age>=18)return true;
    return false;
}

function greet(user:User){
    console.log("Hello my Name is: ",user.fName);
    console.log(user?.email);
}

console.log(isLegal({fName:"Ajay",lName:"Bhaskar",age:20,email:"dummy@gmail.com"}));
greet({fName:"pranav",lName:"velaga",age:21});


