let body = document.querySelector('body');
let button = document.querySelector('button');
let item = document.querySelector('li');


item.classList.add('dark');




function colorChange() {
    body.classList.toggle('dark')
    for (let item of texto) {
        item.classList.toggle('dark');


    }

}
    button.onclick = colorChange;