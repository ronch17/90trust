{{--
  Template Name: Custom Template
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.hero')
    @include('partials.content-page')
  @endwhile
@endsection
