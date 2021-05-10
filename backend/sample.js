const search_input = document.getElementById('search-bar');
const results = document.getElementById('results');

let search_term = '';
let books;

const fetchBooks = async () => {
    books = await fetch(
        ''
    ).then(res => res.json());
};

const showBooks = async () => {
    results.innerHTML = '';

    await fetchBooks();

    const ul = document.createElement('ul');
    ul.classList.add('books');

    books
        .filter(book =>
            book.img.toLowerCase().includes(search_term.toLowerCase())
        )
        .forEach(book => {
            const li = document.createElement('li');
            li.classList.add('book-item');

            const book_img = document.createElement('img');
            book_img.src = book.img;
            book_img.classList.add('book-img');

            const book_title = document.createElement('h3');
            book_title.innerText = book.title;
            book_title.classList.add('book-name');

            const book_info = document.createElement('div');
            book_info.classList.add('book-info');

            const book_author = document.createElement('h2');
            book_author.innerText = numberWithCommas(book.author);
            book_author.classList.add('book-author');

            const book_isbn = document.createElement('h5');
            book_isbn.innerText = 'isbn';
            book_isbn.classList.add('book-isbn-text');

            book_info.appendChild(book_author);
            book_info.appendChild(book_isbn);

            li.appendChild(book_img);
            li.appendChild(book_title);
            li.appendChild(book_info);
            li.appendChild(book_author)

            ul.appendChild(li);
        });

    results.appendChild(ul);
};

showBooks();

search_input.addEventListener('input', e => {
    search_term = e.target.value;
    showBooks();
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}