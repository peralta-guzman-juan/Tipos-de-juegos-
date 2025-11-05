// Muestra la caja flotante con id dado y oculta las demás
function mostrarFlotante(id) {
    // ocultar todas
    document.querySelectorAll('.flotante').forEach(f => {
        f.style.display = 'none';
        f.setAttribute('aria-hidden', 'true');
    });

    // mostrar la solicitada (si existe)
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = 'block';
    el.setAttribute('aria-hidden', 'false');

    // opcional: focus en el primer elemento de la caja para accesibilidad
    const first = el.querySelector('h2, p, img, input, button');
    if (first) first.focus();
}

// Cierra la caja flotante concreta
function cerrarFlotante(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = 'none';
    el.setAttribute('aria-hidden', 'true');
}

// Cerrar flotantes si se presiona ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.flotante').forEach(f => {
            f.style.display = 'none';
            f.setAttribute('aria-hidden', 'true');
        });
    }
});

// Cerrar flotante si se hace click fuera (detecta clicks fuera de la caja)
document.addEventListener('click', function(e) {
    // si click está dentro de alguna flotante o sobre un boton-genero, no cerrar
    const clickedFlotante = e.target.closest('.flotante');
    const clickedBoton = e.target.closest('.boton-genero');
    if (clickedFlotante || clickedBoton) return;

    // si no, ocultar todas
    document.querySelectorAll('.flotante').forEach(f => {
        f.style.display = 'none';
        f.setAttribute('aria-hidden', 'true');
    });
});

console.log('Script cargado correctamente ✅');
