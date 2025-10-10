document.getElementById("p1").innerHTML=`Hi`;
document.getElementById("p2").textContent=`Hello`;
document.getElementById("p3").innerText=`Hey`;


function dom_func(){
    let classes =document.getElementsByClassName("Student");

    for(let i=0; i<classes.length; i++){
      classes[i].style.border="2px solid green";
      classes[i].style.fontSize="2rem";
      classes[2].style.color="red";
    }
}