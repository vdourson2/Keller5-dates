function affichage (){
    let date = new Date();
    let weekday = document.querySelector(".date__weekday");
    let interm = date.toLocaleString('fr-FR',{
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric",
        hour:"numeric",
        minute:"numeric",
        second:"numeric"}).split(" ");
    console.log(interm);
    document.querySelector(".time").innerHTML = interm[5];
    document.querySelector(".date__weekday").innerHTML = interm[0];
    document.querySelector(".date__day").innerHTML = interm[1];
    document.querySelector(".date__month").innerHTML = interm[2];
    document.querySelector(".date__year").innerHTML = interm[3];
}

setInterval(affichage,1000);
