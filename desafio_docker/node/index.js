const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const randomName = (Math.random() + 1).toString(36).substring(7);
const sqlInsert = `INSERT INTO people(name) values('`+randomName+`')`
connection.query(sqlInsert)

var htmlNames = '';

connection.query("SELECT name FROM people", function (err, result, fields) {
    if (err) throw err;
    Object.keys(result).forEach(function(key) {
        htmlNames +='<h4>'+result[key].name+'</h4>';
    });
});

connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1>' + htmlNames)
})

app.listen(port)