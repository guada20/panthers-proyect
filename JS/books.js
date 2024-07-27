//datos libros 
const books = [
    {id:"1" , title: "Érase una vez en Colombia", image: "../assets/imagenes/libroport1.png", downloadLink:"/PDFS/ERASE_UNA_VEZ_EN_COLOMBIA.pdf"},
    {id:"2" , title: "Con los pelos de punta", image: "../assets/imagenes/libroport2.png", downloadLink:"/PDFS/CON_LOS_PELOS_DE_PUNTA.pdf" },
    {id:"3" , title: "Todo lo contrario", image: "../assets/imagenes/libroport3.png", downloadLink:"/PDFS/TODO_LO_CONTRARIO.pdf" },
    {id:"4" , title: "Cuentos para desenredar enredos", image: "../assets/imagenes/libroport4.png", downloadLink:"/PDFS/CUENTOS_PARA_DESENREDAR_ENREDOS.pdf" },
    {id:"5" , title: "La finca viva", image: "../assets/imagenes/libroport5.png" , downloadLink:"/PDFS/LA_FINCA_VIVA.pdf"},
    {id:"6" , title: "La casa y el campo", image: "../assets/imagenes/libroport6.png", downloadLink:"/PDFS/LA_CASA_Y_EL_CAMPO.pdf" },
    {id:"7" , title: "Historias y lugares", image: "../assets/imagenes/libroport7.png", downloadLink:"/PDFS/HISTORIAS_Y_LUGARES.pdf" },
    {id:"8" , title: "Lecturas para todos los días", image: "../assets/imagenes/libroport8.png",downloadLink:"/PDFS/LECTURAS_PARA_TODOS_LOS_DIAS.pdf" },
    {id:"9" , title: "Planeta vivo", image: "../assets/imagenes/libroport9.png",downloadLink:"/PDFS/PLANETA_VIVO.pdf" },
    {id:"10" , title: "El hombre y su cultura", image: "../assets/imagenes/libroport10.png",downloadLink:"/PDFS/EL_HOMBRE_Y_SU_CULTURA.pdf" },
    {id:"11" , title: "Cuentos y pasatiempos", image: "../assets/imagenes/libroport11.png",downloadLink:"/PDFS/CUENTOS_Y_PASATIEMPOS.pdf" },
    {id:"12" , title: "Cuentos para contar", image: "../assets/imagenes/libroport12.png",downloadLink:"/PDFS/CUENTOS_PARA_CONTAR.pdf" },
    {id:"13" , title: "Los viajes del viejo Jacobo", image: "../assets/imagenes/libroport13.png",downloadLink:"/PDFS/LOS_VIAJES_DEL_VIEJO_JACOBO.pdf" },
    {id:"14" , title: "Entre cuento y cuento", image: "../assets/imagenes/libroport.png",downloadLink:"/PDFS/ENTRE_CUENTO_Y_CUENTO.pdf" },
    {id:"15" , title: "Salud para contar", image: "../assets/imagenes/libroport14.png",downloadLink:"/PDFS/SALUD_PARA_CONTAR.pdf" },
    {id:"16" , title: "Más claro no canta un gallo", image: "../assets/imagenes/libroport15.png",downloadLink:"/PDFS/MAS_CLARO_NO_CANTA_UN_GALLO.pdf" },
    {id:"17" , title: "La tierra, el cielo, y más allá", image: "../assets/imagenes/libroport16.png",downloadLink:"/PDFS/LA_TIERRA_EL_CIELO_Y_MAS_ALLA.pdf" },
    {id:"18" , title: "Los secretos de los animales", image: "../assets/imagenes/libroport17.png",downloadLink:"/PDFS/LOS_SECRETOS_DE_LOS_ANIMALES.pdf" },
    {id:"19" , title: "Cuentos maravillosos", image: "../assets/imagenes/libroport18.png",downloadLink:"/PDFS/CUENTOS_MARAVILLOSOS.pdf" },
    {id:"20" , title: "¡A que te cojo ratón!", image: "../assets/imagenes/libroport19.png",downloadLink:"/PDFS/A_QUE_TE_COJO_RATON.pdf" },
    {id:"21" , title: "Del campo a la mesa", image: "../assets/imagenes/libroport20.png",downloadLink:"/PDFS/DEL_CAMPO_A_LA_MESA.pdf" },
    {id:"22" , title: "Los secretos de las plantas", image: "../assets/imagenes/libroport21.png",downloadLink:"/PDFS/LOS_SECRETOS_DE_LAS_PLANTAS.pdf" },
    {id:"23" , title: "Tan distintos y parientes", image: "../assets/imagenes/libroport22.png",downloadLink:"/PDFS/TAN_DISTINTOS_Y_PARIENTES.pdf" },
    {id:"24" , title: "Tiempo de hacer", image: "../assets/imagenes/libroport23.png",downloadLink:"/PDFS/TIEMPO_DE_HACER.pdf" },
    {id:"25" , title: "Los primeros años", image: "../assets/imagenes/libroport24.png" ,downloadLink:"/PDFS/LOS_PRIMEROS_ANOS.pdf"},
    {id:"26" , title: "Lecturas fantásticas", image: "../assets/imagenes/libroport25.png",downloadLink:"/PDFS/LITERATURA_FANTASTICA.pdf" },
    {id:"27" , title: "Calor de hogar", image: "../assets/imagenes/libroport26.png",downloadLink:"/PDFS/CALOR_DE_HOGAR.pdf" }
];

