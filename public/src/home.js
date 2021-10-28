function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
    return accounts.length
}

function getBooksBorrowedCount(books) {
  let checkedOut=0
  for(let i=0;i<books.length;i++){
    let book=books[i]
    if(!book.borrows[0].returned){
      checkedOut+=1
    }
  }
  return checkedOut
}

//helper function to sort array and limit upto five items in array
function fiveItemsOrLessSort(arr){
  let array = arr.sort((one,two)=>two.count-one.count)
   array = arr.slice(0,5)
  return array
}

function getMostCommonGenres(books) {
  let commonGenres=[]
    const genres = books.reduce((acc, book)=>
    {
      if (acc[book.genre]){
          acc[book.genre]=acc[book.genre]+1
          }
       else{
         acc[book.genre]=1
       }
return acc
    },{})
    for(commGenre in genres){
      let objectGenres ={name:commGenre, count:genres[commGenre]}
      commonGenres.push(objectGenres)
    }
 return fiveItemsOrLessSort(commonGenres)
}

function getMostPopularBooks(books) {
  let popularBooks=[]
let borrow = books.map((book)=>
 popularBooks.push({name:book.title, count: book.borrows.length})
)
return fiveItemsOrLessSort(popularBooks)
       
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors=[]
  let authorFind = authors.forEach((author)=>{
     let authorBook = books.filter((book)=>book.authorId===author.id)
let borrowTotal = authorBook.reduce((acc,book)=>acc+book.borrows.length,0)
 let {name:{first,last}}=author
    popularAuthors.push({name:`${first} ${last}`, count:borrowTotal})
  
  })
  console.log(fiveItemsOrLessSort(popularAuthors))
  return fiveItemsOrLessSort(popularAuthors)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};