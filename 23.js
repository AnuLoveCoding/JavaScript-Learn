//  getter and setter
class person{
    constructor (firstName, lastName,age){
        this.firstName =firstName;
        this.lastName =lastName;
        this.age =age;

    }
    fullName(){
        return`${this.firstName} ${this.lastName}`
    }
}

const person1 = new person("anurag","mundra",21);
console.log(person1);
