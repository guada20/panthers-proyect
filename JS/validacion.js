document.addEventListener('DOMContentLoaded', function() {
    // Función para validar y procesar el inicio de sesión
    function validateLoginForm() {
        var email = document.getElementById('emailLogin').value;
        var password = document.getElementById('passwordLogin').value;

        // Validación básica (puedes agregar más validaciones según tus necesidades)
        if (!email || !password) {
            alert('Por favor completa todos los campos de inicio de sesión.');
            return false;
        }

        // Guardar en localStorage o hacer otras operaciones necesarias

        return true; // Devuelve true para permitir el envío del formulario
    }

    // Función para validar y procesar el registro
    function validateRegisterForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('emailRegister').value;
        var password = document.getElementById('passwordRegister').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;

        // Validación básica (puedes agregar más validaciones según tus necesidades)
        if (!name || !email || !password || !phone || !address) {
            alert('Por favor completa todos los campos de registro.');
            return false;
        }

        // Guardar en localStorage o hacer otras operaciones necesarias

        return true; // Devuelve true para permitir el envío del formulario
    }

    // Event listener para el formulario de inicio de sesión
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío automático del formulario
        validateLoginForm(); // Llama a la función de validación
        // Puedes añadir más lógica aquí si es necesario después de la validación
    });

    // Event listener para el formulario de registro
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío automático del formulario
        validateRegisterForm(); // Llama a la función de validación
        // Puedes añadir más lógica aquí si es necesario después de la validación
    });
});
