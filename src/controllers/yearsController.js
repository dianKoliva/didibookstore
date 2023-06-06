import Year  from "../database/models/Years.js";

export const getAllYears = async (req, res) => {
    try {
      const years = await Year.findAll();
      res.json(years);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const createYear = async (req, res) => {
    try {
      const year = await Year.create(req.body);
      res.status(201).json({ message: "created",year });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };