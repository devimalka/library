let myLibrary = []

function Book(title,author,pages){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false
}

function addBookToLibrary(book){

    myLibrary.push(book);
}


let bookForm = document.getElementById("bookForm");

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");

    let book = new Book(title.value, author.value,pages.value);

    addBookToLibrary(book);
    showForm();
    showBooks();
})


function showForm(){
    let form = document.getElementById("bookForm");
    if (form.style.display == ''){
        form.style.display = "None";
    }
    else{
        form.style.display = '';
    }
    
}

let bookdiv = document.getElementById("books");

function showBooks(){
    bookdiv.innerHTML = '';
    let len = myLibrary.length;
    for(let i = 0; i<=len; i++){
        bookdiv.appendChild(createBookCard(myLibrary[i],i));
    }
    
}



function createBookCard(book,i){
    let div = document.createElement("div");
    div.setAttribute("data-index",i);
    

    let h3 = document.createElement("h3");
    let h4 = document.createElement('h4');
    let h5 = document.createElement('h5');
    let read = document.createElement('h5');

    let removebtn = document.createElement('button');
    removebtn.innerHTML="Remove Book";
    removebtn.setAttribute("onclick","deleteBook(this)");
    removebtn.setAttribute("data-index",i);

    let toggleRead = document.createElement('button');
    toggleRead.innerHTML = 'Read';
    toggleRead.setAttribute("onclick","readOrNot(this)");
    toggleRead.setAttribute("data-index",i);


    h3.innerHTML = "Title: " + book.title;
    h4.innerHTML = "Author: " + book.author;
    h5.innerHTML = book.pages + " Pages";

    if (book.read == true){
        read.innerHTML = "Book is Read";
    }
    else{
        read.innerHTML = "Not Read Yet";
    }

    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(read);
    div.appendChild(removebtn);
    div.appendChild(toggleRead);

    return div;
}


function deleteBook(data){
    index = data.getAttribute('data-index');
    myLibrary.splice(index,1);
    showBooks();
}


function readOrNot(data){
    book = data.getAttribute('data-index');
    book = myLibrary[book];
    updateRead(book);
    showBooks();
}

function updateRead(book){
    if(book.read == true){
        book.read = false;
    }
    else{
        book.read = true;
    }
}