const {response, request} = require('express');


const usersGet = (req = request, res = response) => {

    //Ejemplo de url: http://localhost:8080/api/usuarios/?q=hola&nombre=pepe&apiKey=2343
    const {q, nombre='No name', apiKey} = req.query;

    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        apiKey
    })
  }

const usersPost = (req, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
        msg: "post API - controlador",
        nombre,
        edad
    })
  }


const usersPut = (req, res = response) => {
// Ejemplo de url: http://localhost:8080/api/usuarios/10

    /* const id = req.params.id; */
    const {id} = req.params;    

    res.json({
        msg: "Put API - controlador",
        id
    })
  }

  const usersPatch = (req, res = response) => {
    res.json({
        msg: "Patch API - controlador"
    })
  }

const usersDelete = (req, res = response) => {
    res.json({
        msg: "delete API - controlador"
    })
  }


  module.exports = {
      usersGet, usersPost, usersPut, usersPatch, usersDelete
  }