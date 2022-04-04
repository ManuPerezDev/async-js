function printResult (error, result) {
  if (error) {
    console.log('Error:', error)
    return
  }
  console.log('Continuing program execution with result:', result)
}

function findBook (id, cb) {
  const books = {
    1: 'Pet Sematary',
    2: 'La Comunidad del Anillo',
    3: 'Extreme Programming'
  }
  setTimeout(() => {
    console.log('Simulating asynchronous repository call.')
    const bookTitle = books[id]

    if(!bookTitle) {
      return cb('Book not found!', null)
    }

    cb(null, bookTitle)
  }, 2000)
}

findBook(2, printResult)

