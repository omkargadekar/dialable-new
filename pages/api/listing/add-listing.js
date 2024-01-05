import multer from "multer";
import fs from "fs";
import path from "path";
import { Listing } from "../../../src/models/listingModel.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "./uploads";
    const subfolder = "listing";

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
  const uploadData = upload.fields([{ name: "images", maxCount: 4 }]);

  uploadData(req, res, function (err) {
    if (err) return res.status(400).json({ message: err.message });

    const {
      placeName,
      category,
      keywords,
      description,
      name,
      email,
      phone,
      website,
      designation,
      company,
      facebook,
      twitter,
      linked,
      skype,
    } = req.body;

    let images = [];
    if (req.files && req.files["images"]) {
      req.files["images"].forEach((file) => {
        images.push(file.filename);
      });
    }

    // console.log('Files:', req.files);

    const listingData = new Listing({
      placeName,
      category,
      keywords,
      description,
      name,
      email,
      phone,
      website,
      designation,
      company,
      facebook,
      twitter,
      linked,
      skype,
      images: images.join(", "),
    });

    const validationError = listingData.validateSync();
    if (validationError) {
      return res.status(400).json({ message: validationError.message });
    }

    listingData.save();
    if (listingData) {
      return res.status(201).json({
        data: listingData,
        message: "Listing Data Added Successfully",
      });
    }
  });
}
