const expect = require('chai').expect;
const getCanteensMW = require('../../../../middleware/canteen/getCanteens');

describe('getCanteens middleware ', function () {

  it('should return canteens', function (done) {
    const req = {};
    const res = {
      locals: {}
    };
    const fakeCanteenModel = {
      find: function (some, callback) {
        callback(null, ['canteen1', 'canteen2'])
      }
    };

    getCanteensMW({CanteenModel: fakeCanteenModel})
    (req, res, function (err) {
      expect(res.locals.canteens).to.eql(['canteen1', 'canteen2']);
      expect(err).to.eql(undefined);
      done();
    });
  });

  it('should return error when db returns error', function (done) {
    const fakeCanteenModel = {
      find: function (some, callback) {
        callback('hibas', undefined)
      }
    };

    getCanteensMW({CanteenModel: fakeCanteenModel})
    ({}, {}, function (err) {
      expect(err).to.eql('hibas');
      done();
    });
  });
});