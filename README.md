Backend program to connect mongodb in node.js system using mongoose.

# dependencies
- "dotenv": "17.2.3",
- "express": "5.2.1",
- "mongoose": "9.1.4"

# .env variables
- PORT
- CONNECTION_STRING
- DATABASE_NAME

# students routes
- /students -> POST request to create student -> take 'name', 'email', 'address'
- /students -> GET request to get all students
- /students/:id -> GET request to get student by id
- /students/:id -> PUT request to update student by id -> take 'name' or 'email' or 'address'
- /students/:id -> DELETE request to delete student by id

# courses routes
- /courses -> POST request to create course -> take 'title', 'description', 'creditHours'
- /courses -> GET request to get all courses
- /courses/:id -> GET request to get course by id
- /courses/:id -> PUT request to update course by id -> take 'title' or 'description' or 'creditHours'
- /courses/:id -> DELETE request to delete course by id

# enrollement routes
- /enrollments -> POST request to create enrollment -> take 'student' studentId and 'course' courseId
- /enrollments -> GET request to get all enrollment
- /enrollments:id -> GET request to get enrollment by id
- /ebrikknebts:id -> DELETE request to delete enrollment by id