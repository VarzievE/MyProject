function one() {
    let one = document.querySelector('.slide-1');
    let two = document.querySelector('.slide-2');
    let three = document.querySelector('.slide-3');
    let four = document.querySelector('.slide-4');

    if (!two.classList.contains('hide')) {
        two.classList.add('hide');
        one.classList.remove('hide');
    }
    else if (!three.classList.contains('hide')) {
        three.classList.add('hide');
        one.classList.remove('hide');
    }
    else if (!four.classList.contains('hide')) {
        four.classList.add('hide');
        one.classList.remove('hide');
    }
    
}
function two() {
    let one = document.querySelector('.slide-1');
    let two = document.querySelector('.slide-2');
    let three = document.querySelector('.slide-3');
    let four = document.querySelector('.slide-4');

    if (!one.classList.contains('hide')) {
        one.classList.add('hide');
        two.classList.remove('hide');
    }
    else if (!three.classList.contains('hide')) {
        three.classList.add('hide');
        two.classList.remove('hide');
    }
    else if (!four.classList.contains('hide')) {
        four.classList.add('hide');
        two.classList.remove('hide');
    }
}
function three() {
    let one = document.querySelector('.slide-1');
    let two = document.querySelector('.slide-2');
    let three = document.querySelector('.slide-3');
    let four = document.querySelector('.slide-4');

    if (!two.classList.contains('hide')) {
        two.classList.add('hide');
        three.classList.remove('hide');
    }
    else if (!one.classList.contains('hide')) {
        one.classList.add('hide');
        three.classList.remove('hide');
    }
    else if (!four.classList.contains('hide')) {
        four.classList.add('hide');
        three.classList.remove('hide');
    }
}
function four() {
    let one = document.querySelector('.slide-1');
    let two = document.querySelector('.slide-2');
    let three = document.querySelector('.slide-3');
    let four = document.querySelector('.slide-4');

    if (!three.classList.contains('hide')) {
        three.classList.add('hide');
        four.classList.remove('hide');
    }
    else if (!one.classList.contains('hide')) {
        one.classList.add('hide');
        four.classList.remove('hide');
    }
    else if (!two.classList.contains('hide')) {
        two.classList.add('hide');
        four.classList.remove('hide');
    }
}
