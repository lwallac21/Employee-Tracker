const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: process.env.port || 3306,
    user: "root",
    password: "root",
    database: "seed"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query("SELECT * FROM department", function (err, result, fields) {
        if (err) throw err;
        console.log(result[0].department_name)
    })
});

module.exports = connection