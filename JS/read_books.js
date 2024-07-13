const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');
const pdfName = urlParams.get('pdf');
let pdfLibro = `/PDFS/${pdfName}`;

window.addEventListener('load', () => {
    mostrarPDF(pdfLibro);
});

function getBook(id){
    const libroEncontrado = conCategoría.find(libro => libro[0] === id);
    if (libroEncontrado) {
        pdfLibro = `/PDFs/${libroEncontrado[3]}`;
        console.log('PDF a cargar:', pdfLibro);
    } else {
        console.error('Libro no encontrado');
    }
}

function mostrarPDF(url){

    // Asignar a la variable pdfjsLib
    const pdfjsLib = window['pdfjs-dist/build/pdf'];

    // Asignar a la variable de trabajador
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

    // Cargar el PDF
    pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
        const pdfViewer = document.getElementById('pdf-viewer');
        let pdfDoc = pdfDoc_;
        let pageNum = 1;

        // Función para renderizar una página
        function renderPage(num) {
            pdfDoc.getPage(num).then(function(page) {
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Renderizar la página en el canvas
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext);

                pdfViewer.appendChild(canvas);
            });
        }

        // Renderizar todas las páginas
        for(let num = 1; num <= pdfDoc.numPages; num++) {
            renderPage(num);
        }
    });
}

function addBook(){
    let libroNuevo =['1', 'CON LOS PELOS DE PUNTA', 'Historia', 'URL-Spreaker', 'CON-LOS-PELOS-DE-PUNTA.pdf', 'URL-video'];
}