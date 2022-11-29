var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function atualizarFk(cor,idUsuario) {
    var instrucao = `
    UPDATE usuario SET fkcor = ${cor} WHERE idUsuario = ${idUsuario}`;
    return database.executar(instrucao);
}
// Inserindo nome da carta no banco 
function salvarCarta(nome, email, senha) {
    var instrucao = `
        INSERT INTO cartaFavorita (nome) VALUES ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// Trazendo as informações das cartas 
function trazerInfoCarta() {
    var instrucao = `
        SELECT*FROM cartaFavorita;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function trazerInfoCarta2() {
    var instrucao = `
        SELECT*FROM cartaFavorita;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// Atualizar a fkUsuario na tabela Carta 
function atualizarFkUsuario(idCarta,idUsuario) {
    var instrucao = `
    UPDATE cartaFavorita SET fkUsuario = ${idUsuario} WHERE idCartaFavorita = ${idCarta}`;
    return database.executar(instrucao);
}
// Trazer a quantidade de pessoas de cada cor
function qtdVermelho() {
    var instrucao = `
    select count(*)'qtd' from usuario where fkcor = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    entrar,
    cadastrar,
    listar,
    atualizarFk,
    salvarCarta,
    trazerInfoCarta,
    trazerInfoCarta2,
    atualizarFkUsuario,
    qtdVermelho,
};