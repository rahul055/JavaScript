var myGlobal = 10;

function myfunct1() {
    oopsglobal = 5;
}

function fun2() {
    result = "";
    if (typeof myGlobal != "number") {
        result += "myGlobal =" + myGlobal;
    }
    if (typeof oopsglobal != "number") {
        result += "oopsGlobal =" + oopsglobal
    }
    console.log(result);
}
myfunct1();
fun2();