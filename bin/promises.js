function findBook (id) {
  const books = {
    1: 'Pet Sematary',
    2: 'La Comunidad del Anillo',
    3: 'Extreme Programming'
  }

  return new Promise((resolve, reject) => {
    console.log('Simulating asynchronous repository call.')
    setTimeout(() => {
      const bookTitle = books[id]
      if (!bookTitle) {
        reject('Book not found!')
      }
      resolve(bookTitle)
    }, 2000)
  })
}

findBook(3)
  .then((result) => console.log('Continuing program execution with result:', result))
  .catch((error) => console.log('Error:', error))
