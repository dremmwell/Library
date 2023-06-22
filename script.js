
const addBookBtn = document.getElementById('add-book-btn');
const overlay = document.getElementById("overlay");
const formContainer = document.getElementById("form-container");
const libraryGrid = document.getElementById("library-grid");
const bookForm = document.getElementById("add-book-form");
const logInBtn = document.getElementById("logIn-btn");

let library = [];

function Book(title = "unknown", author ="unknown", description ="unknown", pages = 0, isRead = false){
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.isRead = isRead;
    this.shelf = library.length;
}

function BookCard(book){
    this.bookCard = document.createElement('div');
    this.bookTitle = document.createElement('h2');
    this.bookAuthor = document.createElement('h3');
    this.bookDescription = document.createElement('p');
    this.removeBtn = document.createElement('button');
    this.removeLabel = document.createElement('h2');
    this.readBtn = document.createElement('button');
    this.readLabel = document.createElement('h2');
    this.pagesLabel = document.createElement('h4');

    this.bookCard.classList.add('book-card', 'blured-rounded');
    this.bookTitle.classList.add('book')
    this.bookDescription.classList.add('book-description');
    this.removeBtn.classList.add('btn', 'blured-rounded');
    this.readBtn.classList.add('btn', 'blured-rounded');

    this.removeLabel.textContent = "Remove book";
    this.readLabel.textContent = "Not Read";
    this.removeBtn.appendChild(this.removeLabel);
    this.readBtn.appendChild(this.readLabel);

    this.isRead = book.isRead;
    this.shelf = book.shelf;

    this.bookTitle.textContent = book.title;
    this.bookAuthor.textContent = "by "+ book.author;
    this.bookDescription.textContent = book.description;
    this.pagesLabel.textContent = "Pages: " + book.pages;
    
    if(book.isRead){
        this.readLabel.textContent = "Read";
        this.readBtn.style.backgroundColor = "lightblue";

    }
    else{
        this.readLabel.textContent = "Not Read";
        this.readBtn.style.backgroundColor = "#f89575";
    }

    this.bookCard.appendChild(this.bookTitle);
    this.bookCard.appendChild(this.bookAuthor);
    this.bookCard.appendChild(this.bookDescription);
    this.bookCard.appendChild(this.pagesLabel);
    this.bookCard.appendChild(this.readBtn);
    this.bookCard.appendChild(this.removeBtn);

    this.removeBtn.onclick = () => {
        removeBookCard(book.shelf);
    }

    this.readBtn.onclick = () => {
        if(this.isRead){
            this.readLabel.textContent = "Not Read";
            this.readBtn.style.backgroundColor = "#f89575";
            this.isRead = false;
        }
        else{
            this.readLabel.textContent = "Read";
            this.readBtn.style.backgroundColor = "lightblue";
            this.isRead = true;
        }
    }
}

function removeBookCard(shelf){
    library.splice(shelf, 1);
    clearGrid();
    displayLibrary(library);
}

function displayLibrary(library){
        library.forEach((book, index) => {
            book.shelf = index;
            const newBookCard = new BookCard(book);
            libraryGrid.appendChild(newBookCard.bookCard);
        });
}

function addBookToLibrary(newBook) {
    library.push(newBook);
}

function openNewBookForm(){ 
    overlay.style.display = 'block';
}

function closeNewBookForm(){
    overlay.style.display = 'none';
}

function getBookInfos(){
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const description = document.getElementById('description');
    const pages = document.getElementById('pages');
    const isRead = document.getElementById('isRead');

    const newBook = new Book;

    newBook.title = title.value;
    newBook.author = author.value;
    newBook.description = description.value;
    newBook.pages = pages.value;
    newBook.isRead = isRead.checked;

    return newBook
}

function clearGrid(){
    libraryGrid.innerHTML = '';
}


addBookBtn.addEventListener("click", function () {
    openNewBookForm();
}); 

overlay.addEventListener("click", function () {
    closeNewBookForm();
});

formContainer.addEventListener("click", function (e) {
    e.stopPropagation();
});

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newBook = getBookInfos();
    addBookToLibrary(newBook);
    closeNewBookForm();
    clearGrid();
    displayLibrary(library);
});

 

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                


