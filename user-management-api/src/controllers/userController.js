const User = require("../models/User");


// GET ALL USERS
const getUsers = async (req, res) => {
  try {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    let filter = {};

    if (req.query.city) {
      filter.city = req.query.city;
    }

    let sortOption = {};

    if (req.query.sort) {
      sortOption[req.query.sort] = 1;
    }

    const users = await User.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limit);

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


// GET SINGLE USER
const getUserById = async (req, res) => {
  try {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


// CREATE USER
const createUser = async (req, res) => {
  try {

    const { name, email, age, phone, city } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    const user = await User.create({
      name,
      email,
      age,
      phone,
      city
    });

    res.status(201).json(user);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });
  }
};


// UPDATE USER
const updateUser = async (req, res) => {
  try {

    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(user);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });
  }
};


// DELETE USER
const deleteUser = async (req, res) => {
  try {

    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};