$(document).ready(function () {
    date();
})

function date() {

    var date = new Date();
    var hour = date.toLocaleTimeString();
    var month = date.getMonth();
    var week = date.getDay();

    const weekSimple = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    var weekname = weekSimple[week];

    const monthSimple = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"];

    var monthName = monthSimple[month - 1];

    // document.getElementById("data").innerHTML = weekname + ", " + day + " de " + monthName + " de " + year;
    // document.getElementById("DATE").innerHTML = hour;
}

    setInterval(date, 1);