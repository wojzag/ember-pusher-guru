export function fetchEvents(data, channelName) {
  const channel = Ember.A(data).find((channel) => {
    return Object.keys(channel)[0] === channelName;
  });
  return channel[channelName];
}
