# week-2-Mern-Stack-Assignment

✅ Overview
✅ Setup instructions
✅ Project structure
✅ Environment variables
✅ Authentication
✅ API documentation
✅ Examples of requests and responses
✅ Testing tips
✅ Final README.md File:

# 🛠️ Express.js Product API

This is a RESTful API built using **Node.js** and **Express.js** that allows you to manage a collection of products.
It supports full CRUD operations, authentication, custom middleware, validation, error handling, filtering, pagination, and product statistics.
This project was built as part of Week 2's assignment to demonstrate how to structure a scalable Express server.

📦 Features

- RESTful API for product management
- Middleware for logging, authentication, validation, and error handling
- Filtering by category
- Pagination support
- Search products by name
- Product statistics (count by category)
- Clean and modular folder structure
- 
## 📁 Project Structure
project-folder/
├── server.js # Main server file
├── routes/
│ └── product.js # All product routes and logic in one file
├── middleware/
│ └── index.js # Combined logger, auth, validation, and error handler
├── utils/
│ └── ApiError.js # Custom error class
├── .env.example # Sample environment variables
└── README.md # You're reading it!

## ⚙️ Getting Started
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create Environment File
Create a .env file in the root directory based on .env.example:

ini
Copy
Edit
PORT=3000
API_KEY=your-secret-api-key
This API_KEY will be used to protect certain endpoints.

4. Start the Server
bash
Copy
Edit
node server.js
Server will start at:
📍 http://localhost:3000

🔐 Authentication
To create, update, or delete a product, include an API key in your request header:

vbnet
Copy
Edit
x-api-key: your-secret-api-key
If this header is missing or incorrect, you'll receive a 401 Unauthorized error.

🧪 Testing the API
You can test this API using:
Postman
Insomnia
curl from the terminal

🔄 API Endpoints
GET /api/products
Retrieve all products.

✅ Optional Query Parameters:

category → Filter by product category
page & limit → Paginate results

🧪 Example:

bash
Copy
Edit
GET /api/products?category=electronics&page=1&limit=5
GET /api/products/:id
Retrieve a specific product by its unique ID.

🧪 Example:

bash
Copy
Edit
GET /api/products/7fc1d289-1e2c-4561-a2bc-bb50e1b98b0f
POST /api/products (Protected)
Create a new product.
Requires a valid API key in headers.

🧾 Request Body:

json
Copy
Edit
{
  "name": "iPhone 15",
  "description": "Latest Apple phone",
  "price": 999.99,
  "category": "electronics",
  "inStock": true
}
PUT /api/products/:id (Protected)
Update a specific product.

🧾 Request Body:

json
Copy
Edit
{
  "price": 899.99,
  "inStock": false
}
DELETE /api/products/:id (Protected)
Delete a product by ID.

GET /api/products/search/name?query=phone
Search products by their name (case-insensitive).

🧪 Example:

pgsql
Copy
Edit
GET /api/products/search/name?query=iphone
GET /api/products/stats/category
Get count of products grouped by category.

🧪 Example Response:

json
Copy
Edit
{
  "electronics": 10,
  "clothing": 4,
  "furniture": 2
}
🧠 Notes
This API stores products in-memory, meaning data is lost on server restart.
UUIDs are generated for each product using the uuid library.
All product fields are validated before creation or updates.

📞 Support
If you have any questions, feel free to contact me via GitHub or email.

✅ Author
Lynn Violet Wanjiru Kimotho

