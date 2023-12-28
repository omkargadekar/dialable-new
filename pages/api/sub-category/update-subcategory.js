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

export default async function PUT(req, res) {
  try {
    const uploadImage = upload.single("image");
    uploadImage(req, res, async function (err) {
      if (err) return res.status(400).json({ message: err.message });

      const subcategoryID = req.params.subcategory_id;
      const { name, category } = req.body;

      const subcategoryData = await SubCategory.findOne({
        _id: subcategoryID,
      });
      let image = subcategoryData.image;
      if (req.file !== undefined) {
        image = req.file.filename;
        if (fs.existsSync("./uploads/sub-category/" + subcategoryData.image)) {
          fs.unlinkSync("./uploads/sub-category/" + subcategoryData.image);
        }
      }

      const updatedData = await SubCategory.updateOne(
        { _id: subcategoryID },
        {
          $set: {
            name: name,
            category: category,
            image: image,
          },
        }
      );

      if (updatedData.acknowledged) {
        return res.status(200).json({
          message: "Updated",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

// export const updateSub_category = async (req, res) => {
//     try {
//       const imageUplaod = upload.single("image");
//       imageUplaod(req, res, async function (err) {
//         if (err) return res.status(500).json({ Message: err.message });

//         const id = req.params.subCategory_id;

//         const { Name, CategoryID } = req.body;
//         console.log(req.body);

//         const subcategoryData = await sub_CategoryModel.findOne({
//           _id: id,
//         });
//         let image = subcategoryData.image;

//         if (req.file !== undefined) {
//           if (image && fs.existsSync("./uploads/subCategory/" + image)) {
//             fs.unlinkSync("./uploads/subCategory/" + image);
//           }
//           image = req.file.filename;
//         }

//         console.log(image);

//         const updateSubCategory = await sub_CategoryModel.updateOne(
//           { _id: id },
//           {
//             $set: {
//               Name,
//               CategoryID,
//               image,
//             },
//           }
//         );

//         if (updateSubCategory.acknowledged) {
//           return res.status(200).json({
//             Data: updateSubCategory,
//             Message: "Updated SucessFully",
//           });
//         }
//       });
//     } catch (error) {
//       return res.status(500).json({
//         Message: error.message,
//       });
//     }
//   };
