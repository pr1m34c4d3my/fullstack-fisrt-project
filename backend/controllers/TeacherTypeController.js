let { teacherType } = require("../models");

const Validator = require("fastest-validator");
const V = new Validator();

module.exports = {
  getData: async (req, res) => {
    let TYPE = await teacherType.findAll();
    res.json(TYPE);
  },

  createData: async (req, res) => {
    const SCHEMA = {
      name: "string",
    };

    const VALIDATE = V.validate(req.body, SCHEMA);
    if (VALIDATE.lenght) {
      res.status(400).json(VALIDATE);
    }

    const TYPE = await teacherType.create(req.body);
    res.status(200).json({
      message: "Successfully create a Type of Teacher",
      method: req.method,
      data: TYPE,
    });
  },
};
