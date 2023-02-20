const expect = require('chai').expect;
const getOffersMW = require('../../../../middleware/offer/getOffers');

describe('getOffers middleware ', function () {

  it('should return Offers', function (done) {
    const req = {};
    const res = {
      locals: {
        canteen: {
            id:'1'
        }
      }
    };
    const fakeOfferModel = {
      find: function (some, callback) {
        callback(null, ['offer1', 'offer2'])
      }
    };

    getOffersMW({OfferModel: fakeOfferModel})
    (req, res, function (err) {
      expect(res.locals.offers).to.eql(['offer1', 'offer2']);
      expect(err).to.eql(undefined);
      done();
    });
  });

  it('should return error when db returns error', function (done) {
    const res = {
        locals: {
          canteen: {
              id:'1'
          }
        }
      };
    const fakeOfferModel = {
      find: function (some, callback) {
        callback('hibas', undefined)
      }
    };

    getOffersMW({OfferModel: fakeOfferModel})
    ({}, res, function (err) {
      expect(err).to.eql('hibas');
      done();
    });
  });
});