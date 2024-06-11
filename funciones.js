var spanseleccionado;
function mostrarmodal(hora, idspan) {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    document.getElementById("horario").innerText = hora;
    spanseleccionado = idspan

}
function rechazar() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
function aceptar() {
    let contador = document.getElementById(spanseleccionado).innerText;
    console.log(contador);
    document.getElementById(spanseleccionado).innerText = contador - 1;
    rechazar();
}