function logar() {
    let modal = document.querySelector('.login');
    modal.style.display = 'block';
    let fundo = document.querySelector('.container')
    fundo.style.filter = 'blur(4px)';
    let fundo2 = document.querySelector('.imgEsquerda')
    fundo2.style.filter = 'blur(4px)';
    let fundo3 = document.querySelector('.imgDireita')
    fundo3.style.filter = 'blur(4px)';
    let fundo4 = document.querySelector('.conteudo')
    fundo4.style.filter = 'blur(4px)';
}
function fechar(){
    let modal = document.querySelector('.login')
    modal.style.display = 'none';
    let fundo = document.querySelector('.container')
    fundo.style.filter = 'none';
    let fundo2 = document.querySelector('.imgEsquerda')
    fundo2.style.filter = 'none';
    let fundo3 = document.querySelector('.imgDireita')
    fundo3.style.filter = 'none';
    let fundo4 = document.querySelector('.conteudo')
    fundo4.style.filter = 'none';
}