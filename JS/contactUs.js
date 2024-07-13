// JavaScript para manejar el envío del formulario y mostrar mensaje de confirmación
const contactForm = document.getElementById('contactForm');

function handleSubmit(event) {
    event.preventDefault();

    // Obtener valores ingresados en el formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    // Guardar los datos en localStorage (opcional)
    const formData = {
        nombre,
        email,
        telefono,
        mensaje
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    // Mostrar mensaje de confirmación
    showConfirmationMessage('¡Formulario enviado correctamente!');

    // Limpiar el formulario
    contactForm.reset();
}

// Función para mostrar mensaje de confirmación
function showConfirmationMessage(message) {
    const confirmationDiv = document.createElement('div');
    confirmationDiv.classList.add('confirmation-message');
    confirmationDiv.textContent = message;

    // Agregar el mensaje al formulario 
    contactForm.insertBefore(confirmationDiv, contactForm.firstChild);

    // Ocultar mensaje después de unos segundos
    setTimeout(() => {
        confirmationDiv.remove();
    }, 3000); 
}

contactForm.addEventListener('submit', handleSubmit);
