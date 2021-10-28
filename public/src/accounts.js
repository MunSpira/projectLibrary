function findAccountById(accounts, id){
  for(let i=0;i<accounts.length;i++){
    let account=accounts[i]
    if(account.id===id)return account
  }
}


function sortAccountsByLastName(accounts) {
  accounts.sort((accountA,accountB)=>(accountA.name.last<accountB.name.last ? -1:1))
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  let borrow = 0
  for (let i=0;i<books.length;i++){
    let book=books[i]
    for(let j=0;j<book.borrows.length;j++){
    if(account.id===book.borrows[j].id){
      borrow+=1
    }
   }
  }
 return borrow
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut = []
 for(let i=0;i<books.length;i++){
   let book=books[i]
   if (account.id===book.borrows[0].id 
     && book.borrows[0].returned===false){
checkedOut.push(book) 
      }
   }
checkedOut.forEach((book)=>{
  const findAuthor = authors.find((author)=>author.id===book.authorId)
  book.author=findAuthor
})
  return checkedOut

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
