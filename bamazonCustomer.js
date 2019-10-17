//Author: George Pap
let mysql = require("mysql");
let inquirer = require("inquirer");
let Table = require("cli-table");

//Connect to mysql database
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "secret",
  database: "bamazon",
  port: 3306
});

//Connecting to the Bamazon DB and test if the connection works
connection.connect(function(err) {
  if (err) throw err;
  console.log("connection successful");
  headerDisplay();
});

//display a Header row
let headerDisplay = function() {
  connection.query("SELECT * FROM products", function(err, res) {
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

let shop = function() {
  inquirer
    .prompt({
      name: "productToPurchase",
      type: "input",
      message:
        "Please Select the Product Id of the item that you would like to buy.!"
    })
    .then(function(answer1) {
      let choice = answer1.productToPurchase;
      //connect to db
      connection.query(
        "SELCT * FROM products WHERE item_id=?",
        selection,
        function(err, res) {
          if (err) throw err;
          //This gives a error if the item selected doesnt exist
          if (res.length === 0) {
            console.log(
              "That item does not exsist.  Please choice one from the list."
            );

            //call
            shop();
          } else {
            //use inquirer to get our quantity
            inquirer
              .prompt({
                name: "quantity",
                type: "input",
                message: "How many units would you like to buy.?"
              })
              .then(function(answer2) {
                let quantity = answer2.stock_quantity;
                if (quantity > res[0].stock_quantity) {
                  console.log(
                    "We are sorry, we only have " +
                      res[0].stock_quantity +
                      "items in stock"
                  );

                  shop();
                } else {
                  //outputs the item selected
                  console.log("");
                  console.log(res[0].product_name + "Purchased");
                  console.log(quantity + " qty @ $ " + res[0].price);

                  //This updates the quantity in the db
                  let newQuantity = res[0].stock_quantity - quantity;
                  connection.query(
                    "UPDATE products SET stock_quantity = " +
                      newQuantity +
                      " WHERE id = " +
                      res[0].item_id,
                    function(err, resUpdate) {
                      if (err) throw err;
                      console.log("");
                      console.log("Your Order has been submitted.");
                      console.log("Thank you for buying from us.!");
                      console.log("");
                      connection.end();
                    }
                  );
                }
              });
          }
        }
      );
    });
};

headerDisplay();
