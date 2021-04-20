<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(){
        return User::all();

    }

    public function user( Request $request){
        return $request->user();
    }

    public function register(UserRegisterRequest $request){
        User::create([
            'name'=>$request->name,
            'prenom'=>$request->prenom,
            'numero'=>$request->numero,
            'description'=>$request->description,
         //   'categories'=>$request->categories,
            'email'=>$request->email,
            'password'=>Hash::make($request->password)
        ]);
         return "cree  merci pour votre confience";
    }
}
