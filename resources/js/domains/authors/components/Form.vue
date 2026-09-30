<template>
    <form @submit.prevent="handleSubmit">
        <label>Naam:</label>
        <input v-model="form.name" type="text" required />

        <button type="submit"> | Opslaan | </button>
    </form>
    <div v-for="error in getErrorByProperty('name').value" :key="error">
        {{ error }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { fetchBooks, getAllBooks } from '../../books/store';
import { getErrorByProperty } from '../../../services/error';

// Fetch books when component is mounted
fetchBooks();

const props = defineProps<{ author: { name: string; }; }>();

const emit = defineEmits(['submit']);

const form = ref({ ...props.author });

const handleSubmit = () => emit('submit', form.value);
</script>