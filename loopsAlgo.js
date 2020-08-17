/*
    Print odds 1-20
        Print out all odd numbers from 1 to 20
        The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    Sum and Print 1-5
        Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
        The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15
*/

for(var i = 1; i<20; i+=2){
    console.log(i);
}


var sum=0;
var str = '';
for(var i = 1;i<=5;i++){
    sum+=i;
    str += "Num: "+i+", Sum: "+sum+", ";
}
console.log(str);