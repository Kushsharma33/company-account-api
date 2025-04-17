Company Account Management API
This is a RESTful API built using Node.js, Express, and MongoDB for managing company accounts. The API includes authentication, company account management, and company status updates.

Features
User Authentication: Register and login users.

Company Management: Fetch a list of companies and update their target status.

JWT Authentication: Secure routes with JWT tokens.

Tech Stack
Node.js: JavaScript runtime for backend development.

Express.js: Web framework for building RESTful APIs.

MongoDB: NoSQL database for storing data.

JWT (JSON Web Tokens): For secure user authentication.

bcrypt.js: For hashing user passwords.

Getting Started
1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/company-account-api.git
cd company-account-api
2. Install dependencies
Make sure you have Node.js installed on your system. Then, install the necessary dependencies by running:

bash
Copy code
npm install
3. Set up environment variables
Create a .env file in the root of the project and add the following environment variables:

bash
Copy code
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/companyAccountsDB
JWT_SECRET=your_jwt_secret_key
PORT: The port the server will run on (default is 5000).

MONGO_URI: The MongoDB connection string.

JWT_SECRET: A secret key used for signing JWT tokens.

4. Start MongoDB
If you are using a local MongoDB instance, make sure the MongoDB service is running. You can start MongoDB by running the following command (if MongoDB is installed):

bash
Copy code
net start MongoDB
5. Run the project
Once all dependencies are installed and environment variables are set up, you can start the server by running:

bash
Copy code
node app.js
You should see the following output in the terminal:

pgsql
Copy code
🚀 Server is running on port 5000
6. Testing the API
Once the server is running, you can test the API using tools like Postman or Insomnia.

Available Endpoints:
POST /api/auth/register: Register a new user.

Request body:

json
Copy code
{
  "username": "user1",
  "password": "password123"
}
POST /api/auth/login: Login an existing user and get a JWT token.

Request body:

json
Copy code
{
  "username": "user1",
  "password": "password123"
}
GET /api/companies: Fetch a list of company accounts.

Request headers: Include the JWT token in the Authorization header.

makefile
Copy code
Authorization: Bearer your_jwt_token
POST /api/companies/:id/status: Update the target status of a company.

Request body:

json
Copy code
{
  "status": "Target"
}
File Structure
lua
Copy code
project-root/
├── controllers/
│   ├── authController.js
│   └── companyController.js
├── models/
│   ├── User.js
│   └── Company.js
├── routes/
│   ├── authRoutes.js
│   └── companyRoutes.js
├── config/
│   └── db.js
├── .env
├── app.js
├── package.json
└── README.md
Troubleshooting
MongoDB not starting: If MongoDB is not starting, make sure you have installed MongoDB correctly and that it's running on 127.0.0.1:27017.

JWT Issues: Ensure the JWT_SECRET in the .env file is set and that the client includes the token in the Authorization header when making protected API requests.

License
This project is licensed under the MIT License.

Customize as Needed:
Replace https://github.com/your-username/company-account-api.git with your repository URL.

Modify the environment variables section if your project has other requirements.

