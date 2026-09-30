<template>
    <table>
    <tr>
        <th>Review Bewerken</th>
    </tr>    
    <div>    
        <Form v-if="review" :review="review" :book-id="review.book_id" @submit="handleSubmit" />
    </div>
    </table>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/ReviewForm.vue';
import { fetchReviews, getReviewById, updateReview } from '../store';

const route = useRoute();
const router = useRouter();

fetchReviews();

const review = getReviewById(Number(route.params.id));

const handleSubmit = async (data) => {
    await updateReview(route.params.id, data);
    router.push({ name: 'books.show', params: { id: review.value.book_id } });
};
</script>