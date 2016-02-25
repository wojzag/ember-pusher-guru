import { fetchEvents } from 'ember-pusher-guru/utils/extract-events';
import { module, test } from 'qunit';

module('Unit | Utility | extract events');

const payload = [{ 'john': ['eat'] },
                 { 'jack': ['run', 'sleep'] }];

test('properly fetch johns events', function(assert) {
  const result = fetchEvents(payload, 'john');
  assert.deepEqual(['eat'], result);
});

test('properly fetch jacks events', function(assert) {
  const result = fetchEvents(payload, 'jack');
  assert.deepEqual(['run', 'sleep'], result);
});

test('no result for wrong channel', function(assert) {
  const result = fetchEvents(payload, 'Rick');
  assert.deepEqual([], result);
});
