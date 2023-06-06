import Indicator from "../database/models/Indicators.js";

export const getAllIndicators = async (req, res) => {
    try {
      const indicators = await Indicator.findAll();
      res.json(indicators);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const createIndicator = async (req, res) => {
    try {
      const indicator = await Indicator.create(req.body);
      res.status(201).json({ message: "created",indicator });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };