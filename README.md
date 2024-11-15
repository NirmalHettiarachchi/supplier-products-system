# Supplier Products System

A simple supplier products management system built with **Laravel** for the backend and **React.js** for the frontend. This project allows you to manage suppliers and their associated products with full CRUD operations.

## Prerequisites

Ensure you have the following installed on your system:

- **PHP**
- **Composer**
- **Node.js** and **npm**
- **MySQL**

---

## Getting Started

Follow these steps to set up the project locally.

---

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/NirmalHettiarachchi/supplier-products-system.git
   ```

2. **Navigate to the Backend Directory**

   ```bash
   cd supplier-products-system-backend
   ```

3. **Install Dependencies**

   Run the following command to install PHP dependencies:

   ```bash
   composer install
   ```

4. **Set Up Environment Variables**

   Create a `.env` file in the root of the backend directory. Update the following database configurations:

   ```ini
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_database_user
   DB_PASSWORD=your_database_password
   ```

5. **Run Database Migrations**

   Execute the migrations to set up the database schema:

   ```bash
   php artisan migrate
   ```

6. **Start the Laravel Server**

   Launch the development server:

   ```bash
   php artisan serve
   ```

   The backend server will be available at `http://127.0.0.1:8000`.

---

### Frontend Setup

1. **Navigate to the Frontend Directory**

   ```bash
   cd supplier-products-system-frontend
   ```

2. **Install Dependencies**

   Install the necessary JavaScript dependencies:

   ```bash
   npm install
   ```

3. **Start the React Development Server**

   Run the following command to start the development server:

   ```bash
   npm start
   ```

   By default, the frontend application will run on `http://localhost:3000`.

---

## Accessing the Application

1. Ensure both the **Laravel backend** and **React frontend** are running.
2. Open your browser and visit `http://localhost:3000` to interact with the application.

---
