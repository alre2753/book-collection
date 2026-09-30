<template>
    <table>
    <tr>
        <th>Nieuw Boek Toevoegen</th>
    </tr>
    <div>
        <Form :book="book" @submit="handleSubmit" />
    </div>
    </table>
</template>

<script setup>
import Form from '../components/Form.vue';
import { createBook } from '../store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const book = ref({
    name: '',
    summary: '',
    author_id: null
});

const handleSubmit = async (data) => {
    await createBook(data);
    router.push({name: 'books.overview'});
};
</script>