//funcion calificación libros 
function RatingEventListeners() {
    document.querySelectorAll('.score').forEach(scoreDiv => {
        scoreDiv.addEventListener('click', function(event) {
            if (event.target.dataset.rating) {
                const rating = event.target.dataset.rating;
                updateRating(scoreDiv, rating);
                saveRating(scoreDiv, rating);
            }
        });
    });
}
  
//actualizar las estrellas 
function updateRating(scoreDiv, rating) {
    const stars = scoreDiv.querySelectorAll('span');
    stars.forEach(star => {
        if (star.dataset.rating <= rating) {
            star.style.color = 'gold';
        } else {
            star.style.color = '';
        }
    });
}

//guardar calificación en localstorage
function saveRating(scoreDiv, rating) {
    const bookId = scoreDiv.closest('.infobook').getAttribute('data-book-id');
    localStorage.setItem(`book-rating-${bookId}`, rating);
}

//obtener id para la localstorage
function loadRatings() {
    document.querySelectorAll('.score').forEach(scoreDiv => {
        const bookId = scoreDiv.closest('.infobook').getAttribute('data-book-id');
        let rating = localStorage.getItem(`book-rating-${bookId}`);
        if (rating) {
            rating = parseInt(rating);
            if (rating >= 1 && rating <= 5) {
                updateRating(scoreDiv, rating);
            } else {
                localStorage.removeItem(`book-rating-${bookId}`);
7            }
        }
    });
}


//limpiar localstorage 
function clearAllRatings() {
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith('book-rating-')) {
            localStorage.removeItem(key);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    clearAllRatings(); // para limpiar las calificaciones
    const infobookContainer = document.querySelector('.infobook-container');
    books.forEach(book => {
        const bookElement = createBookElement(book);
        infobookContainer.appendChild(bookElement);
    });

    document.querySelectorAll('.score').forEach(scoreDiv => {
        scoreDiv.addEventListener('click', function(event) {
            if (event.target.dataset.rating) {
                const rating = event.target.dataset.rating;
               updateRating(scoreDiv, rating);
                saveRating(scoreDiv, rating);
            }
        });
    });

    loadRatings();
});
document.addEventListener('DOMContentLoaded', () => {
    loadRatings();
    attachRatingEventListeners();
});



