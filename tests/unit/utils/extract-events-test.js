import { fetchEvents } from 'ember-pusher-guru/utils/extract-events';
import { module, test } from 'qunit';

module('Unit | Utility | extract events');

const payload = [{ 'john': ['eat'] },
                 { 'jack': ['run', 'sleep'] }];

test('properly fetch johns events', function(assert) {
  assert.deepEqual(['eat'], fetchEvents(payload, 'john'));
  assert.deepEqual(['run', 'sleep'], fetchEvents(payload, 'jack'));
});
