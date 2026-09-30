<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { fetchBooks, getBookById, deleteBook } from '../store';
import { fetchAuthors, getAuthorById } from '../../authors/store';
import ReviewForm from '../../reviews/components/ReviewForm.vue';
import { createReview, fetchReviews, getReviewsByBookId, deleteReview } from '../../reviews/store';

const route = useRoute();

const book = getBookById(Number(route.params.id));

const author = computed(() => {
    if (!book.value?.author_id) {
        return null;
    }

    return getAuthorById(book.value.author_id).value;
}); 

const reviews = computed(() => {
    if (!book.value) {
        return [];
    }

    return getReviewsByBookId(book.value.id).value;
});

const handleSubmit = async (review: {
    text: string;
}) => {
    if (!book.value) return;
    
    try {
        await createReview(book.value.id, review);
    } catch (error) {
        console.error(error);
    }
};

// TODO: kan zonder onmounted
onMounted(async () => {
    await fetchBooks();
    await fetchAuthors();
    await fetchReviews();
});
</script>

<template>
    <div v-if="book">
        <p>
            <strong>Titel:</strong>
            {{ book.name }}
        </p>
        <p>
            <strong>Samenvatting:</strong>
            {{ book.summary }}
        </p>
        <p>
            <strong>Auteur:</strong>
            {{ author?.name }}
        </p>
        <br>
        <hr>
        <p>
        <strong>Reviews</strong>
        <div v-if="reviews.length">
            <article
                v-for="review in reviews"
                :key="review.id"
            >
                <p>{{ review.text }}</p>
                <router-link :to="{name: 'reviews.edit', params: { id: review.id } }"> | Bewerk </router-link> |
                <button @click="deleteReview(review.id)"> Verwijder | </button>
            </article>
        </div>
        <br>
        <hr>
        <ReviewForm :book-id="book.id" @submit="handleSubmit" />
        </p>
    </div>
</template>