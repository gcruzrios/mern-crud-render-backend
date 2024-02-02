const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const schemaUsuario = new schema({
  nombre: String,
  email: String,
  telefono: String,
  idusuario: String,
});

const ModeloUsuario = mongoose.model("usuarios", schemaUsuario);
module.exports = router;

router.get("/ejemplo", (req, res) => {
  res.send("Saludo carga desde ruta ejemplo");
});

router.post("/agregarusuario", async (req, res) => {
  const nuevousuario = new ModeloUsuario({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    idusuario: req.body.idusuario,
  });

  //console.log(nuevousuario);
  nuevousuario
    .save()
    .then(function (nuevousuario) {
      res.send("Usuario agregado correctamente");
    })
    .catch(function (err) {
      console.log(err);
    });
});

//Get usuarios

router.get("/obtenerusuarios", (req, res) => {
  ModeloUsuario.find()
    .then(function (models) {
      res.send(models);
    })
    .catch(function (err) {
      res.send(err);
    });
});

//Obtener data de usuario
router.get("/obtenerusuario/:id", (req, res) => {
    
//console.log(req.params.id);

  ModeloUsuario.find({ idusuario: req.params.id })
    .then(function (models) {
      res.send(models);
    })
    .catch(function (err) {
      res.send(err);
    });
});

//actualizar usuario
router.put("/actualizarusuario/:id", (req, res) => {
  ModeloUsuario.findOneAndUpdate(
    { idusuario: req.params.id },
    {
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono,
    }
  )
    .then(function (models) {
      res.send("Usuario actualizado correctamente");
    })
    .catch(function (err) {
      res.send(err);
    });
});

//Borrar usuario
router.delete("/borrarusuario/:id", (req, res) => {
  ModeloUsuario.findOneAndDelete({ idusuario: req.params.id })
    .then(function (models) {
      res.send("Usuario eliminado correctamente");
    })
    .catch(function (err) {
      res.send(err);
    });
});
