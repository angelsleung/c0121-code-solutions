var books = [
  {
    isbn: '123456',
    title: 'Don Quixote',
    author: 'Miguel de Cervantes'
  },
  {
    isbn: '234567',
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens'
  },
  {
    isbn: '345678',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien'
  }
];
console.log('books:', books);
console.log('typeof books:', typeof books);
var booksJSON = JSON.stringify(books);
console.log('booksJSON:', booksJSON);
console.log('typeof booksJSON:', typeof booksJSON);

var studentString = '{"name": "Angel","id": 100}';
console.log('studentString:', studentString);
console.log('typeof studentString:', typeof studentString);
var student = JSON.parse(studentString);
console.log('student:', student);
console.log('typeof student:', typeof student);
