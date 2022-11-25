function chamarQuiz() { 
    fkCorUsuario = sessionStorage.FKCOR_USUARIO;
    if (fkCorUsuario == 1) {
        window.location = "cores/vermelho.html";
        console.log(`vermelho`)
    } else if(fkCorUsuario == 2){
        window.location = "cores/verde.html";
        console.log(`verde`)
    } else if(fkCorUsuario == 3){
        window.location = "cores/branco.html";
        console.log(`branco`)
    } else if(fkCorUsuario == 4){
        window.location = "cores/azul.html";
        console.log(`azul`)
    } else if(fkCorUsuario == 5){
        window.location = "cores/preto.html";
        console.log(`preto`)
    } else{
    console.log(fkCorUsuario)
    let mostrarQuiz = document.querySelector('.quiz');
    mostrarQuiz.style.display = 'block';
    let esconderInicio = document.querySelector('.inicio')
    esconderInicio.style.display = 'none';
    }
    
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
function fim() {
    let mostrar = document.querySelector('.acabou');
    mostrar.style.display = 'block';
    let esconder = document.querySelector('.quiz')
    esconder.style.display = 'none';
}
// Apartir daqui resultado do quiz
var index1 = 0;
var index2 = 0;
var index3 = 0;
var index4 = 0;
var index5 = 0;
var teste1 = index1 + index2 + index3 + index4 +index5;
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
function desempateVermelho() {
    index1 += 3;
    console.log(index1,index2,index3,index4,index5)
}
function desempateAzul() {
    index2 += 3;
    console.log(index1,index2,index3,index4,index5)
}
function desempatePreto() {
    index3 += 3;
    console.log(index1,index2,index3,index4,index5)
}
function desempateBranco() {
    index4 += 3;
    console.log(index1,index2,index3,index4,index5)
}
function desempateVerde() {
    index5 += 3;
    console.log(index1,index2,index3,index4,index5)
}
var fkCorVar = 0;
function resultado() {
    console.log(index1,index2,index3,index4,index5)
    var resultadoVar = 0;
    var ResultadoVermelho = document.querySelector('#resultado')
    if (index1 > index2 && index1 > index3 && index1 > index4 && index1 > index5) {
        ResultadoVermelho.href = 'cores/vermelho.html';
        fkCorVar = 1;
        atualizarFk()
    } else if (index2 > index1 && index2 > index3 && index2 > index4 && index2 > index5) {
        ResultadoVermelho.href = 'cores/azul.html';
        fkCorVar = 4;
        atualizarFk()
    } else if (index3 > index1 && index3 > index2 && index3 > index4 && index3 > index5){
        ResultadoVermelho.href = 'cores/preto.html'
        fkCorVar = 5;
        atualizarFk()
    } else if (index4 > index1 && index4 > index3 && index4 > index2 && index4 > index5){
        ResultadoVermelho.href = 'cores/branco.html'
        fkCorVar = 3;
        atualizarFk()
    } else if (index5 > index1 && index5 > index3 && index5 > index4 && index5 > index2){
        ResultadoVermelho.href = 'cores/verde.html'
        fkCorVar = 2;
        atualizarFk()
    }
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            resultadoServer: resultadoVar,
        })
    })
}
