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
var index1 = 0;
var index2 = 0;
var index3 = 0;
var index4 = 0;
var index5 = 0;

function vermelho() {
    index1 ++;
    console.log(index1,index2,index3,index4,index5)
}
function azul() {
    index2 ++;
    console.log(index1,index2,index3,index4,index5)
}
function preto() {
    index3 ++;
    console.log(index1,index2,index3,index4,index5)
}
function branco() {
    index4 ++;
    console.log(index1,index2,index3,index4,index5)
}
function verde() {
    index5 ++;
    console.log(index1,index2,index3,index4,index5)
} 
function resultado() {
    console.log("entrou na função")
    const paginaResultado = document.querySelector('.resultado')
    if (index1 > index2 && index1 > index3 && index1 > index4 && index1 > index5) {
        paginaResultado.href = 'cores/vermelho.html'
        console.log("entrou no if")
    } else if (index2 > index1 && index2 > index3 && index2 > index4 && index2 > index5) {
        
    } else if (index3 > index1 && index3 > index2 && index3 > index4 && index3 > index5){
        
    } else if (index4 > index1 && index4 > index3 && index4 > index2 && index4 > index5){

    } else if (index5 > index1 && index5 > index3 && index5 > index4 && index5 > index2){

    }
}