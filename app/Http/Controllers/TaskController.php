<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Task;
use DateTime;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    //
    public function get(string $id){
        $data = Task::where('id', $id)->first();
        return response()->json($data);
    }

    //
    public function getAll(){
        $data = Task::get();
        return response()->json($data);
    }

    //
    public function create(Request $request){
        $data = $request->all();
        $time = new DateTime();
        $id = Task::insertGetId([
            'name' => $data['name'],
            'created_at' => $time,
            'updated_at' => $time
        ]);
        return response()->json([
            "id" => $id,
            "time" => $time->format(DateTime::ATOM)
        ]);
    }

    //
    public function update(Request $request, string $id){
        $data = $request->all();
        $time = new DateTime();
        Task::where('id', $id)->update([
            'name' => $data['name'],
            'updated_at' => $time
        ]);
        return response()->json([
            "time" => $time->format(DateTime::ATOM)
        ]);
    }

    //
    public function delete(Request $request, string $id){
        $deleted = Task::where('id', $id)->delete();
        return response()->json($deleted);
    }
}
