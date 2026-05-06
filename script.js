// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks?.classList.remove('active');
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Log form data (in production, send to backend)
    console.log('Form submitted:', data);
    
    // Show success message
    const button = contactForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Message Sent! ✓';
    button.style.backgroundColor = '#4CAF50';
    
    // Reset form
    contactForm.reset();
    
    // Restore button after 3 seconds
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
    }, 3000);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add active class to nav links based on current page
const currentPage = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
