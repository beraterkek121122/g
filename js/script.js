document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would normally send the form data to a server
            // For this static example, we'll just show an alert
            alert(`Teşekkürler ${name}! Mesajınız alındı. Size ${email} adresinden dönüş yapacağım.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Simple animation for skills section
    const skillsSection = document.querySelector('.skills');
    
    if (skillsSection) {
        window.addEventListener('scroll', function() {
            const skillsPosition = skillsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (skillsPosition < screenPosition) {
                skillsSection.style.opacity = '1';
                skillsSection.style.transform = 'translateY(0)';
            }
        });
        
        // Initial state
        skillsSection.style.opacity = '0';
        skillsSection.style.transform = 'translateY(20px)';
        skillsSection.style.transition = 'all 0.5s ease';
    }
});