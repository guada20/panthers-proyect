document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');
    const registerForm = document.querySelector('#register-form');
    const toggleThemeButton = document.querySelector('#toggle-theme');
    const bodyContenedor = document.querySelector('.body-contenedor');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = event.target.email.value;
            const password = event.target.password.value;

            if (email === 'user@example.com' && password === 'password') {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'restricted.html'; 
            } else {
                alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            }
        });
    }
    // validacion formulario de registro
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const password = event.target.password.value;
            const phone = event.target.phone.value;

            if (name && email && password.length >= 6 && phone.match(/[0-9]{10}/)) {
                alert('Registro exitoso. Ahora puedes iniciar sesión.');
                window.location.href = 'login.html'; 
            } else {
                alert('Por favor, completa el formulario correctamente.');
            }
        });
    }

});
