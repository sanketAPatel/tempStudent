const router = require("express").Router();
const Student = require("../model/Student");
//password encryption packages
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { check, validationResult } = require("express-validator");

router.get("/login", (req, res) => {
  res.send("get request");
});

//post request to register a student.
router.post(
  "/register",
  [
    check("name", "name must be betn 5-10").isLength({ min: 3 }),
    check("email", "must be abc@mal.com format").isEmail(),
    check("password", "shd be betn 5-10 char long")
      .isString()
      .isLength({ min: 8 })
      .not()
      .isLowercase()
      .not()
      .isUppercase()
      .not()
      .isNumeric()
      .not()
      .isAlpha(),
    check("age", "must be 18 years old").isInt({ min: 18 }),
  ],
  async (req, res) => {
    const errorMsg = validationResult(req);
    if (!errorMsg.isEmpty()) {
      return res.status(422).json({ errorMEssage: errorMsg.array() });
    }

    const student = new Student({
      //personal
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      experience: req.body,
      address: req.body,
      education: req.body,
    });

    try {
      const saveStudent = await student.save();
      res.status(201).send(saveStudent);
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

module.exports = router;
