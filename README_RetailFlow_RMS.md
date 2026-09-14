# 🛒 RetailFlow RMS

> **Modern Retail Management & Point-of-Sale System**  
> A practical retail management system built to streamline sales, inventory, purchasing, suppliers, invoices, and end-of-day operations in one place.

---

## ✨ Overview

**RetailFlow RMS** is a web-based Retail Management System designed around the real workflow of a retail store.

The system combines a fast **POS checkout experience** with inventory management, purchasing, supplier management, invoice tracking, user roles, and daily cash closing.

It is inspired by the workflow patterns used in professional retail management software, while being developed as an independent project with its own implementation and interface.

---

## 🚀 Key Features

### 🧾 Point of Sale (POS)

- Fast product search
- Barcode scanning
- QR/Barcode scanner support
- Scan the same product multiple times to increase quantity
- Shopping cart management
- Quantity adjustment
- Invoice discounts
- Cash / Card / Other payment methods
- Paid amount and change calculation
- Complete sale in one step
- Automatic receipt page after checkout
- Receipt reprinting

### 📦 Inventory Management

- Product management
- Arabic & English product names
- SKU management
- Barcode management
- Purchase and selling prices
- Current stock tracking
- Minimum stock levels
- Stock In / Stock Out
- Stock movement records
- Low-stock monitoring

### 🚚 Suppliers & Purchasing

- Supplier management
- Supplier balances
- Purchase invoices
- Multiple products per purchase
- Purchase cost tracking
- Automatic stock updates after receiving purchases

### 📊 Sales & Invoices

- Invoice history
- Invoice number tracking
- Invoice details
- Receipt reprinting
- Sales records
- Payment method tracking

### 💰 End-of-Day Closing

- Open cash session
- Opening cash balance
- Daily sales summary
- Cash sales
- Card sales
- Other payments
- Expected cash
- Actual closing cash
- Cash difference
- Close the session at the end of the day

### 👥 User Roles

The system supports role-based access for:

| Role | Purpose |
|---|---|
| **Admin** | Full system management |
| **Cashier** | POS and sales operations |
| **Warehouse** | Products, stock and purchasing |

### 🌐 Bilingual Interface

The interface supports:

- 🇪🇬 Arabic
- 🇬🇧 English

---

## 🖥️ System Workflow

```text
                    ┌─────────────────────┐
                    │      Dashboard      │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
        ┌─────────┐       ┌──────────┐      ┌──────────┐
        │   POS   │       │ Inventory│      │ Suppliers│
        └────┬────┘       └────┬─────┘      └────┬─────┘
             │                 │                 │
             ▼                 ▼                 ▼
        ┌─────────┐       ┌──────────┐      ┌──────────┐
        │ Invoice │       │  Stock   │      │ Purchases│
        └────┬────┘       └──────────┘      └──────────┘
             │
             ▼
        ┌─────────────┐
        │   Receipt   │
        │    Print    │
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │ Day Closing │
        └─────────────┘
```

---

## 📷 Barcode / QR Scanner

RetailFlow is designed to work with common USB barcode scanners.

Most USB scanners operate like a keyboard:

```text
Scan Barcode
     ↓
Barcode Number
     ↓
Find Product
     ↓
Add to Cart
     ↓
Scan Again → Quantity +1
```

Example:

```text
6221234567890
       ↓
Product Found
       ↓
Added to Invoice
```

This makes checkout faster and reduces manual product entry.

---

## 🛠️ Tech Stack

### Backend
- PHP
- PDO
- MySQL

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap

### Database
- MySQL
- Relational database design
- Transactions for sales operations
- Stock movement tracking

### Development Environment
- Laragon / XAMPP
- VS Code
- Modern web browser

---

## 📁 Project Structure