function createBookElement(book) {
    const template = document.getElementById('book-template').content.cloneNode(true);
    template.querySelector('.imgbook').src = book.image;
    template.querySelector('.titlebook').textContent = book.title;
    template.querySelector('.infobook').setAttribute('data-book-id', book.id);

    // Event listener para el botón 'LEER'
    const btnHear = template.querySelector('.btnhear');
    btnHear.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar comportamiento predeterminado
        downloadBook(book.downloadLink);
    });

    return template;
}

function downloadBook(downloadLink) {
    const link = document.createElement('a');
    link.href = downloadLink;
    link.download = downloadLink.split('/').pop();
    link.click();
}

function saveBook(bookDiv) {
    const bookId = bookDiv.getAttribute('data-book-id');
    const bookData = books.find(book => book.id === bookId);

    let savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    const bookIndex = savedBooks.findIndex(book => book.id === bookId);

    const saveButton = bookDiv.querySelector('.btnsave');

    if (bookIndex === -1) {
        savedBooks.push(bookData);
        localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
        saveButton.classList.add('saved');
        showConfirmationMessage('Libro guardado!');
    } else {
        savedBooks.splice(bookIndex, 1);
        localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
        saveButton.classList.remove('saved');
        showConfirmationMessage('Libro eliminado de guardados!');
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

        const actionsCell = document.createElement('td');
        const downloadButton = document.createElement('a');
        downloadButton.textContent = 'DESCARGAR';
        downloadButton.href = book.downloadLink;
        downloadButton.classList.add('btn', 'btn-download');
        downloadButton.download = book.downloadLink.split('/').pop();
        actionsCell.appendChild(downloadButton);

        const removeCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Ya no me gusta';
        removeButton.classList.add('btn', 'btn-remove');
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
        row.appendChild(actionsCell);
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

function normalizeString(str) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function searchBook(event) {
    event.preventDefault(); 

    const searchInput = normalizeString(document.getElementById('searchInput').value);
    const infobookContainer = document.getElementById('infobook-container');

    infobookContainer.innerHTML = '';

    const filteredBooks = books.filter(book => normalizeString(book.title).includes(searchInput));

    filteredBooks.forEach(book => {
        const bookElement = createBookElement(book);
        infobookContainer.appendChild(bookElement);
    });

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