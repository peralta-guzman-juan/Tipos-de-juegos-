function abrirModal(genero) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("tituloModal").innerText = genero;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// cerrar si toca fuera del cuadro
window.onclick = function(e) {
    let modal = document.getElementById("modal");
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
