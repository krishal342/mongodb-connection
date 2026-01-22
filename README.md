Backend program to connect mongodb in node.js system using mongoose.

# dependencies
- "dotenv": "^17.2.3",
- "express": "^5.2.1",
- "mongoose": "^9.1.4"

# .env variables
- PORT
- MONGODB_URL

# routes
-/users -> post request to create user -> take 'name' and 'email'
-/users -> get request to get all users
-/user/:id -> get request to get user by id