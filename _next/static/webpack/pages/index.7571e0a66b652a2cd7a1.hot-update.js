webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ContactSection.jsx":
/*!***************************************!*\
  !*** ./components/ContactSection.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactSection; });\n/* harmony import */ var _Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/ike/Code/github.com/dasiot.site/dasiot.github.io/components/ContactSection.jsx\",\n    _this = undefined;\n\n\n\n\nvar ContactForm = function ContactForm() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n      initialValues: {\n        email: \"\",\n        name: \"\",\n        message: \"\"\n      },\n      validate: function validate(values) {\n        var errors = {};\n\n        if (!values.email) {\n          errors.email = \"Required\";\n        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {\n          errors.email = \"Invalid email address\";\n        }\n\n        if (!values.name) {\n          errors.name = \"Required\";\n        }\n\n        return errors;\n      },\n      onSubmit: function onSubmit(values, _ref) {\n        var setSubmitting = _ref.setSubmitting;\n        setTimeout(function () {\n          alert(JSON.stringify(values, null, 2));\n          setSubmitting(false);\n        }, 400);\n      },\n      children: function children(_ref2) {\n        var isSubmitting = _ref2.isSubmitting;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"container px-5 py-24 mx-auto flex\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n              className: \"text-gray-900 text-lg mb-1 font-medium title-font\",\n              children: \"Contact us with email\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"relative mb-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                  htmlFor: \"email\",\n                  className: \"leading-7 text-sm text-gray-600\",\n                  children: \"Email*\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 39,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n                  type: \"email\",\n                  name: \"email\",\n                  className: \"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n                  name: \"email\",\n                  component: \"div\",\n                  className: \"text-red-400\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 50,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"relative mb-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                  htmlFor: \"name\",\n                  className: \"leading-7 text-sm text-gray-600\",\n                  children: \"Name*\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n                  type: \"name\",\n                  name: \"name\",\n                  className: \"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 63,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n                  name: \"name\",\n                  component: \"div\",\n                  className: \"text-red-400\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 68,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"relative mb-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                  htmlFor: \"message\",\n                  className: \"leading-7 text-sm text-gray-600\",\n                  children: \"Message\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n                  type: \"message\",\n                  name: \"message\",\n                  className: \"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 81,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n                type: \"submit\",\n                disabled: isSubmitting,\n                className: \"w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg\",\n                children: \"Submit\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 15\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = ContactForm;\nfunction ContactSection() {\n  var _jsxDEV2;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    className: \"text-gray-600 body-font relative mb-8\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute inset-0 bg-gray-300\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"iframe\", (_jsxDEV2 = {\n        width: \"100%\",\n        height: \"100%\",\n        frameBorder: \"0\",\n        scrolling: \"no\",\n        marginHeight: \"0\",\n        marginWidth: \"0\"\n      }, Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"scrolling\", \"no\"), Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"style\", {\n        filter: \"grayscale(0.5) contrast(1.2) opacity(0.4)\",\n        pointerEvents: \"none\"\n      }), Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"src\", \"https://maps.google.com/maps?ll=25.069082, 121.535371&width=100%25&height=600&hl=en&q=10452%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E7%8E%89%E9%96%80%E8%A1%971%E8%99%9F+(DasIot)&t=&z=14&ie=UTF8&iwloc=B&output=embed\"), _jsxDEV2), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ContactForm, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 104,\n    columnNumber: 5\n  }, this);\n}\n_c2 = ContactSection;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ContactForm\");\n$RefreshReg$(_c2, \"ContactSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi5qc3g/MGU3NyJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsImVtYWlsIiwibmFtZSIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJ0ZXN0Iiwic2V0U3VibWl0dGluZyIsInNldFRpbWVvdXQiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc1N1Ym1pdHRpbmciLCJDb250YWN0U2VjdGlvbiIsImZpbHRlciIsInBvaW50ZXJFdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLHNCQUNsQjtBQUFBLDJCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsbUJBQWEsRUFBRTtBQUFFQyxhQUFLLEVBQUUsRUFBVDtBQUFhQyxZQUFJLEVBQUUsRUFBbkI7QUFBdUJDLGVBQU8sRUFBRTtBQUFoQyxPQURqQjtBQUVFLGNBQVEsRUFBRSxrQkFBQ0MsTUFBRCxFQUFZO0FBQ3BCLFlBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUNBLFlBQUksQ0FBQ0QsTUFBTSxDQUFDSCxLQUFaLEVBQW1CO0FBQ2pCSSxnQkFBTSxDQUFDSixLQUFQLEdBQWUsVUFBZjtBQUNELFNBRkQsTUFFTyxJQUNMLENBQUMsMkNBQTJDSyxJQUEzQyxDQUFnREYsTUFBTSxDQUFDSCxLQUF2RCxDQURJLEVBRUw7QUFDQUksZ0JBQU0sQ0FBQ0osS0FBUCxHQUFlLHVCQUFmO0FBQ0Q7O0FBRUQsWUFBSSxDQUFDRyxNQUFNLENBQUNGLElBQVosRUFBa0I7QUFDaEJHLGdCQUFNLENBQUNILElBQVAsR0FBYyxVQUFkO0FBQ0Q7O0FBRUQsZUFBT0csTUFBUDtBQUNELE9BakJIO0FBa0JFLGNBQVEsRUFBRSxrQkFBQ0QsTUFBRCxRQUErQjtBQUFBLFlBQXBCRyxhQUFvQixRQUFwQkEsYUFBb0I7QUFDdkNDLGtCQUFVLENBQUMsWUFBTTtBQUNm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bUJBQVcsRUFBQztBQU5kLDhMQU9ZLElBUFosb0xBUVM7QUFDTEMsY0FBTSw2Q0FERDtBQUVMQyxxQkFBYSxFQUFFO0FBRlYsT0FSVCxrTEFZTSxzT0FaTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBaUJFLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDtNQXRCdUJGLGMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQsIEVycm9yTWVzc2FnZSB9IGZyb20gXCJmb3JtaWtcIjtcblxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17eyBlbWFpbDogXCJcIiwgbmFtZTogXCJcIiwgbWVzc2FnZTogXCJcIiB9fVxuICAgICAgdmFsaWRhdGU9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3JzID0ge307XG4gICAgICAgIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gICAgICAgICAgZXJyb3JzLmVtYWlsID0gXCJSZXF1aXJlZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsdWVzLmVtYWlsKVxuICAgICAgICApIHtcbiAgICAgICAgICBlcnJvcnMuZW1haWwgPSBcIkludmFsaWQgZW1haWwgYWRkcmVzc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF2YWx1ZXMubmFtZSkge1xuICAgICAgICAgIGVycm9ycy5uYW1lID0gXCJSZXF1aXJlZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9ycztcbiAgICAgIH19XG4gICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nIH0pID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG4gICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHsoeyBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC01IHB5LTI0IG14LWF1dG8gZmxleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzMgbWQ6dy0xLzIgYmctd2hpdGUgcm91bmRlZC1sZyBwLTggZmxleCBmbGV4LWNvbCBtZDptbC1hdXRvIHctZnVsbCBtdC0xMCBtZDptdC0wIHJlbGF0aXZlIHotMTAgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCB0ZXh0LWxnIG1iLTEgZm9udC1tZWRpdW0gdGl0bGUtZm9udFwiPlxuICAgICAgICAgICAgICBDb250YWN0IHVzIHdpdGggZW1haWxcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGluZy03IHRleHQtc20gdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRW1haWwqXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS0yMDAgdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTEgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNDAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkaW5nLTcgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBOYW1lKlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTIwMCB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMSBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWItNFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGluZy03IHRleHQtc20gdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTWVzc2FnZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTIwMCBoLTMyIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0xIHB4LTMgcmVzaXplLW5vbmUgbGVhZGluZy02IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIGJvcmRlci0wIHB5LTIgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctYmx1ZS02MDAgcm91bmRlZCB0ZXh0LWxnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RTZWN0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgYm9keS1mb250IHJlbGF0aXZlIG1iLThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmF5LTMwMFwiPlxuICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgIHNjcm9sbGluZz1cIm5vXCJcbiAgICAgICAgICBtYXJnaW5IZWlnaHQ9XCIwXCJcbiAgICAgICAgICBtYXJnaW5XaWR0aD1cIjBcIlxuICAgICAgICAgIHNjcm9sbGluZz1cIm5vXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZmlsdGVyOiBgZ3JheXNjYWxlKDAuNSkgY29udHJhc3QoMS4yKSBvcGFjaXR5KDAuNClgLFxuICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzcmM9XCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzP2xsPTI1LjA2OTA4MiwgMTIxLjUzNTM3MSZhbXA7d2lkdGg9MTAwJTI1JmFtcDtoZWlnaHQ9NjAwJmFtcDtobD1lbiZhbXA7cT0xMDQ1MiVFNSU4RiVCMCVFNSU4QyU5NyVFNSVCOCU4MiVFNCVCOCVBRCVFNSVCMSVCMSVFNSU4RCU4MCVFNyU4RSU4OSVFOSU5NiU4MCVFOCVBMSU5NzElRTglOTklOUYrKERhc0lvdCkmYW1wO3Q9JmFtcDt6PTE0JmFtcDtpZT1VVEY4JmFtcDtpd2xvYz1CJmFtcDtvdXRwdXQ9ZW1iZWRcIlxuICAgICAgICA+PC9pZnJhbWU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb250YWN0Rm9ybSAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContactSection.jsx\n");

/***/ })

})