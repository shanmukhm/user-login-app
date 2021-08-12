const request = require('supertest');
const app = require('../app');
const {userCreateReq, loginRequest, wrongLoginRequest, tasksReq} = require('./data/test_data')

let token = '';

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
        token = res.body.token;
    })

    it('Should fail login with wrong password', async () => {
        const res = await request(app).post('/auth/login').send(wrongLoginRequest);
        expect(res.statusCode).toEqual(400);
    })

    it('Should show all users', async () => {
        const res = await request(app).get('/users/all').set({'x-access-token': token});
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(1);
    })

    it('Should fail show all users with invalid token', async () => {
        const res = await request(app).get('/users/all').set({'x-access-token': 'invalid_token'});
        expect(res.statusCode).toEqual(401);
    })

    it('Should get user by email', async () => {
        const res = await request(app).get('/users').set({'x-access-token': token});
        expect(res.statusCode).toEqual(200);
        expect(res.body.email).toEqual(userCreateReq.email);
        expect(res.body.firstName).toEqual(userCreateReq.firstName);
        expect(res.body.lastName).toEqual(userCreateReq.lastName);
    })

    it('Should create tasks for a user', async () => {
        const res = await request(app).post('/tasks').set({'x-access-token': token}).send({tasks: tasksReq});
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveLength(tasksReq.length);
    })

    it('Should get user with tasks by email', async () => {
        const res = await request(app).get('/users').set({'x-access-token': token});
        expect(res.statusCode).toEqual(200);
        expect(res.body.email).toEqual(userCreateReq.email);
        expect(res.body.firstName).toEqual(userCreateReq.firstName);
        expect(res.body.lastName).toEqual(userCreateReq.lastName);
        expect(res.body.tasks).toHaveLength(tasksReq.length);
    })

    it('Should delete user by email', async () => {
        const res = await request(app).delete('/users').set({'x-access-token': token});
        expect(res.statusCode).toEqual(204);
    })
})