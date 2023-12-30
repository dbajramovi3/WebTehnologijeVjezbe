//a)
var regex = /\d{2,}_/;

//Testiranje
var text2 = "123_abc";

if(regex.test(text2)){
    console.log("True");
}


//b)
var regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;

//Testiranje
var date1 = "01-12-2022";
if(regex.test(date1)){
    console.log("True");
}



