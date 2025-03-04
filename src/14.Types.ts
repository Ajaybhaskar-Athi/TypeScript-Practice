//Same as interface but its not used for Extends and merging like interfaces
type User2={
    fName:String;
    lName:String;
    age:number;
}

function isLegal2(user:User2){
    if(user.age>=18)return true;
    return false;
}

function greet2(user:User2){
    console.log("Hello my Name is: ",user.fName);
}

console.log(isLegal2({fName:"Ajay",lName:"Bhaskar",age:20}));
greet2({fName:"pranav",lName:"velaga",age:21});


