function botaoClicado() {
    alert('Espero que tenha gostado!');
}

function mouseSobreParagrafo1() {
    const paragrafo1 = document.getElementById('paragrafo1');
    paragrafo1.style.color = 'blue';
}

function mouseForaParagrafo1() {
    const paragrafo1 = document.getElementById('paragrafo1');
    paragrafo1.style.color = 'black';
}

document.getElementById('meuBotao').addEventListener('click', botaoClicado);
document.getElementById('paragrafo1').addEventListener('mouseover', mouseSobreParagrafo1);
document.getElementById('paragrafo1').addEventListener('mouseout', mouseForaParagrafo1);
