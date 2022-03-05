<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Http\Requests\BookRequest;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Author;
use App\Models\Category;
use App\Models\Discount;
use App\Models\Review;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        return $book = DB::table('book')
            ->select('book.*')
            ->paginate(15);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated_request = $request->validated();
        $book = Book::create($validated_request);

        return response()->json(['Successfully' => $book], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $book = Book::find($id);
        if ($book)
            return response()->json($book, 201);
        else
            return response()->json(['Message' => 'Not Found'], 404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(BookRequest $request, $id)
    {
        $book = Book::find($id);
        if ($book) {
            $book->update($request->all());
            return response()->json(['message' => 'Updated'], 200);
        } else {
            return response()->json(['message' => 'Failed'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        $book->delete();

        return response()->json(['Message' => 'Deleted'], 200);
    }

    public function onsale()
    {
        $onsale = Book::GetOnSale()->take(10)->get();
        return $onsale;
    }

    public function recommend()
    {
        $recommend = Book::GetRecommend()->take(8)->get();
        return BookResource::collection($recommend);
    }

    public function popular()
    {
       return $popular = Book::GetPopular()->take(8)->get();
//        return BookResource::collection($popular);
    }

    public function filterByCategory($categ_id)
    {
        $category = Category::find($categ_id);
        return ($category->books);
    }

    public function filterByAuthor($author_id)
    {
        $author = Author::find($author_id);
        return $author->books;
    }

    public function test(Request $request)
    {
        return Book::GetFinalPrice()->get();

    }
}
