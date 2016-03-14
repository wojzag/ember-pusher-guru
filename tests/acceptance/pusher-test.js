/*global Pusher:true*/

import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | pusher');

function triggerEvent(event, message) {
  const channel = Pusher.singleton;
  channel.trigger('stringray', event, { message: message });
}

test('handles event that is listening for', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    triggerEvent('cover', 'stone');
    assert.equal(find('#message').text(), 'stone');
  });
});

test('does not handle event if is not listening for', function(assert) {
  visit('/');

  andThen(function() {
    triggerEvent('running', 'splash');
    Ember.run.next(() => {
      assert.equal(find('#message').text(), '');
    });
  });
});
