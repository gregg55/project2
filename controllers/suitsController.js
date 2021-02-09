const express = require("express");
const router = express.Router();

// const fruits = require("../fruits.js");
const Suit = require('../models').Suit
const User = require('../models').User;
//const Season = require("../models").Season;

//Sequelize GET route - INDEX ROUTE - suit
router.get("/", (req, res) => {
  Suit.findAll().then((suits) => {
    res.render("index.ejs", {
      suits: suits,
    });
  });
});

//put this above your show.ejs file
router.get("/new", (req, res) => {
  res.render("new.ejs");
});


// POST ROUTE VALIDATE BELOW --- ***
router.post("/", (req, res) => {
  //if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    //req.body.readyToEat = true; //do some data correction
  //} else {
    //if not checked, req.body.readyToEat is undefined
    //req.body.readyToEat = false; //do some data correction
  //}

  Suit.create(req.body).then((newSuit) => {
    res.redirect("/suits");
  });
});

// SHOW ROUTE - updated for USER ID PK and FK - Suit
router.get("/:id", (req, res) => {
  Fruit.findByPk(req.params.id, {
      include : [{
          model: User,
          attributes: ['name']
      }],
      attributes: ['name', 'team', 'year']
  })
  .then(suit => {
      console.log(suit)
      res.render('show.ejs', {
          suit: suit
      });
  })
})



// SHOW Route - suit - PRIOR to USERID FK PK
//router.get("/:id", (req, res) => {
  //Suit.findByPk(req.params.id).then((suit) => {
    //res.render("show.ejs", {
      //suit: suit,
    //});
  //});
//});

// EDIT ROUTE - suit
router.get("/:id/edit", function (req, res) {
  Suit.findByPk(req.params.id).then((suit) => {
    res.render("edit.ejs", {
      suit: suit,
    });
  });
});



// PUT ROUTE - VALIDATE BELOW *** 
router.put("/:id", (req, res) => {

  //:index is the index of our fruits array that we want to change
  //req.body.readyToEat = (req.body.readyToEat === "on" ? true : false);

  Suit.update(req.body, {
    where: { id: req.params.id },
    returning: true
  }).then((suit) => {
    //Season.findByPk(req.body.season).then(foundSeason => {
      Suit.findByPk(req.params.id).then(foundSuit => {
        //foundFruit.addSeason(foundSeason);
        res.redirect("/suits");
      });
    //});
  });
});

// DELETE ROUTE - Suits
router.delete("/:id", (req, res) => {
  Suit.destroy({ where: { id: req.params.id }}).then(() => {
    res.redirect('/suits')
  });
});

module.exports = router;