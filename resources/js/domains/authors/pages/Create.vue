<template>
    <table>
    <tr>
        <th>Nieuwe Auteur Toevoegen</th>
    </tr>
    <div>
        <Form :author="author" @submit="handleSubmit" />
    </div>
    </table>
</template>

<script setup>
import Form from '../components/Form.vue';
import { createAuthor } from '../store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const author = ref({
    name: ''
});

const handleSubmit = async (data) => {
    await createAuthor(data);
    router.push({name: 'authors.overview'});
};
</script>