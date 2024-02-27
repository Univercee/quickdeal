<?php

use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/tasks', [TaskController::class, 'getAll']);
Route::post('/tasks', 'TaskController@create');
Route::get('/tasks/{id}', 'TaskController@get');
Route::patch('/tasks/{id}', 'TaskController@updated');
Route::delete('/tasks/{id}', 'TaskController@delete');

