function createSavedBookRow(book) {
    const table = document.getElementById('saved-books-table');
    const row = table.insertRow();
    row.setAttribute('data-book-id', book.id);

    const titleCell = row.insertCell();
    titleCell.textContent = book.title;
    titleCell.id = 'title_saved'; 

    const readCell = row.insertCell();
    const readButton = document.createElement('button');
    readButton.textContent = 'DESCARGAR';
    readButton.classList.add('btn', 'btn-download');
    readButton.id = 'download'; 
    readCell.appendChild(readButton);

    const dislikeCell = row.insertCell();
    const dislikeButton = document.createElement('button');
    dislikeButton.textContent = 'Ya no me gusta';
    dislikeButton.classList.add('btn', 'btn-remove');
    dislikeButton.id = 'dislike'; 
    dislikeCell.appendChild(dislikeButton);

    readButton.addEventListener('click', () => {
        const conCategoría = JSON.parse(localStorage.getItem('conCategoría'));
        const bookInfo = conCategoría.find(b => b[0] === book.id);
        if (bookInfo) {
            const pdfUrl = bookInfo[3];
            const downloadLink = document.createElement('a');
            downloadLink.href = pdfUrl;
            downloadLink.download = book.title;
            downloadLink.click();
        } else {
            console.error('No se encontró la información del libro.');
        }
    });

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
