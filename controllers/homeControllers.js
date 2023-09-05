exports.paginaInicial = (req, res) => {

    res.send(`<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rotas</title>
    </head>
    <body>
        <h1>Usando express  - routes</h1>
        <form action="/" method="post">
            Nome do cliente: <input type="text" name="input1"><br>
            outro campo: <input type="text" name="input2">
            <button>enviar</button>
    
        </form>
    </body>
    </html>`);
}

exports.usandoPost = (req, res) =>{

    res.send('Nova rota de post');
}