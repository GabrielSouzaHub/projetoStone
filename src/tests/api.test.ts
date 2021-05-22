import {User} from  '../models/User'

test('adds 1 + 2 to equal 3', () => {
  const user = new User()

  user.username = 'Paulo'
  expect(user.username).toEqual('Paulo')
 });
import request from 'supertest'
import {app} from '../server';

it('inserção de users', async()=>{
  const res = await request(app)
  .get('/users')
  expect(res.body).toHaveProperty('mensagem')
})