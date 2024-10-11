document.addEventListener('DOMContentLoaded', () => {
    const techCards = document.querySelectorAll('.tech-card'); 
    
    techCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'; 
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)'; 
            card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
    });

    const facts = [
        "Our ion engines are 10 times more efficient than traditional chemical rockets.",
        "The Stellar Voyages space suits can withstand temperatures from -200°C to 200°C.",
        "Our life support systems can recycle 99.9% of all water used on long-duration missions."
    ];

    const factContainer = document.createElement('div'); // Create a new div for facts
    factContainer.id = 'tech-facts'; 
    document.querySelector('.content-section').appendChild(factContainer); // Append fact container to the content section

    let currentFact = 0; // Track the current fact index
    setInterval(() => {
        factContainer.textContent = facts[currentFact];
        currentFact = (currentFact + 1) % facts.length;
    }, 5000);
});
