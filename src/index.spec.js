const request = require('supertest');
const routes = require('./routes');

describe('Test my app server', ()=>{
  it('should get main route', async ()=>{
    const res = await request(routes)
    .get('/users')
    expect(res.body).toHaveProperty('error')
  })
})