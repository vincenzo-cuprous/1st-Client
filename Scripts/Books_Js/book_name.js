document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search');
    const books = document.querySelectorAll('.column');

    // Event listener for the search input
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase().trim(); // Get the search term

        books.forEach(book => {
            const title = book.querySelector('.book-title').textContent.toLowerCase(); // Get book title text
            if (title.includes(searchTerm) && searchTerm !== "") {
                book.style.display = ''; // Show the book if it matches the search term
            } else {
                book.style.display = 'none'; // Hide the book if it doesn't match
            }
        });
    });
});
