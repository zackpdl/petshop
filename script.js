// Add event listeners to all adopt buttons
document.querySelectorAll('.adopt-btn').forEach(button => {
    button.addEventListener('click', () => {
        const petName = button.parentElement.querySelector('h3').textContent;
        alert(`Thank you for your interest in adopting ${petName}! Our team will contact you soon.`);
    });
});

// Simple image carousel functionality
let currentSlide = 0;
const cards = document.querySelectorAll('.pet-card');

function showNextSlide() {
    cards[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % cards.length;
    cards[currentSlide].style.display = 'block';
}

// Change slides every 5 seconds
setInterval(showNextSlide, 5000);