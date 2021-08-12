module.exports = {
    userCreateReq: {
        "firstName": "Test",
        "lastName": "One",
        "email": "test@test.com",
        "password": "test"
    },
    loginRequest: {
        "email": "test@test.com",
        "password": "test"
    },
    wrongLoginRequest: {
        "email": "test@test.com",
        "password": "wrong"
    },
    tasksReq: [
        {
            "name": "test task1",
            "description": "test task1 description"
        },
        {
            "name": "test task2",
            "description": "test task2 description"
        },
        {
            "name": "test task3",
            "description": "test task3 description"
        },
        {
            "name": "test task4",
            "description": "test task4 description"
        }
    ]
}