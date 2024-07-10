document.getElementById('hamburger-btn').addEventListener('click', function() {
    var content = document.getElementById('hamburger-content');
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
});
const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerContent = document.querySelector('.hamburger-content');

hamburgerBtn.addEventListener('click', () => {
    hamburgerContent.classList.toggle('show');
});

