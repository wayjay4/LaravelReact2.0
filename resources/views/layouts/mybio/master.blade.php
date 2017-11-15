
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
  <head>
    @include('layouts/mybio/head')
  </head>

  <body>

    @include('layouts/mybio/nav')

    @yield('content')

    @include('layouts/mybio/footer')

  </body>
</html>
