<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePalettesTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('palettes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('img')->nullable();
            $table->integer('palette_copies')->nullable();
            $table->integer('avalible_copies')->nullable();
            $table->integer('S_copies')->nullable();
            $table->integer('S_avalible')->nullable();
            $table->string('S_price')->nullable();
            $table->integer('M_copies')->nullable();
            $table->integer('M_avalible')->nullable();
            $table->string('M_price')->nullable();
            $table->integer('L_copies')->nullable();
            $table->integer('L_avalible')->nullable();
            $table->string('L_price')->nullable();
            $table->string('sizing_details')->nullable();
            $table->string('print_material')->nullable();
            $table->string('print_ink')->nullable();
            $table->string('print_finish')->nullable();
            $table->string('frame_material')->nullable();
            $table->string('frame_finish')->nullable();
            $table->integer('artist_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('artist_id')->references('id')->on('artists')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('palettes');
    }
}
