"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/categories/add-category";
exports.ids = ["pages/api/categories/add-category"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/categories/add-category.js":
/*!**********************************************!*\
  !*** ./pages/api/categories/add-category.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_models_categoryModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/models/categoryModel.js */ \"(api)/./src/models/categoryModel.js\");\n\n\n\n\nconst storage = multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({\n  destination: function (req, file, cb) {\n    const uploadPath = \"./uploads\";\n    const subfolder = \"category\"; // Create \"uploads\" folder if it doesn't exist\n\n    if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(uploadPath)) {\n      fs__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(uploadPath);\n    } // Create subfolder inside \"uploads\"\n\n\n    const subfolderPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(uploadPath, subfolder);\n\n    if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(subfolderPath)) {\n      fs__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(subfolderPath);\n    }\n\n    cb(null, subfolderPath);\n  },\n  filename: function (req, file, cb) {\n    const name = file.originalname; // abc.png\n\n    const ext = path__WEBPACK_IMPORTED_MODULE_2___default().extname(name); // .png\n\n    const nameArr = name.split(\".\"); // [abc,png]\n\n    nameArr.pop();\n    const fname = nameArr.join(\".\"); //abc\n\n    const fullname = fname + \"-\" + Date.now() + ext; // abc-12345.png\n\n    cb(null, fullname);\n  }\n});\nconst upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n  storage: storage\n});\nasync function POST(req, res) {\n  try {\n    const uploadImage = upload.single(\"image\");\n    uploadImage(req, res, function (err) {\n      if (err) return res.status(400).json({\n        message: err.message\n      });\n      const {\n        name\n      } = req.body;\n      let image = null;\n\n      if (req.file !== undefined) {\n        image = req.file.filename;\n      }\n\n      const categoryData = new _src_models_categoryModel_js__WEBPACK_IMPORTED_MODULE_3__.Category({\n        name: name,\n        image: image\n      });\n      categoryData.save();\n\n      if (categoryData) {\n        return res.status(201).json({\n          data: categoryData,\n          message: \"Category Added Successfully\"\n        });\n      }\n    });\n  } catch (error) {\n    return res.status(500).json({\n      message: error.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9hZGQtY2F0ZWdvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1JLE9BQU8sR0FBR0oseURBQUEsQ0FBbUI7QUFDakNNLEVBQUFBLFdBQVcsRUFBRSxVQUFVQyxHQUFWLEVBQWVDLElBQWYsRUFBcUJDLEVBQXJCLEVBQXlCO0FBQ3BDLFVBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLFVBQU1DLFNBQVMsR0FBRyxVQUFsQixDQUZvQyxDQUlwQzs7QUFDQSxRQUFJLENBQUNWLG9EQUFBLENBQWNTLFVBQWQsQ0FBTCxFQUFnQztBQUM5QlQsTUFBQUEsbURBQUEsQ0FBYVMsVUFBYjtBQUNELEtBUG1DLENBU3BDOzs7QUFDQSxVQUFNSSxhQUFhLEdBQUdaLGdEQUFBLENBQVVRLFVBQVYsRUFBc0JDLFNBQXRCLENBQXRCOztBQUNBLFFBQUksQ0FBQ1Ysb0RBQUEsQ0FBY2EsYUFBZCxDQUFMLEVBQW1DO0FBQ2pDYixNQUFBQSxtREFBQSxDQUFhYSxhQUFiO0FBQ0Q7O0FBRURMLElBQUFBLEVBQUUsQ0FBQyxJQUFELEVBQU9LLGFBQVAsQ0FBRjtBQUNELEdBakJnQztBQWtCakNFLEVBQUFBLFFBQVEsRUFBRSxVQUFVVCxHQUFWLEVBQWVDLElBQWYsRUFBcUJDLEVBQXJCLEVBQXlCO0FBQ2pDLFVBQU1RLElBQUksR0FBR1QsSUFBSSxDQUFDVSxZQUFsQixDQURpQyxDQUNEOztBQUNoQyxVQUFNQyxHQUFHLEdBQUdqQixtREFBQSxDQUFhZSxJQUFiLENBQVosQ0FGaUMsQ0FFRDs7QUFDaEMsVUFBTUksT0FBTyxHQUFHSixJQUFJLENBQUNLLEtBQUwsQ0FBVyxHQUFYLENBQWhCLENBSGlDLENBR0E7O0FBQ2pDRCxJQUFBQSxPQUFPLENBQUNFLEdBQVI7QUFDQSxVQUFNQyxLQUFLLEdBQUdILE9BQU8sQ0FBQ04sSUFBUixDQUFhLEdBQWIsQ0FBZCxDQUxpQyxDQUtBOztBQUNqQyxVQUFNVSxRQUFRLEdBQUdELEtBQUssR0FBRyxHQUFSLEdBQWNFLElBQUksQ0FBQ0MsR0FBTCxFQUFkLEdBQTJCUixHQUE1QyxDQU5pQyxDQU1nQjs7QUFDakRWLElBQUFBLEVBQUUsQ0FBQyxJQUFELEVBQU9nQixRQUFQLENBQUY7QUFDRDtBQTFCZ0MsQ0FBbkIsQ0FBaEI7QUE2QkEsTUFBTUcsTUFBTSxHQUFHNUIsNkNBQU0sQ0FBQztBQUFFSSxFQUFBQSxPQUFPLEVBQUVBO0FBQVgsQ0FBRCxDQUFyQjtBQUVlLGVBQWV5QixJQUFmLENBQW9CdEIsR0FBcEIsRUFBeUJ1QixHQUF6QixFQUE4QjtBQUMzQyxNQUFJO0FBQ0YsVUFBTUMsV0FBVyxHQUFHSCxNQUFNLENBQUNJLE1BQVAsQ0FBYyxPQUFkLENBQXBCO0FBQ0FELElBQUFBLFdBQVcsQ0FBQ3hCLEdBQUQsRUFBTXVCLEdBQU4sRUFBVyxVQUFVRyxHQUFWLEVBQWU7QUFDbkMsVUFBSUEsR0FBSixFQUFTLE9BQU9ILEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFFBQUFBLE9BQU8sRUFBRUgsR0FBRyxDQUFDRztBQUFmLE9BQXJCLENBQVA7QUFFVCxZQUFNO0FBQUVuQixRQUFBQTtBQUFGLFVBQVdWLEdBQUcsQ0FBQzhCLElBQXJCO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBQ0EsVUFBSS9CLEdBQUcsQ0FBQ0MsSUFBSixLQUFhK0IsU0FBakIsRUFBNEI7QUFDMUJELFFBQUFBLEtBQUssR0FBRy9CLEdBQUcsQ0FBQ0MsSUFBSixDQUFTUSxRQUFqQjtBQUNEOztBQUVELFlBQU13QixZQUFZLEdBQUcsSUFBSXJDLGtFQUFKLENBQWE7QUFDaENjLFFBQUFBLElBQUksRUFBRUEsSUFEMEI7QUFFaENxQixRQUFBQSxLQUFLLEVBQUVBO0FBRnlCLE9BQWIsQ0FBckI7QUFJQUUsTUFBQUEsWUFBWSxDQUFDQyxJQUFiOztBQUNBLFVBQUlELFlBQUosRUFBa0I7QUFDaEIsZUFBT1YsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJPLFVBQUFBLElBQUksRUFBRUYsWUFEb0I7QUFFMUJKLFVBQUFBLE9BQU8sRUFBRTtBQUZpQixTQUFyQixDQUFQO0FBSUQ7QUFDRixLQXBCVSxDQUFYO0FBcUJELEdBdkJELENBdUJFLE9BQU9PLEtBQVAsRUFBYztBQUNkLFdBQU9iLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyxNQUFBQSxPQUFPLEVBQUVPLEtBQUssQ0FBQ1A7QUFEVyxLQUFyQixDQUFQO0FBR0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zpb3hlbi8uL3BhZ2VzL2FwaS9jYXRlZ29yaWVzL2FkZC1jYXRlZ29yeS5qcz8wNTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtdWx0ZXIgZnJvbSBcIm11bHRlclwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9tb2RlbHMvY2F0ZWdvcnlNb2RlbC5qc1wiO1xyXG5cclxuY29uc3Qgc3RvcmFnZSA9IG11bHRlci5kaXNrU3RvcmFnZSh7XHJcbiAgZGVzdGluYXRpb246IGZ1bmN0aW9uIChyZXEsIGZpbGUsIGNiKSB7XHJcbiAgICBjb25zdCB1cGxvYWRQYXRoID0gXCIuL3VwbG9hZHNcIjtcclxuICAgIGNvbnN0IHN1YmZvbGRlciA9IFwiY2F0ZWdvcnlcIjtcclxuXHJcbiAgICAvLyBDcmVhdGUgXCJ1cGxvYWRzXCIgZm9sZGVyIGlmIGl0IGRvZXNuJ3QgZXhpc3RcclxuICAgIGlmICghZnMuZXhpc3RzU3luYyh1cGxvYWRQYXRoKSkge1xyXG4gICAgICBmcy5ta2RpclN5bmModXBsb2FkUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIHN1YmZvbGRlciBpbnNpZGUgXCJ1cGxvYWRzXCJcclxuICAgIGNvbnN0IHN1YmZvbGRlclBhdGggPSBwYXRoLmpvaW4odXBsb2FkUGF0aCwgc3ViZm9sZGVyKTtcclxuICAgIGlmICghZnMuZXhpc3RzU3luYyhzdWJmb2xkZXJQYXRoKSkge1xyXG4gICAgICBmcy5ta2RpclN5bmMoc3ViZm9sZGVyUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2IobnVsbCwgc3ViZm9sZGVyUGF0aCk7XHJcbiAgfSxcclxuICBmaWxlbmFtZTogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBmaWxlLm9yaWdpbmFsbmFtZTsgLy8gYWJjLnBuZ1xyXG4gICAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKG5hbWUpOyAvLyAucG5nXHJcbiAgICBjb25zdCBuYW1lQXJyID0gbmFtZS5zcGxpdChcIi5cIik7IC8vIFthYmMscG5nXVxyXG4gICAgbmFtZUFyci5wb3AoKTtcclxuICAgIGNvbnN0IGZuYW1lID0gbmFtZUFyci5qb2luKFwiLlwiKTsgLy9hYmNcclxuICAgIGNvbnN0IGZ1bGxuYW1lID0gZm5hbWUgKyBcIi1cIiArIERhdGUubm93KCkgKyBleHQ7IC8vIGFiYy0xMjM0NS5wbmdcclxuICAgIGNiKG51bGwsIGZ1bGxuYW1lKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHVwbG9hZCA9IG11bHRlcih7IHN0b3JhZ2U6IHN0b3JhZ2UgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVwbG9hZEltYWdlID0gdXBsb2FkLnNpbmdsZShcImltYWdlXCIpO1xyXG4gICAgdXBsb2FkSW1hZ2UocmVxLCByZXMsIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcblxyXG4gICAgICBjb25zdCB7IG5hbWUgfSA9IHJlcS5ib2R5O1xyXG4gICAgICBsZXQgaW1hZ2UgPSBudWxsO1xyXG4gICAgICBpZiAocmVxLmZpbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGltYWdlID0gcmVxLmZpbGUuZmlsZW5hbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5RGF0YSA9IG5ldyBDYXRlZ29yeSh7XHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICBpbWFnZTogaW1hZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjYXRlZ29yeURhdGEuc2F2ZSgpO1xyXG4gICAgICBpZiAoY2F0ZWdvcnlEYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcclxuICAgICAgICAgIGRhdGE6IGNhdGVnb3J5RGF0YSxcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgQWRkZWQgU3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtdWx0ZXIiLCJmcyIsInBhdGgiLCJDYXRlZ29yeSIsInN0b3JhZ2UiLCJkaXNrU3RvcmFnZSIsImRlc3RpbmF0aW9uIiwicmVxIiwiZmlsZSIsImNiIiwidXBsb2FkUGF0aCIsInN1YmZvbGRlciIsImV4aXN0c1N5bmMiLCJta2RpclN5bmMiLCJzdWJmb2xkZXJQYXRoIiwiam9pbiIsImZpbGVuYW1lIiwibmFtZSIsIm9yaWdpbmFsbmFtZSIsImV4dCIsImV4dG5hbWUiLCJuYW1lQXJyIiwic3BsaXQiLCJwb3AiLCJmbmFtZSIsImZ1bGxuYW1lIiwiRGF0ZSIsIm5vdyIsInVwbG9hZCIsIlBPU1QiLCJyZXMiLCJ1cGxvYWRJbWFnZSIsInNpbmdsZSIsImVyciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiYm9keSIsImltYWdlIiwidW5kZWZpbmVkIiwiY2F0ZWdvcnlEYXRhIiwic2F2ZSIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories/add-category.js\n");

