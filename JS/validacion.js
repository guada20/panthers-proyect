document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');
    const registerForm = document.querySelector('#register-form');
    const toggleThemeButton = document.querySelector('#toggle-theme');
    const bodyContenedor = document.querySelector('.body-contenedor');

    // Simulate a simple login process
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = event.target.email.value;
            const password = event.target.password.value;

            // Check credentials (replace with actual authentication logic)
            if (email === 'user@example.com' && password === 'password') {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'restricted.html'; // redirect to restricted content
            } else {
                alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            }
        });
    }

    // Register form validation
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const password = event.target.password.value;
            const phone = event.target.phone.value;

            // Simple validation (extend with your logic)
            if (name && email && password.length >= 6 && phone.match(/[0-9]{10}/)) {
                alert('Registro exitoso. Ahora puedes iniciar sesión.');
                window.location.href = 'login.html'; // redirect to login page
            } else {
                alert('Por favor, completa el formulario correctamente.');
            }
        });
    }

});
