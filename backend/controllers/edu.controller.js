const Edu = require("../models/edu.model");
const path = require("path");
const fs = require("fs");

exports.getAllEdu = async (req, res, next) => {
  try {
    const educations = await Edu.find();

    res.status(200).json({
      success: true,
      data: educations.reverse(),
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getEduById = async (req, res, next) => {
  try {
    const education = await Edu.findById(req.params.id);

    res.status(200).json({
      success: true,
      data: education,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.createEdu = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    if (!name || !description || !req.file) {
      return res.status(403).json({
        success: false,
        message: " Please enter typing...",
      });
    }
    const education = await Edu.create({
      name,
      description,
      image: "uploads/" + req.file.filename,
    });

    return res.status(201).json({
      success: true,
      message: "Create successfully",
      data: education,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateEdu = async (req, res, next) => {
  try {
    const education = await Edu.findById(req.params.id);
    const { name, description } = req.body;

    const editEdu = await Edu.findByIdAndUpdate(
      req.params.id,
      {
        name: name || education.name,
        description: description || education.description,
        image: req.file ? "uploads/" + req.file.filename : education.image,
      },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "Update successfully",
      data: editEdu,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteEdu = async (req, res, next) => {
  try {
    const education = await Edu.findById(req.params.id);

    if (!education) {
      return res.status(404).json({
        success: false,
        message: "Edu not found",
      });
    }

    fs.unlink(
      path.join(__dirname, "..", "public", education.image),
      function (err) {
        if (err) {
          console.error("Error while deleting file:", err);
        } else {
          console.log("File deleted successfully");
        }
      }
    );

    await Edu.findByIdAndRemove(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Delete successfully",
    });
  } catch (err) {
    console.log(err);
  }
};
