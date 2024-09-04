const portfolioGrids = document.querySelectorAll('.portfolio-grid');

portfolioGrids.forEach(grid => {
    grid.addEventListener('mouseover', () => {
        grid.style.animationPlayState = 'paused';
    });

    grid.addEventListener('mouseout', () => {
        grid.style.animationPlayState = 'running';
    });
});

// JavaScript to handle header transparency on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add the 'showing' class to h1, h2, h3, and h4 elements when they enter the viewport
function handleScroll() {
    const headings = document.querySelectorAll('h1, h2, h3, h4');

    headings.forEach(heading => {
        if (isInViewport(heading)) {
            heading.classList.add('showing');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Trigger the scroll handler on page load to show elements already in view
handleScroll();

