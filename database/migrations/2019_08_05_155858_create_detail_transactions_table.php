<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetailTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detail_transactions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('transaction_id');
            $table->unsignedBigInteger('laundry_price_id');
            $table->unsignedBigInteger('laundry_type_id');
            $table->integer('qty');
            $table->integer('price');
            $table->integer('subtotal');
            $table->timestamps();

//relasi Detail Transaction dengan Table Transaction
            $table->foreign('transaction_id')->references('id')->on('transactions');
//RELASI Detail Transaction dengan table LAUNDRY_PRICE
            $table->foreign('laundry_price_id')->references('id')->on('laundry_prices');
//Relasi Detail Transaction dengan TABEL LAUNDRY_TYPE
            $table->foreign('laundry_type_id')->references('id')->on('laundry_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detail_transactions');
    }
}
