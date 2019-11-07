function myfun(arr, val) {
    arr.push(val);
    return arr.push();
}

function fun(ar, vl) {
    ar.unshift(vl);
    return ar.unshift()
}
myArr = [1, 2, 3, 4, 5];

console.log("before " + myArr);
console.log(myfun(myArr, 6));
console.log("after " + myArr);

ourarr = [2, 3, 4, 5, 6];

console.log("before " + ourarr);
console.log(fun(ourarr, 1));
console.log('after ' + ourarr);


arr = ['b', 'c', 'd', 'e', 'f', 'g']


console.log("before " + arr);
console.log(fun(arr, 'a'));
console.log('after ' + arr);