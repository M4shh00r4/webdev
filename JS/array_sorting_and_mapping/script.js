let my_numbers =[77,21,10,-10,-21,89]
document.getElementById("p1").innerHTML=my_numbers

function ascending(){
    document.getElementById("p2").innerHTML=my_numbers.sort((a,b)=>a-b);
}

function descending(){
    document.getElementById("p3").innerHTML=my_numbers.sort((a,b)=>b-a);
}

//special functions for the map method

let multi= function(num){
    return num*10;
}
let mapped_array=my_numbers.map(multi)
document.getElementById("p3").innerHTML = mapped_array