/***/ }),

/***/ "(api)/./src/models/categoryModel.js":
/*!*************************************!*\
  !*** ./src/models/categoryModel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Category\": () => (/* binding */ Category)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  image: {\n    type: String,\n    default: null\n  },\n  createdAt: {\n    type: Date,\n    default: Date.now()\n  }\n});\nconst Category = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Category) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Category\", CategorySchema); // export default mongoose.model(\"Category\", CategorySchema)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL2NhdGVnb3J5TW9kZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNRSxjQUFjLEdBQUcsSUFBSUQsNENBQUosQ0FBVztBQUNoQ0UsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLElBQUksRUFBRUMsTUFERjtBQUVKQyxJQUFBQSxRQUFRLEVBQUU7QUFGTixHQUQwQjtBQUtoQ0MsRUFBQUEsS0FBSyxFQUFFO0FBQ0xILElBQUFBLElBQUksRUFBRUMsTUFERDtBQUVMRyxJQUFBQSxPQUFPLEVBQUU7QUFGSixHQUx5QjtBQVNoQ0MsRUFBQUEsU0FBUyxFQUFFO0FBQ1RMLElBQUFBLElBQUksRUFBRU0sSUFERztBQUVURixJQUFBQSxPQUFPLEVBQUVFLElBQUksQ0FBQ0MsR0FBTDtBQUZBO0FBVHFCLENBQVgsQ0FBdkI7QUFlTyxNQUFNQyxRQUFRLEdBQUdaLGlFQUFBLElBQTRCQSxxREFBQSxDQUFlLFVBQWYsRUFBMkJFLGNBQTNCLENBQTdDLEVBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW94ZW4vLi9zcmMvbW9kZWxzL2NhdGVnb3J5TW9kZWwuanM/YzQ4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBDYXRlZ29yeVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgfSxcclxuICBjcmVhdGVkQXQ6IHtcclxuICAgIHR5cGU6IERhdGUsXHJcbiAgICBkZWZhdWx0OiBEYXRlLm5vdygpLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5ID0gbW9uZ29vc2UubW9kZWxzLkNhdGVnb3J5IHx8IG1vbmdvb3NlLm1vZGVsKFwiQ2F0ZWdvcnlcIiwgQ2F0ZWdvcnlTY2hlbWEpO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIkNhdGVnb3J5XCIsIENhdGVnb3J5U2NoZW1hKVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJDYXRlZ29yeVNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJpbWFnZSIsImRlZmF1bHQiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93IiwiQ2F0ZWdvcnkiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/models/categoryModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categories/add-category.js"));
module.exports = __webpack_exports__;

})();