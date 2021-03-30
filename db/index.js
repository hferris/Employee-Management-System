const mysql = require('mysql');
const inquirer = require("inquirer");
​
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'work_DB',
});

// const afterConnection = () => {
//   connection.query('SELECT * FROM products', (err, res) => {
//     if (err) throw err;
//     console.log(res);
//     connection.end();
//   });
// };
// ​
// connection.connect((err) => {
//   if (err) throw err;
//   console.log(`connected as id ${connection.threadId}`);
//   afterConnection();
// });
​
  inquirer
  .prompt([{
  
    type: "input",
    name: "firstName",
    message: "Insert employees first name",
  },
  {
    type: "input",
    name: "lastName",
    message: "Insert employees last name",
  },{
    type: "list",
    name: "title",
    message: "Insert employees role",
    
  }])
  
  .then(function(response){
    switch(response.whatToDo){
      case "View All Flavors":
        viewFlavors();
        break;
      case "Add A Flavor":
        addFlavor();
        break;
      default:
        connection.end();
    }
  })

​

