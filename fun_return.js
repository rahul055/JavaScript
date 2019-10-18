function myfun(num) {

    return num * 8;
}

console.log(myfun(5))




var myglobal = 20;

function glob() {
    var myglobal = 30;
    return myglobal + 10;
}
console.log(glob())