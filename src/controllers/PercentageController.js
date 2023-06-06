import Percentage from "../database/models/Percentages.js";

export const getAllPercentages = async (req, res) => {
    try {
      const percentages = await Percentage.findAll();
      res.json(percentages);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const createPersentage = async (req, res) => {
    try {
      const percentage = await Percentage.create(req.body);
      res.status(201).json({ message: "created",percentage });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };