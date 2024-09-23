document.addEventListener('DOMContentLoaded', () => {
    // Property type selection
    const propertyTypes = document.querySelectorAll('.property-type');
    propertyTypes.forEach(button => {
        button.addEventListener('click', () => {
            propertyTypes.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Search functionality (basic implementation)
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        const destination = document.querySelector('input[placeholder="Search destinations"]').value;
        const checkIn = document.querySelector('input[placeholder="Add dates"]').value;
        const checkOut = document.querySelectorAll('input[placeholder="Add dates"]')[1].value;
        const guests = document.querySelector('input[placeholder="Add guests"]').value;

        console.log('Search parameters:', { destination, checkIn, checkOut, guests });
        // Here you would typically send these parameters to a server or update the UI
        alert(`Searching for: ${destination}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}`);
    });

    // Share button functionality
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const listingTitle = button.closest('.listing-card').querySelector('h3').textContent;
            alert(`Sharing: ${listingTitle}`);
            // Here you would typically open a share dialog or copy a link to clipboard
        });
    });
});