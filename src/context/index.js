import { createContext, useReducer } from "react"

const initialValue = {
    books: [],
    term: '',
    filter: 'all',
    isLoading: false,
    currentPage: 1
}

export const Context = createContext();

const reducer = (state = initialValue, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ON_DELETE': 
            const deleteArr = state.books.filter(book => book.id !== payload);
            return { ...state, books: deleteArr }
        case 'ON_LIKE': 
            const newLikedBooks =  state.books.map(book => {
                if(book.id === payload) {
                    return { ...book, isLike: !book.isLike }
                }
                return book;
            })
            return { ...state, books: newLikedBooks };
        case 'ON_SAVED':
            const newSavedBooks = state.books.map(book => {
                if(book.id === payload) {
                  return {...book, isSaved: !book.isSaved}
                }
                return book;
            })
            return { ...state, books: newSavedBooks }; 
        case 'ON_ADD': 
            const newAddedBooks = [...state.books, {...payload, id: state.books.length + 1, isLike: false, isSaved: false}];
            return { ...state, books: newAddedBooks };
        case 'SET_TERM': 
            return { ...state, term: payload }
        case 'SET_FILTER': 
            return { ...state, filter: payload }
        case 'SET_CURRENT_PAGE': 
            return { ...state, currentPage: payload }
        case 'SET_ISLOADING': 
            return { ...state, isLoading: payload }
        case 'SET_BOOKS': 
            return { ...state, books: payload }
        default:
            return state;
    }
}

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default Provider;