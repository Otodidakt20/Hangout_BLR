let loc_1 = ["lat_1", "long_1"];
let loc_2 = ["lat_2", "long_2"];
function getMidpoint(loc_1, loc_2) {
  midpoint_lat = (loc_2[0] - loc_1[0]) / 2;
  midpoint_long = (loc_2[1] - loc_1[1]) / 2;
  return [midpoint_lat, midpoint_long];
}

console.log(getMidpoint(loc_1, loc_2));
