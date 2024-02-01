<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class AuthController extends Controller
{
    public function register(Request $request){

        
            $request->validate([
                'name'=>'required|string',
                'email'=>'required|string|email|unique:users',
               'password'=>'required|string|confirmed'
            ]);
           

            $user = new User([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),//md5($request->password)
                'remember_token' => Str::random(10),
            ]);
            $user->save();

           return $this->tokenReturn($request);
            //$credentials = [ 'email'=>$request->email,'password'=>$request->password];
          

    }

    public function login(Request $request){

   $request->validate([
                'remember_me'=>'boolean',
                'email'=>'required|string|email',
                'password'=>'required|string'
            ]);
            return $this->tokenReturn($request);
             
    }

    private function tokenReturn( Request $request){
        $credentials = request(['email','password']);
             
            if(!Auth::attempt($credentials)){
                return response()->json(['invalid credentials'],401);
            }

             $user = $request->user();
               
            $tokenResult = $user->createToken('Personal Access');
            $token = $tokenResult->token;
            if($request->remember_me){
                $token->expires_at = Carbon::now()->addWeeks(1);
            }
            $token->save();

            
            return response()->json ([
                'success'=>true,
                'user'=>$user,
                 'access_token'=>$tokenResult->accessToken,
                'token_type'=>'Bearer',
                'expires_at'=>Carbon::parse($tokenResult->token->expires_at)->toDateTimeString()
            ],201);
    }

    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response()->json([
            'message'=>'logged out'
        ]);
    }

    public function user(Request $request){
        return response()->json($request->user());

    }
}
