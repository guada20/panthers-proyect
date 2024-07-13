//datos libros 
const books = [
    {id:"1" , title: "Érase una vez en Colombia", image: "../assets/imagenes/libroport1.png" },
    {id:"2" , title: "Con los pelos de punta", image: "../assets/imagenes/libroport2.png" },
    {id:"3" , title: "Todo lo contrario", image: "../assets/imagenes/libroport3.png" },
    {id:"4" , title: "Cuentos para desenredar enredos", image: "../assets/imagenes/libroport4.png" },
    {id:"5" , title: "La finca viva", image: "../assets/imagenes/libroport5.png" },
    {id:"6" , title: "La casa y el campo", image: "../assets/imagenes/libroport6.png" },
    {id:"7" , title: "Historias y lugares", image: "../assets/imagenes/libroport7.png" },
    {id:"8" , title: "Lecturas para todos los días", image: "../assets/imagenes/libroport8.png" },
    {id:"9" , title: "Planeta vivo", image: "../assets/imagenes/libroport9.png" },
    {id:"10" , title: "El hombre y su cultura", image: "../assets/imagenes/libroport10.png" },
    {id:"11" , title: "Cuentos y pasatiempos", image: "../assets/imagenes/libroport11.png" },
    {id:"12" , title: "Cuentos para contar", image: "../assets/imagenes/libroport12.png" },
    {id:"13" , title: "Los viajes del viejo Jacobo", image: "../assets/imagenes/libroport13.png" },
    {id:"14" , title: "Entre cuento y cuento", image: "../assets/imagenes/libroport.png" },
    {id:"15" , title: "Salud para contar", image: "../assets/imagenes/libroport14.png" },
    {id:"16" , title: "Más claro no canta un gallo", image: "../assets/imagenes/libroport15.png" },
    {id:"17" , title: "La tierra, el cielo, y más allá", image: "../assets/imagenes/libroport16.png" },
    {id:"18" , title: "Los secretos de los animales", image: "../assets/imagenes/libroport17.png" },
    {id:"19" , title: "Cuentos maravillosos", image: "../assets/imagenes/libroport18.png" },
    {id:"20" , title: "¡A que te cojo ratón!", image: "../assets/imagenes/libroport19.png" },
    {id:"21" , title: "Del campo a la mesa", image: "../assets/imagenes/libroport20.png" },
    {id:"22" , title: "Los secretos de las plantas", image: "../assets/imagenes/libroport21.png" },
    {id:"23" , title: "Tan distintos y parientes", image: "../assets/imagenes/libroport22.png" },
    {id:"24" , title: "Tiempo de hacer", image: "../assets/imagenes/libroport23.png" },
    {id:"25" , title: "Los primeros años", image: "../assets/imagenes/libroport24.png" },
    {id:"26" , title: "Lecturas fantásticas", image: "../assets/imagenes/libroport25.png" },
    {id:"27" , title: "Calor de hogar", image: "../assets/imagenes/libroport26.png" }
];

function createBookElement(book) {
    const template = document.getElementById('book-template').content.cloneNode(true);
    template.querySelector('.imgbook').src = book.image;
    template.querySelector('.titlebook').textContent = book.title;
    template.querySelector('.infobook').setAttribute('data-book-id', book.id);
    return template;
}

function saveBook(bookDiv) {
    const bookId = bookDiv.getAttribute('data-book-id');
    const bookTitle = bookDiv.querySelector('.titlebook').textContent;
    const bookImage = bookDiv.querySelector('.imgbook').src;
    const bookData = { id: bookId, title: bookTitle, image: bookImage };

    let savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    const bookIndex = savedBooks.findIndex(book => book.id === bookId);

    const saveButton = bookDiv.querySelector('.btnsave');

    if (bookIndex === -1) {
        savedBooks.push(bookData);
        localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
        saveButton.classList.add('saved');
        alert('Libro guardado!');
    } else {
        savedBooks.splice(bookIndex, 1);
        localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
        saveButton.classList.remove('saved');
        alert('Libro eliminado de guardados!');
    }

    updateSavedBooksTable();
}

function updateSavedBooksTable() {
    const savedBooksTable = document.querySelector('#saved-books-table tbody');
    savedBooksTable.innerHTML = '';

    let savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];

    savedBooks.forEach(book => {
        const row = document.createElement('tr');
        row.setAttribute('data-book-id', book.id);

        const titleCell = document.createElement('td');
        titleCell.textContent = book.title;

        const readCell = document.createElement('td');
        const readButton = document.createElement('button');
        readButton.textContent = 'LEER';
        readButton.classList.add('btn', 'btn-read');
        readCell.appendChild(readButton);

        const removeCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Ya no me gusta';
        removeButton.classList.add('btn', 'btn-remove');
        removeCell.appendChild(removeButton);

        removeButton.addEventListener('click', () => {
            removeSavedBook(book.id);
            row.remove();
            document.querySelectorAll('.infobook').forEach(bookDiv => {
                if (bookDiv.getAttribute('data-book-id') === book.id) {
                    bookDiv.querySelector('.btnsave').classList.remove('saved');
                }
            });
        });

        row.appendChild(titleCell);
        row.appendChild(readCell);
        row.appendChild(removeCell);

        savedBooksTable.appendChild(row);
    });
}

function removeSavedBook(bookId) {
    let savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    savedBooks = savedBooks.filter(book => book.id !== bookId);
    localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
}

function attachSaveEventListeners() {
    document.querySelectorAll('.btnsave').forEach(btn => {
        btn.addEventListener('click', function(event) {
            const bookDiv = btn.closest('.infobook');
            saveBook(bookDiv);
        });
    });
}

function checkSavedBooks() {
    let savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    document.querySelectorAll('.infobook').forEach(bookDiv => {
        const bookId = bookDiv.getAttribute('data-book-id');
        if (savedBooks.some(book => book.id === bookId)) {
            bookDiv.querySelector('.btnsave').classList.add('saved');
        }
    });
}

function showConfirmationMessage(message) {
    const confirmationDiv = document.createElement('div');
    confirmationDiv.classList.add('confirmation-message');
    confirmationDiv.textContent = message;
    document.body.appendChild(confirmationDiv);

    setTimeout(() => {
        confirmationDiv.remove();
    }, 2000);
}

function searchBook(event) {
    event.preventDefault(); // Previene el envío del formulario y la recarga de la página

    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const infobookContainer = document.getElementById('infobook-container');

    // Limpia el contenedor de libros
    infobookContainer.innerHTML = '';

    // Filtra los libros que coinciden con la búsqueda
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchInput));

    // Añade los libros filtrados al contenedor
    filteredBooks.forEach(book => {
        const bookElement = createBookElement(book);
        infobookContainer.appendChild(bookElement);
    });

    // Vuelve a adjuntar los event listeners a los botones de guardar
    attachSaveEventListeners();
    checkSavedBooks();
}

document.addEventListener('DOMContentLoaded', () => {
    const infobookContainer = document.querySelector('.infobook-container');
    books.forEach(book => {
        const bookElement = createBookElement(book);
        infobookContainer.appendChild(bookElement);
    });

    attachSaveEventListeners();
    checkSavedBooks();
    updateSavedBooksTable();
});



//funcion para abrir y cerrar el menu lateral de materiales
document.addEventListener('DOMContentLoaded', function() {
    const orangeCircle = document.querySelector('.orange-circle');
    const rightSide = document.querySelector('.rightside');
    const overlay = document.querySelector('.overlay');

    orangeCircle.addEventListener('click', function() {
        rightSide.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        rightSide.classList.remove('active');
        overlay.classList.remove('active');
    });
})





