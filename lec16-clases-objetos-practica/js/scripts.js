/*
  Crea una clase Libro
  La clase Libro tendrá título, autor, año y género.
  Crea un método que devuelva toda la información del libro
  Pide 3 libros y guárdalos en un array.
  Los libros se introducirán al arrancar el programa pidiendo 
  los datos com prompt.
  Validar que los campos no se introduzcan vacíos.
  Validar que el año sea un número y que tenga 4 dígitos
  Validar que el género sea: aventuras. terror o fantasía.
  Crea una función que muestre todos los libros.
  Crea una función que muestre los autores ordenados
  alfabéticamente.
  Crea una función que pida un género y muestre la información
  de los libros que pertenezcan a ese género usando el método
  que devuelve la información.
*/
class Book {
  constructor(title, author, year, gender) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.gender = gender;
  }

  getAuthor() {
    return this.author;
  }

  getGender() {
    return this.gender;
  }

  bookInfo() {
    return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`;
  }
}

let books = [];
let genders = ['aventura','terror','fantasia'];

while(books.length < 3) {
  let title = prompt('Introduce el título del libro').trim();
  let author = prompt('Introduce el autor del libro').trim();
  let year = prompt('Introduce el año del libro');
  let gender = prompt('Introduce el género del libro').toLowerCase();

  if(title != '' && author != '' 
    && !isNaN(year) && year.length == 4 
    && genders.includes(gender)) {
      books.push(new Book(title, author, year, gender));
  }
}

const showAllBooks = () => {
  for(const book of books) {
    console.log(book.bookInfo());
  }
}
const showAuthors = () => {
  let authors = [];
  for(const book of books) {
    authors.push(book.getAuthor());
  }
  console.log(authors.sort());
};

const showGender = () => {
  const gender = prompt('Introduce el genero a buscar');
  for(const book of books) {
    if(book.gender == gender) {
      console.log(book.bookInfo());
    }
  }
}

showAllBooks();
showAuthors();
showGender();