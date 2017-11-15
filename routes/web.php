<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('/mybio/index');
});

Route::get('/about', function () {
    return view('/mybio/about');
});

Route::get('/skills', function () {
    return view('/mybio/skills');
});

Route::get('/portfolio', function () {
    return view('/mybio/portfolio');
});

Route::get('/coming_soon', function () {
    return view('/mybio/coming_soon');
});



Route::get('/projects', function () {
    return view('index');
});

// using this route to redirect all requests to the welcome view
// for reactjs to direct web traffic (at least three levels deep)
Route::any('/projects/{text2?}/{text3?}', function () {
    return view('index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
