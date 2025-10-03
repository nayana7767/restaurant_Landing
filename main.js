// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.remove());
    document.querySelectorAll('.form-control').forEach(el => el.classList.remove('is-invalid'));

    // Name validation
    if (!name.value.trim()) {
      showError(name, 'Name is required');
      isValid = false;
    } else if (name.value.trim().length < 2) {
      showError(name, 'Name must be at least 2 characters');
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      showError(email, 'Email is required');
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      showError(email, 'Please enter a valid email');
      isValid = false;
    }

    // Message validation
    if (!message.value.trim()) {
      showError(message, 'Message is required');
      isValid = false;
    } else if (message.value.trim().length < 10) {
      showError(message, 'Message must be at least 10 characters');
      isValid = false;
    } else if (message.value.trim().length > 500) {
      showError(message, 'Message must be less than 500 characters');
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
      contactForm.reset();
    }
  });
}

function showError(input, message) {
  input.classList.add('is-invalid');
  const error = document.createElement('div');
  error.className = 'error text-danger';
  error.textContent = message;
  input.parentNode.insertBefore(error, input.nextSibling);
}

// Gallery modal population (if needed for dynamic content)
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', function() {
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    modalImg.src = this.src;
    modalCaption.textContent = this.alt;
  });
});
