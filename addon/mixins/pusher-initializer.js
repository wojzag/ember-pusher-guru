import Ember from 'ember';
const { inject } = Ember;

export default Ember.Mixin.create({
  pusherConfig: inject.service('pusher-config'),

  init() {
    this._super(...arguments);
    this.get('pusherConfig').on('newEvent', this, this._handleEvent);
  },

  willDestroy() {
    this.get('pusherConfig').off('newEvent', this, this._handleEvent);
  },

  _handleEvent(event, data) {
    const method = this._getEventMethodName(event);
    if (this[method].apply) {
      this[method](data);
    }
  },

  _getEventMethodName(event) {
    const result = this.get('pusherActions').find((connection) => {
      return Object.keys(connection)[0] === event;
    });
    return result[event];
  }
});
