import Ember from 'ember';
import PusherBase from 'ember-pusher-guru/services/pusher-base';

export default PusherBase.extend({
  authEndpoint: 'http://localhost:3000/auth',
  channelsData: [
     { stingray: ['cover'] },
     { eel: ['electroshock', 'swim'] },
     { 'private-coconut': ['fall'] }
  ],
});
