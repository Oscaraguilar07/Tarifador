document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia a los elementos de los botones de eliminar y modificar
    const btnEliminar = document.querySelector(".eliminar");
    const btnModificar = document.querySelector(".modificar");

    // Obtener referencia a los modales
    const modalEliminar = document.getElementById("modal-eliminar");
    const modalModificar = document.getElementById("modal-modificar");

    // Obtener referencia a los botones de cerrar en los modales
    const cerrarEliminar = modalEliminar.querySelector(".cerrar");
    const cerrarModificar = modalModificar.querySelector(".cerrar");

    // Obtener referencia a los botones de cancelar en los modales
    const cancelarEliminar = modalEliminar.querySelector(".cancelar");
    const cancelarModificar = modalModificar.querySelector(".cancelar");

    // Función para mostrar un modal
    function mostrarModal(modal) {
        modal.style.display = "block";
    }

    // Función para ocultar un modal
    function ocultarModal(modal) {
        modal.style.display = "none";
    }

    // Evento click para mostrar el modal de eliminar
    btnEliminar.addEventListener("click", function() {
        mostrarModal(modalEliminar);
    });

    // Evento click para ocultar el modal de eliminar al hacer clic en el botón de cerrar
    cerrarEliminar.addEventListener("click", function() {
        ocultarModal(modalEliminar);
    });

    // Evento click para ocultar el modal de eliminar al hacer clic en el botón de cancelar
    cancelarEliminar.addEventListener("click", function() {
        ocultarModal(modalEliminar);
    });

    // Evento click para mostrar el modal de modificar
    btnModificar.addEventListener("click", function() {
        mostrarModal(modalModificar);
    });

    // Evento click para ocultar el modal de modificar al hacer clic en el botón de cerrar
    cerrarModificar.addEventListener("click", function() {
        ocultarModal(modalModificar);
    });

    // Evento click para ocultar el modal de modificar al hacer clic en el botón de cancelar
    cancelarModificar.addEventListener("click", function() {
        ocultarModal(modalModificar);
    });

    // También puedes agregar aquí otras funciones y eventos según sea necesario
});

