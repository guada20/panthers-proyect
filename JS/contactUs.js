const contactForm = document.getElementById('contactForm');

function handleSubmit(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    // Guardar los datos en localStorage 
    const formData = {
        nombre,
        email,
        telefono,
        mensaje
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    //  mensaje 
    showConfirmationMessage('¡Formulario enviado correctamente!');

    // Limpiar el formulario
    contactForm.reset();
}


function showConfirmationMessage(message) {
    const confirmationDiv = document.createElement('div');
    confirmationDiv.classList.add('confirmation-message');
    confirmationDiv.textContent = message;

   
    contactForm.insertBefore(confirmationDiv, contactForm.firstChild);

    setTimeout(() => {
        confirmationDiv.remove();
    }, 3000); 
}

contactForm.addEventListener('submit', handleSubmit);
