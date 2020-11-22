/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvip"] = self["webpackChunkvip"] || []).push([["demo"],{

/***/ "./src/web/api/books/api.ts":
/*!**********************************!*\
  !*** ./src/web/api/books/api.ts ***!
  \**********************************/
/*! namespace exports */
/*! export getBookById [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getBooks [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBooks\": () => /* binding */ getBooks,\n/* harmony export */   \"getBookById\": () => /* binding */ getBookById\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar booksList = [{\n  id: 1,\n  title: 'React v17 - 即将来袭'\n}, {\n  id: 2,\n  title: 'TypeScript从0到精通'\n}, {\n  id: 3,\n  title: '后端我们使用了BFF层'\n}, {\n  id: 4,\n  title: 'Webpack使用了最新版本'\n}, {\n  id: 5,\n  title: '前端测试我们使用了Jest'\n}];\nvar booksDetails = [{\n  id: 1,\n  url: 'https://www.amazon.com/Elad-Elrom/e/B003XE8ICW'\n}, {\n  id: 2,\n  url: 'https://www.amazon.com/gp/product/B07VMD99YH/'\n}, {\n  id: 3,\n  url: 'https://www.amazon.com/gp/product/B01N5AIZ7G/'\n}, {\n  id: 4,\n  url: 'https://www.amazon.com/gp/product/B004VH5YZY'\n}, {\n  id: 5,\n  url: 'https://www.amazon.com/gp/product/1430219041'\n}];\nvar getBooks = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* () {\n    return new Promise(resolve => setTimeout(() => resolve(booksList), 500));\n  });\n\n  return function getBooks() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar getBookById = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator(function* (id) {\n    return new Promise(resolve => {\n      var details = booksDetails.find(s => s.id === id);\n      return setTimeout(() => resolve(details), 500);\n    });\n  });\n\n  return function getBookById(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://vip/./src/web/api/books/api.ts?");

/***/ }),

/***/ "./src/web/components/App/index.tsx":
/*!******************************************!*\
  !*** ./src/web/components/App/index.tsx ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/web/components/App/index.css\");\n;\n\n\nfunction App(_ref) {\n  var {\n    name\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"app-root\"\n  }, \"\\u6211\\u662F\\u5165\\u53E3\", name));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://vip/./src/web/components/App/index.tsx?");

/***/ }),

/***/ "./src/web/components/BooksPage/BookDetail.tsx":
/*!*****************************************************!*\
  !*** ./src/web/components/BooksPage/BookDetail.tsx ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _recoil_selectors_booksSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../recoil/selectors/booksSelectors */ \"./src/web/recoil/selectors/booksSelectors.ts\");\n;\n\n\n\nvar BookDetail = () => {\n  var currentBook = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_recoil_selectors_booksSelectors__WEBPACK_IMPORTED_MODULE_2__.getBookDetail);\n  return currentBook ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"View Book on Amazon:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"URL:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: currentBook.url,\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, currentBook.url))) : null;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookDetail);\n\n//# sourceURL=webpack://vip/./src/web/components/BooksPage/BookDetail.tsx?");

/***/ }),

/***/ "./src/web/components/BooksPage/BookPage.tsx":
/*!***************************************************!*\
  !*** ./src/web/components/BooksPage/BookPage.tsx ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _recoil_selectors_booksSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../recoil/selectors/booksSelectors */ \"./src/web/recoil/selectors/booksSelectors.ts\");\n/* harmony import */ var _recoil_atoms_booksAtoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../recoil/atoms/booksAtoms */ \"./src/web/recoil/atoms/booksAtoms.ts\");\n/* harmony import */ var _BookDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BookDetail */ \"./src/web/components/BooksPage/BookDetail.tsx\");\n;\n\n\n\n\n\nvar BooksPage = () => {\n  var books = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_recoil_selectors_booksSelectors__WEBPACK_IMPORTED_MODULE_2__.getAllBooks);\n  var [currentBookID, setCurrentBookID] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_recoil_atoms_booksAtoms__WEBPACK_IMPORTED_MODULE_3__.currentBookIDState);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"BooksPageMain\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Eli Elad Elrom Technology Books\"), books.map(book => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    key: book.id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: () => setCurrentBookID(book.id)\n  }, book.id === currentBookID && '- ', book.title))), currentBookID && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"\\u52A0\\u8F7D\\u56FE\\u4E66\\u8BE6\\u60C5\\u4E2D....\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BookDetail__WEBPACK_IMPORTED_MODULE_4__.default, null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BooksPage);\n\n//# sourceURL=webpack://vip/./src/web/components/BooksPage/BookPage.tsx?");

/***/ }),

/***/ "./src/web/recoil/atoms/booksAtoms.ts":
/*!********************************************!*\
  !*** ./src/web/recoil/atoms/booksAtoms.ts ***!
  \********************************************/
/*! namespace exports */
/*! export currentBookIDState [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentBookIDState\": () => /* binding */ currentBookIDState\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n;\nvar currentBookIDState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n  key: 'currentBookID',\n  default: ''\n});\n\n//# sourceURL=webpack://vip/./src/web/recoil/atoms/booksAtoms.ts?");

/***/ }),

/***/ "./src/web/recoil/selectors/booksSelectors.ts":
/*!****************************************************!*\
  !*** ./src/web/recoil/selectors/booksSelectors.ts ***!
  \****************************************************/
/*! namespace exports */
/*! export getAllBooks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getBookDetail [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllBooks\": () => /* binding */ getAllBooks,\n/* harmony export */   \"getBookDetail\": () => /* binding */ getBookDetail\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _web_api_books_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web/api/books/api */ \"./src/web/api/books/api.ts\");\n/* harmony import */ var _atoms_booksAtoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/booksAtoms */ \"./src/web/recoil/atoms/booksAtoms.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar getAllBooks = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({\n  key: 'GetAllBooks',\n  get: function () {\n    var _get = _asyncToGenerator(function* () {\n      var response = yield (0,_web_api_books_api__WEBPACK_IMPORTED_MODULE_1__.getBooks)();\n      return response;\n    });\n\n    function get() {\n      return _get.apply(this, arguments);\n    }\n\n    return get;\n  }()\n});\nvar getBookDetail = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({\n  key: 'GetBookDetail',\n  get: function () {\n    var _get3 = _asyncToGenerator(function* (_ref) {\n      var {\n        get: _get2\n      } = _ref;\n      var response = yield (0,_web_api_books_api__WEBPACK_IMPORTED_MODULE_1__.getBookById)(parseInt(_get2(_atoms_booksAtoms__WEBPACK_IMPORTED_MODULE_2__.currentBookIDState), 10));\n      return response;\n    });\n\n    function get(_x) {\n      return _get3.apply(this, arguments);\n    }\n\n    return get;\n  }()\n});\n\n//# sourceURL=webpack://vip/./src/web/recoil/selectors/booksSelectors.ts?");

/***/ }),

/***/ "./src/web/components/App/index.css":
/*!******************************************!*\
  !*** ./src/web/components/App/index.css ***!
  \******************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://vip/./src/web/components/App/index.css?");

/***/ })

}]);