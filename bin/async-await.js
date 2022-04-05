async function findBook (id) {
  console.log('Simulating asynchronous repository call.')
  const bookTitle = await findBookInfra(id)
  if (!bookTitle) {
    return null
  }
  return bookTitle
}

function findBookInfra(id) {
  const books = {
    1: 'Pet Sematary',
    2: 'La Comunidad del Anillo',
    3: 'Extreme Programming'
  }
  return new Promise(resolve => setTimeout(() => resolve(books[id]), 2000));
}

async function callFindBook() {
  const result = await findBook(2);
  if (!result) {
    console.log('Book not found')
    return
  }

  console.log('Continuing program execution with result:', result)
}

callFindBook()
