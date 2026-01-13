<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PreventXss
{
    public function handle(Request $request, Closure $next)
    {
        $input = $request->all();
        $xssFound = false;

        // Check every input field
        array_walk_recursive($input, function ($value) use (&$xssFound) {
            if ($value === null) return;

            // If the value contains HTML tags, flag it
            if ($value !== strip_tags($value)) {
                $xssFound = true;
            }
        });

        // We use code 422 (Unprocessable Entity) so React treats it like a validation error instead of redirecting the user.
        if ($xssFound) {
            return response()->json([
                'message' => 'Security Alert: XSS input is illegal and has been blocked.',
                'errors'  => [
                    'security' => ['XSS detected. Input cleared.']
                ]
            ], 422);
        }

        return $next($request);
    }
}
