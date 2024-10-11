document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-us-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        
        if (name === '' || email === '') {
            alert('Please fill in all required fields.');
            return;
        }
        
        // You would typically send this data to a server here
        console.log('Form submitted:', { name, email });
        alert('Thank you for your message. We will get back to you soon!');
        form.reset();
    });
});