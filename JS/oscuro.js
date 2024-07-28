document.addEventListener('DOMContentLoaded', (event) => {
    let toggle = document.getElementById('toggle');
    let toggleIcon = document.getElementById('toggle_icon');
  
    // Comprobar la preferencia guardada en localStorage
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
        toggle.checked = true;
        toggleIcon.classList.add('active');
    }
  
    toggle.addEventListener('change', (event) => {
        let checked = event.target.checked;
        document.body.classList.toggle('dark');

        if (checked) {
            toggleIcon.classList.add('active');
            localStorage.setItem('darkMode', 'true');
        } else {
            toggleIcon.classList.remove('active');
            localStorage.setItem('darkMode', 'false');
        }
    });
});
