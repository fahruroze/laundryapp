<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('courier_id');
// ket: courier_id berfungsi memastikan pesanan dikerjakan oleh outlets            
            $table->unsignedBigInteger('customer_id');
            $table->unsignedBigInteger('user_id');
//ket: user_id memastikan user yang bertanggung jawab atas transaksi                        
            $table->integer('amount');
            $table->date('start_date');
            $table->date('end_date');
            $table->boolean('status')->default(false);
            $table->timestamps();
//relasi Transaction dengan  USER table
            $table->foreign('courier_id')->references('id')->on('users');
//RElasi Transaction dengan table Customer 
            $table->foreign('customer_id')->references('id')->on('customers');
//Relasi Transaction dengan User
            $table->foreign('user_id')->references('id')->on('users');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
