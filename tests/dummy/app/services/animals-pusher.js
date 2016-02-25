import Ember from 'ember';
import Pusher from 'ember-pusher-guru/services/pusher';

export default Pusher.extend({
  channelsData: [{ stingray: ['cover'] },
                 { eel: ['electroshock', 'swim'] }],

  cover(data) {
    Ember.$('#message').text(data.message);
  },
  electroshock(data) {
    Ember.$('#message').text(data.message);
  },
  swim(data) {
    Ember.$('#message').text(data.message);
  }
});
