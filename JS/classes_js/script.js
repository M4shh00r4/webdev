//creating a class
class Student{
 constructor(naam,year){//constructor holds the properties
    this.name = naam;
    this.b_y = year;}

//method: any function defined inside a class
age(){
    let date = new Date();
    let boyosh = date.getFullYear() - this.b_y;
    return boyosh
}
}

// creating objects for the class
let student1 = new Student("Manha",2012);

document.getElementById("student1").innerHTML = `My name is ${student1.name}. I was born in ${student1.b_y} and I am ${student1.age()} years old.`;


let student2 = new Student("Rafah",2015);

document.getElementById("student2").innerHTML = `My name is ${student2.name}. I was born in ${student2.b_y} and I am ${student2.age()} years old.`;
