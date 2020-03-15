const express = require("express");
const graphQL = require("express-graphql");
const schema = require("./schema/schema");
let router = express.Router();
const app = express();
app.use(
  "/graphql",
  graphQL({
    schema,
    graphiql: true
  })
);

// app.use("/", router);

app.listen(4000, function() {
  console.log("Server is running at PORT:", 4000);
});
