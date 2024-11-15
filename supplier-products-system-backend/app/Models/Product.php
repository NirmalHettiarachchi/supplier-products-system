<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_name',
        'product_price',
        'product_image_path',
        'supplier_id'
    ];

    public function supplier(){
        return $this->belongsTo(Supplier::class); 
    }
}
