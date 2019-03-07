<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php
        $uri = $_SERVER['REQUEST_URI'];
        $section = preg_replace('/\//', '', $uri);

        if ($section != "") {
            echo "<title>Jack Greenberg | " . $section . "</title>";
        } else {
            echo "<title>Jack Greenberg | Front-end Developer</title>";
        };
    ?>

    <meta name="description" content="I am a self-taught developer from Los Angeles.">
    <!-- Google / Search Engine Tags -->
    <meta itemprop="name" content="Jack Greenberg | Front-end Developer">
    <meta itemprop="description" content="I am a self-taught developer from Los Angeles.">
    <meta itemprop="image" content="">
    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://jacklgreenberg.com/">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Jack Greenberg | Front-end Developer">
    <meta property="og:description" content="I am a self-taught developer from Los Angeles.">
    <meta property="og:image" content="">
    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Jack Greenberg | Front-end Developer">
    <meta name="twitter:description" content="I am a self-taught developer from Los Angeles.">
    <meta name="twitter:image" content="">

    <link rel="stylesheet" href="/dist/bundle.css">

    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
</head>
<?php
    $uri = $_SERVER['REQUEST_URI'];

    $section = preg_replace('/\//', '', $uri);

    if ($section != "") {
        echo "<body class=\"" . $section . "--expanded\">";
    } else {
        echo "<body>";
    };
?>
