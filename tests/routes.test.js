const request = require('supertest');
const app = require('../app');

const userCreateReq = {
    "firstName": "Test",
    "lastName": "One",
    "email": "test@test.com",
    "password": "test"
};

const loginRequest = {
    "email": userCreateReq.email,
    "password": userCreateReq.password
}

describe('User API', () => {
    it('Should signup/create user', async() => {
        const res = await request(app).post('/auth/register').send(userCreateReq);
        expect(res.statusCode).toEqual(201);
        expect(res.body.email).toEqual(userCreateReq.email);
        expect(res.body.firstName).toEqual(userCreateReq.firstName);
        expect(res.body.lastName).toEqual(userCreateReq.lastName);
        expect(res.body).toHaveProperty('token');
    })

    it('Should login', async () => {
        const res = await request(app).post('/auth/login').send(loginRequest);
        expect(res.statusCode).toEqual(200);
        expect(res.body.email).toEqual(userCreateReq.email);
        expect(res.body.firstName).toEqual(userCreateReq.firstName);
        expect(res.body.lastName).toEqual(userCreateReq.lastName);
        expect(res.body).toHaveProperty('token');
    })
    // it('Should show all users', async () => {
    //     const res = await request(app).get('/users/all');
    //     expect(res.statusCode).toEqual(200);
    // })
})