import Ember from 'ember';

export default Ember.Mixin.create({
  checkEnv() {
    Ember.assert("You need to set pusherKey in environment", !!this.get('pusherKey'));
    Ember.assert("You need to include the pusher libraries", !!window.Pusher);
    Ember.assert("You need to define channelsData property", !!this.channelsData);
  },
});
