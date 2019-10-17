var myglobal = 10;

function fun1()
{
    oopsglobal = 5;
}

function fun2()
{
    output = " ";
    if(typeof myglobal =! "undefined"){
        output += "myglobal:" + myglobal;
    }
    if(typeof oopsglobal =! "undefined"){
        output += "oopsglobal" + oopsglobal;
    }
    console.log(output);
}
fun1();
fun2()