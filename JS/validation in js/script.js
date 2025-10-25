document.getElementById("myForm").addEventListener("submit",function(event){
    const password = document.getElementById("pass").value.trim();

    if(password.length <8){
        document.getElementById("res").innerHTML="password must be at least 8 characters long";
        event.preventDefault
    }
}
);

// function myFunct(){
//     let input=document.getElementById("inp");
//     if (!input.checkVadildity()){
//         document.getElementById("result").innerHTML=input 
//     }
// }
