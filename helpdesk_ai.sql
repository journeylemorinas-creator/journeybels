-- Project 1: AI-Assisted IT Help Desk and Service Ticket System (MySQL)
-- Sample schema and data. Adjust names to match your running application.
CREATE DATABASE IF NOT EXISTS helpdesk_ai CHARACTER SET utf8mb4;
USE helpdesk_ai;

CREATE TABLE users (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  full_name     VARCHAR(100) NOT NULL,
  email         VARCHAR(120) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,             -- never store plain passwords
  role          ENUM('user','technician','admin') NOT NULL DEFAULT 'user',
  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(60) NOT NULL UNIQUE,
  first_steps TEXT NOT NULL                        -- rule-based AI suggestion for the technician
);

CREATE TABLE tickets (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  user_id      INT NOT NULL,
  category_id  INT NULL,                           -- category suggested by the system
  title        VARCHAR(150) NOT NULL,
  description  TEXT NOT NULL,
  priority     ENUM('low','medium','high') NOT NULL DEFAULT 'medium',
  status       ENUM('open','in_progress','resolved','closed') NOT NULL DEFAULT 'open',
  created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id)     REFERENCES users(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE ticket_updates (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  ticket_id     INT NOT NULL,
  technician_id INT NOT NULL,
  note          TEXT NOT NULL,
  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ticket_id)     REFERENCES tickets(id) ON DELETE CASCADE,
  FOREIGN KEY (technician_id) REFERENCES users(id)
);

-- Sample data
INSERT INTO categories (name, first_steps) VALUES
 ('Network',  'Check Wi-Fi is on, run ipconfig, ping the gateway, then 8.8.8.8, then nslookup.'),
 ('Hardware', 'Check power and cables, reseat connections, test with another device.'),
 ('Software', 'Restart the app, check for updates, reinstall if the problem continues.'),
 ('Account',  'Verify the user identity, check lockout status, then reset the password.'),
 ('Printer',  'Check the connection, clear the print queue, send a test page.');

INSERT INTO users (full_name, email, password_hash, role) VALUES
 ('Sample User', 'user@example.com', '$2b$10$REPLACE_WITH_A_REAL_BCRYPT_HASH', 'user'),
 ('Sample Technician', 'tech@example.com', '$2b$10$REPLACE_WITH_A_REAL_BCRYPT_HASH', 'technician');

INSERT INTO tickets (user_id, category_id, title, description, priority) VALUES
 (1, 1, 'Cannot connect to Wi-Fi', 'Laptop shows connected but websites do not open.', 'high'),
 (1, 5, 'Printer not printing', 'Print jobs stay in the queue.', 'medium');

-- Useful queries
SELECT c.name AS category, COUNT(*) AS tickets
FROM tickets t JOIN categories c ON c.id = t.category_id
GROUP BY c.id ORDER BY tickets DESC;

SELECT status, COUNT(*) AS total FROM tickets GROUP BY status;
