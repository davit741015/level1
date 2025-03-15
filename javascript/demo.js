console.log("i like pizzas");

console.log("did i already say i like pizzas?");

alert("do not use your real name!");
//i think im doing something wrong//

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('toogleAnime').addEventListener("click", (event) => {
        const animaitonBoxCurretClass = document.getElementById('animationBox').classList.value;
        if (animaitonBoxCurretClass == "boxWithOutAnimation") {
            document.getElementById('animationBox').classList.remove(['boxWithOutAnimation']);
            document.getElementById('animationBox').classList.add(['boxWithAnimation']);
            var waterweight = 20
        } else {
            document.getElementById('animationBox').classList.remove(['boxWithAnimation']);
            document.getElementById('animationBox').classList.add(['boxWithOutAnimation']);

        }
        console.log(waterweight);
        
    })
});
let favfood = "antria"
let x = 20
let y = 3
console.log(`${x}-${y}=17`);
console.log(`i like ${favfood}`);
let waterweight = 30
let waterweight2 = waterweight * 3
let ocean = waterweight * 2045
let sea = waterweight * 8 / 10 + 355
console.log(`${waterweight}`);
console.log(`${waterweight2}`);
console.log(`${ocean}`);
console.log(`${sea}`);
let username;
 age = window.prompt(`when were you born?`);
let age= Number(age);
let actualage = 2025-age
console.log(`this user is ${actualage} years old`);
let crumbs = 1.30405
radius = window.prompt(`enter the radius of skilength`)
radius = Number(radius)
circumference = 2 * crumbs * radius
console.log(circumference)


