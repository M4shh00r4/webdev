let mixed_array =["mango",21,"Blueberry",34]
document.getElementById("array1").innerHTML=mixed_array[3]


let hobbies=["Gaming","Painting","dancing","Baking"]
document.getElementById("array2").innerHTML=hobbies;
document.getElementById("join").innerHTML=hobbies.join(".")

hobbies.pop();
document.getElementById("pop1").innerHTML=hobbies;

hobbies.pop();
document.getElementById("pop2").innerHTML=hobbies;


function add (a,b){
    return a+b;
}
function average (c,d){
    return add(c,d)/2;
}

let result = average(10,30);

document.getElementById("finf").innerHTML= result;