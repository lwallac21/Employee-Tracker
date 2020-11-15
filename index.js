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
            "Add Department",
            "View Departments",
            "Add role",
            "View Roles"
        ]
    }]).then(answers => {
        switch (answers.start) {
            case "Update Employee":
                whatEmployee("employee")
                break
            case "Add Employee" :
                addEmp("employee")
            break
            case "View Employees":
                view("employee")
            break
            case "Delete Employee":
                deleteEmployee("employee")
            break
            case "Add Department":
                addDepartment("department")
            break
            case "View Departments":
                view("department")
            break
            case "Add role":
                addRole("roles")
            break
            case "View Roles":
            view("roles")
            break
            default:
                break

        }
    })
}


function whatEmployee(tableName){
    
    connection.query("SELECT * FROM employee", (err, res) => {
        if (err) throw (err)
        console.table(res)
        const empNames = res.map(employee => `${employee.first_name} ${employee.last_name}`)
        inquirer.prompt([{
            name: "employee",
            type: "list",
            message: "Which Employee?",
            choices: empNames
        }]).then(answers => {
            console.log(answers)
        const foundEmp = res.find(employee => `${employee.first_name} ${employee.last_name}`=== answers.employee)
        console.log(foundEmp)


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
        console.table(answers)

        Object.values(answers).forEach((answer, i) => {
            console.log(answer)
            let objArr = Object.keys(answers)
            let newObj = { [objArr[i]]: answer }
            newArr.push(newObj)
        })


        console.table(newArr)
        console.log("105" + res)
        connection.query(`UPDATE ${table} SET ? WHERE ?`, newArr)
        whatToDo()
    })
};

function view(tableA, tableB) {
    connection.query(`SELECT * FROM ${tableA}`, (err, res) => {
        // if (err) throw (err)
        console.table(res)
        whatToDo()
    })
}



function employeeInfo(table) {
    const EmpRole = []
    const EmpManager = []
    connection.query("SELECT * FROM employee;", (err, res) => {
        if (err) throw err;
        console.table(res)
    })
    inquirer.prompt([{
        name:"firstName",
        type: "input",
        message:"What is the employee's first name?",
    },
    {
        name:"lastName",
        type: "input",
        message:"What is the employee's last name?"        
    }, {
        name:"role",
    type: "list",
    message:"What is the employee's role?"
    },
    {
        name:"manager",
        type: "list",
        message:"Who is the employee's manager?"
    }
]).then(answers => {
    console.log(answers)
    connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) 
    VALUES(${answers.firstName}, ${answers.lastName}, ${answers.role}, ${answers.manager}`)
})
}
    



// function addEmp(tableName) {
//     employeeInfo().then(answers =>{
//         connection.query(`INSERT INTO ${tableName} ()`)
//     }
//         )
        
// }

whatToDo()
// employeeInfo()
/* function addEmp(id, table) {
    connection.query(`SELECT * FROM ${table}`, function(err, res =>
        res.find(employee => empoyee.id === id)) )
}
getEmp(answers.id, "employee")
answers.id

Update a role:
Ask them if they want to at all.
Ask What they want to update.
    If department = "department"

    If role = "role"

    If employee = "employee"

^   Take input from table to ask questions about what in a row needs updating.
        Write function for each of these cases

    Update mysql query.
*/