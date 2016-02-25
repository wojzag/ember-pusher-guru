/*global Pusher:true*/

import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pusher');

function triggerEvent(event, message) {
  const channel = Pusher.singleton.channel('stingray');
  channel.emit('cover', { message: message });
}

test('emit cover event with message for stingray channel', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    triggerEvent('cover', 'stone');
    assert.equal(find('#message').text(), 'stone');
  });
});

test('emit 2 events for eel channel', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    triggerEvent('electroshock', 'bzzz');
    assert.equal(find('#message').text(), 'bzzz');

    triggerEvent('swim', 'splash');
    assert.equal(find('#message').text(), 'splash');
  });
});
