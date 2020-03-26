export class Book {
    constructor(title, author, description, pages, currentPage, read){
       this.title = "title"
       this.author = "author"
       this.description = "description"
       this.pages = "pages"
       this.currentPage = "currentPage"
       this.read = "read"
       readBookPage
      }
    };
    let book1 = new Book ("je suis beau", "moi", "the book of my life", 562, 0, false)
    let book2 = new Book ("t moch", "c'est moi", "il est supert moche", 234, 234, false)
    let book3 = new Book ("il est beau", "qqn", "the book of him lif", 1003, 0, false)
    let book4 = new Book ("wtf", "lui", "a book realy wtf", 345, 345, false)
    const bookRead = (obj) => {
        if(obj.pages == obj.currentPage) {
            obj.read = true;
          } else {
            obj.read = false;
          }
    };
    
    
    
    console.log(Book)