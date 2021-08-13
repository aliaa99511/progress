
/**************************************************** */
/*bar1*/
var bar1=document.getElementById("bar1");
var count1=25;

function progress1 () {

    bar1.style.width = count1+"%";
    count1++;

    var set1=setTimeout(progress1,30);

    if(count1 > 80){
        clearTimeout(set1);
    }
}
progress1();

            /**************** */
            /*inner1*/
var span1=document.getElementById("span1");
var num1=0;

function inner1(){

    span1.innerHTML = num1;
    num1++;

    var number1=setTimeout(inner1,30);

    if(num1 > 80){
        clearTimeout(number1);
    }
}
inner1();
/******************************************************* */




/**************************************************** */
/*bar2*/
var bar2=document.getElementById("bar2");
var count2=25;

function progress2 () {

    bar2.style.width = count2+"%";
    count2++;

    var set2=setTimeout(progress2,30);

    if(count1 > 50){
        clearTimeout(set2);
    }
}
progress2();

            /**************** */
            /*inner2*/
var span2=document.getElementById("span2");
var num2=0;

function inner2(){

    span2.innerHTML = num2;
    num2++;

    var number2=setTimeout(inner2,30);

    if(num2 > 50){
        clearTimeout(number2);
    }
}
inner2();
/******************************************************* */




/**************************************************** */
/*bar3*/
var bar3=document.getElementById("bar3");
var count3=25;

function progress3 () {

    bar3.style.width = count3+"%";
    count3++;

    var set3=setTimeout(progress3,30);

    if(count3 > 100){
        clearTimeout(set3);
    }
}
progress3();

            /**************** */
            /*inner3*/
var span3=document.getElementById("span3");
var num3=0;

function inner3(){

    span3.innerHTML = num3;
    num3++;

    var number3=setTimeout(inner3,30);

    if(num3 > 100){
        clearTimeout(number3);
    }
}
inner3();
/******************************************************* */





/**************************************************** */
/*bar4*/
var bar4=document.getElementById("bar4");
var count4=0;

function progress4 () {

    bar4.style.width = count4+"%";
    count4++;

    var set4=setTimeout(progress4,30);

    if(count4 > 25){
        clearTimeout(set4);
    }
}
progress4();

            /**************** */
            /*inner4*/
var span4=document.getElementById("span4");
var num4=0;

function inner4(){

    span4.innerHTML = num4;
    num4++;

    var number4=setTimeout(inner4,30);

    if(num4 > 25){
        clearTimeout(number4);
    }
}
inner4();
/******************************************************* */