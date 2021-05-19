import {User} from  '../models/User'
// import request from 'supertest';
// import {app} from '../server';
test('adds 1 + 2 to equal 3', () => {
  const user = new User()

  user.username = 'Paulo'
  expect(user.username).toEqual('Paulo')
 });

      
