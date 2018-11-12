const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../server')

chai.use(chaiHttp)
const should = chai.should()

describe('app rest api integration', () => {
  it('should say hello', () => {
    return chai
      .request(app)
      .get('/')
      .then(response =>
        response.should.include({ status: 200, text: 'Hello World' })
      )
  })
})
