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

export default async function POST(req, res) {
  try {
    const uploadImage = upload.single("image");
    uploadImage(req, res, function (err) {
      if (err) return res.status(400).json({ message: err.message });

      const { name } = req.body;
      let image = null;
      if (req.file !== undefined) {
        image = req.file.filename;
      }

      const categoryData = new Category({
        name: name,
        image: image,
      });
      categoryData.save();
      if (categoryData) {
        return res.status(201).json({
          data: categoryData,
          message: "Category Added Successfully",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
