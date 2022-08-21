// all h2 font color change by using mouse
const hh2 = document.getElementsByTagName('h2');
for (const h2 of hh2) {
    h2.addEventListener('mouseenter', function (event) {
        event.target.style.color = 'lightBlue';
    })
    h2.addEventListener('mouseleave', function (event) {
        event.target.style.color = '';
    })
}

// backpack section background color
const setBg = document.getElementById('backpack');
setBg.style.backgroundColor = 'tomato';
setBg.style.borderRadius = '5px';

// all card's radius 30px set
const setRadius = document.getElementsByClassName('card');
for (const cards of setRadius) {
    cards.style.borderRadius = '30px';
}

// create a function and add event that show after console.log
document.getElementById('last-button').addEventListener('click', function () {
    console.log('Last button is clicked.');
})

// set event handler to remove any buy button by click
function remove() {
    let element = document.getElementById('last-button');
    element.parentNode.removeChild(element);
}



const button = document.getElementsByClassName('panda-btn-buy-now');
console.log(button);
for (const btn of button) {
    btn.addEventListener('click', function () {
        btn.parentNode.removeChild(btn);
    })
}
