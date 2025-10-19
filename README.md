# Mini Merchant Dashboard

 Welcome to Mini Merchant Dashboard!

This project allows merchants to seamlessly manage their product inventory with secure authentication, add, edit, and delete products with React.js, Node.js, and Express.js.



### Application Walkthrough
[![Watch Demo](https://i9.ytimg.com/vi_webp/8e9JpoezU7I/mqdefault.webp?v=68f4b9e8&sqp=CPjx0scG&rs=AOn4CLBHL5zcl5XrYv__4XJYYp_mLXFd3g)](https://youtu.be/8e9JpoezU7I)

*Complete demonstration of authentication, product management, and analytics features*

---

## Backend Setup

### Frameworks and Libraries

- **Express**: Framework for Node.js
- **CORS**: To connect frontend and backend
- **Express.json**: To parse JSON data
- **Bcrypt**: For password security
- **Jsonwebtoken**: JWT for token creation and authentication
- **In-Memory Storage**: JavaScript arrays for data persistence

### Page Setups

#### Files
- **server.js**: Root file

#### Folders
- **controllers**: Route handler functions
- **data**: In-memory data storage (users and products arrays)
- **middleware**: JWT authentication middleware
- **models**: Data access layer functions
- **routes**: Set all routes in one place

---

## Frontend Setup

### Extra Libraries

- **Axios**: To make HTTP requests
- **React Hot Toast**: To show toast notifications
- **Chart.js**: For data visualization
- **React-chartjs-2**: React wrapper for Chart.js

### Folders and Files

#### Folders
- **components**: Reusable UI components (common, dashboard, products, layout)
- **pages**: Set pages for UI (Login, Dashboard)
- **services**: API configuration with Axios
- **hooks**: Custom React hooks (useProducts, useStats)
- **utils**: Helper functions and constants

---

## Technologies Used

- **Tailwind CSS**: For styling
- **JavaScript**: For functionalities
- **React.js**: JavaScript library for building fast and scalable UI
- **Node.js**: Backend runtime environment for JavaScript
- **Express.js**: Backend framework for Node.js
- **In-Memory Storage**: JavaScript arrays (no database)

---

## API Overview

### RESTful APIs HTTP Methods

1. **POST**: For login (verify user identity)
2. **GET**: To display user's products (read)
3. **POST**: To add a product (create)
4. **PUT**: To edit product details (update)
5. **DELETE**: To delete a product (delete)
6. **GET**: To display analytics statistics (read)

---

## Token Usage and Session Management

- **Token Usage**: JSON Web Tokens (JWTs) are used for authentication. Upon successful login, a JWT is generated and sent to the client, which is then stored in local storage.
- **Session Management**: Protected routes are created that require a valid JWT to access. If the user is not authenticated, they are redirected to the login page.

---

## UI Setup

- **Login**: For authentication (email, password)
- **Header**: For navigation - (Dashboard title, user email, logout button)
- **Overview**: Display analytics - (total products, total value, categories, category breakdown)
- **ProductsTable**: To list product details - (table with product data with edit and delete buttons)
- **ProductForm**: To add/edit products - (modal with name, price, category, stock fields)

---

## Data Storage

- **users.js**: In-memory array to store user details (fields: id, email, password)
- **products.js**: In-memory array to store product details (fields: id, name, price, category, stock, ownerId)

---

## How to Use 

1. Clone the git repository.
2. Install backend dependencies by running `npm install` in the backend directory.
3. Start the backend server by running `npm start` in the backend directory.
4. Navigate to the frontend directory in a new terminal by running `cd frontend`.
5. Install frontend dependencies by running `npm install`.
6. Start the frontend server by running `npm start`.

---

## Test Credentials

**Email:** admin@test.com  
**Password:** password123

---

## How to Clone and Work This Project in Your Local Device

1) Create a folder in your device

2) Take terminal and by taking the cloned link enter: `git clone https://github.com/hainweb/mini-merchant-dashboard.git`

3) Now come back after closing that panel and you can see a folder named merchant-dashboard. Enter to that folder.

4) Now type `cd mini-merchant-dashboard` in terminal

5) Now type `cd backend` and enter `npm install`

6) Now come back to the terminal and enter `npm start` (now backend server is running on port 5000)

7) Split and take another terminal and enter `cd frontend`

8) At that area enter `npm install`

9) Then enter `npm start` (now frontend is running on port 3000)

---

## Usage Instructions

- Log in with the test credentials (admin@test.com / password123).
- Once logged in, you will be redirected to the main dashboard.
- On the dashboard, you can see the header component with user email and logout button.
- View overview section with total products, total value, and categories statistics.
- See category breakdown visualization with horizontal bars.
- Add a new product by clicking "Add Product" button.
- Edit existing products by clicking the edit icon.
- Delete products by clicking the delete icon (with confirmation).
- Toast notifications will appear for all actions (success/error messages).
- Click logout to sign out and clear the session.

---

## 🌟 Thank you for checking out my project! 🌟
