function wrapLetters() {
    const links = document.querySelectorAll('.nixie-animated');
    
    links.forEach(link => {
        // Store the original text for accessibility
        const originalText = link.textContent;
        
        // Set aria attributes to make the link accessible to screen readers
        link.setAttribute('aria-label', originalText);
        
        // Clear the inner content to add spans
        link.textContent = '';
        
        // Create a span for each letter
        for (let i = 0; i < originalText.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = originalText[i];
            letterSpan.setAttribute('aria-hidden', 'true'); // Hide individual spans from screen readers
            link.appendChild(letterSpan);
        }
    });
}

function openTab(evt, name){
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tab-content");
    for (i=0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }
    
    tabLinks = document.getElementsByClassName("tab-link");
    for (i=0; i < tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" active","")
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

 // Progress bar configuration
 const config = {
    length: 32,         // Number of characters in the bar
    filledChar: '▓',    // Character for filled portion
    emptyChar: ':',     // Character for empty portion
    currentProgress: 0, // Current progress (0-100)
    interval: null,     // Animation interval
    speed: 100,         // Update speed in ms (lower = faster)
    running: true       // Animation state
};

// DOM elements
const progressBarEl = document.getElementById('progress-bar');
const toggleBtn = document.getElementById('toggle-btn');
const speedControl = document.getElementById('speed');

// Update the progress bar display
function updateProgressBar() {
    const filledLength = Math.floor(config.length * config.currentProgress / 100);
    const emptyLength = config.length - filledLength;
    
    const bar = config.filledChar.repeat(filledLength) + 
                config.emptyChar.repeat(emptyLength);
    
    progressBarEl.textContent = bar;
}


function startAnimation() {
    config.interval = setInterval(() => {
        config.currentProgress += 1;
        
        if (config.currentProgress > 100) {
            config.currentProgress = 0;
        }
        
        updateProgressBar();
    }, config.speed);
}

function toggleAnimation() {
    if (config.running) {
        clearInterval(config.interval);
        toggleBtn.classList.remove("active")
        progressBarEl.classList.remove("nixie-animated")
    } else {
        startAnimation();
        progressBarEl.classList.add("nixie-animated")
        toggleBtn.classList.add("active")
    }
    config.running = !config.running;
}

function changeSpeed() {
    config.speed = 510 - speedControl.value; // Invert scale so higher = faster
    
    if (config.running) {
        clearInterval(config.interval);
        startAnimation();
    }
}

// Event listeners
toggleBtn.addEventListener('click', toggleAnimation);
speedControl.addEventListener('input', changeSpeed);
speedControl.addEventListener('input', function() {
    const min = parseInt(this.min);
    const max = parseInt(this.max);
    const val = parseInt(this.value);
    const percent = ((val - min) / (max - min)) * 100;
    
    // Update the CSS variable
    this.style.setProperty('--percent', percent + '%');
});
// Initialize
updateProgressBar();
startAnimation();


document.addEventListener('DOMContentLoaded', wrapLetters);
document.getElementById('defaultOpen').click();