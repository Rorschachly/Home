<?php
if (isset($_COOKIE["loadtimes"])) {
    setcookie("loadtimes", $_COOKIE["loadtimes"] + 1, time() + 10);
    $longcat = $_COOKIE["loadtimes"];    
} else {
    setcookie("loadtimes", 2, time() + 10);
    $longcat = 1;
}
$o = str_repeat("o", $longcat);
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Long Cat</title>
        <style type="text/css">
            div { line-height: 0; }
        </style>
    </head>
    
    <body>
        <h1>L<?= $o; ?>ng Cat</h1>
        <p>You have visited this page <?php echo $longcat; ?> time(s).</p>

        <div><img src="http://students.washington.edu/jl262/image/topcat.jpg" alt="top of cat" /></div>
            
        <!-- repeat this image the appropriate number of times -->
        <?php for ($i = 0; $i < $longcat; $i++) { ?>
        <div><img src="http://students.washington.edu/jl262/image/middlecat.jpg" alt="top of cat" /><div>
        <?php } ?>
        <div><img src="http://students.washington.edu/jl262/image/bottomcat.jpg" alt="top of cat" /><div>
    </body>
</html>