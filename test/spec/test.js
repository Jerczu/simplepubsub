import {pubsub} from '../../app/scripts/pubsub/pubsub';
(function () {
  'use strict';
  var expect = require('chai').expect;
  var should = require('chai').should();
  var count = 0;

  describe('PubSub test', function () {
    describe('Defined', function () {
      it('should not be undefined', function () {
        should.exist(pubsub)
      });
    });

    describe("Subscribe ",function () {
      it('Should insert an event',function () {
          pubsub.subscribe('testEvent',function () {
            count++;
          },'testevent');
          should.exist(pubsub.subscribed.testEvent);
          expect(pubsub.subscribed.testEvent.length).to.equal(1);
      });

      it("Should have a key testevent",function () {
          expect(pubsub.subscribed.testEvent[0]).to.have.property('testevent')
      });

      it("Should have a callback function ",function () {
        expect(pubsub.subscribed.testEvent[0].testevent).to.be.a('function')
      });

    });

    describe("Emit",function () {
      it("Should increase the value of the counter",function () {
        pubsub.emit("testEvent");
        expect(count).to.equal(1);
        pubsub.emit("testEvent");
        expect(count).to.equal(2);
      })
    });

    describe("Unsubscribe",function () {
      it("Should remove existing event",function () {
        pubsub.unsubscribe('testEvent','testevent');
        expect(pubsub.subscribed.testEvent.length).to.equal(0);
      })
    });


  });
})();
