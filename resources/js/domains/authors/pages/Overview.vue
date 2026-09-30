<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchAuthors, getAllAuthors, deleteAuthor } from '../store';
import { getMessage } from '../../../services/error'

const deletingAuthorId = ref<number | null>(null);

onMounted(() => {
    fetchAuthors();
});

const handleDelete = async (id: number) => {
    deletingAuthorId.value = id;

    try {
        await deleteAuthor(id);
    } catch (error) {
    }
};
</script>

<template>
    <table>
        <tr>
            <th>Auteurs</th>
        </tr>
        <tr v-for="author in getAllAuthors" :key="author.id">
            <td>{{ author.name }}</td>
            <router-link :to="{name: 'authors.edit', params: { id: author.id } }"> | Bewerk </router-link> |
            <button @click="handleDelete(author.id)">Verwijder | </button>
            <span v-if="getMessage && deletingAuthorId === author.id" class="error-message"
            >
                  {{ getMessage }}
        </span>
        </tr>
    </table>
</template>

<style scoped>
.error-message {
    margin-left: 10px;
}
</style>