let date = new Date();
let dateBru = date.toLocaleString('fr-FR');
let dateAnch = date.toLocaleString('fr-FR',{timeZone:"America/Anchorage"});
let dateRijk = date.toLocaleString('fr-FR',{timeZone:"Atlantic/Reykjavik"});
let dateSP = date.toLocaleString('fr-FR',{timeZone:"Europe/Moscow"})
document.getElementById("h").innerHTML = "Date et heure Bruxelles: " + dateBru + "<br>Date et heure Anchorage: " + dateAnch + "<br>Date et heure Reykjavik: " + dateRijk + "<br>Date et heure Saint-Petersbourg: " + dateSP;