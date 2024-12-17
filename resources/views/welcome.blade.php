<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
  
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/js/app.js'])

<!-- Esto usa la compilación CSS -->
</head>
<body class="bg-gray-100">
    <div id="app"></div>  <!-- Aquí se montará Vue -->
    <script type="module" src="{{ asset('js/app.js') }}"></script><!-- Esto usa el script JS compilado -->
</body>
</html>
