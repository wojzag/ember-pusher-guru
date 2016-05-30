import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

var pusherService;

var exampleConfig = {
  encrypted: false,
  cluster: 'eu',
  disableStats: true,
  authEndpoint: 'some endpoint',
};

function resetDummyData(service) {
  service.authEndpoint = null;
  service.authDataParams = null;
}

function setupDummyData(service) {
  service.pusherConfig = exampleConfig;
}

moduleForAcceptance('Unit | Services | PusherBase ', {
  beforeEach() {
    pusherService = this.application.__container__.lookup('service:pusher');
  },
});

test('properly fills Pusher options with empty config object', function(assert) {
  resetDummyData(pusherService);
  const results = pusherService._findOptions();
  assert.deepEqual(results, { encrypted: true }, 'encrypted set to true by default');
});

test('properly fills Pusher options when authEndpoint is specified depreciated way', function(assert) {
  const results = pusherService._findOptions();
  const expectedResult = {
    auth: {
      params: {
        someData: "123"
      }
    },
    authEndpoint: "http://localhost:3000/auth",
    authTransport: "jsonp",
    encrypted: true
  };

  assert.deepEqual(results, expectedResult, 'full auth hash and auth properties are filled in');
});

test('properly fills Pusher options when authEndpoint is specified depreciated way', function(assert) {
  resetDummyData(pusherService);
  setupDummyData(pusherService);
  const results = pusherService._findOptions();
  const expectedResult = exampleConfig;
  assert.deepEqual(results, expectedResult, 'full auth hash and auth properties are filled in');
});
