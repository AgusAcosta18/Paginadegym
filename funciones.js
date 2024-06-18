var spanseleccionado;
function mostrarmodal(hora, idspan) {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    document.getElementById("horario").innerText = hora;
    document.getElementById("horario1").innerText = hora;
    spanseleccionado = idspan;
    let contador = document.getElementById(spanseleccionado).innerText;
    console.log(contador);
    if (contador > 0) {
        document.getElementById("si").style.display = "block";
        document.getElementById("NO").style.display = "none";
    }
    else {
        document.getElementById("NO").style.display = "block";
        document.getElementById("si").style.display = "none";

    }
}

function rechazar() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";

}
function aceptar() {
    let contador = document.getElementById(spanseleccionado).innerText;
    console.log(contador);
    if (contador > 0) {
        document.getElementById(spanseleccionado).innerText = contador - 1;
    }
    rechazar();
}