require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.emit("pronto para usar após conexão com mongodb!");
  })
  .catch((e) => console.log(e));

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flashMessage = require("connect-flash");

const routes = require("./routes");
const path = require("path");
const myMiddleware = require("./src/middlewares/middleware");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));
const sessionOptions = session({
  secret: "secretkey",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flashMessage());
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");
app.use(myMiddleware);
app.use(routes);
app.on("pronto", () => {
  app.listen(3007, () => {
    console.log("Acessar http://localhost:3007");
    console.log("SERVIDOR EXECUTANDO NA PORTA 3007");
  });
});
