
class Student{
    name !:string; //by default public
   private _age!:number;

    get age():number{
        return this._age;
    }
    set age(val:number){
        this.age=val;
    }
}

const s1=new Student();
s1.name="Ajay";
s1.age=20;//set method
console.log(s1.age); //get method




