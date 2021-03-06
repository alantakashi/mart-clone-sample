'use strict'

// books reducers
export function booksReducers (state = {
  books: []
}, action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return {...state, books: [...action.payload]}

    case 'POST_BOOK':
      return {...state, books: [...state.books, ...action.payload], msg: 'Saved! Click to continue', style: 'success', validation: 'success'}

    case 'POST_BOOK_REJECTED':
      return {...state, msg: 'Please try again', style: 'danger'}

    case 'RESET_BUTTON':
      return {...state, msg: null, style: 'primary', validation: null}

    case 'DELETE_BOOK':
			// create a copy of the current array of books
      const currentBookToDelete = [...state.books]

			// determine at which index in books array is the book to be deleted
      const indexToDelete = currentBookToDelete.findIndex(function (book) {
        return book._id == action.payload
      })

			// use slice to remove the book at the specified index
      return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}

    case 'UPDATE_BOOK':
      const currentBookToUpdate = [...state.books]

      const indexToUpdate = currentBookToUpdate.findIndex(function (book) {
        return book._id === action.payload._id
      })

      const newBookToUpdate = {...currentBookToUpdate[indexToUpdate], title: action.payload.title}

      console.log('what is it newBookToUpdate', newBookToUpdate)

      return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
  }
  return state
}
