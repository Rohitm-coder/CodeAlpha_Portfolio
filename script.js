// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#222'; // Darker background when scrolled
        nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    } else {
        nav.style.background = '#333'; // Original background
        nav.style.boxShadow = 'none';
    }
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formDetails = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // You can handle form submission here
        // For example, sending data to a server or showing a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add animation for skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Typing effect for the home section
function typeEffect() {
    const text = "Web Developer | Designer | Creative Thinker";
    const speed = 100; // typing speed in milliseconds
    let i = 0;
    const typeWriter = document.querySelector('#home p');
    
    if (typeWriter) {
        typeWriter.innerHTML = '';
        function type() {
            if (i < text.length) {
                typeWriter.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
}

// Call typing effect when page loads
document.addEventListener('DOMContentLoaded', typeEffect);

// Scroll reveal animation
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .about-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add this CSS for the reveal animation
// Add these styles to your CSS file
/*
.skill-card, .project-card, .about-content {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.skill-card.active, .project-card.active, .about-content.active {
    opacity: 1;
    transform: translateY(0);
}
*/

// Theme switcher (light/dark mode)
const createThemeSwitcher = () => {
    const switcher = document.createElement('button');
    switcher.innerHTML = '🌙';
    switcher.className = 'theme-switcher';
    document.body.appendChild(switcher);

    switcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        switcher.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });
};

createThemeSwitcher();

// Add these styles to your CSS for the theme switcher
/*
.theme-switcher {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 50%;
    border: none;
    background: #333;
    color: white;
    cursor: pointer;
    z-index: 1000;
}

.dark-theme {
    background-color: #222;
    color: #fff;
}

.dark-theme .skill-card,
.dark-theme .project-card {
    background: #333;
}
*/

// Intersection Observer for better scroll animations
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'loader';
    document.body.appendChild(loader);

    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1000);
});

// Add this CSS for the loader
/*
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.loader::after {
    content: '';
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
*/