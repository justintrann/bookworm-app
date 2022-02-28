<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

/**
 * App\Models\Book
 *
 * @property int $id
 * @property int $category_id
 * @property int $author_id
 * @property string $book_title
 * @property string $book_summary
 * @property string $book_price
 * @property string|null $book_cover_photo
 * @property-read \App\Models\Author $author
 * @property-read \App\Models\Category $category
 * @method static \Database\Factories\BookFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Book newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Book newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Book query()
 * @method static \Illuminate\Database\Eloquent\Builder|Book whereAuthorId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Book whereBookCoverPhoto($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Book whereBookPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Book whereBookSummary($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Book whereBookTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Book whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Book whereId($value)
 * @mixin \Eloquent
 */
class Book extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'book';
    protected $fillable = [
        'category_id',
        'author_id',
        'book_title',
        'book_summary',
        'book_price',
        'book_cover_photo',
    ];

    public function categories()
    {
        return $this->belongsTo(Category::class);
    }

    public function authors()
    {
        return $this->belongsTo(Author::class);
    }

    public function discounts()
    {
        return $this->hasMany(Discount::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    //Local Scope

    public function scopeGetSubPrice($query)
    {
       return  $query->selectRaw('book.*,d.discount_price,(book.book_price - d.discount_price) as subbed_price')
            ->join(DB::raw('discount d'),'book.id','=','d.book_id')
            ->orderByRaw('subbed_price DESC');
    }

    public function scopeGetAvgReview($query)
    {
        return $query->select('book.*',DB::raw('(avg(r.rating_start)) as avg_rate'))
            ->join(DB::raw('review r'),'book.id','=','r.book_id')
            ->groupBy('book.id')
            ->orderByRaw('avg_rate DESC');
    }
}
