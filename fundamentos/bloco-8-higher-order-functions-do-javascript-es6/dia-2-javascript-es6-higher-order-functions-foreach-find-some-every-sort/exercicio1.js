const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
const anoNascimento = books.find((book) => book.author.birthYear === 1947).author.name;
console.log(anoNascimento)

//---------------------------------------------------------------------------

function smallerName(arr) {
  let nameBook;
  // escreva aqui o seu código
  arr.forEach((element) => {
    if (!nameBook || element.name.length < nameBook.length) {
      nameBook = element.name;
    }  
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName(books))

//---------------------------------------------------------------------------

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook(arr) {
  // escreva seu código aqui
  return arr.find((element) => element.name.length === 26).name;
}

console.log(getNamedBook(books));

//---------------------------------------------------------------------------

function booksOrderedByReleaseYearDesc(arr) {
  return arr.sort((a, b) => b.releaseYear - a.releaseYear);
}
console.log(booksOrderedByReleaseYearDesc(books));

//---------------------------------------------------------------------------

function everyoneWasBornOnSecXX(arr) {
  // escreva seu código aqui
  return arr.every((element) => element.author.birthYear > 1901 && element.author.birthYear < 2000) ;
}

console.log(everyoneWasBornOnSecXX(books));

//---------------------------------------------------------------------------

function someBookWasReleaseOnThe80s(arr) {
  // escreva seu código aqui
  return arr.some((element) => element.releaseYear > 1980 && element.releaseYear < 1990);
}

console.log(someBookWasReleaseOnThe80s(books))

//---------------------------------------------------------------------------

function authorUnique(arr) {
  // escreva seu código aqui
  return arr.every((element) => )
}

