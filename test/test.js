//dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

// Testing GET /birthdays route
describe('/GET birthdays', () => {
    it('it should GET all the birthdays', (done) => {
        chai.request(server)
            .get('/birthdays')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                // any more tests about the content can be added here
                done();
            })
    })
});

// Testing POST /birthdays route
describe('/POST birthdays', () => {
    it('it should POST a birthday to the db', (done) => {
        let birthday = {
            "name": "Poe Tato",
            "birthday": "1993-02-11"
            
        }
        chai.request(server)
            .post('/birthdays')
            .send(birthday)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.not.have.property('errors');
                done();
            });
    });

});
