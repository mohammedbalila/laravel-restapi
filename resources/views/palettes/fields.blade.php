<!-- Name Field -->
<div class="form-group col-sm-6">
    {!! Form::label('name', 'Name:') !!}
    {!! Form::text('name', null, ['class' => 'form-control','required']) !!}
</div>

<!-- Tag Field -->
<div class="form-group col-sm-6">
    {!! Form::label('tag', 'Tag:') !!}
    {!! Form::text('tag', null, ['class' => 'form-control','required']) !!}
</div>

<!-- Img Field -->
<div class="form-group col-sm-6">
    {!! Form::label('img', 'Img:') !!}
    {!! Form::file('img',null,['required']) !!}
</div>
<div class="clearfix"></div>

<!-- Palette Copies Field -->
<div class="form-group col-sm-6">
    {!! Form::label('palette_copies', 'All Copies:') !!}
    {!! Form::number('palette_copies', null, ['class' => 'form-control','required'=>'true']) !!}
</div>

<!-- Avalible Copies Field -->
<div class="form-group col-sm-6">
    {!! Form::label('avalible_copies', 'Left Copies:') !!}
    {!! Form::number('avalible_copies', null, ['class' => 'form-control','required']) !!}
</div>

<!-- S Copies Field -->
<div class="form-group col-sm-6">
    {!! Form::label('S_copies', 'S Copies:') !!}
    {!! Form::number('S_copies', null, ['class' => 'form-control','required']) !!}
</div>

<!-- S Avalible Field -->
<div class="form-group col-sm-6">
    {!! Form::label('S_avalible', 'S Left:') !!}
    {!! Form::number('S_avalible', null, ['class' => 'form-control','required']) !!}
</div>

<!-- S Price Field -->
<div class="form-group col-sm-6">
    {!! Form::label('S_price', 'S Price:') !!}
    {!! Form::text('S_price', null, ['class' => 'form-control','required']) !!}
</div>
<div class="clearfix"></div>
<!-- M Copies Field -->
<div class="form-group col-sm-6">
    {!! Form::label('M_copies', 'M Copies:') !!}
    {!! Form::number('M_copies', null, ['class' => 'form-control','required']) !!}
</div>

<!-- M Avalible Field -->
<div class="form-group col-sm-6">
    {!! Form::label('M_avalible', 'M Left:') !!}
    {!! Form::number('M_avalible', null, ['class' => 'form-control','required']) !!}
</div>

<!-- M Price Field -->
<div class="form-group col-sm-6">
    {!! Form::label('M_price', 'M Price:') !!}
    {!! Form::text('M_price', null, ['class' => 'form-control','required']) !!}
</div>
<div class="clearfix"></div>
<!-- L Copies Field -->
<div class="form-group col-sm-6">
    {!! Form::label('L_copies', 'L Copies:') !!}
    {!! Form::number('L_copies', null, ['class' => 'form-control','required']) !!}
</div>

<!-- L Avalible Field -->
<div class="form-group col-sm-6">
    {!! Form::label('L_avalible', 'L Left:') !!}
    {!! Form::number('L_avalible', null, ['class' => 'form-control','required']) !!}
</div>

<!-- L Price Field -->
<div class="form-group col-sm-6">
    {!! Form::label('L_price', 'L Price:') !!}
    {!! Form::text('L_price', null, ['class' => 'form-control','required']) !!}
</div>
<div class="clearfix"></div>
<!-- Sizing Details Field -->
<div class="form-group col-sm-6">
    {!! Form::label('sizing_details', 'Sizing Details:') !!}
    {!! Form::text('sizing_details', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('sizing_details_ar', 'Sizing Details(Ar):') !!}
    {!! Form::text('sizing_details_ar', null, ['class' => 'form-control','required']) !!}
</div>

<!-- Print Material Field -->
<div class="form-group col-sm-6">
    {!! Form::label('print_material', 'Print Material:') !!}
    {!! Form::text('print_material', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('print_material_ar', 'Print Material(Ar):') !!}
    {!! Form::text('print_material_ar', null, ['class' => 'form-control','required']) !!}
</div>

<!-- Print Ink Field -->
<div class="form-group col-sm-6">
    {!! Form::label('print_ink', 'Print Ink:') !!}
    {!! Form::text('print_ink', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('print_ink_ar', 'Print Ink(Ar):') !!}
    {!! Form::text('print_ink_ar', null, ['class' => 'form-control','required']) !!}
</div>

<!-- Print Finish Field -->
<div class="form-group col-sm-6">
    {!! Form::label('print_finish', 'Print Finish:') !!}
    {!! Form::text('print_finish', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('print_finish_ar', 'Print Finish(Ar):') !!}
    {!! Form::text('print_finish_ar', null, ['class' => 'form-control','required']) !!}
</div>

<!-- Frame Material Field -->
<div class="form-group col-sm-6">
    {!! Form::label('frame_material', 'Frame Material:') !!}
    {!! Form::text('frame_material', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('frame_material_ar', 'Frame Material(Ar):') !!}
    {!! Form::text('frame_material_ar', null, ['class' => 'form-control','required']) !!}
</div>

<!-- Frame Finish Field -->
<div class="form-group col-sm-6">
    {!! Form::label('frame_finish', 'Frame Finish:') !!}
    {!! Form::text('frame_finish', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('frame_finish_ar', 'Frame Finish(Ar):') !!}
    {!! Form::text('frame_finish_ar', null, ['class' => 'form-control','required']) !!}
</div>
<!-- Frame Shipping Field -->
<div class="form-group col-sm-6">
    {!! Form::label('shipping', 'Shipping:') !!}
    {!! Form::textarea('shipping', null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('shipping_ar', 'Shipping(Ar):') !!}
    {!! Form::textarea('shipping_ar', null, ['class' => 'form-control','required','style'=>'direction: rtl']) !!}
</div>
<!-- Description-->
<div class="form-group col-sm-6">
    {!! Form::label('description', 'Description:') !!}
    {!! Form::textarea('description',null, ['class' => 'form-control','required']) !!}
</div>
<div class="form-group col-sm-6">
    {!! Form::label('description_ar', 'Description(Ar):') !!}
    {!! Form::textarea('description_ar',null, ['class' => 'form-control','required','style'=>'direction: rtl']) !!}
</div>

<!-- Artist Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('artist_id', 'Artist :') !!}
    {!! Form::select('artist_id', $artistItems, null, ['class' => 'form-control','required']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('palettes.index') }}" class="btn btn-default">Cancel</a>
</div>
