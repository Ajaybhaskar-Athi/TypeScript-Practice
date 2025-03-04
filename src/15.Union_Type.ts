// function wishes(id: (number | string)){
//     console.log(`Hello ${id}`);
// }

// wishes(1);
// wishes("11");





type numberORstring=number | string;

function wishes(id: numberORstring){
    console.log(`Hello ${id}`);
}

wishes(1);
wishes("11");