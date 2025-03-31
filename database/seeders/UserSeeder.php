<?php

namespace Database\Seeders;

// database/seeders/UserSeeder.php
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $userData = [
            [
                'firstName' => 'John',
                'lastName' => 'Doe',
                'email' => 'john.doe@example.com',
                'password' => Hash::make('password123'),
                'country' => 'United States',
                'gender' => 'male',
            ],
            [
                'firstName' => 'Jane',
                'lastName' => 'Smith',
                'email' => 'jane.smith@example.com',
                'password' => Hash::make('password123'),
                'country' => 'Canada',
                'gender' => 'female',
            ],
            [
                'firstName' => 'Robert',
                'lastName' => 'Johnson',
                'email' => 'robert.j@example.com',
                'password' => Hash::make('password123'),
                'country' => 'United Kingdom',
                'gender' => 'male',
            ],
            [
                'firstName' => 'Emily',
                'lastName' => 'Williams',
                'email' => 'emily.w@example.com',
                'password' => Hash::make('password123'),
                'country' => 'Australia',
                'gender' => 'female',
            ],
            [
                'firstName' => 'Michael',
                'lastName' => 'Brown',
                'email' => 'michael.b@example.com',
                'password' => Hash::make('password123'),
                'country' => 'Germany',
                'gender' => 'male',
            ],
            [
                'firstName' => 'Sarah',
                'lastName' => 'Davis',
                'email' => 'sarah.d@example.com',
                'password' => Hash::make('password123'),
                'country' => 'France',
                'gender' => 'female',
            ],
            [
                'firstName' => 'David',
                'lastName' => 'Miller',
                'email' => 'david.m@example.com',
                'password' => Hash::make('password123'),
                'country' => 'Spain',
                'gender' => 'male',
            ],
            [
                'firstName' => 'Jessica',
                'lastName' => 'Wilson',
                'email' => 'jessica.w@example.com',
                'password' => Hash::make('password123'),
                'country' => 'Italy',
                'gender' => 'female',
            ],
            [
                'firstName' => 'James',
                'lastName' => 'Taylor',
                'email' => 'james.t@example.com',
                'password' => Hash::make('password123'),
                'country' => 'Japan',
                'gender' => 'male',
            ],
            [
                'firstName' => 'Elizabeth',
                'lastName' => 'Anderson',
                'email' => 'elizabeth.a@example.com',
                'password' => Hash::make('password123'),
                'country' => 'Brazil',
                'gender' => 'female',
            ]
        ];

       foreach($userData as $users) {
            User::create($users);
       }
    }
}
