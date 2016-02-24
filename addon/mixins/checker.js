import Ember from 'ember';
const { assert } = Ember;

export default Ember.Mixin.create({
  checkEnv() {
    assert("You need to set pusherKey in environment", !!this.get('pusherKey'));
    assert("You need to include the pusher libraries", !!window.Pusher);
    assert("You need to define channelsData property", !!this.channelsData);
    assert("channelsData property has a wrong structure", !this._checkDataStructure(this.get('channelsData')));
  },

  _checkDataStructure(data) {
    return (Array.isArray(data) && this._findWrongData(data)) ? true : false
  },

  _isArray(array) {
    return Array.isArray(array);
  },

  _findWrongData(array) {
    const wrong = array.find((channel) => {
      return this._nonHashElements(channel) || this._detectEmptyHash(channel) || this._checkMissingEvents(channel);
    });
    return wrong === undefined ? true : false
  },

  _nonHashElements(channel) {
    return typeof channel !== 'object';
  },

  _detectEmptyHash(channel) {
    return Object.keys(channel).length === 0;
  },

  _checkMissingEvents(channel) {
    return channel[Object.keys(channel)[0]].length === 0;
  }
});
