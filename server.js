const express = require("express");
const axios = require("axios");

const app = express();
const apiKey = "AIzaSyBbxSPOwU2XDitmol2L2yEWu3fhXq11eH4"; // Replace with your Google Maps Geocoding API key

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle the form submission
app.post("/geocode", (req, res) => {
  const address = req.body.address;

  axios
    .get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address: address,
        key: apiKey,
      },
    })
    .then((response) => {
      const results = response.data.results;
      if (results.length > 0) {
        const location = results[0].geometry.location;
        const latitude = location.lat;
        const longitude = location.lng;
        res.send(`Coordinates: ${latitude}, ${longitude}`);
      } else {
        res.send("No results found.");
      }
    })
    .catch((error) => {
      console.log(error);
      res.send("Error occurred.");
    });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
