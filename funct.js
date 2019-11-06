function myfun(arr, val) {
    arr.push(val);
    return arr.shift();
}


myArr = [1, 2, 3, 4, 5];

console.log("before" + myArr);
console.log(myfun(myArr, 6));
console.log("after" + myArr);