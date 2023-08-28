export const onTermHandler = (books, term) => {
    if(term == '') return books;
    return books.filter(book => book.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
}

export const onFilterHandler = (books, filter) => {
    switch(filter) {
        case 'popular': 
            return books.filter(book => book.readCount > 800).sort((a, b) => b.readCount - a.readCount);
        case 'saved': 
            return books.filter(book => book.isSaved);
        default: 
            return books;
    }
}