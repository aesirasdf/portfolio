<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MiscController extends Controller
{
    
    public function status(){
        return response()->json([
            'ok' => true
        ], 200);
    }
}
