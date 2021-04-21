webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ContactSection.jsx":
/*!***************************************!*\
  !*** ./components/ContactSection.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactSection; });\n/* harmony import */ var _Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/ike/Code/github.com/dasiot.site/dasiot.github.io/components/ContactSection.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar ContactForm = function ContactForm() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n      initialValues: {\n        email: \"\",\n        name: \"\",\n        message: \"\"\n      },\n      validate: function validate(values) {\n        var errors = {};\n\n        if (!values.email) {\n          errors.email = \"Required\";\n        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {\n          errors.email = \"Invalid email address\";\n        }\n\n        if (!values.name) {\n          errors.name = \"Required\";\n        }\n\n        return errors;\n      },\n      onSubmit: function onSubmit(values, _ref) {\n        var setSubmitting = _ref.setSubmitting;\n        var body = new FormData();\n        body.append(\"entry.762896947\", values.email);\n        body.append(\"entry.1167003003\", values.name);\n        body.append(\"entry.746630156\", values.message);\n        setTimeout(function () {\n          fetch(\"https://restful-google-form.vercel.app/api/forms/1FAIpQLSeL3HNqTwTSuaXIzsHg3y6BHnKl6-R3r-bX2sff0wT2Fq4Xhg\", {\n            method: \"POST\",\n            mode: \"no-cors\",\n            body: body\n          }).then(function () {\n            console.log(\"send\", values, body);\n            setSubmitting(false);\n          });\n        }, 400);\n      },\n      children: function children(_ref2) {\n        var isSubmitting = _ref2.isSubmitting;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"container px-5 py-24 mx-auto flex\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n              className: \"text-gray-900 text-lg mb-1 font-medium title-font\",\n              children: \"Contact us with email\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"relative mb-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                  htmlFor: \"email\",\n                  className: \"leading-7 text-sm text-gray-600\",\n                  children: \"Email*\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n                  type: \"email\",\n                  name: \"email\",\n                  className: \"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n                  name: \"email\",\n                  component: \"div\",\n                  className: \"text-red-400\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 64,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"relative mb-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                  htmlFor: \"name\",\n                  className: \"leading-7 text-sm text-gray-600\",\n                  children: \"Name*\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n                  type: \"name\",\n                  name: \"name\",\n                  className: \"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n                  name: \"name\",\n                  component: \"div\",\n                  className: \"text-red-400\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 82,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"relative mb-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n                  htmlFor: \"message\",\n                  className: \"leading-7 text-sm text-gray-600\",\n                  children: \"Message\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 89,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n                  type: \"text\",\n                  name: \"message\",\n                  className: \"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 95,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n                type: \"submit\",\n                disabled: isSubmitting,\n                className: \"w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg\",\n                children: \"Submit\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 15\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 9\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = ContactForm;\nfunction ContactSection() {\n  var _jsxDEV2;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    className: \"text-gray-600 body-font relative mb-8\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute inset-0 bg-gray-300\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"iframe\", (_jsxDEV2 = {\n        width: \"100%\",\n        height: \"100%\",\n        frameBorder: \"0\",\n        scrolling: \"no\",\n        marginHeight: \"0\",\n        marginWidth: \"0\"\n      }, Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"scrolling\", \"no\"), Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"style\", {\n        filter: \"grayscale(0.5) contrast(1.2) opacity(0.4)\",\n        pointerEvents: \"none\"\n      }), Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"src\", \"https://maps.google.com/maps?ll=25.069082, 121.535371&width=100%25&height=600&hl=en&q=10452%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E7%8E%89%E9%96%80%E8%A1%971%E8%99%9F+(DasIot)&t=&z=14&ie=UTF8&iwloc=B&output=embed\"), _jsxDEV2), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ContactForm, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 118,\n    columnNumber: 5\n  }, this);\n}\n_c2 = ContactSection;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ContactForm\");\n$RefreshReg$(_c2, \"ContactSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi5qc3g/MGU3NyJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsImVtYWlsIiwibmFtZSIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJ0ZXN0Iiwic2V0U3VibWl0dGluZyIsImJvZHkiLCJGb3JtRGF0YSIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImlzU3VibWl0dGluZyIsIkNvbnRhY3RTZWN0aW9uIiwiZmlsdGVyIiwicG9pbnRlckV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLHNCQUNsQjtBQUFBLDJCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsbUJBQWEsRUFBRTtBQUFFQyxhQUFLLEVBQUUsRUFBVDtBQUFhQyxZQUFJLEVBQUUsRUFBbkI7QUFBdUJDLGVBQU8sRUFBRTtBQUFoQyxPQURqQjtBQUVFLGNBQVEsRUFBRSxrQkFBQ0MsTUFBRCxFQUFZO0FBQ3BCLFlBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUNBLFlBQUksQ0FBQ0QsTUFBTSxDQUFDSCxLQUFaLEVBQW1CO0FBQ2pCSSxnQkFBTSxDQUFDSixLQUFQLEdBQWUsVUFBZjtBQUNELFNBRkQsTUFFTyxJQUNMLENBQUMsMkNBQTJDSyxJQUEzQyxDQUFnREYsTUFBTSxDQUFDSCxLQUF2RCxDQURJLEVBRUw7QUFDQUksZ0JBQU0sQ0FBQ0osS0FBUCxHQUFlLHVCQUFmO0FBQ0Q7O0FBRUQsWUFBSSxDQUFDRyxNQUFNLENBQUNGLElBQVosRUFBa0I7QUFDaEJHLGdCQUFNLENBQUNILElBQVAsR0FBYyxVQUFkO0FBQ0Q7O0FBRUQsZUFBT0csTUFBUDtBQUNELE9BakJIO0FBa0JFLGNBQVEsRUFBRSxrQkFBQ0QsTUFBRCxRQUErQjtBQUFB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QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUF0Q0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEa0I7QUFBQSxDQUFwQjs7S0FBTWxCLFc7QUErR1MsU0FBU21CLGNBQVQsR0FBMEI7QUFBQTs7QUFDdkMsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsdUNBQW5CO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw2QkFDRTtBQUNFLGFBQUssRUFBQyxNQURSO0FBRUUsY0FBTSxFQUFDLE1BRlQ7QUFHRSxtQkFBVyxFQUFDLEdBSGQ7QUFJRSxpQkFBUyxFQUFDLElBSlo7QUFLRSxvQkFBWSxFQUFDLEdBTGY7QUFNRSxtQkFBVyxFQUFDO0FBTmQsOExBT1ksSUFQWixvTEFRUztBQUNMQyxjQUFNLDZDQUREO0FBRUxDLHFCQUFhLEVBQUU7QUFGVixPQVJULGtMQVlNLHNPQVpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFpQkUscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEO01BdEJ1QkYsYyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCwgRXJyb3JNZXNzYWdlLCBNZXNzYWdlIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8Rm9ybWlrXG4gICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiBcIlwiLCBuYW1lOiBcIlwiLCBtZXNzYWdlOiBcIlwiIH19XG4gICAgICB2YWxpZGF0ZT17KHZhbHVlcykgPT4ge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgICAgICAgaWYgKCF2YWx1ZXMuZW1haWwpIHtcbiAgICAgICAgICBlcnJvcnMuZW1haWwgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpXG4gICAgICAgICkge1xuICAgICAgICAgIGVycm9ycy5lbWFpbCA9IFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXZhbHVlcy5uYW1lKSB7XG4gICAgICAgICAgZXJyb3JzLm5hbWUgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3JzO1xuICAgICAgfX1cbiAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGJvZHkuYXBwZW5kKFwiZW50cnkuNzYyODk2OTQ3XCIsIHZhbHVlcy5lbWFpbCk7XG4gICAgICAgIGJvZHkuYXBwZW5kKFwiZW50cnkuMTE2NzAwMzAwM1wiLCB2YWx1ZXMubmFtZSk7XG4gICAgICAgIGJvZHkuYXBwZW5kKFwiZW50cnkuNzQ2NjMwMTU2XCIsIHZhbHVlcy5tZXNzYWdlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZmV0Y2goXG4gICAgICAgICAgICBcImh0dHBzOi8vcmVzdGZ1bC1nb29nbGUtZm9ybS52ZXJjZWwuYXBwL2FwaS9mb3Jtcy8xRkFJcFFMU2VMM0hOcVR3VFN1YVhJenNIZzN5NkJIbktsNi1SM3ItYlgyc2ZmMHdUMkZxNFhoZ1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICBtb2RlOiBcIm5vLWNvcnNcIixcbiAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZW5kXCIsIHZhbHVlcywgYm9keSk7XG4gICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTUgcHktMjQgbXgtYXV0byBmbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvMyBtZDp3LTEvMiBiZy13aGl0ZSByb3VuZGVkLWxnIHAtOCBmbGV4IGZsZXgtY29sIG1kOm1sLWF1dG8gdy1mdWxsIG10LTEwIG1kOm10LTAgcmVsYXRpdmUgei0xMCBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIHRleHQtbGcgbWItMSBmb250LW1lZGl1bSB0aXRsZS1mb250XCI+XG4gICAgICAgICAgICAgIENvbnRhY3QgdXMgd2l0aCBlbWFpbFxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkaW5nLTcgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFbWFpbCpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTIwMCB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMSBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlYWRpbmctNyB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE5hbWUqXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtMjAwIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0xIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNDAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWFkaW5nLTcgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBNZXNzYWdlXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtMjAwIGgtMzIgdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTEgcHgtMyByZXNpemUtbm9uZSBsZWFkaW5nLTYgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgYm9yZGVyLTAgcHktMiBweC02IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1ibHVlLTYwMCByb3VuZGVkIHRleHQtbGdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9Gb3JtaWs+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdFNlY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnQgcmVsYXRpdmUgbWItOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYXktMzAwXCI+XG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgc2Nyb2xsaW5nPVwibm9cIlxuICAgICAgICAgIG1hcmdpbkhlaWdodD1cIjBcIlxuICAgICAgICAgIG1hcmdpbldpZHRoPVwiMFwiXG4gICAgICAgICAgc2Nyb2xsaW5nPVwibm9cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmaWx0ZXI6IGBncmF5c2NhbGUoMC41KSBjb250cmFzdCgxLjIpIG9wYWNpdHkoMC40KWAsXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/bGw9MjUuMDY5MDgyLCAxMjEuNTM1MzcxJmFtcDt3aWR0aD0xMDAlMjUmYW1wO2hlaWdodD02MDAmYW1wO2hsPWVuJmFtcDtxPTEwNDUyJUU1JThGJUIwJUU1JThDJTk3JUU1JUI4JTgyJUU0JUI4JUFEJUU1JUIxJUIxJUU1JThEJTgwJUU3JThFJTg5JUU5JTk2JTgwJUU4JUExJTk3MSVFOCU5OSU5RisoRGFzSW90KSZhbXA7dD0mYW1wO3o9MTQmYW1wO2llPVVURjgmYW1wO2l3bG9jPUImYW1wO291dHB1dD1lbWJlZFwiXG4gICAgICAgID48L2lmcmFtZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbnRhY3RGb3JtIC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContactSection.jsx\n");

/***/ })

})