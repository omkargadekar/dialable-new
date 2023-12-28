import multer from "multer";
import fs from "fs";
import path from "path";
import { Listing } from "../../../src/models/listingModel";

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
  try {
    const uploadData = upload.fields([{ name: "images", maxCount: 4 }]);

    uploadData(req, res, async function (err) {
      if (err) return res.status(400).json({ message: err.message });

      const listingId = req.params.listingId;

      const listingData = await Listing.findOne({ _id: listingId });
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

      let images = listingData.images;
      if (req.files && req.files["images"]) {
        req.files["images"].forEach((file) => {
          images.push(file.filename);
        });
        if (fs.existsSync("./uploads/listing" + listingId.images)) {
          fs.unlinkSync("./uploads/listing" + listingId.images);
        }
      }

      // console.log('Files:', req.files);

      const updatedData = await productModel.updateOne(
        { _id: listingId },
        {
          $set: {
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
          },
        }
      );

      const validationError = listingData.validateSync();
      if (validationError) {
        return res.status(400).json({ message: validationError.message });
      }

      if (updatedData) {
        return res.status(200).json({
          data: updatedData,
          message: "Listing Updated Successfully",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
