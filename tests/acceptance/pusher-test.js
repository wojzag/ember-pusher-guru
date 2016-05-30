/*global Pusher:true*/

import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pusher');

function triggerEvent(event, message) {
  const channel = Pusher.instances[0].channel('stringray');
  channel.emit(event, { message: message });
}

test('handles event that is listening for', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    triggerEvent('cover', 'stone');
    assert.equal(find('#message').text(), 'stone');
  });
});
