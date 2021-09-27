<?php

$num = 2;
$foo = "To be";//variable name
$bar = "or not" .$num ."  be.";

echo $foo ." ". $bar; //use this as a print function with the dot as a concatination

echo "\n";//means to add a new line but it might not work becuase it is interpretted as HTML

echo $num * $num*$num; //similar use of variables to do operations, like c#

$arr = [1,1,2,3,5,8];//standard php array

$aar2 = [ //associative array
    "first" => "tom",
    "second" => "bipin",
    "best" => "DS"
];

if(true){
    echo "TRUE \n";
} else{
    echo "FALSE \n";
}

while (true) { //won't be using this construct a lot, for each is a better loop for out applicatio
    break;
}

echo "<ul>";
foreach ($aar2 as $key => $val) { //look into the php documentation to under how to execute a foreach
    echo "<li>".$key." is ".$val."</li>\n";
} 
echo "</ul>";

// $arr as json

//echo json_encode($arr);

echo json_encode($arr,   //all the variables are lowercase and convenetions are in caps
JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR
);

/***
 * Variable Naming
 * 
 * PHP and JS: camelCase (use for the variales and function names)
 * Constraints UPPER_SNAKE_CASE (use for constants)
 * 
 * snake_case
 * PascalCase (use for class names)
 * kebab-case
 * 
 */