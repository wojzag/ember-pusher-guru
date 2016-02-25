# Ember-pusher-guru

module for easy integration with Pusher

## Installation

soon

```bash
ember install ember-pusher-guru
```

## Using

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

Also set proper `pusherKey` property in ENV and add `ws://ws.pusherapp.com` to contentSecurityPolicy in `connect-src` property.
