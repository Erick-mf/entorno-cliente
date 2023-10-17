class BookList {
    constructor() {
        this.bookRead = 0; // números de libros leidos
        this.bookNotReadYet = 0; // número de libros no leidos aún
        this.nextBookToRead = null; // referencia al proximo libro a leer
        this.currentBookBeingRead = null; // referencia al libro que se esta leyendo
        this.lastBookRead = null; // referencia al ultimo libro leido
        this.allBooks = []; // array de todos los libros
    }

    addBook(book) {
        this.allBooks.push(book); // se añade un nuevo libro
        // si book.read es falso 
        if (!book.read) {
            if (this.bookNotReadYet === 0) {
                this.nextBookToRead = book; // establece el próximo libro a leer
            }
            this.nextBookToRead++ // incrementar la cantidad de libros no leidos
            // si book.read es true
        } else {
            if (this.currentBookBeingRead === null) {
                this.currentBookBeingRead = book; // si no hay libros que se esten leyendo, se establece uno
            }
            this.bookRead++ // incrementa la cantidad de libros leidos
        }
    }

    finishCurrenBook() {
        if (this.currentBookBeingRead !== null) {
            this.currentBookBeingRead.read = true; //  marca el libro que se está leyendo actualmente como leído
            this.currentBookBeingRead.readDate = new Date(Date.now()); // le da una fecha de lectura
            this.lastBookRead = this.currentBookBeingRead // cambia el ultimo libro leido por el que se acaba de leer

            // Encuentra el próximo libro a leer
            for (let book of this.allBooks) {
                if (!book.read) {
                    this.nextBookToRead = book;
                    break;
                }
            }

            // Actualiza el libro actual que se está leyendo
            if (this.nextBookToRead !== null) {
                this.currentBookBeingRead = this.nextBookToRead;
                this.nextBookToRead = null; // Restablecer el próximo libro a leer
            }

            // Actualiza los contadores
            this.booksNotReadYet--;
            this.booksRead++;
        }
    }
}
