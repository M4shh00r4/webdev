let dice = {
    total_sides: 6, 
    roll: function() {
        let randomNumber = Math.floor(Math.random()* this.total_sides+1)
        return randomNumber;
    }
}

let buttoon = document.getElementById('button');

buttoon.onclick = function () {
    document.getElementById('diceholder').innerHTML=
    dice.roll(); 
};

