
///By default, in TypeScript (and JavaScript), class properties are public unless explicitly specified otherwise.

//In TypeScript (and JavaScript), when defining a method inside a class, you do not need to use the function keyword.
//  Instead, you define the method directly with its name, followed by parentheses and a function body.


class Person{
    name :string; //by default public
   private age:number;
    constructor(a:string,b:number){
        this.name=a;
        this.age=b;
    }
   greet():void{ //or simply greet() is also works
    console.log(`Hello this is ${this.name} and my age is ${this.age}`);
    }   
    getter(){
        return this.age;
    }

    get Age():number{
        return this.age;
    }
}

const p1=new Person("Akshaya",20);
console.log(p1.name);
// console.log(p1.age); //Errro accesing the private properties

p1.greet();
console.log(p1.getter());
console.log(p1.Age);//this is set Method , you can acces like a varibale 

