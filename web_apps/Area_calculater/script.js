let choice = prompt("Welcome to this Area Calculator. \n Please enter your choice \n 1.Area of a Rectangle \n 2.Area of Triangle \n3.Area of Circle \n 4.Area of a Parallelogram")

if (choice == "1") {
    let l = prompt("enter the lenght")
    let w = prompt("enter the width");
    let result = Number(l) * Number(w); //type converting from string to Number from l and b
    alert("the area is =" + result)
}

if (choice == "2") {
    let h = prompt("enter the height")
    let b = prompt("enter the base");
    let result = Number(h) * Number(b)/2; 
    alert("the area is =" + result)
}

if (choice == "3") {
    let r = prompt("enter the radius");
    let result = 3.14* Number(r)**2; 
    alert("the area is =" + result)
}

if (choice == "4") {
    let h = prompt("enter the height")
    let cb = prompt("enter the coorresponding base");
    let result = Number(h) * Number(cb); 
    alert("the area is =" + result)
}