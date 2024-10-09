const display = document.getElementById("tela");

function addTela(button) {
    display.value += button;
} 

function limparTela() {
    display.value = '';
}

function deletar() {
    display.value = display.value.toString().slice(0, -1);
}

function calcular() {
    display.value = eval(display.value);
}

function seno() {
    display.value += 'sin(';
}

function cos() {
    display.value += 'cos(';
}

function tan() {
    display.value += 'tan(';
}
