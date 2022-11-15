function chamarQuiz() {
    let mostrarQuiz = document.querySelector('.quiz');
    mostrarQuiz.style.display = 'block';
    let esconderInicio = document.querySelector('.inicio')
    esconderInicio.style.display = 'none';
} 
function chamarQuestao2() {
    let mostrar = document.querySelector('.caixaDeRespostas2');
    mostrar.style.display = 'block';
    let esconder = document.querySelector('.caixaDeRespostas1')
    esconder.style.display = 'none';
    let mostrarPergunta = document.querySelector('.textoPergunta2');
    mostrarPergunta.style.display = 'block';
    let esconderPergunta = document.querySelector('.textoPergunta1')
    esconderPergunta.style.display = 'none';

}
function chamarQuestao3() {
    let mostrar = document.querySelector('.caixaDeRespostas3');
    mostrar.style.display = 'block';
    let esconder = document.querySelector('.caixaDeRespostas2')
    esconder.style.display = 'none';
    let mostrarPergunta = document.querySelector('.textoPergunta3');
    mostrarPergunta.style.display = 'block';
    let esconderPergunta = document.querySelector('.textoPergunta2')
    esconderPergunta.style.display = 'none';
}
function chamarQuestao4() {
    let mostrar = document.querySelector('.caixaDeRespostas4');
    mostrar.style.display = 'block';
    let esconder = document.querySelector('.caixaDeRespostas3')
    esconder.style.display = 'none';
    let mostrarPergunta = document.querySelector('.textoPergunta4');
    mostrarPergunta.style.display = 'block';
    let esconderPergunta = document.querySelector('.textoPergunta3')
    esconderPergunta.style.display = 'none';
}
function chamarQuestao5() {
    let mostrar = document.querySelector('.caixaDeRespostas5');
    mostrar.style.display = 'block';
    let esconder = document.querySelector('.caixaDeRespostas4')
    esconder.style.display = 'none';
    let mostrarPergunta = document.querySelector('.textoPergunta5');
    mostrarPergunta.style.display = 'block';
    let esconderPergunta = document.querySelector('.textoPergunta4')
    esconderPergunta.style.display = 'none';
}
// Apartir daqui resultado do quiz
var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var contador4 = 0;
var contador5 = 0;