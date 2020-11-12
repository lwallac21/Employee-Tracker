const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require("console.table")
const { type } = require("os")
const server = require("./package.json")
const connection = require("./server")


// function viewEmployee(req, res) {
//     connection.query("UPDATE * FROM employee WHERE", function (err, result, fields){
//     if (err) throw err

//     let result = res
//     }

// function whatToDo () {
//     inquirer.prompt([{
//         name: "start",
//         type: "list",
//         message: "What to do?",
//         choices: [
//             "Update Employee",
//             "Add Employee",
//             "View Employees",
//             "Delete Employee",
//         ]
//     }.then(answers => {
        
//     }])
//     )
// }

// function questions() {
    
//     inquirer.prompt([{
//         name: "McEmployee",
//         type: "list",
//         message: "Please select an McEmployee:",
//         choices: [
//             "Ronald McDonald", "Ham Burgler", "Grimace Smith", "Mayor McCheese", "Uncle O'Grimacey"
//         ]
//         .then(answer =>{
            
//         }
//             )
//     }])
// }

/* Functions needed.

1 js page for the inquirer questions
1 js page for the mysql queries using inquirer response data

*/


