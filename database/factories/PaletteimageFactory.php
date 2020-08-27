<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Paletteimage;
use Faker\Generator as Faker;

$factory->define(Paletteimage::class, function (Faker $faker) {

    return [
        'img' => $faker->word,
        'palatte_id' => $faker->randomDigitNotNull,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
