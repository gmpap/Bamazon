CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (item_id int(11) AUTO_INCREMENT, product_name varchar(80) NOT NULL, department_name varchar(50) NOT NULL, price decimal(10,2) NOT NULL, stock_quantity int(11) NOT NULL, PRIMARY KEY(item_id) );
describe products; 
select * from products; 
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Lodge 3.5 3.5 inch skillet", "Home and Kitchen", 4.99, 47);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Presto Belgian Waffle Maker", "Home and Kitchen", 26.49, 29);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Lodge 3.5 3.5 inch skillet", "Home and Kitchen", 37.99, 32);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Enameled Cast Iron Dutch Oven", "Toys, Kids & Baby", 39.99, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Monopoly - The Classic Edition", "Toys, Kids & Baby", 26.49, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Gold Heart Locket Necklace", "Clothing, Shoes & Jewelry", 63.26, 17);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Scarab Cuff Links", "Clothing, Shoes & Jewelry", 225.00, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Vita Coco Coconut Water", "Beauty, Health & Grocery", 225.00, 3116);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Canon MG2920 Wireless Printer", "Electronics & Computers", 49.95, 47);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Fitbit Wireless Wristband", "Electronics & Computers", 125.89, 24274);

select * from products;