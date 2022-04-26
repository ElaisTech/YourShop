const btn = document.querySelector('#genera');

const preventivo = () => {
// const maglietta = document.querySelector('#maglietta');
// const cuscino = document.querySelector('#cuscino');
// const tazza = document.querySelector('#tazza');
// const bicchiere = document.querySelector('#bicchiere');
const obj = document.querySelector('#article').value;
var price1 = 0;
const print = document.querySelector('#print').value;
var price2 = 0;
var finalprice = 0;


if (obj == "maglietta") {
    price1 = 10;

} else if (obj == "cuscino") {
    price1 = 15;
    
} else if (obj == "tazza") {
    price1 = 18;

} else if (obj == "bicchiere") {
    price1 = 22;
}


if (print == "foto") {
    price2 = 5;
} else if (print == "disegno") {
    price2 = 6;
} else if (print == "abstract") {
    price2 = 4;
} else if (print == "casual") {
    price2 = 5;
};
finalprice = price1 + price2;
return document.querySelector('#resultwrapper').innerHTML = finalprice;
};

btn.addEventListener('click', preventivo);


