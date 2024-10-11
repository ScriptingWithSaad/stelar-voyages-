document.addEventListener('DOMContentLoaded', () => {
    // Event registration handler
    const eventLinks = document.querySelectorAll('.event-link');
    
    eventLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const eventName = link.closest('.event-card').querySelector('h3').textContent;
            // You can replace this with actual event registration logic
            alert(`Registering for event: ${eventName}`);
        });
    });

    // Add countdown timer for upcoming events
    const upcomingEvents = document.querySelectorAll('.event-card');
    
    upcomingEvents.forEach(event => {
        const dateString = event.querySelector('.event-date').textContent;
        const eventDate = new Date(dateString);
        const now = new Date();
        
        const timeLeft = eventDate - now;
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        
        const countdownElement = document.createElement('p');
        countdownElement.classList.add('event-countdown');
        countdownElement.textContent = `${daysLeft} days left`;
        
        event.appendChild(countdownElement);
    });
});