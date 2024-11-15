/* eslint-disable no-undef */
let container = null;

function createContainer() {
    container = document.createElement('div');
    container.id = 'selection-extension-root';
    document.body.appendChild(container);

    // Create iframe to host React app
    const iframe = document.createElement('iframe');
    // Corrigir o caminho do iframe
    iframe.src = chrome.runtime.getURL('../../public/index.html');
    // Adicionar dimensões e estilos explícitos
    iframe.style.cssText = `
        border: none;
        position: fixed;
        z-index: 10000;
        display: none;
        width: 300px;
        height: 200px;
        background: white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        border-radius: 8px;
    `;
    container.appendChild(iframe);

    // Verificar se o iframe foi carregado
    iframe.onload = () => {
        console.log('Iframe loaded successfully');
    };

    return iframe;
}

let iframe = createContainer();

function handleMouseUp(event) {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    console.log('selectedText:', selectedText);

    if (selectedText && !selection.isCollapsed) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Ajustar posicionamento do iframe
        const top = rect.bottom + window.scrollY;
        const left = rect.left + window.scrollX;

        // Position iframe near the selected text
        iframe.style.display = 'block';
        iframe.style.left = `${left}px`;
        iframe.style.top = `${top + 10}px`; // Adicionar pequeno offset

        // Send message to React app
        try {
            iframe.contentWindow.postMessage({
                type: 'TEXT_SELECTED',
                payload: {
                    text: selectedText,
                    position: { x: left, y: top }
                }
            }, '*');
        } catch (error) {
            console.error('Error sending message to iframe:', error);
        }
    }
}

// Adicionar debounce para evitar múltiplos eventos
let timeout;
document.addEventListener('mouseup', (event) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => handleMouseUp(event), 100);
});

// Fechar o iframe quando clicar fora
document.addEventListener('click', (event) => {
    if (!event.target.closest('#selection-extension-root')) {
        iframe.style.display = 'none';
    }
});

// Clean up
window.addEventListener('beforeunload', () => {
    document.removeEventListener('mouseup', handleMouseUp);
});