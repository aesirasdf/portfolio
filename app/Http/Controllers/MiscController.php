<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use OpenAI;

class MiscController extends Controller
{
    
    public function status(){
        return response()->json([
            'ok' => true
        ], 200);
    }

    public function valentines(){
        $client = OpenAI::client(env("OPENAI_API_KEY"));
        $result = $client->chat()->create([
            "model" => "gpt-4o-mini",
            "messages" => [
                ["role" => "system", "content" => "remove the beginning and end of your message. make it in json format with title and message key. add humor to the message. this message will be posted at school"],
                ["role" => "user", "content" => "Make a valentines message for . make it random, remove all [your name] make it generic and add from MIS Department"]
            ]
        ]);


        $data = [
            "ok" => true,
            "data" => json_decode($result->choices[0]->message->content)
        ];

        return response()->json($data);
    }
}
