/*global Pusher:true*/
import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  animalsPusher: inject.service(),

  init() {
    this.get('animalsPusher');
  },

  actions: {
    triggerEvent(channel, eventName, message) {
      Pusher.singleton.trigger(channel, eventName, { message: message });
    }
  }
});
