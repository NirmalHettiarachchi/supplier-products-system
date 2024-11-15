<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $suppliers = Supplier::with('products')->orderBy('id', 'desc')->get();
        return response()->json($suppliers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $supplier = new Supplier();
        $supplier->supplier_name = $request->supplier_name;
        $supplier->contact_person = $request->contact_person;
        $supplier->mobile_number_1 = $request->mobile_number_1;
        $supplier->mobile_number_2 = $request->mobile_number_2;
        $supplier->save();

        foreach ($request->products as $productData) {
            $supplier->products()->create($productData);
        }

        return response()->json($supplier->load('products'), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $supplier = Supplier::with('products')->findOrFail($id);
        return response()->json($supplier);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $supplier = Supplier::findOrFail($id);
        $supplier->supplier_name = $request->supplier_name;
        $supplier->contact_person = $request->contact_person;
        $supplier->mobile_number_1 = $request->mobile_number_1;
        $supplier->mobile_number_2 = $request->mobile_number_2;
        $supplier->save();
        return response()->json(data: $supplier);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $supplier = Supplier::findOrFail($id);
        $supplier->delete();
        return response()->json($supplier);
    }
}
