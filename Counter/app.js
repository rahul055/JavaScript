const result = document.querySelector('#result');
const btn = document.querySelectorAll('.btn');
var count = 0;


btn.forEach(function (bt) {
    bt.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        console.log(styles)
        if (styles.contains('Decrement')) {
            count--;
        } else if (styles.contains('Increment')) {
            count++;
        } else {
            count = 0;
        }
        if (count < 0) {
            result.style.color = 'red'
        }
        if (count > 0) {
            result.style.color = 'green'
        }
        if (count === 0) {
            result.style.color = 'black'
        }
        result.textContent = count;
    })
})