// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    }
    trazerInfoCarta2();
    qtdVermelho();
    qtdVerde();
    qtdBranco();
    qtdAzul();
    qtdPreto();
    maiorQtd()
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../pagina2.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "block";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

// Funções para mostrar a quantidade de cada cor
function qtdVermelho() {
    fetch("/usuarios/qtdVermelho", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(data1=>{
                console.log(data1)
                console.log(data1[data1.length-1].qtd)
                qtdVermelhoDiv.innerHTML = data1[data1.length-1].qtd;
            })
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}
function qtdVerde() {
    fetch("/usuarios/qtdVerde", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(data1=>{
                console.log(data1)
                console.log(data1[data1.length-1].qtd)
                qtdVerdeDiv.innerHTML = data1[data1.length-1].qtd;
            })
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    
}
function qtdBranco() {
    fetch("/usuarios/qtdBranco", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(data1=>{
                console.log(data1)
                console.log(data1[data1.length-1].qtd)
                qtdBrancoDiv.innerHTML = data1[data1.length-1].qtd;
            })
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}
function qtdAzul() {
    fetch("/usuarios/qtdAzul", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(data1=>{
                console.log(data1)
                console.log(data1[data1.length-1].qtd)
                qtdAzulDiv.innerHTML = data1[data1.length-1].qtd;
            })
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}
function qtdPreto() {
    fetch("/usuarios/qtdPreto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(data1=>{
                console.log(data1)
                console.log(data1[data1.length-1].qtd)
                qtdPretoDiv.innerHTML = data1[data1.length-1].qtd;
            })
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}
// Cor com a maior quantidade de pessoas 
function maiorQtd() {
    fetch("/usuarios/maiorQtd", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(data1=>{
                console.log(data1)
                console.log(data1[data1.length-1].qtd)
                var maior = 0;
                var nomeMaior = 0;
                for (let index = 0; index < data1.length; index++) {
                    if (data1[index].qtd > maior) {
                        maior = data1[index].qtd
                        nomeMaior = data1[index].fkcor;
                        console.log(maior)
                        console.log(data1[index].fkcor)
                        if (nomeMaior == 1) {
                            nomeMaiorQtd.innerHTML = "vermelho"
                        } else if(nomeMaior == 2){
                            nomeMaiorQtd.innerHTML = "verde"
                        } else if(nomeMaior == 3){
                            nomeMaiorQtd.innerHTML = "branco"
                        } else if(nomeMaior == 4){
                            nomeMaiorQtd.innerHTML = "azul"
                        } else if(nomeMaior == 5){
                            nomeMaiorQtd.innerHTML = "preto"
                        }

                    }
                    
                }
            })
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}