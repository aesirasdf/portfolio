<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use OpenAI;

class MiscController extends Controller
{

    public function status()
    {
        return response()->json([
            'ok' => true,
            "your ip" => request()->ip()
        ], 200);
    }

    public function valentines()
    {
        $result = Cache::remember(request()->ip(), now()->addMinutes(5), function () {
            $client = OpenAI::client(env("OPENAI_API_KEY"));
            do {
                $res = $client->chat()->create([
                    "model" => "gpt-4o-mini",
                    "messages" => [
                        ["role" => "system", "content" => "remove the beginning and end of your message. make it in json format with title and message key. add humor to the message. this message will be posted at school"],
                        ["role" => "user", "content" => "Make a post-valentines message for everyone. make it random, remove all [your name] make it generic and add from MIS Department"]
                    ]
                ]);
            } while (!json_decode($res->choices[0]->message->content));

            return $res;
        });
        $data = [
            "ok" => true,
            "data" => json_decode($result->choices[0]->message->content)
        ];

        return response()->json($data);
    }



    public function personalValentines()
    {
        $result = Cache::remember(request()->ip() . " personal", now()->addMinutes(5), function () {
            $client = OpenAI::client(env("OPENAI_API_KEY"));

            do {
                $response = $client->chat()->create([
                    "model" => "gpt-4o-mini",
                    "messages" => [
                        ["role" => "system", "content" => "remove the beginning and end of your message. make it in json format with title and message key. remove all [your name] make it generic."],
                        ["role" => "user", "content" => "Make a post-valentines message for anyone the date today is " . now()->toDateString() . ". add some humor"]
                    ]
                ]);
            } while (!json_decode($response->choices[0]->message->content));

            return $response;


        });
        $data = [
            "ok" => true,
            "data" => json_decode($result->choices[0]->message->content)
        ];

        return response()->json($data);
    }



    public function fakeTerminal(Request $request)
    {
        $validator = validator()->make($request->all(), [
            "message" => 'required|string'
        ]);

        if($validator->fails()){
            $this->BadRequest($validator);
        }


        $client = OpenAI::client(env("OPENAI_API_KEY"));

        do {
            $result = $client->chat()->create([
                "model" => "gpt-4o-mini",
                "messages" => [
                    ["role" => "system", "content" => "remove the beginning and end of your message. make it in json format with message key. remove all [your name] make it generic. you are a linux terminal, and you should respond like one. the user will input a linux command and you have to say appropriate message about my portfolio (Jeco Renz Concepcion, Systems Developer)"],
                    ["role" => "user", "content" => $validator->validated()["message"]]
                ]
            ]);
        } while (!json_decode($result->choices[0]->message->content));



        $data = [
            "ok" => true,
            "data" => json_decode($result->choices[0]->message->content)
        ];

        return response()->json($data);
    }
}
