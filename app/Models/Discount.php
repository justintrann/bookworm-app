<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Discount extends Model
{
    use HasFactory, SoftDeletes;

    public $timestamps = false;
    protected $fillable = [
        'book_id',
        'discount_start_date',
        'discount_end_date',
        'discount_price'
    ];

    public function Book()
    {
        return $this->belongsTo(Book::class);
    }
}
