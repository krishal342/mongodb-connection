Backend program to connect mongodb in node.js system using mongoose.

# dependencies
- "dotenv": "^17.2.3",
- "express": "^5.2.1",
- "mongoose": "^9.1.4"

# .env variables
- PORT
- MONGODB_URL

# routes
- /users -> POST request to create user -> take 'name' and 'email'
- /users -> GET request to get all users
- /users/:id -> GET request to get user by id
- /users/:id -> PUT request to update user by id
- /users/:id -> DELETE request to delete user by id