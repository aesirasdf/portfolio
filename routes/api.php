<?php

use App\Http\Controllers\InquiryController;
use App\Http\Controllers\MiscController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::post('/inquiries', [InquiryController::class, "store"]);

Route::get("/valentines", [MiscController::class, "valentines"]);