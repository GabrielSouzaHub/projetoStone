import {User} from  '../models/User'
import request from 'supertest'
import {app} from '../server';

describe('Test My app server', () =>{
  it('should get main route', async(done)=>{
    const res = await request(app)
    .get('/users')
    expect(res.body).toHaveProperty('mensagem')
    done()
  }) ;
  
  test('adds 1 + 2 to equal 3', () => {
    const user = new User()
  
    user.username = 'Paulo'
    expect(user.username).toEqual('Paulo')
   });

   it('insert post main route',async (done)=>{
    const res = await request(app)
    .post('/users')
    .send({
      email:"Papigaquigrafo@gmail.com",
      profile_image:"asdffafd_fqwf341234"
    })
    expect(201)
    done()
   })
})



