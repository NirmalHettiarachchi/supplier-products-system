<?php

use App\Http\Controllers\SupplierController;
use Illuminate\Http\Request;

Route::middleware('auth.api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('suppliers', SupplierController::class)->except(['create', 'edit']);