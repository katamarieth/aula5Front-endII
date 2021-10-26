let body = document.querySelector('body');
let button = document.querySelector('button');
let texto = document.querySelector('li');
let item = document.querySelector('li');

item.style.color = '#FFF';
item.classList.add('dark');


let itens = document.querySelectorAll('li');
for (let item of itens) {
    item.classList.add('dark');
}




function colorChange() {
    body.classList.toggle('dark')
    for (let item of texto) {
        item.classList.toggle('dark');


    }

}
    button.onclick = colorChange;