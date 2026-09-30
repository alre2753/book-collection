<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Http\Requests\StoreBookRequest;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index() {
        return BookResource::collection(Book::all());
    }

    public function store(StoreBookRequest $request) {
        $book = Book::create($request->validated());

        return new BookResource($book);
    }

    public function update(StoreBookRequest $request, Book $book) {
        $book->update($request->validated());

        return new BookResource($book);
    }

    public function destroy(Book $book) {
        $book->delete();
        return response()->json(['message' => 'Boek succesvol verwijderd']);
    }
}
