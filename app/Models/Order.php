<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'order_date',
        'order_amount'
    ];

    //one-to-many relationship
    public function orderItems()
    {
        return $this->hasMany(Order_item::class);
    }
}
