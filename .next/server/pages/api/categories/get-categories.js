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
exports.id = "pages/api/categories/get-categories";
exports.ids = ["pages/api/categories/get-categories"];
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

/***/ "(api)/./pages/api/categories/get-categories.js":
/*!************************************************!*\
  !*** ./pages/api/categories/get-categories.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _src_models_categoryModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/models/categoryModel */ \"(api)/./src/models/categoryModel.js\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst storage = multer__WEBPACK_IMPORTED_MODULE_1___default().diskStorage({\n  destination: function (req, file, cb) {\n    const uploadPath = \"./uploads\";\n    const subfolder = \"category\"; // Create \"uploads\" folder if it doesn't exist\n\n    if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(uploadPath)) {\n      fs__WEBPACK_IMPORTED_MODULE_2___default().mkdirSync(uploadPath);\n    } // Create subfolder inside \"uploads\"\n\n\n    const subfolderPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(uploadPath, subfolder);\n\n    if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(subfolderPath)) {\n      fs__WEBPACK_IMPORTED_MODULE_2___default().mkdirSync(subfolderPath);\n    }\n\n    cb(null, subfolderPath);\n  },\n  filename: function (req, file, cb) {\n    const name = file.originalname; // abc.png\n\n    const ext = path__WEBPACK_IMPORTED_MODULE_3___default().extname(name); // .png\n\n    const nameArr = name.split(\".\"); // [abc,png]\n\n    nameArr.pop();\n    const fname = nameArr.join(\".\"); //abc\n\n    const fullname = fname + \"-\" + Date.now() + ext; // abc-12345.png\n\n    cb(null, fullname);\n  }\n});\nconst upload = multer__WEBPACK_IMPORTED_MODULE_1___default()({\n  storage: storage\n});\nasync function GET(req, res) {\n  try {\n    const categoryData = await _src_models_categoryModel__WEBPACK_IMPORTED_MODULE_0__.Category.find();\n\n    if (categoryData) {\n      return res.status(200).json({\n        data: categoryData,\n        message: \"Success\"\n      });\n    }\n  } catch (error) {\n    return res.status(500).json({\n      message: error.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9nZXQtY2F0ZWdvcmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUksT0FBTyxHQUFHSCx5REFBQSxDQUFtQjtBQUNqQ0ssRUFBQUEsV0FBVyxFQUFFLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQkMsRUFBckIsRUFBeUI7QUFDcEMsVUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsVUFBTUMsU0FBUyxHQUFHLFVBQWxCLENBRm9DLENBSXBDOztBQUNBLFFBQUksQ0FBQ1Qsb0RBQUEsQ0FBY1EsVUFBZCxDQUFMLEVBQWdDO0FBQzlCUixNQUFBQSxtREFBQSxDQUFhUSxVQUFiO0FBQ0QsS0FQbUMsQ0FTcEM7OztBQUNBLFVBQU1JLGFBQWEsR0FBR1gsZ0RBQUEsQ0FBVU8sVUFBVixFQUFzQkMsU0FBdEIsQ0FBdEI7O0FBQ0EsUUFBSSxDQUFDVCxvREFBQSxDQUFjWSxhQUFkLENBQUwsRUFBbUM7QUFDakNaLE1BQUFBLG1EQUFBLENBQWFZLGFBQWI7QUFDRDs7QUFFREwsSUFBQUEsRUFBRSxDQUFDLElBQUQsRUFBT0ssYUFBUCxDQUFGO0FBQ0QsR0FqQmdDO0FBa0JqQ0UsRUFBQUEsUUFBUSxFQUFFLFVBQVVULEdBQVYsRUFBZUMsSUFBZixFQUFxQkMsRUFBckIsRUFBeUI7QUFDakMsVUFBTVEsSUFBSSxHQUFHVCxJQUFJLENBQUNVLFlBQWxCLENBRGlDLENBQ0Q7O0FBQ2hDLFVBQU1DLEdBQUcsR0FBR2hCLG1EQUFBLENBQWFjLElBQWIsQ0FBWixDQUZpQyxDQUVEOztBQUNoQyxVQUFNSSxPQUFPLEdBQUdKLElBQUksQ0FBQ0ssS0FBTCxDQUFXLEdBQVgsQ0FBaEIsQ0FIaUMsQ0FHQTs7QUFDakNELElBQUFBLE9BQU8sQ0FBQ0UsR0FBUjtBQUNBLFVBQU1DLEtBQUssR0FBR0gsT0FBTyxDQUFDTixJQUFSLENBQWEsR0FBYixDQUFkLENBTGlDLENBS0E7O0FBQ2pDLFVBQU1VLFFBQVEsR0FBR0QsS0FBSyxHQUFHLEdBQVIsR0FBY0UsSUFBSSxDQUFDQyxHQUFMLEVBQWQsR0FBMkJSLEdBQTVDLENBTmlDLENBTWdCOztBQUNqRFYsSUFBQUEsRUFBRSxDQUFDLElBQUQsRUFBT2dCLFFBQVAsQ0FBRjtBQUNEO0FBMUJnQyxDQUFuQixDQUFoQjtBQTZCQSxNQUFNRyxNQUFNLEdBQUczQiw2Q0FBTSxDQUFDO0FBQUVHLEVBQUFBLE9BQU8sRUFBRUE7QUFBWCxDQUFELENBQXJCO0FBRWUsZUFBZXlCLEdBQWYsQ0FBbUJ0QixHQUFuQixFQUF3QnVCLEdBQXhCLEVBQTZCO0FBQzFDLE1BQUk7QUFDRixVQUFNQyxZQUFZLEdBQUcsTUFBTS9CLG9FQUFBLEVBQTNCOztBQUNBLFFBQUkrQixZQUFKLEVBQWtCO0FBQ2hCLGFBQU9ELEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyxRQUFBQSxJQUFJLEVBQUVKLFlBRG9CO0FBRTFCSyxRQUFBQSxPQUFPLEVBQUU7QUFGaUIsT0FBckIsQ0FBUDtBQUlEO0FBQ0YsR0FSRCxDQVFFLE9BQU9DLEtBQVAsRUFBYztBQUNkLFdBQU9QLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCRSxNQUFBQSxPQUFPLEVBQUVDLEtBQUssQ0FBQ0Q7QUFEVyxLQUFyQixDQUFQO0FBR0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zpb3hlbi8uL3BhZ2VzL2FwaS9jYXRlZ29yaWVzL2dldC1jYXRlZ29yaWVzLmpzPzZhZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL21vZGVscy9jYXRlZ29yeU1vZGVsXCI7XHJcbmltcG9ydCBtdWx0ZXIgZnJvbSBcIm11bHRlclwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5jb25zdCBzdG9yYWdlID0gbXVsdGVyLmRpc2tTdG9yYWdlKHtcclxuICBkZXN0aW5hdGlvbjogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcclxuICAgIGNvbnN0IHVwbG9hZFBhdGggPSBcIi4vdXBsb2Fkc1wiO1xyXG4gICAgY29uc3Qgc3ViZm9sZGVyID0gXCJjYXRlZ29yeVwiO1xyXG5cclxuICAgIC8vIENyZWF0ZSBcInVwbG9hZHNcIiBmb2xkZXIgaWYgaXQgZG9lc24ndCBleGlzdFxyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHVwbG9hZFBhdGgpKSB7XHJcbiAgICAgIGZzLm1rZGlyU3luYyh1cGxvYWRQYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgc3ViZm9sZGVyIGluc2lkZSBcInVwbG9hZHNcIlxyXG4gICAgY29uc3Qgc3ViZm9sZGVyUGF0aCA9IHBhdGguam9pbih1cGxvYWRQYXRoLCBzdWJmb2xkZXIpO1xyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHN1YmZvbGRlclBhdGgpKSB7XHJcbiAgICAgIGZzLm1rZGlyU3luYyhzdWJmb2xkZXJQYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYihudWxsLCBzdWJmb2xkZXJQYXRoKTtcclxuICB9LFxyXG4gIGZpbGVuYW1lOiBmdW5jdGlvbiAocmVxLCBmaWxlLCBjYikge1xyXG4gICAgY29uc3QgbmFtZSA9IGZpbGUub3JpZ2luYWxuYW1lOyAvLyBhYmMucG5nXHJcbiAgICBjb25zdCBleHQgPSBwYXRoLmV4dG5hbWUobmFtZSk7IC8vIC5wbmdcclxuICAgIGNvbnN0IG5hbWVBcnIgPSBuYW1lLnNwbGl0KFwiLlwiKTsgLy8gW2FiYyxwbmddXHJcbiAgICBuYW1lQXJyLnBvcCgpO1xyXG4gICAgY29uc3QgZm5hbWUgPSBuYW1lQXJyLmpvaW4oXCIuXCIpOyAvL2FiY1xyXG4gICAgY29uc3QgZnVsbG5hbWUgPSBmbmFtZSArIFwiLVwiICsgRGF0ZS5ub3coKSArIGV4dDsgLy8gYWJjLTEyMzQ1LnBuZ1xyXG4gICAgY2IobnVsbCwgZnVsbG5hbWUpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgdXBsb2FkID0gbXVsdGVyKHsgc3RvcmFnZTogc3RvcmFnZSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYXRlZ29yeURhdGEgPSBhd2FpdCBDYXRlZ29yeS5maW5kKCk7XHJcbiAgICBpZiAoY2F0ZWdvcnlEYXRhKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgZGF0YTogY2F0ZWdvcnlEYXRhLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiU3VjY2Vzc1wiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJtdWx0ZXIiLCJmcyIsInBhdGgiLCJzdG9yYWdlIiwiZGlza1N0b3JhZ2UiLCJkZXN0aW5hdGlvbiIsInJlcSIsImZpbGUiLCJjYiIsInVwbG9hZFBhdGgiLCJzdWJmb2xkZXIiLCJleGlzdHNTeW5jIiwibWtkaXJTeW5jIiwic3ViZm9sZGVyUGF0aCIsImpvaW4iLCJmaWxlbmFtZSIsIm5hbWUiLCJvcmlnaW5hbG5hbWUiLCJleHQiLCJleHRuYW1lIiwibmFtZUFyciIsInNwbGl0IiwicG9wIiwiZm5hbWUiLCJmdWxsbmFtZSIsIkRhdGUiLCJub3ciLCJ1cGxvYWQiLCJHRVQiLCJyZXMiLCJjYXRlZ29yeURhdGEiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJtZXNzYWdlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories/get-categories.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categories/get-categories.js"));
module.exports = __webpack_exports__;

})();