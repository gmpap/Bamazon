//Author: George Pap
let mysql = require("mysql");
let inqirer = require("inqirer");

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
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("    Welcome to Bamazon   ");
    console.log("----------------------------");
  });
  //Using cli-table to display the content (from npm cli-table)
  var table = new Table({
    head: ["TH 1 label", "TH 2 label"],
    colWidths: [100, 200]
  });
};
