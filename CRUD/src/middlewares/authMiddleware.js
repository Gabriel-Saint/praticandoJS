const express = require('express');

const autenticacaoMiddleware = (req, res, next) => {
    if (!req.session.user) {
     
      return res.redirect('/login');
    }
    
    next();
  };
  
  module.exports = autenticacaoMiddleware;


/*
module.exports = (req, res, next) => {
    if (!req.session.usuario) {
      // Se o usuário não estiver autenticado, redirecione-o para a página de login
      return res.redirect('/login');
    }
    // Se o usuário estiver autenticado, permita o acesso à rota
    next();
  };
  */