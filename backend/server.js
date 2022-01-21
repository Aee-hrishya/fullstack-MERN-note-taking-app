//We import the stuff below so that we can use the require function which is deprecated in the ES6
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import express from "express"; //importing express here
import notes from "./data/notes.js";
const dotenv = require("dotenv"); //importing the .env file and then we can use the stuff inside it as we want

//creating an object of the imported express
const app = express();
dotenv.config(); //now we can use our dotenv file

//creating our API endpoint and getting info from it and sending a message
app.get("/", (req, res) => {
  res.send("API is running...");
});

//serving the products from the backend through the api on the web server
app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id === req.params.id); //If the id in notes is found in the request url then get the value and ten we send it using the res.send() method

  res.send(note);
});

const PORT = process.env.PORT || 5000; //If the specified port is not available then we use the port 5000

//listen to the app when the app opens on some port here, at port 5000
app.listen(PORT, console.log(`Server opened  on port ${PORT}`));
