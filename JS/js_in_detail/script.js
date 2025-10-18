num1 ="21"
num2 = 10
//error handling
try{
//type casting
document.getElementById("type_conversion").innerHTML=(Number(num1)+num2);
//diff string method

const my_str = "hello world";
//replace method
const new_str= my_str.replace("World","Manha...bla bla bla");
document.getElementById("replace").innerHTML=`replaced string = ${new_str}`;

//search method
const my_str2 =my_str.search("rld");
document.getElementById("search").innerHTML=`the "rld" stared from the index value=${my_str2}`
}
catch(err){
    document.getElementById("error").innerHTML=err;
}