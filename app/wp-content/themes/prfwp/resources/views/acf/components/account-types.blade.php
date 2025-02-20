@set($component, 'acfm-'. App::layout())


<div class="{{$component}}-wrapper">

  <div class="{{$component}}__switcher-wrapper">
    <button class="{{$component}}__switcher switcher-first-group active">{{_e('Accounts', 'sage')}}</button>
    <button class="{{$component}}__switcher switcher-second-group">{{_e('Savings', 'sage')}}</button>
    <button class="{{$component}}__switcher switcher-third-group">{{_e('Crypto Savings', 'sage')}}</button>
  </div>

  <ul class="{{$component}}">
    @fields('account_types')
    @set($switchGroup, get_sub_field('group_position'))

    @php
      $title =  get_sub_field('title') ? get_sub_field('title') : '';
      $titleMobile = explode(' ',(trim($title)));
//      $switchGroup = get_sub_field('select') ?  ' second-group' : ' first-group'
    @endphp

    <li title="{{$titleMobile[0]}}"
        class="{{$component}}__item {{strtolower(str_replace(' ', '-', get_sub_field('title')))}} {{strtolower(str_replace(' ', '-', $switchGroup))}}">
      <div class="{{$component}}__item__container">

        <div class="{{$component}}__col {{$component}}__col-right">

          @hassub('image')
          <img class="@sub('image_class')"
               src="@sub('image', 'url')"
               alt="@sub('image', 'alt')"
               @hassub('image_sm') class="{{$component}}--md" @endsub
          width="@sub('new_width')"
          height="auto">
          @endsub()


          @hassub('title')
          <div class="{{$component}}__title">
            @sub('title')
          </div>
          @endsub

          @hassub('sub-title')
          <div class="{{$component}}__sub-title">
            @sub('sub-title')
          </div>
          @endsub

          <ul class="{{$component}}__fields">
            @fields('field')


            <li class="{{$component}}__field">
              @hassub('service')
              <h3 class="{{$component}}__service">
                @sub('service')
              </h3>
              @endsub
              @hassub('value')
              <h3 class="{{$component}}__value">
                @sub('value')
              </h3>
              @endsub
            </li>

            @endfields

          </ul>


        </div>

        <div class="{{$component}}__btn-wrapper">
          <a class="{{$component}}__btn" href="{{ home_url('/open-account')}}"
             ng-if="!prf.customer">
            {{_e('Open', 'sage')}} {{$title}}
          </a>
        </div>

      </div>


    </li>
    @endfields
  </ul>
</div>
