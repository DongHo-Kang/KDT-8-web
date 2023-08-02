const express = require("express");
const app = express();
const PORT = 8000;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("practice1_index");
});

app.post("/axios", (req, res) => {
  console.log("back", req.body);
  res.send(req.body);
  // const id = 123;
  // const pw = 456;
  // if(id == req.body.id && pw == req.body.pw){
  //    res.send({result: true, userInfo: req.body});
  //} else {
  //   res.send({result: false,})
  // }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
