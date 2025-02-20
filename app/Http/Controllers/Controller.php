<?php

namespace App\Http\Controllers;

abstract class Controller
{
    //

    protected function BadRequest($validator){
        return response()->json([
            "errors" => $validator->errors(),
            "message" => "Bad Request!",
            "ok" => false
        ])
    }
}
