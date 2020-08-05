const { Database } = require("sqlite3")

// importar dependencias do sqlite
const sqlite3 = require("sqlite3").verbose()

// iniciar objeto de banco de dados

const db = new sqlite3.Database("./src/database/database.db")
module.exports = db

//utilizar o objeto de banco de dados para operações


    // db.serialize(() =>{
    //     //criar tabela com comandos sql
        
    //     // db.run(`
    //     //     CREATE TABLE IF NOT EXISTS places (
    //     //         id          INTEGER PRIMARY KEY AUTOINCREMENT,
    //     //         image       TEXT,
    //     //         name        TEXT,
    //     //         address     TEXT,
    //     //         address2    TEXT,
    //     //         state       TEXT,
    //     //         city        TEXT,
    //     //         items       TEXT
    //     //     );
    //     // `)
    //     // //inserir dados

    //     // const query = `
    //     //     INSERT INTO places (
    //     //         image,
    //     //         name,
    //     //         address,
    //     //         address2,
    //     //         state,
    //     //         city,
    //     //         items
    //     //     ) VALUES (?, ?, ?, ?, ?, ?, ?);
    //     // `
    //     // const values = [
    //     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    //     //     "Papersider",
    //     //     "Guilherme Gemballa, Jardim América",
    //     //     "N° 260",
    //     //     "Santa Catarina",
    //     //     "Rio do Sul",
    //     //     "Resíduos eletrônicos, Lâmpadas"
    //     // ]

    //     // function afterInsertData(err) {

    //     //     if (err) {
    //     //         return console.log(err)
    //     //     }

    //     //     console.log("Cadastrado com sucesso")
    //     //     console.log(this)
    //     // }

    //     // db.run( query, values, afterInsertData )


    //     //consultar dados da tabela
        

    //     //deletar dados da tabela

    //     // db.run(`DELETE FROM places WHERE id = ? `, [4] , function(err){
    //     //     if (err) {
    //     //         return console.log(err)
    //     //     }

    //     //     console.log("Registro deletado com sucesso")
    //     // })


    //     // db.all(`SELECT name FROM places`, function( err, rows){
    //     //     if (err) {
    //     //         return console.log(err)
    //     //     }

    //     //     console.log("Aqui estão seus registros: ")
    //     //     console.log(rows)
    //     // })

    // }) 