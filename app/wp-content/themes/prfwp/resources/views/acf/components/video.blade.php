@acfmodule(div)
@set($component, 'acfm-'. App::layout())
@set($videoClass, get_sub_field('video_class'))


@hassub('video')
<video class="{{ $videoClass }}" playsinline muted autoplay preload="auto" loop
       poster="@sub('video', 'url')">
  <source type="video/mp4"
          src="@sub('video', 'url')"
          data-src="@sub('video', 'url')">
</video>
@endsub()

@endacfmodule(div)
