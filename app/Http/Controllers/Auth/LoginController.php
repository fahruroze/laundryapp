<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    // use AuthenticatesUsers;

    // /**
    //  * Where to redirect users after login.
    //  *
    //  * @var string
    //  */
    // protected $redirectTo = '/home';

    // /**
    //  * Create a new controller instance.
    //  *
    //  * @return void
    //  */
    // public function __construct()
    // {
    //     $this->middleware('guest')->except('logout');
    // }

    public function login(Request $request){
        //validasi Email & password
        $this->validate($request, [
            'email' => 'required|email|exists:users,email',
            'password' => 'required'
        ]);

        // VALUE untuk email password KECUALI remember me

        $auth = $request->except(['remember_me']);

        if(auth()->attempt($auth, $request->remember_me)){
            //Jika SUCCESS generate API_TOKEN -> str_random
            auth()->user()->update(['api_token' => Str::random(40)]);
            
            //kirim response ke CLIENT
            return response()->json(['status' => 'success', 'data' => auth()->user()->api_token],200);
        }

        //jika GAGAL kirim RESPONSE "permintaan gagal"
        return response()->json(['status' => 'failed']);
    }
}
