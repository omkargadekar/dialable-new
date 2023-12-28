import multer from "multer";
import fs from "fs";
import path from "path";
import { SubCategory } from "../../../src/models/subCategoryModel";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "./uploads";
    const subfolder = "sub-category";

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
  const subcategoryID = req.params.subcategory_id;
  const subcategory = await SubCategory.findOne({ _id: subcategoryID });

  let image = subcategory.image;

  if (req.file !== undefined) {
    image = req.file.filename;
    if (fs.existsSync("./uploads/sub-category/" + subcategory.image)) {
      fs.unlinkSync("./uploads/sub-category/" + subcategory.image);
    }
  }

  const deleteCat = await SubCategory.deleteOne(subcategory);
  if (deleteCat.acknowledged) {
    return res.status(200).json({
      message: "Category Deleted!",
    });
  }
}
