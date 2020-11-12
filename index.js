const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require("console.table")
const server = require("./package.json")
const connection = require("./server")

function whatToDo() {
    inquirer.prompt([{
        name: "start",
        type: "list",
        message: "What to do?",
        choices: [
            "Update Employee",
            "Add Employee",
            "View Employees",
            "Delete Employee",
        ]
    }]).then(answers => {
        switch (answers.start) {
            case "Update Employee":
                whatEmployee("employee")
                break
            default:
                break

        }
    })
}

function whatEmployee(tableName){
    
    connection.query("SELECT * FROM employee", (err, res) => {
        console.log(res)
        const empNames = res.map(employee => `${employee.first_name} ${employee.last_name}`)
        inquirer.prompt([{
            name: "employee",
            type: "list",
            message: "Which Employee would you like to Update?",
            choices: empNames
        }]).then(answers => {
            console.log(answers)
        const foundEmp = res.find(employee => `${employee.first_name} ${employee.last_name}`=== answers.employee)
        console.log("54" + foundEmp)
    
        updateWhat(tableName, foundEmp.id)
        })
    })
}

function updateWhat(tableName, id) {
    inquirer.prompt([{
        name: "updateWhat",
        type: "list",
        message: "What do you want to update?",
        choices: [
            "first_name",
            "last_name",
            "role_id",
            "manager_id"
        ]
    }]).then(answers => {
        updateQuery(tableName, answers, id)
        }
    )
}

function updateQuery(tableName, thingToUpdate, id) {
    let updatedThings = []
    Object.values(thingToUpdate).forEach(thing => {
        const newInquirerObject = {
            name: thing,
            type: "input",
            message: `Update ${thing}`
        }
        updatedThings.push(newInquirerObject)
    })
    inquirer.prompt(updatedThings).then(answers => {
        update(tableName, answers, id)

    })
}

function update(table, answers, id) {
    answers.id = id
    connection.query(`SELECT * FROM ${table}`, function (err, res) {
        if (err) throw (err)
        newArr = []
        console.log(answers)
        // Object.keys(res).forEach(key => {
        //     if (key != "id"){
        //     let newObj = {[key]: null}
        //     newArr.push(newObj)}
        // })
        Object.values(answers).forEach((answer, i) => {
            console.log(answer)
            let objArr = Object.keys(answers)
            let newObj = { [objArr[i]]: answer }
            newArr.push(newObj)
            // var objKey = Object.keys(newArr[i])
            // newArr[i][objKey[0]] = answer
        })


        console.log("104" + newArr)
        console.log("105" + res)
        connection.query(`UPDATE ${table} SET ? WHERE ?`, newArr)
        whatToDo()
    })
};
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

//  Functions needed.

// 1 js page for the inquirer questions
// 1 js page for the mysql queries using inquirer response data


whatToDo()