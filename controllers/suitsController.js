const express = require("express");
const router = express.Router();

// const fruits = require("../fruits.js");
const Fruit = require('../models').Suit
const User = require('../models').User;
//const Season = require("../models").Season;

//Sequelize GET route
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

router.post("/", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false; //do some data correction
  }

  Suit.create(req.body).then((newSuit) => {
    res.redirect("/suits");
  });
});

// show
router.get("/:id", (req, res) => {
  Fruit.findByPk(req.params.id, {
    include: [{
      model: User,
      attributes: ['name']
    },
    {
      model: Season
    }
  ],
    attributes: ['name', 'team', 'year']
  }).then((fruit) => {
    console.log(fruit);
    res.render('show.ejs', { fruit: fruit });
  });
});

router.get("/:id/edit", function (req, res) {
  Fruit.findByPk(req.params.id).then((fruit) => {
    Season.findAll().then(allSeasons => {
      res.render('edit.ejs', { fruit, seasons: allSeasons });
    })
   });
});

router.put("/:id", (req, res) => {
  //:index is the index of our fruits array that we want to change
  req.body.readyToEat = (req.body.readyToEat === "on" ? true : false);

  Fruit.update(req.body, {
    where: { id: req.params.id },
    returning: true
  }).then((fruit) => {
    Season.findByPk(req.body.season).then(foundSeason => {
      Fruit.findByPk(req.params.id).then(foundFruit => {
        foundFruit.addSeason(foundSeason);
        res.redirect("/suits");
      });
    });
  });
});

router.delete("/:id", (req, res) => {
  Fruit.destroy({ where: { id: req.params.id }}).then(() => {
    res.redirect('/suits')
  });
});

module.exports = router;