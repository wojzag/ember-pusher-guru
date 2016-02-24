export function fetchEvents(data, channelName) {
  const channel = data.find((item) => {
    return Object.keys(channel)[0] === channelName;
  });
  return channel[channelName] && [];
}
