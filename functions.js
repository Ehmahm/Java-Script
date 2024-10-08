var num=23;
var num_two=2;
var sum=num+num_two;
var num_three=40;
var num_four=4;
var sum_two=num_three+num_four;

function summation(){
    var num_five=40;
    var num_six=4;
    var sum_three=num_five+num_six;
    console.log("Sum three:",sum_three);

}
summation

//Returning functionfunction 
summation_two(){
    var num_five=40;
    var num_six=4;
    var sum_three=num_five+num_six;
    return sum_three;

}
summation_two();

//use it by printing the value directly on the terminal
console.log("Sum four:",summation_two())

//assigning the value to a variable
var sum_four=summation_two();
var sum_five=summation();
console.log(sum_five);