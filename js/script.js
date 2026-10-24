const form = document.getElementById("form-contacto");

if (form) {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const asunto = document.getElementById("asunto");
    const mensaje = document.getElementById("mensaje");
    const acepto = document.getElementById("acepto");
    const exito = document.getElementById("exito");

    function mostrarError(id, texto) {
        document.getElementById(id).textContent = texto;
    }

    function emailValido(valor) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    }

    function validar() {
        let ok = true;
        exito.textContent = "";

        if (nombre.value.trim().length < 3) {
            mostrarError("error-nombre", "El nombre debe tener mínimo 3 caracteres.");
            ok = false;
        } else {
            mostrarError("error-nombre", "");
        }

        if (!emailValido(email.value.trim())) {
            mostrarError("error-email", "Escribe un correo válido.");
            ok = false;
        } else {
            mostrarError("error-email", "");
        }

        if (telefono.value.trim().length < 10) {
            mostrarError("error-telefono", "Escribe un número de al menos 10 dígitos.");
            ok = false;
        } else {
            mostrarError("error-telefono", "");
        }

        if (asunto.value === "") {
            mostrarError("error-asunto", "Selecciona un asunto.");
            ok = false;
        } else {
            mostrarError("error-asunto", "");
        }

        if (mensaje.value.trim().length < 20) {
            mostrarError("error-mensaje", "El mensaje debe tener mínimo 20 caracteres.");
            ok = false;
        } else {
            mostrarError("error-mensaje", "");
        }

        if (!acepto.checked) {
            mostrarError("error-acepto", "Debes aceptar ser contactado.");
            ok = false;
        } else {
            mostrarError("error-acepto", "");
        }

        return ok;
    }

    nombre.addEventListener("input", validar);
    email.addEventListener("input", validar);
    telefono.addEventListener("input", validar);
    asunto.addEventListener("change", validar);
    mensaje.addEventListener("input", validar);
    acepto.addEventListener("change", validar);

    form.addEventListener("submit", function (evento) {
        evento.preventDefault();
        if (validar()) {
            exito.textContent = "Mensaje listo para enviar. Gracias por escribir a NEXURY.";
            form.reset();
        }
    });
}