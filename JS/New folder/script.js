let a =10;
let b =3.7182;
let c ="Ami string"
let d =null;
let e;
let f =true;

document.writeln(`data type of a=${a} is=${typeof(a)} <br>
                 data type of a=${b} is=${typeof(b)} <br>
                 data type of a=${c} is=${typeof(c)} <br>
                 data type of a=${d} is=${typeof(d)} <br>
                 data type of a=${e} is=${typeof(e)} <br>
                 data type of a=${f} is=${typeof(f)} <br>`)

//Conditionals
function myFunctions(){
    let time=new Date().getHours();
    document.getElementById("hour").innerHTML=time
    if(time >5 && time <12){
        document.getElementById("greetings").innerHTML=`Good morning`;
    }
    else if(time <17){
        document.getElementById("greetings").innerHTML=`Good afternoon`;
    }
    else if(time <20){
        document.getElementById("greetings").innerHTML=`Good evening`;
    }
    else {
        document.getElementById("greetings").innerHTML=`Good night`;
    }
}  

//While loop

let text="";

let i = 1;
while(i<=10){
    text += `the number is $(i) <br>`;
    i++;
}

document.getElementById("acp").innerHTML = text;