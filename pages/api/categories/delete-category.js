import multer from "multer";
import fs from "fs";
import path from "path";
import { Category } from "../../../src/models/categoryModel";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "./uploads";
    const subfolder = "category";

    // Create "uploads" folder if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }

    // Create subfolder inside "uploads"
    const subfolderPath = path.join(uploadPath, subfolder);
    if (!fs.existsSync(subfolderPath)) {
      fs.mkdirSync(subfolderPath);
    }

    cb(null, subfolderPath);
  },
  filename: function (req, file, cb) {
    const name = file.originalname; // abc.png
    const ext = path.extname(name); // .png
    const nameArr = name.split("."); // [abc,png]
    nameArr.pop();
    const fname = nameArr.join("."); //abc
    const fullname = fname + "-" + Date.now() + ext; // abc-12345.png
    cb(null, fullname);
  },
});

const upload = multer({ storage: storage });

export default async function DELETE(req, res) {
  try {
    const categoryID = req.params.category_id;
    const category = await Category.findOne({ _id: categoryID });

    let image = category.image;

    if (req.file !== undefined) {
      image = req.file.filename;
      if (fs.existsSync("./uploads/category/" + category.image)) {
        fs.unlinkSync("./uploads/category/" + category.image);
      }
    }

    const deleteCat = await Category.deleteOne(category);
    if (deleteCat.acknowledged) {
      return res.status(200).json({
        message: "Category Deleted!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
