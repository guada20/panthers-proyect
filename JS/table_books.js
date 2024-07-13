const conCategoría = [
    ['1', 'Érase una vez en Colombia','Historia', 'ERASE-UNA-VEZ-EN-COLOMBIA.pdf', 'URL-audiobook'],
    ['2', 'Con los pelos de punta','Cuentos y Fantasia','CON-LOS-PELOS-DE-PUNTA.pdf', 'URL-audiobook'],
    ['3', 'Todo lo contrario', 'Reflexión', 'TODO-LO-CONTRARIO.pdf', 'URL-audiobook'],
    ['4', 'Cuentos para desenredar enredos' ,'Reflexión', 'cuentos-para-desenredar-enredos.pdf', 'URL-audiobook'],
    ['5', 'La finca viva', 'Campo y Naturaleza', 'LA-FINCA-VIVA.pdf', 'URL-audiobook'],
    ['6', 'La casa y el campo','Campo y Naturaleza', 'LA-CASA-Y-EL-CAMPO.pdf', 'URL-audiobook'],
    ['7', 'Historias y lugares', 'Historia', 'HISTORIAS-Y-LUGARES.pdf', 'URL-audiobook'],
    ['8', 'Lecturas para todos los días', 'Literatura y Arte', 'LECTURAS-PARA-TODOS-LOS-DIAS.pdf', 'URL-audiobook'],
    ['9', 'Planeta vivo', 'Campo y Naturaleza','PLANETA-VIVO.pdf', 'URL-audiobook'],
    ['10', 'El hombre y su cultura','Cultura', 'EL-HOMBRE-Y-SU-CULTURA.pdf', 'URL-audiobook'],
    ['11', 'Cuentos y pasatiempos', 'Literatura y Arte', 'CUENTOS-Y-PASATIEMPOS.pdf', 'URL-audiobook'],
    ['12', 'Cuentos para contar', 'Fantasia' , 'CUENTOS-PARA-CONTAR.pdf', ''],
    ['13', 'Los viajes del viejo Jacobo','Cultura', 'LOS-VIAJES-DEL-VIEJO-JACOBO.pdf', ''],
    ['14', 'Entre cuento y cuento', 'Literatura y Arte','ENTRE-CUENTO-Y-CUENTO.pdf', ''],
    ['15', 'Salud para contar','Salud', 'ENTRE-CUENTO-Y-CUENTO.pdf', ''],
    ['16', 'Más claro no canta un gallo','Cultura', 'MAS-CLARO-NO-CANTA-UN-GALLO.pdf', ''],
    ['17', 'La tierra, el cielo, y más allá', 'Universo', 'LA-TIERRA-EL-CIELO-Y-MAS-ALLA.pdf', ''],
    ['18', 'Los secretos de los animales', 'Campo y Naturaleza','LOS-SECRETOS-DE-LOS-ANIMALES.pdf', ''],
    ['19', 'Cuentos maravillosos','Cuentos y Fantasia', 'CUENTOS-MARAVILLOSO.pdf', ''],
    ['20', '¡A que te cojo ratón!', 'Juegos','A-QUE-TE-COJO-RATON.pdf', ''],
    ['21', 'Del campo a la mesa', 'Campo y Naturaleza','DEL-CAMPO-A-LA-MESA.pdf', ''],
    ['22', 'Los secretos de las plantas', 'Salud','LOS-SECRETOS-DE-LAS-PLANTAS.pdf', ''],
    ['23', 'Tan distintos y parientes','Ciencia','TAN-DISTINTOS-Y-PAREJETES.pdf', ''],
    ['23', 'Tiempo de hacer', 'Cultura','TIEMPO-DE-HACER.pdf', ''],
    ['24', 'Los primeros años','Salud', 'LOS-PRIMEROS-AÑOS.pdf', ''],
    ['25', 'Lecturas fantásticas', 'Cuentos y Fantasia', 'LECTURAS-FANTASTICAS.pdf', ''],
    ['26', 'Calor de hogar','Hogar', 'CALOR-DE-HOGAR.pdf', '']
];


