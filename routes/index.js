var express = require("express");
const crypto = require('crypto');
var router = express.Router();
const db = require("./../db");
const session = require("express-session");

/* GET home page. */
router.get("/kr", (req, res, next) => {
  if(req.session.is_logined){
    res.redirect("/kr/dashboard");
  } else {
    res.render("kr/login/login");
  }
});

router.post("/kr", (req, res, next) => {
  let info = JSON.parse(JSON.stringify(req.body));

  req.session.is_logined = false;

  crypto.pbkdf2(`${info.password}`, 'salt', 98765, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;

    let password = derivedKey.toString('hex');

    db.query(`select * from userinfo where email = '${info.email}' and password = '${password}'`, (err, data) => {

      if(data.length === 1){
        req.session.is_logined = true;
        req.session.is_id = data[0].id;
        req.session.is_email = data[0].email;

        req.session.save(function(){
          res.send(req.session);
        }) 
      } else {
        res.send(req.session);
      }
    })
  });
});

router.get("/kr/join", (req, res, next) => {
    res.render("kr/join/join");
});

router.post("/kr/join", function (req, res, next) {
  let info = JSON.parse(JSON.stringify(req.body));

  db.query(`select * from userinfo where email = '${info.email}'`, (err, data) => {
     if(data.length === 0) {
        crypto.pbkdf2(`${info.password}`, 'salt', 98765, 64, 'sha512', (err, derivedKey) => {
          if (err) throw err;

          let password = derivedKey.toString('hex'); 

          db.query(`INSERT INTO userInfo (name, email, password, withdraw) VALUES ('${info.name}','${info.email}','${password}','${info.withdraw}')`,()=>{
            res.redirect("/kr");
          })
        });
     } else {
      res.send(data);
     }
  })
});

router.get("/kr/dashboard", (req, res, next) => {
  res.render("kr/dashboard/dashboard");
});

router.get("/kr/logout", function (req, res, next) {
  req.session.destroy(function(err) {
    res.redirect('/kr');
  })
});

router.post("/kr/dashboard", function (req, res, next) {
  db.query(`DELETE FROM userInfo where email = '${req.session.is_email}'`,(err, data)=>{
    req.session.destroy(function(err) {
      res.redirect('/kr');
    })
  })
});

module.exports = router;
