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
    qtdVerdeDiv.innerHTML = 1;
}
function qtdBranco() {
    qtdBrancoDiv.innerHTML = 1;
}
function qtdAzul() {
    qtdAzulDiv.innerHTML = 1;
}
function qtdPreto() {
    qtdPretoDiv.innerHTML = 1;
}
