const express = require("express")
const server = express()

//pegar db
const db = require("./database/db")

//configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body na aplicação
server.use(express.urlencoded({extended: true}))

//utilizando template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true 
})
//configurar caminhos da minha aplicação

//req = requisição
//res = resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    //Pegar dados pela url req.query
    //console.log(req.query)
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) =>{
    //pegar dados do formulário
    //console.log(req.body)

    //inserir dados no banco

    const query = `
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES (?, ?, ?, ?, ?, ?, ?);
        `
        const values = [
            req.body.image,
            req.body.name,
            req.body.address,
            req.body.address2,
            req.body.state,
            req.body.city,
            req.body.items
        ]

        function afterInsertData(err) {

            if (err) {
                console.log(err)
                return res.send("Erro no cadastro")
            }

            console.log("Cadastrado com sucesso")
            return res.render("create-point.html" , {saved: true})
            console.log(this)
        }

        db.run( query, values, afterInsertData)
    
        
})

server.get("/search", (req, res) => {

    const search = req.query.search

    if (search == ""){
        return res.render("search-results.html", {total: 0})
    }else{
        db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function( err, rows){
            if (err) {
                return console.log(err)
            }
            const total = rows.length
            return res.render("search-results.html", {places: rows, total})
        })
    }

   
    
})


//ligar servidor
server.listen(3000)