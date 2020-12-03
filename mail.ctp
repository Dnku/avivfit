<?php
$ni = $_REQUEST['name'];
$nit = $_REQUEST['phone'];
$nim = $_REQUEST['email'];
$nima = $_REQUEST['contact'];
mail('avivmiz95@gmail.com' , $ni , $ni.$nit.$nim.$nima);