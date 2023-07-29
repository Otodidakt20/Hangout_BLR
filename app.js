const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'google',

  // Optional depending on the providers
  fetch: customFetchImplementation,
  apiKey: 'AIzaSyBbxSPOwU2XDitmol2L2yEWu3fhXq11eH4', // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

// Using callback
const res = await geocoder.geocode('29 champs elysée paris');

console.log(res)
