<?php

use App\Http\Controllers\AuthController;
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

// Chráněná routa pro získání přihlášeného uživatele
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Auth APIs
Route::post('/prihlaseni', [AuthController::class, 'login']);
Route::post('/registrace', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::get('/test', function() {
    return response()->json(['message' => 'Testovací route funguje!']);
});
