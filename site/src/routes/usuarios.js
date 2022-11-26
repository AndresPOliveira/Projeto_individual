var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

// Realizando o update da fkCor
router.put("/atualizarFk", function (req, res) {
    usuarioController.atualizarFk(req, res);
});
// Inserindo a carata favorita no banco
router.post("/salvarCarta", function (req, res) {
    usuarioController.salvarCarta(req, res);
})
// Buscando as informações das cartas 
router.post("/trazerInfoCarta", function (req, res) {
    usuarioController.trazerInfoCarta(req, res);
})
// Atualizando FKUsuario na tabela cartaFavorita atualizarFkUsuario
router.post("/atualizarFkUsuario", function (req, res) {
    usuarioController.atualizarFkUsuario(req, res);
})
module.exports = router;