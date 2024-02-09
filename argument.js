function add( num1, num2){
    console.log( num1, num2);
    console.log(arguments); // array likes objects
    console.log(arguments[3]);
}
add(5,6,23,4,678);