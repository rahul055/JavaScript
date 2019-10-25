//assigning global to retunr value

let myglob = 0;

function fun(num) {
    return (num + 5) * 2;
}
myglob = fun(5);
console.log("the global variable is " + myglob)