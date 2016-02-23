import Ember from 'ember';
import Checker from 'ember-pusher-guru/mixins/checker';
import { fetchEvents } from 'ember-pusher-guru/utils/extract-events';

const { getOwner, computed, run, Logger, Service } = Ember;
const { bind } = run;
const { error } = Logger;

export default Service.extend(Ember.Evented, Checker, {
  pusher: null,
  pusherKey: null,
  channels: [],

  init() {
    this._super(...arguments);
    this.set('pusherKey', getOwner(this).resolveRegistration('config:environment').pusherKey);
    this.setup();
  },

  setup() {
    this.checkEnv();
    this.pusher = new window.Pusher(this.get('pusherKey'));
    this.on('newEvent', this._handleEvent);
    this._setSubscriptions();
    this._attachEventsToChannels();
  },

  _handleEvent(action, data) {
    this[action](data);
  },

  _setSubscriptions() {
    this.get('channelsData').forEach((singleChannel) => {
      const channelName = Object.keys(singleChannel)[0];
      const channel = this._addChannel(channelName);
      this.get('channels').push(channel);
    });
  },

  _addChannel(name) {
    return this.get('pusher').subscribe(name);
  },

  _attachEventsToChannels() {
    this.get('channels').forEach((channel) => {
      const events = fetchEvents(this.get('channelsData'), channel.name);
      events.forEach((event) => {
        this._setEvent(channel, event);
      });
    });
  },

  _setEvent(channel, event) {
    channel.bind(event, (data) => {
      bind(this, this.trigger('newEvent', event, data));
    });
  },

  willDestroy() {
    if (this.pusher) {
      this.pusher.disconnect();
    }
    this.off('newEvent', this._handleEvent);
  }
});
