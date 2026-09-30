import { storeModuleFactory } from '../../services/store';

const booksStore = storeModuleFactory('/books');

export const getAllBooks = booksStore.getters.all;

export const getBookById = (id) =>
    booksStore.getters.getById(id);

export const fetchBooks = booksStore.actions.getAll;

export const createBook = booksStore.actions.create;

export const updateBook = booksStore.actions.update;

export const deleteBook = booksStore.actions.delete;