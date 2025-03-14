<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Rinvex\Country\CountryLoader;

class CountryController extends Controller
{
    public function show() {
        $countries = CountryLoader::countries();

        return Inertia::render('Auth/Login',[
            'countries' => $countries,
        ]);
    }
}
