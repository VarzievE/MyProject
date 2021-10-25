function one() {
    let one = document.querySelector('.col-1');
    let two = document.querySelector('.col-2');
    let three = document.querySelector('.col-3');
    let four = document.querySelector('.col-4');

    if (!two.classList.contains('hide')) {
        two.classList.add('hide');
        three.classList.add('hide');
        four.classList.add('hide');
        one.classList.remove('hide');
    }
    
}
function two() {
    let one = document.querySelector('.col-1');
    let two = document.querySelector('.col-2');
    let three = document.querySelector('.col-3');
    let four = document.querySelector('.col-4');

    if (!one.classList.contains('hide')) {
        one.classList.add('hide');
        two.classList.remove('hide');
    }
}