```text
RetailFlow_RMS_V3/
│
├── config/
│   ├── config.php
│   ├── auth.php
│   └── .htaccess
│
├── public/
│   ├── assets/
│   │   ├── app.css
│   │   └── pos.js
│   │
│   ├── api/
│   │   └── sale.php
│   │
│   ├── partials/
│   │   ├── header.php
│   │   └── footer.php
│   │
│   ├── index.php
│   ├── login.php
│   ├── pos.php
│   ├── products.php
│   ├── suppliers.php
│   ├── purchases.php
│   ├── invoices.php
│   ├── stock.php
│   ├── closing.php
│   ├── receipt.php
│   └── install.php
│
├── database.sql
└── README.md
```

---

## ⚙️ Installation

### 1. Clone or download the project

```bash
git clone https://github.com/YOUR-USERNAME/RetailFlow-RMS.git
```

Or download the repository as ZIP.

### 2. Move the project

For Laragon:

```text
C:\laragon\www\RetailFlow_RMS_V3
```

For XAMPP:

```text
C:\xampp\htdocs\RetailFlow_RMS_V3
```

### 3. Start the server

Start:

```text
Apache
MySQL
```

### 4. Create the database

Open phpMyAdmin and create:

```text
retailflow
```

Then import:

```text
database.sql
```

### 5. Check database configuration

Open:

```text
config/config.php
```

Default configuration:

```php
DB_HOST = 127.0.0.1
DB_NAME = retailflow
DB_USER = root
DB_PASS = 
```

If your MySQL installation uses a password, update `DB_PASS`.

### 6. Run the installer

Open:

```text
http://localhost/RetailFlow_RMS_V3/public/install.php
```

### 7. Login

Default administrator:

```text
Username: admin
Password: admin123
```

> ⚠️ Change the default password before using the system in a real environment.

---

## 🔐 Security Notes

This project includes basic application security features such as:

- Password hashing
- Session-based authentication
- CSRF protection
- Prepared SQL statements through PDO
- Role-based access
- Transaction-based sale processing

For real production deployment, additional security hardening, HTTPS, backups, audit logs, stronger password policies, and local tax/e-invoicing requirements should be implemented.

---

## 🧠 Main Database Entities

```text
Users
  │
  ├── Cash Sessions
  │
  └── Invoices
          │
          └── Invoice Items
                  │
                  └── Products
                         │
                         └── Stock Movements

Suppliers
    │
    └── Purchases
            │
            └── Purchase Items
                    │
                    └── Products
```

---

## 🎯 Project Goals

RetailFlow RMS was created to demonstrate how a practical retail application can connect:

**Sales + Inventory + Purchasing + Suppliers + Invoices + Cash Closing**

instead of treating each function as a separate application.

The project focuses on:

- Real-world business workflows
- Database-driven applications
- Transaction-safe sales
- Inventory synchronization
- Role-based access
- Fast POS operations
- Practical PHP/MySQL development

---

## 📌 Project Status

**Version:** `3.0`

**Status:** 🚧 Active Development / Portfolio Project

Current focus:

- POS workflow
- Barcode / QR scanning
- Inventory
- Purchasing
- Suppliers
- Invoices
- End-of-day closing
- Arabic / English interface

---

## 🔮 Future Improvements

Planned improvements can include:

- Product returns
- Advanced sales reports
- Profit reports
- Customer accounts
- Customer loyalty
- Expense management
- Supplier payments
- Stock transfer between branches
- Multi-branch support
- User activity/audit logs
- Dashboard charts
- Thermal printer integration
- Automatic database backups
- Advanced barcode label printing

---

## 👨‍💻 Developer

**Anas Tarek**

Junior Web & Software Developer  
PHP • MySQL • JavaScript • HTML • CSS

GitHub: **[@anastarek340](https://github.com/anastarek340)**

---

## ⭐ Why RetailFlow RMS?

RetailFlow RMS is more than a basic CRUD project.

It demonstrates how a software application can model a real retail business process:

```text
Product
   ↓
Inventory
   ↓
Purchase
   ↓
Stock
   ↓
POS Sale
   ↓
Invoice
   ↓
Receipt
   ↓
Daily Closing
```

That workflow is the core idea behind the project.

---

## 📄 License

This project is intended primarily as a learning and portfolio project.

Add an appropriate open-source license if you plan to distribute or modify the project publicly.
