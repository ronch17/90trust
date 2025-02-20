@set($component, ' acfm-list-' . get_sub_field('style'))

<ul
  class="acfm-{{App::layout()}}{{$component}}">
  @fields('meet_our_team')

  @set($phone, get_sub_field('phone') ? get_sub_field('phone') : '')
  @set($email, get_sub_field('email') ? get_sub_field('email') : '')


  @set($link, get_sub_field('id_link') ? get_sub_field('id_link') : ( get_sub_field('url') ? get_sub_field('url') :
  '#') )

  @hassub('page_url')
  <a href="{{$link}}" class="{{$component}}__link" {{Page::linkTarget()}}>
    @endsub

    <li class="{{$component}}__item">

      @hassub('image')
      <div class="{{$component}}__image">
        <img class="acfm-image" src="@sub('image', 'url')" alt="@sub('image', 'alt')">
      </div>
      @endsub


      <div class="{{$component}}__info">
        @hassub('title')
        <div class="{{$component}}__title">
          @sub('title')
        </div>
        @endsub

        @hassub('text')
        <div class="{{$component}}__text">
          @sub('text')
        </div>
        @hassub('phone')
        <div class="{{$component}}__phone">
          @svg(phone)
          <a href="tel:{{$phone}}">@sub('phone')</a>
        </div>
        @endsub
        @hassub('email')
        <div class="{{$component}}__email">
          @svg(email)
          <a href="mailto:{{$email}}">@sub('email')</a>
        </div>
        @endsub
        @hassub('modal-text')

        @sub('modal-text')

        @endsub

        @endsub

        @hassub('modal-text')

        <div class="{{$component}}__backdrop">
          <div class="{{$component}}__modal">
            <div class="head">
              <div class="title">
                @sub('title')
                @svg(x)
              </div>


              @hassub('phone')
              <div class="phone">
                @svg(phone)
                <a href="tel:{{$phone}}">@sub('phone')</a>
              </div>
              @endsub
              @hassub('email')
              <div class="email">
                @svg(email)
                <a href="mailto:{{$email}}">@sub('email')</a>

              </div>
              @endsub
            </div>
            <div class="body">
              @sub('modal-text')
            </div>
            <div class="bottom">
              <button class="close-btn">close</button>
            </div>
          </div>

        </div>


        @endsub

        @hassub('button')


        <button class="{{$component}}__button">
          @sub('button')
        </button>


        @endsub

      </div>



    </li>

    @hassub('page_url')
  </a>
  @endsub






  @endfields
</ul>
