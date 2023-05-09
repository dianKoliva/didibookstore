import User  from "../database/models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

class UserController {
static  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ userId: user.id, email:user.email,role:user.role }, process.env.JWT_SECRET);

      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
  static  async  getUsers(req, res) {
        try {
          const users = await User.findAll();
          res.json(users);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      }
  static async createUser(req, res) {
    try {
      const { name, email, password,role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const userRole = role ? role : 'user';
      const user = await User.create({ name, email, password:hashedPassword,role:userRole });
     
      res.status(201).json({message:"created"});
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      const user = await User.findByPk(id);
      if (user) {
        await user.update({ name, email, password });
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (user) {
        await user.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
}

export default UserController;
