document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const pdfUrl = decodeURIComponent(urlParams.get('pdf'));
    const audioUrl = decodeURIComponent(urlParams.get('audio'));
    const pdfViewer = document.getElementById('pdf-viewer');
    const audioContainer = document.getElementById('audio-container');

    if (pdfUrl) {
        renderPDF(pdfUrl);
    } else {
        console.error("No se proporcionó URL del PDF.");
    }

    if (audioUrl) {
        // Mostrar audiolibro en iframe
        const audioIframe = createAudioIframe(audioUrl);
        audioContainer.appendChild(audioIframe);
    }
});

function renderPDF(url) {
    const pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.7.570/pdf.worker.min.js';

    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function(pdf) {
        const pdfViewer = document.getElementById('pdf-viewer');

        let currentPage = 1;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    renderPage(currentPage);
                    currentPage++;
                    observer.unobserve(entry.target);
                    if (currentPage <= pdf.numPages) {
                        observer.observe(document.querySelector(`#page-${currentPage}`));
                    }
                }
            });
        });

        function renderPage(pageNum) {
            pdf.getPage(pageNum).then(function(page) {
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                canvas.id = `page-${pageNum}`;

                page.render({
                    canvasContext: context,
                    viewport: viewport
                });

                pdfViewer.appendChild(canvas);
                observer.observe(canvas);
            });
        }

        renderPage(1);
    }).catch(function(error) {
        console.error('Error al cargar el PDF:', error);
    });
}

function createAudioIframe(audioUrl) {
    const iframeElement = document.createElement('iframe');
    iframeElement.src = audioUrl;
    iframeElement.width = '100%';
    iframeElement.height = '200px'; 
    iframeElement.style.border = 'none'; 
    return iframeElement;
}
