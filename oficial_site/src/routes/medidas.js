var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/quantidade/postagens", function (req, res) {
    medidaController.buscarPostagensPorCategoria(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;