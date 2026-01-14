<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;

class PreventXss
{
    public function handle(Request $request, Closure $next)
    {
        // Skip XSS check for Inertia requests to let Inertia handle the response
        if ($request->header('X-Inertia')) {
            return $next($request);
        }

        $input = $request->all();
        $xssFound = false;

        // Check every input field
        array_walk_recursive($input, function ($value) use (&$xssFound) {
            if ($value === null) return;
            // Convert boolean to string for comparison
            $stringValue = is_bool($value) ? ($value ? 'true' : 'false') : (string)$value;
            // If the value contains HTML tags, flag it
            if ($stringValue !== strip_tags($stringValue)) {
                $xssFound = true;
            }
        });

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