<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReviewResource;
use App\Models\Book;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
        return ReviewResource::collection(Review::all());
    }

    public function store(Request $request, Book $book) {
        $validated = $request->validate([
            'text' => ['required', 'string'],
        ]);

        $review = $book->reviews()->create($validated);

        return response()->json($review, 201);
    }

    public function update(Request $request, Review $review) {
        $validated = $request->validate([
            'text' => ['required', 'string'],
        ]);

        $review->update($validated);
        return new ReviewResource($review);
    }

    public function destroy(Review $review) {
        $review->delete();
        return response()->json(['message' => 'Review succesvol verwijderd']);
    }
}
    