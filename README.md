# User Login Application

Follow the following steps:
1. Create an express server running on port 8000
2. Create a users table in DB (MySQL/MongoDB). Users table should have 2
columns/properties i.e. email and password
3. Build 4 APIs
a. POST API for creating a new user
b. DELETE API for deleting an existing user
c. GET API to get all users (bonus: implement pagination)
d. GET API to get one user with all his tasks
e. Both the APIs should be accessible only if a valid token (random string) is
present in the HTTP header
4. Push the code in github repository
5. IMP! Write test cases using jest/mocha/chai for the same.
6. Share the link and DB dump
Extra info:
1. One user can work on many tasks
2. User login functionality with jwt authentication and token should be used while accessing
subsequent apis
