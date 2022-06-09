var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listar/jogos", function (req, res) {
    avisoController.listar(req, res, "jogos");
});
router.get("/listar/filmes", function (req, res) {
    avisoController.listar(req, res, "filmes");
});
router.get("/listar/animes", function (req, res) {
    avisoController.listar(req, res, "animes");
});
router.get("/listar/series", function (req, res) {
    avisoController.listar(req, res, "series");
});
router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listapostagem(req, res);
});
// router.get("/listar/:idUsuario", function (req, res) {
//     avisoController.listarPorUsuario(req, res);
// });

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;