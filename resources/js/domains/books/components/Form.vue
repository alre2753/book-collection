<template>
    <form @submit.prevent="handleSubmit">
        <label>Titel:</label>
        <input v-model="form.name" type="text" required />

        <label>Samenvatting:</label>
        <textarea v-model="form.summary" required></textarea>

        <label>Auteur:</label>
        <select v-model="form.author_id" required>
            <option v-for="author in getAllAuthors" :key="author.id" :value="author.id">
                {{ author.name }}
            </option>
        </select>

        <button type="submit"> | Opslaan | </button>
    </form>
    <div v-for="error in getErrorByProperty('name').value" :key="error">
        {{ error }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';
import { getErrorByProperty } from '../../../services/error';

// Fetch authors when component is mounted
fetchAuthors();

const props = defineProps<{ book: { name: string; }; }>();

const emit = defineEmits(['submit']);

const form = ref({ ...props.book });

const handleSubmit = () => emit('submit', form.value);
</script>