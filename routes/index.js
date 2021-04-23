var express = require("express");
var router = express.Router();
const db = require("./../db");

/* GET home page. */
router.get("/kr", (req, res, next) => {
  db.query("select * from userinfo", (err, data) => {
    res.render("kr/login/login", { data: data });
  })
});

router.get("/kr/join", (req, res, next) => {
  db.query("select * from userinfo", (err, data) => {
    res.render("kr/join/join", { data: data });
  })
});

router.post("/kr/join", function (req, res, next) {
  let info = JSON.parse(JSON.stringify(req.body));

  if(info.email === "") {
    return false;
  }

  db.query(`INSERT INTO userInfo (name, email, password, withdraw) VALUES ('${info.name}','${info.email}','${info.password}','${info.withdraw}')`,()=>{
    res.redirect("/kr");
  })
});

router.get("/kr/dashboard", (req, res, next) => {
  res.render("kr/dashboard/dashboard");
});

router.post("/kr/dashboard", function (req, res, next) {
  let info = JSON.parse(JSON.stringify(req.body));

  db.query(`DELETE FROM userInfo where email = '${info.email}'`,(err, data)=>{
      res.redirect("/kr");
  })
});

module.exports = router;
