<?php
    use Carbon\Carbon;
    $current_timestamp = Carbon::now()->timestamp;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TaskManager</title>
    <link href="{{ mix('css/app.css') }}?<?php echo $current_timestamp?>" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    <script src="{{ mix('js/app.js') }}?<?php echo $current_timestamp?>"></script>
</body>
</html>