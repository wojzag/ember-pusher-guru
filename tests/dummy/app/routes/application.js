import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  animalsPusher: inject.service(),

  init() {
    this.get('animals-pusher');
  }
});
