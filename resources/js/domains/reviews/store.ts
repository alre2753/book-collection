import { computed } from 'vue';
import { postRequest } from '../../services/http';
import { storeModuleFactory } from '../../services/store';

const reviewsStore = storeModuleFactory('/reviews');

export const getAllReviews = reviewsStore.getters.all;

export const getReviewById = reviewsStore.getters.getById;

export const getReviewsByBookId = (bookId: number) =>
    computed(() =>
        reviewsStore.getters.all.value.filter(
            (review: any) => review.book_id === bookId
        )
    );

export const fetchReviews = reviewsStore.actions.getAll;

// TODO: vraag: waarom niet de reviewStore gebruiken voor postRequest?
export const createReview = async (
    bookId: number,
    review: {
        text: string;
    }
) => {
    const { data } = await postRequest(
        `/books/${bookId}/reviews`,
        review
    );

    if (!data) return;

    reviewsStore.setters.set(data);
};

export const updateReview = reviewsStore.actions.update;

export const deleteReview = reviewsStore.actions.delete;