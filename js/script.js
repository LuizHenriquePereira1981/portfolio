const numero = document.getElementById('numero');   
const botaoSomar = document.getElementById('somar');
const botaoZerar = document.getElementById('zerar');

let contador = 0;

botaoSomar.addEventListener('click', () => {
    contador++;
    numero.textContent = contador;
    if (contador > 10) {
        numero.style.color = "red";
    }   
});

botaoZerar.addEventListener('click', () => {
    contador = 0;
    numero.textContent = contador;
    numero.style.color = "";
}); 

const campo = document.getElementById('campo');
const botaoAdicionar = document.getElementById('adicionar');
const lista = document.getElementById('lista');

botaoAdicionar.addEventListener('click', () => {
    const item = document.createElement('li');
    const texto = campo.value.trim();
    if (texto === '')
        return;
    item.textContent = texto;
    item.addEventListener('click', () => {
        if (item.style.textDecoration === 'line-through') {
            item.style.textDecoration = '';
        } else {
            item.style.textDecoration = 'line-through';
        }
    });

    lista.appendChild(item);
    campo.value = '';
});


