import http from 'node:http'
import { URL } from 'node:url'

const porta = 3000

const produtos = [
    {id: 1, nome: "Sabonete"},
    {id: 2, nome: "Volante LogiTech G923"},
    {id: 3, nome: "Sabão em Pó"},
    {id: 4, nome: "Pelúcia do Sonic"},
]

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json; charset=utf-8')

    const url = new URL(requisicao.url, `http://${requisicao.headers.host}`);

    if (req.method == "GET" && req.url == "/contato") {
        return res.end(JSON.stringify({data:
            {numero_telefone: "67 99999 9999",
                endereco: "Rua da Alegria, 99, Centro"}}));
    }

    else if (requisicao.method == 'GET' && urlObj.pathname == '/tarefa/busca') {
        const titulo = urlObj.searchParams.get('titulo');
    }
    else if (requisicao.method == 'POST' && requisicao.url == '/tarefa') {
        let body = ''
    }
    else {
        res.statusCode = 404
        
        return res.end(JSON.stringify({data: {"status": "Sua requisição não deu certo"}}));
    }


    if (req.method == "GET" && req.url == "/produtos") {
        return res.end(JSON.stringify(produtos));
    }

     else {
        res.statusCode = 404
        
        return res.end(JSON.stringify({data: {"status": "Sua requisição não deu certo"}}));
    }


    if (req.method == "GET" && req.url == '/status') {
        return res.end('application/json; charset=utf-8; {status: ok}`');
    } 
    else {
        res.statusCode = 404
        
        return res.end(JSON.stringify({data: {"status": "Sua requisição não deu certo"}}));
    }



    res.end(JSON.stringify({data: "Página Inicial"}))
})

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
});