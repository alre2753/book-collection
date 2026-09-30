import { storeModuleFactory } from '../../services/store';

const authorsStore = storeModuleFactory('/authors');

export const getAllAuthors = authorsStore.getters.all;

export const getAuthorById = (id) =>
    authorsStore.getters.getById(id);

export const fetchAuthors = authorsStore.actions.getAll;

export const createAuthor = authorsStore.actions.create;

export const updateAuthor = authorsStore.actions.update;

export const deleteAuthor = authorsStore.actions.delete;

