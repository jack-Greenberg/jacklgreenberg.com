<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Jack Greenberg</title>

    <link rel="stylesheet" href="/dist/bundle.css">

    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
</head>
<body>
<?php
    $uri = $_SERVER['REQUEST_URI'];

    $section = preg_replace('/\//', '', $uri);

    if ($section != "") {
        echo "<body class=\"" . $section . "--expanded\">";
    } else {
        echo "<body>";
    };
?>
