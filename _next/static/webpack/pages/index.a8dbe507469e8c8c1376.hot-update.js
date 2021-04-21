webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ContactSection.jsx":
/*!***************************************!*\
  !*** ./components/ContactSection.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactSection; });\n/* harmony import */ var _Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/ike/Code/github.com/dasiot.site/dasiot.github.io/components/ContactSection.jsx\",\n    _this = undefined;\n\n\n\n\nvar ContactForm = function ContactForm() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n      initialValues: {\n        email: \"\",\n        name: \"\",\n        message: \"\",\n        submit: \"\"\n      },\n      validate: function validate(values) {\n        var errors = {};\n\n        if (!values.email) {\n          errors.email = \"Required\";\n        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {\n          errors.email = \"Invalid email address\";\n        }\n\n        if (!values.name) {\n          errors.name = \"Required\";\n        }\n\n        return errors;\n      },\n      onSubmit: function onSubmit(values, actions) {\n        setTimeout(function () {\n          fetch(\"https://restful-google-form.vercel.app/api/forms/1FAIpQLSeL3HNqTwTSuaXIzsHg3y6BHnKl6-R3r-bX2sff0wT2Fq4Xhg\", {\n            method: \"POST\",\n            headers: {\n              \"content-type\": \"application/json\"\n            },\n            body: JSON.stringify({\n              \"entry.762896947\": values.email,\n              \"entry.1167003003\": values.name,\n              \"entry.746630156\": values.message\n            })\n          }).then(function () {\n            actions.setSubmitting(false);\n            actions.resetForm();\n          })[\"catch\"](function () {\n            actions.setErrors({\n              submit: \"Fail to submit, please retry later...\"\n            });\n            actions.setSubmitting(false);\n          });\n        }, 500);\n      },\n      children: function children(formik) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"container px-5 py-24 mx-auto flex\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n              className: \"text-gray-900 text-lg mb-1 font-medium title-font\",\n              children: \"Contact us with email\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"relative mb-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                  htmlFor: \"email\",\n                  className: \"leading-7 text-sm text-gray-600\",\n                  children: \"Email*\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 61,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n                  type: \"email\",\n                  name: \"email\",\n                  className: \"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 67,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n                  name: \"email\",\n                  component: \"div\",\n                  className: \"text-red-400\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"relative mb-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                  htmlFor: \"name\",\n                  className: \"leading-7 text-sm text-gray-600\",\n                  children: \"Name*\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 79,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n                  type: \"name\",\n                  name: \"name\",\n                  className: \"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n                  name: \"name\",\n                  component: \"div\",\n                  className: \"text-red-400\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 90,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"relative mb-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                  htmlFor: \"message\",\n                  className: \"leading-7 text-sm text-gray-600\",\n                  children: \"Message\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 97,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n                  type: \"text\",\n                  name: \"message\",\n                  className: \"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 103,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 96,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n                type: \"submit\",\n                disabled: formik.isSubmitting,\n                className: \"w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg \".concat(formik.isSubmitting ? \"disabled:opacity-50\" : \"\"),\n                children: \"Submit\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 109,\n                columnNumber: 15\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n              name: \"submit\",\n              component: \"p\",\n              className: \"text-xs text-red-400 mt-3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 13\n            }, _this), formik.submitCount > 0 && !formik.errors.submit && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n              className: \"text-xs text-gray-500 mt-3\",\n              children: \"Thanks for contacting us, we will reach out to you shortly.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 9\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = ContactForm;\nfunction ContactSection() {\n  var _jsxDEV2;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    className: \"text-gray-600 body-font relative mb-8\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute inset-0 bg-gray-300\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"iframe\", (_jsxDEV2 = {\n        width: \"100%\",\n        height: \"100%\",\n        frameBorder: \"0\",\n        scrolling: \"no\",\n        marginHeight: \"0\",\n        marginWidth: \"0\"\n      }, Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"scrolling\", \"no\"), Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"style\", {\n        filter: \"grayscale(0.5) contrast(1.2) opacity(0.4)\",\n        pointerEvents: \"none\"\n      }), Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"src\", \"https://maps.google.com/maps?ll=25.069082, 121.535371&width=100%25&height=600&hl=en&q=10452%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E7%8E%89%E9%96%80%E8%A1%971%E8%99%9F+(DasIot)&t=&z=14&ie=UTF8&iwloc=B&output=embed\"), _jsxDEV2), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ContactForm, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 138,\n    columnNumber: 5\n  }, this);\n}\n_c2 = ContactSection;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ContactForm\");\n$RefreshReg$(_c2, \"ContactSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi5qc3g/MGU3NyJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsImVtYWlsIiwibmFtZSIsIm1lc3NhZ2UiLCJzdWJtaXQiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJ0ZXN0IiwiYWN0aW9ucyIsInNldFRpbWVvdXQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJzZXRTdWJtaXR0aW5nIiwicmVzZXRGb3JtIiwic2V0RXJyb3JzIiwiZm9ybWlrIiwiaXNTdWJtaXR0aW5nIiwic3VibWl0Q291bnQiLCJDb250YWN0U2VjdGlvbiIsImZpbHRlciIsInBvaW50ZXJFdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLHNCQUNsQjtBQUFBLDJCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsbUJBQWEsRUFBRTtBQUFFQyxhQUFLLEVBQUUsRUFBVDtBQUFhQyxZQUFJLEVBQUUsRUFBbkI7QUFBdUJDLGVBQU8sRUFBRSxFQUFoQztBQUFvQ0MsY0FBTSxFQUFFO0FBQTVDLE9BRGpCO0FBRUUsY0FBUSxFQUFFLGtCQUFDQyxNQUFELEVBQVk7QUFDcEIsWUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsWUFBSSxDQUFDRCxNQUFNLENBQUNKLEtBQVosRUFBbUI7QUFDakJLLGdCQUFNLENBQUNMLEtBQVAsR0FBZSxVQUFmO0FBQ0QsU0FGRCxNQUVPLElBQ0wsQ0FBQywyQ0FBMkNNLElBQTNDLENBQWdERixNQUFNLENBQUNKLEtBQXZELENBREksRUFFTDtBQUNBSyxnQkFBTSxDQUFDTCxLQUFQLEdBQWUsdUJBQWY7QUFDRDs7QUFFRCxZQUFJLENBQUNJLE1BQU0sQ0FBQ0gsSUFBWixFQUFrQjtBQUNoQkksZ0JBQU0sQ0FBQ0osSUFBUCxHQUFjLFVBQWQ7QUFD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QUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDtNQXRCdUJGLGMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQsIEVycm9yTWVzc2FnZSB9IGZyb20gXCJmb3JtaWtcIjtcblxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17eyBlbWFpbDogXCJcIiwgbmFtZTogXCJcIiwgbWVzc2FnZTogXCJcIiwgc3VibWl0OiBcIlwiIH19XG4gICAgICB2YWxpZGF0ZT17KHZhbHVlcykgPT4ge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgICAgICAgaWYgKCF2YWx1ZXMuZW1haWwpIHtcbiAgICAgICAgICBlcnJvcnMuZW1haWwgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpXG4gICAgICAgICkge1xuICAgICAgICAgIGVycm9ycy5lbWFpbCA9IFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXZhbHVlcy5uYW1lKSB7XG4gICAgICAgICAgZXJyb3JzLm5hbWUgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3JzO1xuICAgICAgfX1cbiAgICAgIG9uU3VibWl0PXsodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGZldGNoKFxuICAgICAgICAgICAgXCJodHRwczovL3Jlc3RmdWwtZ29vZ2xlLWZvcm0udmVyY2VsLmFwcC9hcGkvZm9ybXMvMUZBSXBRTFNlTDNITnFUd1RTdWFYSXpzSGczeTZCSG5LbDYtUjNyLWJYMnNmZjB3VDJGcTRYaGdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgXCJlbnRyeS43NjI4OTY5NDdcIjogdmFsdWVzLmVtYWlsLFxuICAgICAgICAgICAgICAgIFwiZW50cnkuMTE2NzAwMzAwM1wiOiB2YWx1ZXMubmFtZSxcbiAgICAgICAgICAgICAgICBcImVudHJ5Ljc0NjYzMDE1NlwiOiB2YWx1ZXMubWVzc2FnZSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICBhY3Rpb25zLnJlc2V0Rm9ybSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgIGFjdGlvbnMuc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IFwiRmFpbCB0byBzdWJtaXQsIHBsZWFzZSByZXRyeSBsYXRlci4uLlwiLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7KGZvcm1paykgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC01IHB5LTI0IG14LWF1dG8gZmxleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzMgbWQ6dy0xLzIgYmctd2hpdGUgcm91bmRlZC1sZyBwLTggZmxleCBmbGV4LWNvbCBtZDptbC1hdXRvIHctZnVsbCBtdC0xMCBtZDptdC0wIHJlbGF0aXZlIHotMTAgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCB0ZXh0LWxnIG1iLTEgZm9udC1tZWRpdW0gdGl0bGUtZm9udFwiPlxuICAgICAgICAgICAgICBDb250YWN0IHVzIHdpdGggZW1haWxcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGluZy03IHRleHQtc20gdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRW1haWwqXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS0yMDAgdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTEgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNDAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkaW5nLTcgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBOYW1lKlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTIwMCB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMSBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWItNFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGluZy03IHRleHQtc20gdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTWVzc2FnZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTIwMCBoLTMyIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0xIHB4LTMgcmVzaXplLW5vbmUgbGVhZGluZy02IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17Zm9ybWlrLmlzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCBib3JkZXItMCBweS0yIHB4LTYgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWJsdWUtNjAwIHJvdW5kZWQgdGV4dC1sZyAke1xuICAgICAgICAgICAgICAgICAgZm9ybWlrLmlzU3VibWl0dGluZyA/IFwiZGlzYWJsZWQ6b3BhY2l0eS01MFwiIDogXCJcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICBuYW1lPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNDAwIG10LTNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtmb3JtaWsuc3VibWl0Q291bnQgPiAwICYmICFmb3JtaWsuZXJyb3JzLnN1Ym1pdCAmJiAoXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBtdC0zXCI+XG4gICAgICAgICAgICAgICAgVGhhbmtzIGZvciBjb250YWN0aW5nIHVzLCB3ZSB3aWxsIHJlYWNoIG91dCB0byB5b3Ugc2hvcnRseS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RTZWN0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgYm9keS1mb250IHJlbGF0aXZlIG1iLThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmF5LTMwMFwiPlxuICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgIHNjcm9sbGluZz1cIm5vXCJcbiAgICAgICAgICBtYXJnaW5IZWlnaHQ9XCIwXCJcbiAgICAgICAgICBtYXJnaW5XaWR0aD1cIjBcIlxuICAgICAgICAgIHNjcm9sbGluZz1cIm5vXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZmlsdGVyOiBgZ3JheXNjYWxlKDAuNSkgY29udHJhc3QoMS4yKSBvcGFjaXR5KDAuNClgLFxuICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzcmM9XCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzP2xsPTI1LjA2OTA4MiwgMTIxLjUzNTM3MSZhbXA7d2lkdGg9MTAwJTI1JmFtcDtoZWlnaHQ9NjAwJmFtcDtobD1lbiZhbXA7cT0xMDQ1MiVFNSU4RiVCMCVFNSU4QyU5NyVFNSVCOCU4MiVFNCVCOCVBRCVFNSVCMSVCMSVFNSU4RCU4MCVFNyU4RSU4OSVFOSU5NiU4MCVFOCVBMSU5NzElRTglOTklOUYrKERhc0lvdCkmYW1wO3Q9JmFtcDt6PTE0JmFtcDtpZT1VVEY4JmFtcDtpd2xvYz1CJmFtcDtvdXRwdXQ9ZW1iZWRcIlxuICAgICAgICA+PC9pZnJhbWU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb250YWN0Rm9ybSAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContactSection.jsx\n");

/***/ })

})