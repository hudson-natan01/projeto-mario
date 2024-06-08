const form = document.querySelector(".formulario")
const mask = document.querySelector(".mascara-formulario")


function clicar(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"

    mask.style.visibility = "visible"

}

function voltar(){
    form.style.left = "-300px"
    form.style.transform = "translate(0%)"

    mask.style.visibility = "hidden"
}


