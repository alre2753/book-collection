<template>
    <form @submit.prevent="handleSubmit">
        <label for="text">Review schrijven:</label>
        <textarea
            id="text"
            v-model="form.text"
            required
        ></textarea>

        <button type="submit">
            | Review plaatsen |
        </button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    bookId: number;
    review?: {
        id: number;
        text: string;
        book_id: number;
    };
}>();

const emit = defineEmits<{
    submit: [review: {
        text: string;
        book_id: number;
    }];
}>();

const form = ref({
    text: props.review?.text ?? '',
    book_id: props.bookId,
});

const handleSubmit = () => {
    emit('submit', { ...form.value });
};
</script>