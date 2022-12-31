<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\product;

class productController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = product::all();
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'description' => ['required', 'string'],
            'price' => ['required', 'numeric'],
            'image' => ['required', 'image'],
            'idC' => 'required'
        ]);

        $imageName = time() . '.' . $request->image->extension();
        $request->image->storeAs('img', $imageName, 'public');

        $product = new product();

        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->image = $imageName;
        $product->idC = $request->idC;

        $product->save();

        return response()->json('Added With Success');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = product::find($id);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'description' => ['required', 'string'],
            'price' => ['required', 'numeric'],
            'image' => ['required', 'image'],
            'idC' => 'required'
        ]);

        $imgName = time() . '.' . $request->image->extension();
        $request->image->storeAs('img', $imgName, 'public');

        $product = product::find($id);
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->image = $imgName;
        $product->idC = $request->idC;
        $product->save();
        return response()->json('Update With Success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = product::find($id);
        $product->delete();
        return response()->json('Deleted With Success');
    }
}
