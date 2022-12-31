<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\categorie;

class categorieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = categorie::all();
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
            'parent' => ['required', 'string', 'max:100'],
        ]);

        $categorie = new categorie();

        $categorie->name = $request->name;
        $categorie->parent = $request->parent;

        $categorie->save();

        return response()->json('Added Succcess');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $categorie = categorie::find($id);
        return response()->json($categorie);
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
            'parent' => ['required', 'string', 'max:100'],
        ]);

        $categorie = categorie::find($id);
        $categorie->update($request->all());
        return response()->json('Updated With Success!!');
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $categorie = categorie::find($id);
        $categorie->delete();
        return response()->json('Deleted With Success!!');
    }
}
