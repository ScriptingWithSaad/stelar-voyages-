document.addEventListener('DOMContentLoaded', () => {
    const missionCards = document.querySelectorAll('.mission-card');
    
    missionCards.forEach(card => {
        card.addEventListener('click', () => {
            const missionId = card.dataset.missionId;
            alert(`Fetching details for mission ${missionId}`);
        });
    });
});
