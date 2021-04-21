webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ContactSection.jsx":
/*!***************************************!*\
  !*** ./components/ContactSection.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactSection; });\n/* harmony import */ var _Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/ike/Code/github.com/dasiot.site/dasiot.github.io/components/ContactSection.jsx\",\n    _this = undefined;\n\n\n\n\nvar ContactForm = function ContactForm() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n      initialValues: {\n        email: \"\",\n        name: \"\",\n        message: \"\"\n      },\n      validate: function validate(values) {\n        var errors = {};\n\n        if (!values.email) {\n          errors.email = \"Required\";\n        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {\n          errors.email = \"Invalid email address\";\n        }\n\n        if (!values.name) {\n          errors.name = \"Required\";\n        }\n\n        return errors;\n      },\n      onSubmit: function onSubmit(values, _ref) {\n        var setSubmitting = _ref.setSubmitting,\n            resetForm = _ref.resetForm;\n        setTimeout(function () {\n          fetch(\"https://restful-google-form.vercel.app/api/forms/1FAIpQLSeL3HNqTwTSuaXIzsHg3y6BHnKl6-R3r-bX2sff0wT2Fq4Xhg\", {\n            method: \"POST\",\n            credentials: \"include\",\n            headers: {\n              \"content-type\": \"application/json\"\n            },\n            body: JSON.stringify({\n              \"entry.762896947\": values.email,\n              \"entry.1167003003\": values.name,\n              \"entry.746630156\": values.message\n            })\n          }).then(function () {\n            setSubmitting(false);\n          })[\"catch\"](function () {});\n        }, 400);\n      },\n      children: function children(_ref2) {\n        var isSubmitting = _ref2.isSubmitting,\n            submitCount = _ref2.submitCount;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"container px-5 py-24 mx-auto flex\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n              className: \"text-gray-900 text-lg mb-1 font-medium title-font\",\n              children: \"Contact us with email\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"relative mb-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                  htmlFor: \"email\",\n                  className: \"leading-7 text-sm text-gray-600\",\n                  children: \"Email*\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n                  type: \"email\",\n                  name: \"email\",\n                  className: \"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n                  name: \"email\",\n                  component: \"div\",\n                  className: \"text-red-400\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 67,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"relative mb-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                  htmlFor: \"name\",\n                  className: \"leading-7 text-sm text-gray-600\",\n                  children: \"Name*\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n                  type: \"name\",\n                  name: \"name\",\n                  className: \"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 80,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n                  name: \"name\",\n                  component: \"div\",\n                  className: \"text-red-400\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 73,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"relative mb-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                  htmlFor: \"message\",\n                  className: \"leading-7 text-sm text-gray-600\",\n                  children: \"Message\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 92,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n                  type: \"text\",\n                  name: \"message\",\n                  className: \"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 98,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n                type: \"submit\",\n                disabled: isSubmitting,\n                className: \"w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg \".concat(isSubmitting && \"disabled:opacity-50\"),\n                children: \"Submit\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 104,\n                columnNumber: 15\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 13\n            }, _this), submitCount > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n              className: \"text-xs text-gray-500 mt-3\",\n              children: \"Thanks for contacting ur, we will reach out to you shortly.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 9\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = ContactForm;\nfunction ContactSection() {\n  var _jsxDEV2;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    className: \"text-gray-600 body-font relative mb-8\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute inset-0 bg-gray-300\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"iframe\", (_jsxDEV2 = {\n        width: \"100%\",\n        height: \"100%\",\n        frameBorder: \"0\",\n        scrolling: \"no\",\n        marginHeight: \"0\",\n        marginWidth: \"0\"\n      }, Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"scrolling\", \"no\"), Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"style\", {\n        filter: \"grayscale(0.5) contrast(1.2) opacity(0.4)\",\n        pointerEvents: \"none\"\n      }), Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"src\", \"https://maps.google.com/maps?ll=25.069082, 121.535371&width=100%25&height=600&hl=en&q=10452%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E7%8E%89%E9%96%80%E8%A1%971%E8%99%9F+(DasIot)&t=&z=14&ie=UTF8&iwloc=B&output=embed\"), _jsxDEV2), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ContactForm, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 128,\n    columnNumber: 5\n  }, this);\n}\n_c2 = ContactSection;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ContactForm\");\n$RefreshReg$(_c2, \"ContactSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi5qc3g/MGU3NyJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsImVtYWlsIiwibmFtZSIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJ0ZXN0Iiwic2V0U3VibWl0dGluZyIsInJlc2V0Rm9ybSIsInNldFRpbWVvdXQiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsImlzU3VibWl0dGluZyIsInN1Ym1pdENvdW50IiwiQ29udGFjdFNlY3Rpb24iLCJmaWx0ZXIiLCJwb2ludGVyRXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxzQkFDbEI7QUFBQSwyQkFDRSxxRUFBQyw2Q0FBRDtBQUNFLG1CQUFhLEVBQUU7QUFBRUMsYUFBSyxFQUFFLEVBQVQ7QUFBYUMsWUFBSSxFQUFFLEVBQW5CO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEMsT0FEakI7QUFFRSxjQUFRLEVBQUUsa0JBQUNDLE1BQUQsRUFBWTtBQUNwQixZQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFDQSxZQUFJLENBQUNELE1BQU0sQ0FBQ0gsS0FBWixFQUFtQjtBQUNqQkksZ0JBQU0sQ0FBQ0osS0FBUCxHQUFlLFVBQWY7QUFDRCxTQUZELE1BRU8sSUFDTCxDQUFDLDJDQUEyQ0ssSUFBM0MsQ0FBZ0RGLE1BQU0sQ0FBQ0gsS0FBdkQsQ0FESSxFQUVMO0FBQ0FJLGdCQUFNLENBQUNKLEtBQVAsR0FBZSx1QkFBZjtBQUNEOztBQUVELFlBQUksQ0FBQ0csTUFBTSxDQUFDRixJQUFaLEVBQWtCO0FBQ2hCRyxnQkFBTSxDQUFDSCxJQUFQLEdBQWMsVUFBZDtBQUNEOztBQUVELGVBQU9HLE1BQVA7QUFDRCxPQWpCSDtBQWtCRSxjQUFRLEVBQUUsa0JBQUNELE1BQUQsUUFBMEM7QUFBQSxZQUEvQkcsYUFBK0IsUUFBL0JBLGFBQStCO0FBQUEsWUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNsREMsa0JBQVUsQ0FBQyxZQUFNO0FBQ2ZDLGVBQUssQ0FDSCwyR0FERyxFQUVIO0FBQ0VDLGtCQUFNLEVBQUUsTUFEVjtBQUVFQyx1QkFBVyxFQUFFLFNBRmY7QUFHRUMsbUJBQU8sRUFBRTtBQUNQLDhCQUFnQjtBQURULGFBSFg7QUFNRUMsZ0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkIsaUNBQW1CWixNQUFNLENBQUNILEtBRFA7QUFFbkIsa0NBQW9CRyxNQUFNLENBQUNGLElBRlI7QUFHbkIsaUNBQW1CRSxNQUFNLENBQUNEO0FBSFAsYUFBZjtBQU5SLFdBRkcsQ0FBTCxDQWVHYyxJQWZILENBZVEsWUFBTTtBQUNWVix5QkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNELFdBakJILFdBa0JTLFlBQU0sQ0FBRSxDQWxCakI7QUFtQkQsU0FwQlMsRUFvQlAsR0FwQk8sQ0FBVjtBQXFCRCxPQXhDSDtBQUFBLGdCQTBDRztBQUFBLFlBQUdXLFlBQUgsU0FBR0EsWUFBSDtBQUFBLFlBQWlCQyxXQUFqQixTQUFpQkEsV0FBakI7QUFBQSw0QkFDQztBQUFLLG1CQUFTLEVBQUMsbUNBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsaUhBQWY7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUMsbURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRSxxRUFBQywyQ0FBRDtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxlQUFmO0FBQUEsd0NBQ0U7QUFDRSx5QkFBTyxFQUFDLE9BRFY7QUFFRSwyQkFBUyxFQUFDLGlDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBT0UscUVBQUMsNENBQUQ7QUFDRSxzQkFBSSxFQUFDLE9BRFA7QUFFRSxzQkFBSSxFQUFDLE9BRlA7QUFHRSwyQkFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRixlQVlFLHFFQUFDLG1EQUFEO0FBQ0Usc0JBQUksRUFBQyxPQURQO0FBRUUsMkJBQVMsRUFBQyxLQUZaO0FBR0UsMkJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBbUJFO0FBQUsseUJBQVMsRUFBQyxlQUFmO0FBQUEsd0NBQ0U7QUFDRSx5QkFBTyxFQUFDLE1BRFY7QUFFRSwyQkFBUyxFQUFDLGlDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBT0UscUVBQUMsNENBQUQ7QUFDRSxzQkFBSSxFQUFDLE1BRFA7QUFFRSxzQkFBSSxFQUFDLE1BRlA7QUFHRSwyQkFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRixlQVlFLHFFQUFDLG1EQUFEO0FBQ0Usc0JBQUksRUFBQyxNQURQO0FBRUUsMkJBQVMsRUFBQyxLQUZaO0FBR0UsMkJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQW5CRixlQXFDRTtBQUFLLHlCQUFTLEVBQUMsZUFBZjtBQUFBLHdDQUNFO0FBQ0UseUJBQU8sRUFBQyxTQURWO0FBRUUsMkJBQVMsRUFBQyxpQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQU9FLHFFQUFDLDRDQUFEO0FBQ0Usc0JBQUksRUFBQyxNQURQO0FBRUUsc0JBQUksRUFBQyxTQUZQO0FBR0UsMkJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXJDRixlQWtERTtBQUNFLG9CQUFJLEVBQUMsUUFEUDtBQUVFLHdCQUFRLEVBQUVELFlBRlo7QUFHRSx5QkFBUyxrSEFDUEEsWUFBWSxJQUFJLHFCQURULENBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixFQWdFR0MsV0FBVyxHQUFHLENBQWQsaUJBQ0M7QUFBRyx1QkFBUyxFQUFDLDRCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUExQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEa0I7QUFBQSxDQUFwQjs7S0FBTW5CLFc7QUEwSFMsU0FBU29CLGNBQVQsR0FBMEI7QUFBQTs7QUFDdkMsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsdUNBQW5CO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw2QkFDRTtBQUNFLGFBQUssRUFBQyxNQURSO0FBRUUsY0FBTSxFQUFDLE1BRlQ7QUFHRSxtQkFBVyxFQUFDLEdBSGQ7QUFJRSxpQkFBUyxFQUFDLElBSlo7QUFLRSxvQkFBWSxFQUFDLEdBTGY7QUFNRSxtQkFBVyxFQUFDO0FBTmQsOExBT1ksSUFQWixvTEFRUztBQUNMQyxjQUFNLDZDQUREO0FBRUxDLHFCQUFhLEVBQUU7QUFGVixPQVJULGtMQVlNLHNPQVpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFpQkUscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEO01BdEJ1QkYsYyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCwgRXJyb3JNZXNzYWdlLCBNZXNzYWdlIH0gZnJvbSBcImZvcm1pa1wiO1xuXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8Rm9ybWlrXG4gICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiBcIlwiLCBuYW1lOiBcIlwiLCBtZXNzYWdlOiBcIlwiIH19XG4gICAgICB2YWxpZGF0ZT17KHZhbHVlcykgPT4ge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgICAgICAgaWYgKCF2YWx1ZXMuZW1haWwpIHtcbiAgICAgICAgICBlcnJvcnMuZW1haWwgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpXG4gICAgICAgICkge1xuICAgICAgICAgIGVycm9ycy5lbWFpbCA9IFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXZhbHVlcy5uYW1lKSB7XG4gICAgICAgICAgZXJyb3JzLm5hbWUgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3JzO1xuICAgICAgfX1cbiAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHJlc2V0Rm9ybSB9KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGZldGNoKFxuICAgICAgICAgICAgXCJodHRwczovL3Jlc3RmdWwtZ29vZ2xlLWZvcm0udmVyY2VsLmFwcC9hcGkvZm9ybXMvMUZBSXBRTFNlTDNITnFUd1RTdWFYSXpzSGczeTZCSG5LbDYtUjNyLWJYMnNmZjB3VDJGcTRYaGdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBcImVudHJ5Ljc2Mjg5Njk0N1wiOiB2YWx1ZXMuZW1haWwsXG4gICAgICAgICAgICAgICAgXCJlbnRyeS4xMTY3MDAzMDAzXCI6IHZhbHVlcy5uYW1lLFxuICAgICAgICAgICAgICAgIFwiZW50cnkuNzQ2NjMwMTU2XCI6IHZhbHVlcy5tZXNzYWdlLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHsoeyBpc1N1Ym1pdHRpbmcsIHN1Ym1pdENvdW50IH0pID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNSBweS0yNCBteC1hdXRvIGZsZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8zIG1kOnctMS8yIGJnLXdoaXRlIHJvdW5kZWQtbGcgcC04IGZsZXggZmxleC1jb2wgbWQ6bWwtYXV0byB3LWZ1bGwgbXQtMTAgbWQ6bXQtMCByZWxhdGl2ZSB6LTEwIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgdGV4dC1sZyBtYi0xIGZvbnQtbWVkaXVtIHRpdGxlLWZvbnRcIj5cbiAgICAgICAgICAgICAgQ29udGFjdCB1cyB3aXRoIGVtYWlsXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWItNFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlYWRpbmctNyB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEVtYWlsKlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtMjAwIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0xIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWItNFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGluZy03IHRleHQtc20gdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTmFtZSpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS0yMDAgdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTEgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlYWRpbmctNyB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE1lc3NhZ2VcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS0yMDAgaC0zMiB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMSBweC0zIHJlc2l6ZS1ub25lIGxlYWRpbmctNiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCBib3JkZXItMCBweS0yIHB4LTYgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWJsdWUtNjAwIHJvdW5kZWQgdGV4dC1sZyAke1xuICAgICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nICYmIFwiZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICB7c3VibWl0Q291bnQgPiAwICYmIChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG10LTNcIj5cbiAgICAgICAgICAgICAgICBUaGFua3MgZm9yIGNvbnRhY3RpbmcgdXIsIHdlIHdpbGwgcmVhY2ggb3V0IHRvIHlvdSBzaG9ydGx5LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9Gb3JtaWs+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdFNlY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnQgcmVsYXRpdmUgbWItOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYXktMzAwXCI+XG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgc2Nyb2xsaW5nPVwibm9cIlxuICAgICAgICAgIG1hcmdpbkhlaWdodD1cIjBcIlxuICAgICAgICAgIG1hcmdpbldpZHRoPVwiMFwiXG4gICAgICAgICAgc2Nyb2xsaW5nPVwibm9cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmaWx0ZXI6IGBncmF5c2NhbGUoMC41KSBjb250cmFzdCgxLjIpIG9wYWNpdHkoMC40KWAsXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/bGw9MjUuMDY5MDgyLCAxMjEuNTM1MzcxJmFtcDt3aWR0aD0xMDAlMjUmYW1wO2hlaWdodD02MDAmYW1wO2hsPWVuJmFtcDtxPTEwNDUyJUU1JThGJUIwJUU1JThDJTk3JUU1JUI4JTgyJUU0JUI4JUFEJUU1JUIxJUIxJUU1JThEJTgwJUU3JThFJTg5JUU5JTk2JTgwJUU4JUExJTk3MSVFOCU5OSU5RisoRGFzSW90KSZhbXA7dD0mYW1wO3o9MTQmYW1wO2llPVVURjgmYW1wO2l3bG9jPUImYW1wO291dHB1dD1lbWJlZFwiXG4gICAgICAgID48L2lmcmFtZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbnRhY3RGb3JtIC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContactSection.jsx\n");

/***/ })

})