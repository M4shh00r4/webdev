let books = ["HP" , "Feluda" , "SH"]
let el = "";
for (let i=0; i < books.length; i++){
    el += books[i] + "<br>";
}

document.getElementById("simpleLoop").innerHTML = el;

for(let i = 1; i <= 21; i++){
    document.writeln(`${i}=> For Loop` 
    +`<br>`)
}