export function fetchEvents(data, channelName) {
  let events = [];
  let searchedChannel = null;
  data.forEach((channel) => {
    searchedChannel = Object.keys(channel)[0];
    if(searchedChannel === channelName) {
      events = channel[searchedChannel];
    }
  });
  return events
}
