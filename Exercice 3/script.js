let now = new Date();
let nowTimestamp = now.getTime();
let newTimestamp = nowTimestamp + 80000*60*60*1000;
let result = new Date(newTimestamp);
document.getElementById("h").innerHTML = "L'instant attendu sera à ces date et heure : " + result.toLocaleString('fr-FR');