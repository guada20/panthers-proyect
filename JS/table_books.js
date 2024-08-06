let url = '/PDFS/'

const conCategoría = [
    ['1', 'Érase una vez en Colombia','Historia', '/PDFS/ERASE_UNA_VEZ_EN_COLOMBIA.pdf', 'https://www.spreaker.com/podcast/erase-una-vez-en-colombia--5822929'],
    ['2', 'Con los pelos de punta','Cuentos y Fantasia','/PDFS/CON_LOS_PELOS_DE_PUNTA.pdf', 'https://www.spreaker.com/podcast/secretos-para-contar-septima-coleccion--4796884'],
    ['3', 'Todo lo contrario', 'Reflexión', '/PDFS/TODO_LO_CONTRARIO.pdf', 'https://www.spreaker.com/podcast/secretos-para-contar-septima-coleccion--4796884'],
    ['4', 'Cuentos para desenredar enredos' ,'Reflexión', '/PDFS/CUENTOS_PARA_DESENREDAR_ENREDOS.pdf', 'https://www.spreaker.com/podcast/secretos-para-contar-septima-coleccion--4796884'],
    ['5', 'La finca viva', 'Campo y Naturaleza', '/PDFS/LA_FINCA_VIVA.pdf', 'https://www.spreaker.com/podcast/secretos-para-contar-septima-coleccion--4796884'],
    ['6', 'La casa y el campo','Campo y Naturaleza', '/PDFS/LA_CASA_Y_EL_CAMPO.pdf', 'https://www.spreaker.com/podcast/secretos-para-contar-la-casa-y-el-campo-historias-y-lugares-y-lecturas-para-todos-los-dias--4421133'],
    ['7', 'Historias y lugares', 'Historia', '/PDFS/HISTORIAS_Y_LUGARES.pdf', 'https://www.spreaker.com/podcast/historias-y-lugares--4671213'],
    ['8', 'Lecturas para todos los días', 'Literatura y Arte', '/PDFS/LECTURAS_PARA_TODOS_LOS_DIAS.pdf', 'https://www.spreaker.com/podcast/secretos-para-contar-la-casa-y-el-campo-historias-y-lugares-y-lecturas-para-todos-los-dias--4421133'],
    ['9', 'Planeta vivo', 'Campo y Naturaleza','/PDFS/PLANETA_VIVO.pdf', 'https://www.spreaker.com/podcast/secretos-para-contar-planeta-vivo-el-hombre-y-su-cultura-y-cuentos-y-pasatiempos--4421091'],
    ['10', 'El hombre y su cultura','Cultura', '/PDFS/EL_HOMBRE_Y_SU_CULTURA.pdf', 'https://www.spreaker.com/podcast/secretos-para-contar-planeta-vivo-el-hombre-y-su-cultura-y-cuentos-y-pasatiempos--4421091'],
    ['11', 'Cuentos y pasatiempos', 'Literatura y Arte', '/PDFS/CUENTOS_Y_PASATIEMPOS.pdf', 'https://www.spreaker.com/podcast/secretos-para-contar-planeta-vivo-el-hombre-y-su-cultura-y-cuentos-y-pasatiempos--4421091'],
    ['12', 'Cuentos para contar', 'Fantasia' , '/PDFS/CUENTOS_PARA_CONTAR.pdf', ''],
    ['13', 'Los viajes del viejo Jacobo','Cultura', '/PDFS/LOS_VIAJES_DEL_VIEJO_JACOBO.pdf', ''],
    ['14', 'Entre cuento y cuento', 'Literatura y Arte','/PDFS/ENTRE_CUENTO_Y_CUENTO.pdf', ''],
    ['15', 'Salud para contar','Salud', '/PDFS/SALUD_PARA_CONTAR.pdf', ''],
    ['16', 'Más claro no canta un gallo','Cultura', '/PDFS/MAS_CLARO_NO_CANTA_UN_GALLO.pdf', ''],
    ['17', 'La tierra, el cielo, y más allá', 'Universo', '/PDFS/LA_TIERRA_EL_CIELO_Y_MAS_ALLA.pdf', ''],
    ['18', 'Los secretos de los animales', 'Campo y Naturaleza','/PDFS/LOS_SECRETOS_DE_LOS_ANIMALES.pdf', ''],
    ['19', 'Cuentos maravillosos','Cuentos y Fantasia', '/PDFS/CUENTOS_MARAVILLOSOS.pdf', ''],
    ['20', '¡A que te cojo ratón!', 'Juegos','/PDFS/A_QUE_TE_COJO_RATON.pdf', ''],
    ['21', 'Del campo a la mesa', 'Campo y Naturaleza','/PDFS/DEL_CAMPO_A_LA_MESA.pdf', ''],
    ['22', 'Los secretos de las plantas', 'Salud','/PDFS/LOS_SECRETOS_DE_LAS_PLANTAS.pdf', ''],
    ['23', 'Tan distintos y parientes','Ciencia','/PDFS/TAN_DISTINTOS_Y_PARIENTES.pdf', ''],
    ['23', 'Tiempo de hacer', 'Cultura','/PDFS/TIEMPO_DE_HACER.pdf', ''],
    ['24', 'Los primeros años','Salud', '/PDFS/LOS_PRIMEROS_ANOS.pdf', ''],
    ['25', 'Lecturas fantásticas', 'Cuentos y Fantasia', '/PDFS/LITERATURA_FANTASTICA.pdf', ''],
    ['26', 'Calor de hogar','Hogar', '/PDFS/CALOR_DE_HOGAR.pdf', '']
];

