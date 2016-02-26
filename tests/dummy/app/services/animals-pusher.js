import Ember from 'ember';
import Pusher from 'ember-pusher-guru/services/pusher';

export default Pusher.extend({
  authEndpoint: 'http://localhost:3000/auth',
  channelsData: [
                 { stingray: ['cover'] },
                 { eel: ['electroshock', 'swim'] },
                 { 'private-coconut': ['fall'] }
                ],

  cover(data) {
    Ember.$('#message').text(data.message);
  },
  electroshock(data) {
    Ember.$('#message').text(data.message);
  },
  swim(data) {
    Ember.$('#message').text(data.message);
  },
  fall(data) {
    Ember.$('#message').text(data.message);
  }
});
