function wrapLetters() {
    const links = document.querySelectorAll('.nixie-link');
    
    links.forEach(link => {
        const text = link.textContent;
        link.textContent = '';
        
        // Create a span for each letter
        for (let i = 0; i < text.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = text[i];
            link.appendChild(letterSpan);
        }
    });
}

document.addEventListener('DOMContentLoaded', wrapLetters);