<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $categories = Category::all();
        return response()->json([
            'categories'=>$categories
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'cat_name'=>'required|min:2|max:50'
        ]);
        $category = New Category();
        $category->cat_name = $request->cat_name;
        $category->save();
        return ['message'=>'OK'];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    public function edit_category($id)
    {
        $category = Category::find($id);
        return response()->json([
            'category'=>$category
        ],200);
    }

    public function update_category(Request $request,$id){
        $this->validate($request,[
            'cat_name'=>'required|min:2|max:50'
        ]);
        $category = Category::find($id);
        $category->cat_name = $request->cat_name;
        $category->save();
    }

    public function delete_category($id)
    {
        $category = Category::find($id);
        $category->delete();
    }
}
