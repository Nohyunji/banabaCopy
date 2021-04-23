var express = require("express");
var router = express.Router();
const db = require("./../db");

/* GET home page. */
router.get("/kr", (req, res, next) => {
  res.render("kr/login/login");
});

router.post("/kr", (req, res, next) => {
  let info = JSON.parse(JSON.stringify(req.body));

  db.query(`select * from userinfo where email = '${info.email}'`, (err, data) => {
    if(data.length === 0) {
      res.send(data);
    } else if (data[0].email === info.email){
      res.send(data);
    }
  })
});

router.get("/kr/join", (req, res, next) => {
    res.render("kr/join/join");
});

router.post("/kr/join", function (req, res, next) {
  let info = JSON.parse(JSON.stringify(req.body));

  db.query(`select * from userinfo where email = '${info.email}'`, (err, data) => {
    if(data.length === 0) {

      db.query(`INSERT INTO userInfo (name, email, password, withdraw) VALUES ('${info.name}','${info.email}','${info.password}','${info.withdraw}')`,()=>{
        res.redirect("/kr");
      })
    } else if(data.length === 1) {
      res.send('use');
    }
  })

});

router.get("/kr/dashboard", (req, res, next) => {
  res.render("kr/dashboard/dashboard");
});

router.post("/kr/dashboard", function (req, res, next) {
  let info = JSON.parse(JSON.stringify(req.body));

  console.log("info.email :: ",info.email);
  db.query(`DELETE FROM userInfo where email = '${info.email}'`,(err, data)=>{
      res.redirect("/kr");
  })
});

module.exports = router;
