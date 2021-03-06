module.exports = {
    "test": {
        "username": "sbuser",
        "password": "sbpwd",
        "database": "sugarboxdb-test",
        "dialect": "mysql",
        "host": "localhost",
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        },
        "TOKEN_SECRET": 'd9833fb8b3c76ec8b43fdcd126ff101fc47b88bcbc454396ed7146a10f997ef9f0bf2405aa6d6636be51972aa74b6f7db16a29046b490b00bf60e65f2274cede',
    },
    "development": {
        "host": "localhost",
        "username": "sbuser",
        "password": "sbpwd",
        "database": "sugarboxdb",
        "dialect": "mysql",
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        },
        "TOKEN_SECRET": 'd9833fb8b3c76ec8b43fdcd126ff101fc47b88bcbc454396ed7146a10f997ef9f0bf2405aa6d6636be51972aa74b6f7db16a29046b490b00bf60e65f2274cede',
    }
}