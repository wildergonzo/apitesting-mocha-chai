const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

require('dotenv').config();
chai.use(chaiHttp);

describe.only('GET /posts', () => {
    it('should return a 200 status code', (done) => {
        chai.request(process.env.SERVER)
            .get('/posts')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.should.be.json;
                done();
            });
    });
});