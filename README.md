Backend program to connect mongodb in node.js system using mongoose.

# dependencies
- "dotenv": "17.2.3",
- "express": "5.2.1",
- "mongoose": "9.1.4"

# .env variables
- PORT
- CONNECTION_STRING
- DATABASE_NAME

# routes
- /students -> POST request to create user -> take 'name', 'email', 'address'
- /students -> GET request to get all students
- /students/:id -> GET request to get user by id
- /students/:id -> PUT request to update user by id -> take 'name' or 'email' or 'address'
- /students/:id -> DELETE request to delete user by id