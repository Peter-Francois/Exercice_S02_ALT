enum MediaType{
    Book = "BOOK",
    Dvd ="DVD",
    Magazine = "MAG",
}

enum Periodicity{
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Bimonthly = "BIMONTHLY"
}

class Media{
    title: string;
    media_type: MediaType;
    publication_date: string;
    is_available: boolean;
    qt_available: number;

    constructor(
        title: string, 
        media_type: MediaType, 
        publication_date: string, 
        is_available: boolean, 
        qt_available: number)
        {
            this.title = title;
            this.media_type = media_type;
            this.publication_date = publication_date;
            this.is_available = is_available;
            this.qt_available = qt_available;

    }
}
class Book extends Media{
    autor: string;
    pages: number;


    constructor(
        title: string, 
        media_type: MediaType, 
        publication_date: string, 
        is_available: boolean, 
        qt_available: number,
        autor: string,
        pages: number
    ){
        super(title, media_type, publication_date, is_available, qt_available)
        this.autor = autor;
        this.pages = pages;
    }

}
class Dvd extends Media{
    director: string;
    duration: number;
    isForAdult: boolean;


    constructor(
        title: string, 
        media_type: MediaType, 
        publication_date: string, 
        is_available: boolean, 
        qt_available: number,
        director: string,
        duration: number,
        isForAdult: boolean,
    ){
        super(title, media_type, publication_date, is_available, qt_available)
        this.director = director;
        this.duration = duration;
        this.isForAdult = isForAdult;
    }
}

class Magazine extends Media{
    editor_in_chief: string;
    periodicity: Periodicity;


    constructor(
        title: string, 
        media_type: MediaType, 
        publication_date: string, 
        is_available: boolean, 
        qt_available: number,
        editor_in_chief: string,
        periodicity: Periodicity,
    ){
        super(title, media_type, publication_date, is_available, qt_available)
        this.editor_in_chief = editor_in_chief;
        this.periodicity = periodicity;
    }
}

class User{
    name: string;
    age: number;
    have_book: boolean;
    medias:Array<Media>;
    is_major: boolean;

    constructor(
        name: string, 
        age : number, 
        have_book: boolean = false, 
        medias: Array<Media> = [],
        is_major: boolean
    ){
        this.name = name;
        this.age = age;
        this.have_book = have_book;
        this.medias = medias;
        this.is_major = is_major
    }

    borrowMedia(title: string, publication_date: number, media_type: MediaType, is_available: boolean, qt_available: number, is_major: boolean) {
        switch (media_type)
        {
            case "BOOK":
                this.borrowBook(Book);
                break;
            case "DVD":
                this.borrowDVD(title, publication_date, media_type, is_available, qt_available, is_major);
                break;
            default:
                this.borrowMagazine(title, publication_date, media_type, is_available, qt_available);
                break;
        }
    }
    borrowBook(book: Book){        
        console.log("Le client " + this.name + " à emprinté le livre: " + book.title + " (Pulié en "+ book.publication_date + " de " + book.autor + ")");
    }

}

const book1 = new Book("Les 4 accords Toltèques", "Don Miguel Ruiz", 1999)

let peter = new User("Peter", 34)

peter.borrowMedia(book1)