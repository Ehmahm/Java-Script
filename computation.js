function computation(number_one,number_two,operator){
switch (operator){
    case "+":
        return number_one+number_two
    case "-":
        return number_one-number_two
    case "*":
        return number_one*number_two
    case "/":
        return number_one/number_two
}
}
computation(10,20,"+");
computation(10,20,"-");
computation(10,20,"*");
computation(10,20,"/");