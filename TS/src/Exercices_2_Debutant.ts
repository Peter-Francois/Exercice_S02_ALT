class Book{
    title: string;
    autor: string;
    publication_date: number;

    constructor(title: string, autor: string, publication_date: number){
        this.title = title;
        this.autor = autor;
        this.publication_date = publication_date;

    }

}

class User{
    name: string;
    age: number;
    have_book: boolean;
    books:Array<Book>;

    constructor(name: string, age : number, have_book: boolean = false, books: Array<Book> = []){
        this.name = name;
        this.age = age;
        this.have_book = have_book;
        this.books = books;
    }

    borrowBook(book: Book){
        this.books.push(book);
        console.log("Le client " + this.name + " à emprinté le livre: " + book.title + " (Pulié en "+ book.publication_date + " de " + book.autor + ")");
    }
}

const book1 = new Book("Les 4 accords Toltèques", "Don Miguel Ruiz", 1999)

let peter = new User("Peter", 34)

peter.borrowBook(book1)