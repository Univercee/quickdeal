<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    //
    public function get(string $id){
        $data = Task::get($id);
        return response()->json($data);
    }

    //
    public function getAll(){
        $data = Task::get();
        return response()->json($data);
    }

    //
    public function create(){
        
    }

    //
    public function update(){
        
    }

     //
     public function delete(string $id){
        
     }
}
