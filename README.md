# Ember-pusher-guru

Ember addon for easy integration with [Pusher](https://pusher.com/)

## Advantages

- mechanism of integration is based on [Ember.Evented](http://emberjs.com/api/classes/Ember.Evented.html)
- addon is a service which is easy to inject

## Installation
```bash
ember install ember-pusher-guru
```

## Configuration

Set `pusherKey` value in environment:
```javascript
// my-project/config/environment.js
  var ENV = {
    pusherKey: '49482as87s88s6d9sw74',
    ...
```

And extend security policy rule:
```javascript
contentSecurityPolicy: {
  'connect-src': "'self' ws://ws.pusherapp.com"
}
```

## Usage

You need to create own service which must be extended from Pusher service

```javascript
# my-project/services/people-pusher.js

import Pusher from '../services/pusher';

export default Pusher.extend({
  channelsData: [
                 { channelName1: ['eventName1'] },
                 { channelName2: ['eventName2', 'eventName3'] }
                  ...
                ],

  eventName1(data) {
    // actions;
  },
  ...
});
```

And then inject your service wherever you want and use `get` for start listen
```javascript
export default Route.extend({
  peoplePusher: inject.service(),

  init() {
    this.get('peoplePusher');
  }
});
```
