// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form (simple placeholder action)
document.querySelector(".contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for your message! I’ll get back to you soon.");
});
