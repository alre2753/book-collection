<script setup lang="ts">
import { onMounted } from 'vue';
import { fetchBooks, getAllBooks, deleteBook } from '../store';

// TODO: zou ook zonder onMounted moeten kunnen
onMounted(() => {
    fetchBooks();
});
</script>

<template>
    <table>
        <tr>
            <th>Titel</th>
            <th>Samenvatting</th>
        </tr>
        <tr v-for="book in getAllBooks" :key="book.id">
            <td><router-link :to="{name: 'books.show', params: { id: book.id } }">{{ book.name }}</router-link></td>
            <td><router-link :to="{name: 'books.show', params: { id: book.id } }">{{ book.summary }}</router-link></td>
            <router-link :to="{name: 'books.edit', params: { id: book.id } }"> | Bewerk </router-link> |
            <button @click="deleteBook(book.id)">Verwijder | </button>
        </tr>
    </table>
</template>