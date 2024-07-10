// JavaScript para validación básica del formulario de registro
document.querySelector('form.form-secion').addEventListener('submit', function(event) {
    const inputs = this.querySelectorAll('input');
    let valid = true;
    
    inputs.forEach(function(input) {
        if (!input.checkValidity()) {
            valid = false;
            // Puedes manejar los errores aquí, por ejemplo, mostrar un mensaje de error
            // o cambiar el estilo del input para indicar un error.
        }
    });

    if (!valid) {
        event.preventDefault(); // Evita que se envíe el formulario si hay errores
    }
});
