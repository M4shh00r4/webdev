// create an object

let person = {
     Name: "Manha",
     Age: 13,
     Fav_color: "red",
     Fav_subject: "Mathematics"

}

// display some data from the object
document.getElementById("demo").innerHTML=`${person["Name"]} is ${person.Age} years old and her fav color is ${person.Fav_color} she also likes to solve ${person["Fav_subject"]} problems.`