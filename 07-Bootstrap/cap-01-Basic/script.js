// https://getbootstrap.com/

function enviar() {
    if ($(".enviarEmail")[0].value == "") {
        $("#erro").removeClass("hide")
    }
}


// Progress Bar

let progressBar = document.querySelector("#progressBar")
progressBar.innerHTML = "0%";
progressBar.style.width = "0%";

let value = 0

setInterval(() => {
    if (value > 100) {
        value = 100;
    }
    progressBar.innerHTML = value + "%";
    progressBar.style.width = value + "%";
    value++
}, 200)


// tooltip
$(document).ready(function() {
    $('[data-bs-toggle="tooltip').tooltip()
    $('[data-bs-toggle="popover').popover()
    $('#meuBotao').click(()=>{
        $('.toast').toast("show")

    })
    $('#meuBotaoEsconder').click(()=>{
        $('.toast').toast("hide")

    })
})