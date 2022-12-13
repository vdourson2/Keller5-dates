const calculerDate = (e) => {
    let now = new Date();
    let nowTimestamp = now.getTime();
    let h = e.target.value;
    let resultTimestamp = nowTimestamp + h*60*60*1000;
    let result = new Date(resultTimestamp);
    document.getElementById("h").innerHTML = "Dans " + h + " heures, nous serons le " + result.toLocaleString('fr-FR');
}

function displayTime (){
    let heures = document.getElementById('heures');
    heures.addEventListener('keyup',calculerDate);
} 

displayTime();