const downloadLinks=[
    ['/PDFS/ERASE_UNA_VEZ_EN_COLOMBIA.pdf'],
    ['/PDFS/CON_LOS_PELOS_DE_PUNTA.pdf'],
    ['/PDFS/TODO_LO_CONTRARIO.pdf'],
    ['/PDFS/CUENTOS_PARA_DESENREDAR_ENREDOS.pdf'],
    ['/PDFS/LA_FINCA_VIVA.pdf'],
    ['/PDFS/LA_CASA_Y_EL_CAMPO.pdf'],
    ['/PDFS/HISTORIAS_Y_LUGARES.pdf'],
    ['/PDFS/LECTURAS_PARA_TODOS_LOS_DIAS.pdf'],
    ['/PDFS/PLANETA_VIVO.pdf'],
    ['/PDFS/EL_HOMBRE_Y_SU_CULTURA.pdf'],
    ['/PDFS/CUENTOS_Y_PASATIEMPOS.pdf'],
    ['/PDFS/CUENTOS_PARA_CONTAR.pdf'],
    ['/PDFS/LOS_VIAJES_DEL_VIEJO_JACOBO.pdf'],
    ['/PDFS/ENTRE_CUENTO_Y_CUENTO.pdf'],
    ['/PDFS/SALUD_PARA_CONTAR.pdf'],
    ['/PDFS/MAS_CLARO_NO_CANTA_UN_GALLO.pdf'],
    ['/PDFS/LA_TIERRA_EL_CIELO_Y_MAS_ALLA.pdf'],
    ['/PDFS/LOS_SECRETOS_DE_LOS_ANIMALES.pdf'],
    ['/PDFS/CUENTOS_MARAVILLOSOS.pdf'],
    ['/PDFS/A_QUE_TE_COJO_RATON.pdf'],
    ['/PDFS/DEL_CAMPO_A_LA_MESA.pdf'],
    ['/PDFS/LOS_SECRETOS_DE_LAS_PLANTAS.pdf'],
    ['/PDFS/TAN_DISTINTOS_Y_PARIENTES.pdf'],
    ['/PDFS/TIEMPO_DE_HACER.pdf'],
    ['/PDFS/LOS_PRIMEROS_ANOS.pdf'],
    ['/PDFS/LITERATURA_FANTASTICA.pdf'],
    ['/PDFS/CALOR_DE_HOGAR.pdf']
]


localStorage.setItem('conCategoría', JSON.stringify(conCategoría));
localStorage.setItem('downloadLinks', JSON.stringify(downloadLinks));

window.addEventListener('load', () => {
    const tableBooks = document.getElementById('table_books');
    const categorySelect = document.getElementById('category_select');

    if (!tableBooks) {
        console.error('No se encontró el elemento con id "table_books".');
        return;
    }

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

    //  mostrar libros según la categoría seleccionada
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
                row.setAttribute('data-id', book[0]); 

                // Nombre del libro
                const nameColumn = document.createElement('div');
                nameColumn.classList.add('column');
                const nameLink = document.createElement('a');
                nameLink.href = '#'; 
                nameLink.textContent = book[1];
                nameLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    const pdfUrl = encodeURIComponent(book[3]);
                    const audioUrl = encodeURIComponent(book[4]); 
                    window.open(`read_book.html?pdf=${pdfUrl}&audio=${audioUrl}`, '_blank');
                });
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
                    audioLink.href = 'javascript:void(0)';
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