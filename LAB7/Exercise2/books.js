let books = [
    { title: "JavaScript Essentials", author: "John Smith", category: "Programming", price: 450, rating: 4.5, year: 2023 },
    { title: "Python Basics", author: "Jane Doe", category: "Programming", price: 400, rating: 4.2, year: 2022 },
    { title: "Fictional Story", author: "Alice", category: "Fiction", price: 300, rating: 3.8, year: 2021 },
    { title: "Science Facts", author: "Bob", category: "Science", price: 500, rating: 4.7, year: 2020 },
    { title: "Advanced JS", author: "Tom", category: "Programming", price: 600, rating: 4.8, year: 2023 },
    { title: "Cooking 101", author: "Chef Alex", category: "Fiction", price: 350, rating: 4.0, year: 2021 },
    { title: "Physics Made Easy", author: "Dr. Ray", category: "Science", price: 550, rating: 4.6, year: 2022 },
    { title: "React Guide", author: "Emily", category: "Programming", price: 480, rating: 4.4, year: 2023 },
    { title: "Mystery Tales", author: "Sam", category: "Fiction", price: 320, rating: 3.9, year: 2020 },
    { title: "Chemistry Basics", author: "Dr. Lee", category: "Science", price: 450, rating: 4.3, year: 2022 }
];

let currentBooks = books.slice();
let currentPage = 1;
let pageSize = 5;

function renderBooks(data) {
    const container = document.getElementById("books");
    container.innerHTML = "";
    let start = (currentPage - 1) * pageSize;
    let end = start + pageSize;
    let pageData = data.slice(start, end);
    pageData.forEach(book => {
        container.innerHTML += `
      <div class="book">
        <h3>${book.title}</h3>
        <p><b>Author:</b> ${book.author}</p>
        <p><b>Category:</b> ${book.category}</p>
        <p><b>Price:</b> ${book.price}</p>
        <p><b>Rating:</b> ${book.rating}</p>
        <p><b>Year:</b> ${book.year}</p>
      </div>
    `;
    });
}

function searchBooks() {
    const query = document.getElementById("searchTitle").value.toLowerCase();
    currentBooks = books.filter(b => b.title.toLowerCase().includes(query));
    currentPage = 1;
    renderBooks(currentBooks);
}

function filterCategory() {
    const category = document.getElementById("categorySelect").value;
    currentBooks = category ? books.filter(b => b.category == category) : books.slice();
    currentPage = 1;
    renderBooks(currentBooks);
}

function sortBooks() {
    const sortVal = document.getElementById("sortSelect").value;
    if (sortVal == "priceAsc") currentBooks.sort((a, b) => a.price - b.price);
    else if (sortVal == "priceDesc") currentBooks.sort((a, b) => b.price - a.price);
    else if (sortVal == "ratingDesc") currentBooks.sort((a, b) => b.rating - b.rating);
    currentPage = 1;
    renderBooks(currentBooks);
}

function topRated() {
    currentBooks = books.filter(b => b.rating >= 4).sort((a, b) => b.rating - b.rating).slice(0, 5);
    currentPage = 1;
    renderBooks(currentBooks);
}

function loadMore() {
    currentPage++;
    renderBooks(currentBooks);
}

renderBooks(currentBooks);