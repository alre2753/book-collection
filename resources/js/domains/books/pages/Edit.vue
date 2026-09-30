<template>
    <table>
    <tr>
        <th>Boek Bewerken</th>
    </tr>    
    <div>    
        <Form v-if="book" :book="book" @submit="handleSubmit" />
    </div>
    </table>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { fetchBooks, getBookById, updateBook } from '../store';

const route = useRoute();
const router = useRouter();

fetchBooks();

const book = getBookById(route.params.id);

const handleSubmit = async (data) => {
    await updateBook(route.params.id, data);
    router.push({ name: 'books.overview' });
};
</script>