window.addEventListener('load', () => {
    const tableBooks = document.getElementById('table_books');

    // Crear cabecera de la tabla
    const headerRow = document.createElement('div');
    headerRow.classList.add('row');

    const columns = ['Nombre', 'Categoría', 'PDF', 'Audiolibro'];
    columns.forEach(colName => {
        const headerColumn = document.createElement('div');
        headerColumn.classList.add('column_title');
        headerColumn.textContent = colName;
        headerRow.appendChild(headerColumn);
    });
    tableBooks.appendChild(headerRow);

    // Crear filas de datos
    conCategoría.forEach(book => {
        const row = document.createElement('div');
        row.classList.add('row');

        // Nombre del libro
        const nameColumn = document.createElement('div');
        nameColumn.classList.add('column');
        const nameLink = document.createElement('a');
        nameLink.href = `read_book.html?pdf=${book[3]}`;
        nameLink.textContent = book[1];
        nameColumn.appendChild(nameLink);
        row.appendChild(nameColumn);

        // Categoría
        const categoryColumn = document.createElement('div');
        categoryColumn.classList.add('column');
        categoryColumn.textContent = book[2];
        row.appendChild(categoryColumn);

        // PDF
        const pdfColumn = document.createElement('div');
        pdfColumn.classList.add('column');
        const pdfIcon = document.createElement('i');
        if (book[3]) {
            pdfIcon.classList.add('fa-solid', 'fa-check');
        } else {
            pdfIcon.classList.add('fa-regular', 'fa-circle-xmark');
        }
        pdfColumn.appendChild(pdfIcon);
        row.appendChild(pdfColumn);

        // Audiolibro
        const audioColumn = document.createElement('div');
        audioColumn.classList.add('column');
        const audioIcon = document.createElement('i');
        if (book[4]) {
            const audioLink = document.createElement('a');
            audioLink.href = 'audiobook.html';
            audioIcon.classList.add('fa-solid', 'fa-check');
            audioLink.appendChild(audioIcon);
            audioColumn.appendChild(audioLink);
        } else {
            audioIcon.classList.add('fa-regular', 'fa-circle-xmark');
            audioColumn.appendChild(audioIcon);
        }
        row.appendChild(audioColumn);

        tableBooks.appendChild(row);
    });
});

//buscar libros por categoria
window.addEventListener('load', () => {
    const tableBooks = document.getElementById('table_books');
    const categorySelect = document.getElementById('category_select');

    // Crear cabecera de la tabla
    const headerRow = document.createElement('div');
    headerRow.classList.add('row');

    const columns = ['Nombre', 'Categoría', 'PDF', 'Audiolibro'];
    columns.forEach(colName => {
        const headerColumn = document.createElement('div');
        headerColumn.classList.add('column_title');
        headerColumn.textContent = colName;
        headerRow.appendChild(headerColumn);
    });
    tableBooks.appendChild(headerRow);

    // Función para mostrar libros según la categoría seleccionada
    function mostrarLibrosPorCategoria(categoria) {
        // Limpiar tabla antes de agregar libros filtrados
        while (tableBooks.children.length > 1) {
            tableBooks.removeChild(tableBooks.lastChild);
        }

        // Crear filas de datos
        conCategoría.forEach(book => {
            // Filtrar libros por categoría
            if (categoria === 'todos' || book[2] === categoria) {
                const row = document.createElement('div');
                row.classList.add('row');

                // Nombre del libro (con enlace a read_book.html)
                const nameColumn = document.createElement('div');
                nameColumn.classList.add('column');
                const nameLink = document.createElement('a');
                nameLink.href = `read_book.html?pdf=${book[3]}`;
                nameLink.textContent = book[1];
                nameColumn.appendChild(nameLink);
                row.appendChild(nameColumn);

                // Categoría del libro
                const categoryColumn = document.createElement('div');
                categoryColumn.classList.add('column');
                categoryColumn.textContent = book[2];
                row.appendChild(categoryColumn);

                // PDF (icono)
                const pdfColumn = document.createElement('div');
                pdfColumn.classList.add('column');
                const pdfIcon = document.createElement('i');
                if (book[3]) {
                    pdfIcon.classList.add('fa-solid', 'fa-check');
                } else {
                    pdfIcon.classList.add('fa-regular', 'fa-circle-xmark');
                }
                pdfColumn.appendChild(pdfIcon);
                row.appendChild(pdfColumn);

                // Audiolibro (icono o enlace)
                const audioColumn = document.createElement('div');
                audioColumn.classList.add('column');
                const audioIcon = document.createElement('i');
                if (book[4]) {
                    const audioLink = document.createElement('a');
                    audioLink.href = 'audiobook.html';
                    audioIcon.classList.add('fa-solid', 'fa-check');
                    audioLink.appendChild(audioIcon);
                    audioColumn.appendChild(audioLink);
                } else {
                    audioIcon.classList.add('fa-regular', 'fa-circle-xmark');
                    audioColumn.appendChild(audioIcon);
                }
                row.appendChild(audioColumn);

                tableBooks.appendChild(row);
            }
        });
    }

    // Mostrar todos los libros al cargar la página
    mostrarLibrosPorCategoria('todos');

    // Event listener para cambiar la categoría seleccionada
    categorySelect.addEventListener('change', (event) => {
        const categoriaSeleccionada = event.target.value;
        mostrarLibrosPorCategoria(categoriaSeleccionada);
    });
});
