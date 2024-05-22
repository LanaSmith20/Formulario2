function enviar(){
    let nome = document.querySelector('#nome').value;

    document.querySelector('#resultado').innerHTML = 'O nome retirado da caixa de texto foi:' + nome;
    
}