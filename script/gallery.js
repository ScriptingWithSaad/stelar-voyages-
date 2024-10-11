document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const caption = item.querySelector('p').textContent;
            
            // Create and display a modal for the full-size image
            const modal = document.createElement('div');
            modal.classList.add('gallery-modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <img src="${imgSrc}" alt="${caption}">
                    <p>${caption}</p>
                    <button class="close-modal">Close</button>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.remove();
            });
        });
    });
});
