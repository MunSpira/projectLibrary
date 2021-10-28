function findAuthorById(authors, id) {
  let author = authors.find((matchingId)=>matchingId.id===id)
return author                       
}

function findBookById(books, id) {
  let book = books.find((matchingBook)=>matchingBook.id===id)
  return book
}


function partitionBooksByBorrowedStatus(books) {
  let allBooks=[]
  let borrowed = books.filter((book)=>!book.borrows[0].returned)
allBooks.push(borrowed)
  
  let returned = books.filter((book)=>book.borrows[0].returned)
  allBooks.push(returned)
  
  return allBooks 
}

function getBorrowersForBook(book, accounts) {
  let borrowers =[]

  for (let i=0;i<accounts.length;i++){
    for(let j=0;j<book.borrows.length;j++){
    if (accounts[i].id.includes(book.borrows[j].id)){
      borrowers.push(accounts[i])
      }
    }
  }
  for (let i=0;i<borrowers.length;i++){
    for(let j=0;j<book.borrows.length;j++){
    if(borrowers[i].id===book.borrows[j].id){
      borrowers[i]["returned"]=book.borrows[j].returned
    }
   }
  }
if(borrowers.length>10){
  borrowers.length=10
}
 return borrowers
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
