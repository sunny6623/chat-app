const express = require("express");
const path = require("path"); // Add this line

const app = express();

const port = process.env.port || 3000; // Corrected the port variable name
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.listen(port, () => {
    console.log("Server is up on port " + port);
});
