<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use Illuminate\Http\Request;

class InquiryController extends Controller
{
    
    public function store(Request $request){
        $validator = validator($request->all(), [
            "subject" => "required|max:255|string",
            "email" => "required|max:255|email",
            "message" => "required|string",
        ]);

        if($validator->fails()){
            return response()->json([
                "errors" => $validator->errors(),
                "ok" => false,
                "message" => "Bad Request!"
            ]);
        }

        $inquiry = Inquiry::create($validator->validated());

        return response()->json([
            "ok" => true,
            "data" => $inquiry,
            "message" => "Message has been sent!"
        ]);
    }
}
