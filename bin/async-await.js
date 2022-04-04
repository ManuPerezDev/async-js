async function findBook (id) {
  const books = {
    1: 'Pet Sematary',
    2: 'La Comunidad del Anillo',
    3: 'Extreme Programming'
  }
  console.log('Simulating asynchronous repository call.')
  const bookTitle = books[id]
  if (!bookTitle) {
    return null
  }
  return bookTitle
}

async function callFindBook() {
  const result = await findBook(1);
  if (!result) {
    console.log('Book not found')
    return
  }

  console.log('Continuing program execution with result:', result)
}

callFindBook()
