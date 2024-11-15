<?php

namespace Database\Factories;

use App\Models\Supplier;
use Illuminate\Database\Eloquent\Factories\Factory;
use Laravel\Tinker\TinkerCaster;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Supplier>
 */
class SupplierFactory extends Factory
{
    protected $model = Supplier::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'supplier_name' => $this->faker->company(),
            'contact_person' => $this->faker->name(),
            'mobile_number_1' => $this->faker->phoneNumber(),
            'mobile_number_2' => $this->faker->phoneNumber(),
        ];
    }
}

