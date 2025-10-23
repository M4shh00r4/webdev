let my_Obj={
    name: "Mashhoora", //properties
    b_y:2012,
    age(){//methods
        let date= new Date;
        let age= date.getFullYear() - this.b_y
        return age;
    }
}
document.writeln(`the age is: ${my_Obj.age()}`)
//js object to JSON text
let json_text=JSON.stringify(my_Obj)

document.getElementById("json").innerHTML=
json_text;
//JSON text to js object
let again_obj=JSON.parse(json_text)
document.getElementById("obj").innerHTML=
again_obj.b_y;