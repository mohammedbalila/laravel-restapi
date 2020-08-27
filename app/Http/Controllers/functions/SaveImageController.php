<?php

namespace App\Http\Controllers\functions;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;


class SaveImageController extends Controller
{

    public function __construct( )
    {
    }
    public function createImages(Request $request, $img){
        $file=$img;
        $originalName = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();

        $path = 'images/'.uniqid().'.'.$extension;
        $img = Image::make($file);
        $img->save(public_path($path));
        $input = $request->all();
        $input['image'] = $path;

        return $path;
    }
}
