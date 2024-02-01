class Library {
  
    #books = [];

    // Получаем текущего списка книг
    get allBooks () {
        return this.#books.join(', ');
    }

    // Добавить книги в библиотеку
    addBook(title) {
        try {
            if (this.#books.includes(title)) {
                throw new Error ('Ошибка:книга уже в списке');
            }
            this.#books.push(title);
            return this.#books.join(', ');
        } catch (error) {
            return error.message;
        }
    }

    // Метод удаления книги из библиотеки
    removeBook(title) {
        try {
            if (!this.#books.includes(title)) {
                throw new Error ('Ошибка: книги нет в списке')
            }
            const titleId = this.#books.indexOf(title);
            this.#books.splice(titleId, 1);
            return this.#books.join(', ');
        } catch (error) {
            return error.message;
        }
    }

    // Проверка наличия книги в библиотеке
    hasBook(title) {
        return this.#books.includes(title);
    }

    constructor(initialBookList) {
        const uniqueList = [...new Set(initialBookList)]
        if (uniqueList.length !== initialBookList.length) {
            throw new Error ('Список содержит дубликаты');
        }
        this.#books = initialBookList;
    }
}

const bookList = ['Biology', 'Chemistry', 'English', 'History'];


let library = new Library(bookList);
console.log(library.allBooks); 


console.log(library.addBook('Geography'));  

console.log(library.addBook('Biology')); 

// Удалить книгу из саиска
console.log(library.removeBook('Biology')); // 
console.log(library.removeBook('Fairytales')); 

//Проверка наличия книги в библиотеке
console.log(library.hasBook('Chemistry')); 
console.log(library.hasBook('Biology')); 