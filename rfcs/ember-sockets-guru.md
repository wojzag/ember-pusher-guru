New addon working name: `ember-sockets-guru`.

# Summary
Create design for future of ember-pusher-guru addon that will allow to use multiple of WebSockets solutions.

# Motivation
Ember-pusher-guru is a good solution to handle Pusher.js implementation of WebSockets. There are couple of other WebSockets wrappers available in Ember ecosystem, but none of them is universal for couple of implementations.

By providing adapter-based implementation, users could focus on using universal public API with convention over configuration approach. Initial idea covers creating core addon that will provide public and private API for next adapters working with different technologies, including at the beginning:

* Pusher.js
* ActionCable

# Detailed design
Initial design might be very much aligned to current ember-pusher-guru.

### Core usage
User should be able to create service object that inherits from general-use service object from `ember-sockets-guru/sockets.js`. This service provides following API:

* `adapter`: string that specifies which adapter should be used for this service,
  Example: `adapter: 'pusher.js'`. It will resolve file from `adapters/sockets/_PATH_`.
* `channelsData`: object that specifies to which channels and events we want to subscribe (independent of used solution).
  Example:
  ```
  channelsData: [
    { channelName1: ['eventName1'] },
    { channelName2: ['eventName2', 'eventName3'] },
  ],
  ```

On the other hand, user should mix-in `SocketEventHanlder` mixin into objects that should react to incoming events. This mixin should demand for following attributes in the mixed-in object:

* `socketsActions`: this array will define which events are handled by which method in the object
  Example:
  ```
  socketsActions: [
    { eventName: 'methodName' },
    { event2name: 'method2name' }
  ],
  ```
* `socketsService`: this attribute should inject service into the object.

Adapters should have predefined, unified API for handling authentication, subscriptions and unsubscriptions from channels. As much as possible internal-solution settings (like `cluster` Pusher.js configuration) should be stored in adapter, not in `sockets` service.

### TBD - Internal flow design

### TBD - Adapter design

# Drawbacks
This rewrite demands quite a lot of work to be done. We have only two-three production applications using Pusher.js only which will demand setup and deploy of test apps using ActionCable.

# Alternatives
We can just skip it and leave `ember-pusher-guru` as is.

# Questions

