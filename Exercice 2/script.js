let naissance = new Date(1977,7,11);
let init = naissance.getTime();
let today = new Date();
let final = today.getTime()
let days = Math.floor((final-init)/86400000);
document.getElementById("h").innerHTML = "Le nombre de jours écoulés depuis ma naissance est de : " + days;