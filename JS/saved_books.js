function createSavedBookRow(book) {
    const table = document.getElementById('saved-books-table');
    const row = table.insertRow();
    row.setAttribute('data-book-id', book.id);

    const titleCell = row.insertCell();
    titleCell.textContent = book.title;
    titleCell.id = 'title_saved'; // Asignar el ID al título

    const readCell = row.insertCell();
    const readButton = document.createElement('button');
    readButton.textContent = 'LEER';
    readButton.classList.add('btn', 'btn-read');
    readButton.id = 'read'; // Asignar el ID al botón de leer
    readCell.appendChild(readButton);

    const dislikeCell = row.insertCell();
    const dislikeButton = document.createElement('button');
    dislikeButton.textContent = 'Ya no me gusta';
    dislikeButton.classList.add('btn', 'btn-remove');
    dislikeButton.id = 'dislike'; // Asignar el ID al botón de ya no me gusta
    dislikeCell.appendChild(dislikeButton);

    dislikeButton.addEventListener('click', () => {
        removeSavedBook(book.id);
        row.remove();
        document.querySelectorAll('.infobook').forEach(bookDiv => {
            if (bookDiv.getAttribute('data-book-id') === book.id) {
                bookDiv.querySelector('.btnsave').classList.remove('saved');
            }
        });
    });
}

function removeSavedBook(bookId) {
    let savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    savedBooks = savedBooks.filter(book => book.id !== bookId);
    localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
}

document.addEventListener('DOMContentLoaded', () => {
    let savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    savedBooks.forEach(book => {
        createSavedBookRow(book);
    });
});
