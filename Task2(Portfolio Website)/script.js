// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default jump
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Contact form submit handler
  function handleSubmit(e) {
    e.preventDefault(); // Prevent form from reloading the page
  
    // Show confirmation message
    alert("Thanks for your message, Vaishnavi will contact you soon! 💌");
  
    // Clear the form
    e.target.reset();
  }
  
