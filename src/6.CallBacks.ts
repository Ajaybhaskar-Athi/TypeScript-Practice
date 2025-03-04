
//--------------------- Ex-1 

// function runAfter1S(cb:()=>void){
//     cb();
// }


// console.log("Hello wolrd");
// const cb=()=>{
//     console.log("Callback executed");
// }

// runAfter1S(cb);


//---------------- EX-2


function runAfter1S(cb:()=>void){
        setTimeout(cb,5000);
}


console.log("Hello wolrd");
const cb=()=>{
    console.log("Callback executed");
}

runAfter1S(cb);



//------------------------ EX-3 



function helper(cb2:(a,b)=>number){
    
}




