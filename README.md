# Ember-pusher-guru

Ember addon for easy integration with [Pusher](https://pusher.com/)

## Advantages

- mechanism of integration is based on [Ember.Evented](http://emberjs.com/api/classes/Ember.Evented.html)
- addon is a mixin which is easy to include

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

You need to create `pusher-config` service which must be extended from `pusher-base` service

```javascript
# my-project/services/pusher-config.js

import Pusher from '../services/pusher-base';

export default Pusher.extend({
  authEndpoint: 'http://backend.com/auth' // optional (for authentication)
  channelsData: [
    { channelName1: ['eventName1'] },
    { channelName2: ['eventName2', 'eventName3'] }
    ...
  ]
});
```

And then use pusher-initializer mixin wherever you want and define connection events to method via `pusherActions`
```javascript
import PusherInitializer from '../mixins/pusher-initializer'

export default Route.extend(PusherInitializer, {
  pusherActions: [
    { eventName: 'methodName' },
    { event2name: 'method2name' }
  ],

  methodName() {
    // code
  }
});
```
