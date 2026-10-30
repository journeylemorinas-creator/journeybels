-- Project 2: Campus Cafe Sales Database (MySQL)
-- Sample schema and data. Adjust names to match your own version of the project.
CREATE DATABASE IF NOT EXISTS campus_cafe CHARACTER SET utf8mb4;
USE campus_cafe;

CREATE TABLE categories (
  id   INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(60) NOT NULL UNIQUE
);

CREATE TABLE products (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  category_id  INT NOT NULL,
  name         VARCHAR(100) NOT NULL,
  price        DECIMAL(8,2) NOT NULL CHECK (price >= 0),
  stock        INT NOT NULL DEFAULT 0 CHECK (stock >= 0),
  reorder_level INT NOT NULL DEFAULT 10,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE sales (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  sale_date DATE NOT NULL,
  total     DECIMAL(10,2) NOT NULL DEFAULT 0
);

CREATE TABLE sale_items (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  sale_id    INT NOT NULL,
  product_id INT NOT NULL,
  quantity   INT NOT NULL CHECK (quantity > 0),
  unit_price DECIMAL(8,2) NOT NULL,
  FOREIGN KEY (sale_id)    REFERENCES sales(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Sample data
INSERT INTO categories (name) VALUES ('Coffee'), ('Snacks'), ('Cold drinks');
INSERT INTO products (category_id, name, price, stock, reorder_level) VALUES
 (1, 'Americano', 60.00, 40, 10),
 (1, 'Cafe Latte', 85.00, 8, 10),
 (2, 'Cheese Sandwich', 70.00, 25, 10),
 (3, 'Iced Tea', 45.00, 5, 10);
INSERT INTO sales (sale_date, total) VALUES ('2026-10-12', 280.00), ('2026-10-13', 200.00);
INSERT INTO sale_items (sale_id, product_id, quantity, unit_price) VALUES
 (1, 1, 2, 60.00), (1, 3, 1, 70.00), (1, 4, 2, 45.00),
 (2, 2, 1, 85.00), (2, 3, 1, 70.00), (2, 4, 1, 45.00) ;

-- Daily sales
SELECT s.sale_date, SUM(si.quantity * si.unit_price) AS daily_total
FROM sales s JOIN sale_items si ON si.sale_id = s.id
GROUP BY s.sale_date ORDER BY s.sale_date;

-- Best sellers
SELECT p.name, SUM(si.quantity) AS units_sold
FROM sale_items si JOIN products p ON p.id = si.product_id
GROUP BY p.id ORDER BY units_sold DESC LIMIT 5;

-- Low stock
SELECT name, stock, reorder_level FROM products WHERE stock <= reorder_level;
