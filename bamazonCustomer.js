//Author: George Pap
let mysql = require("mysql");
let inquirer = require("inquirer");

//Connect to my database
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Bamazon"
  //port: 3306
});

//Connecting to the Bamazon DB
connection.connect();

//display a Header row
let headerDisplay = function() {
  connection.query("SELECT * FROM products", 
   {
    if (err) throw err;
    console.log("    Welcome to Bamazon   ");
    console.log("----------------------------");
  });

  //Using cli-table to display the content (from npm cli-table)
  let table = new Table({
    head: ["item_id", "product_name", "price"],
    colWidths: [10, 50, 50, 10]
  });
  for (let i = 0; i < res.length; i++) {
    table.push([res[i].item_id, res[i].product_name, res[i].price]);
  }
  //console logs the table for viewing
  console.log(table.toString());
};

headerDisplay();
