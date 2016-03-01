/*global Pusher:true*/
import Ember from 'ember';
import PusherInitializer from 'ember-pusher-guru/mixins/pusher-initializer';

const { Route } = Ember;

export default Route.extend(PusherInitializer, {
  pusherActions: [
    { swim: 'handleSwim' },
    { cover: 'handleCover' },
    { electroshock: 'handleElectroshock' }
  ],

  handleCover(data) {
    Ember.$('#message').text(data.message);
  },
  handleElectroshock(data) {
    Ember.$('#message').text(data.message);
  },
  handleSwim(data) {
    Ember.$('#message').text(data.message);
  },

  actions: {
    triggerEvent(channel, eventName, message) {
      Pusher.singleton.trigger(channel, eventName, { message: message });
    }
  }
});
