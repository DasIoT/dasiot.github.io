webpackHotUpdate_N_E("pages/test",{

/***/ "./pages/test.jsx":
/*!************************!*\
  !*** ./pages/test.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.jsx\");\n/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HeroSection */ \"./components/HeroSection.jsx\");\n/* harmony import */ var _components_ContactSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ContactSection */ \"./components/ContactSection.jsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/ike/Code/github.com/dasiot.site/dasiot.github.io/pages/test.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n // 25.069407, 121.521192\n\nvar _gpsToVector = gpsToVector3(25.069407, 121.521192, 0),\n    _gpsToVector2 = Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_gpsToVector, 3),\n    x = _gpsToVector2[0],\n    y = _gpsToVector2[1],\n    z = _gpsToVector2[2]; //CIT\n\n\nvar load = /*#__PURE__*/function () {\n  var _ref = Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var _yield$Promise$all, _yield$Promise$all2, Viewer, XKTLoaderPlugin, NavCubePlugin, TreeViewPlugin, Mesh, VBOGeometry, buildGridGeometry, PhongMaterial, AnnotationsPlugin, viewer, cameraFlight, annotations, xktLoader, model;\n\n    return _Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Promise.all([__webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! @xeokit/xeokit-sdk/src/viewer/Viewer */ \"./node_modules/@xeokit/xeokit-sdk/src/viewer/Viewer.js\")).then(function (m) {\n              return m.Viewer;\n            }), __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @xeokit/xeokit-sdk/src/plugins/XKTLoaderPlugin/XKTLoaderPlugin.js */ \"./node_modules/@xeokit/xeokit-sdk/src/plugins/XKTLoaderPlugin/XKTLoaderPlugin.js\")).then(function (m) {\n              return m.XKTLoaderPlugin;\n            }), __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! @xeokit/xeokit-sdk/src/plugins/NavCubePlugin/NavCubePlugin.js */ \"./node_modules/@xeokit/xeokit-sdk/src/plugins/NavCubePlugin/NavCubePlugin.js\")).then(function (m) {\n              return m.NavCubePlugin;\n            }), __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! @xeokit/xeokit-sdk/src/plugins/TreeViewPlugin/TreeViewPlugin.js */ \"./node_modules/@xeokit/xeokit-sdk/src/plugins/TreeViewPlugin/TreeViewPlugin.js\")).then(function (m) {\n              return m.TreeViewPlugin;\n            }), __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! @xeokit/xeokit-sdk/src/viewer/scene/mesh/Mesh.js */ \"./node_modules/@xeokit/xeokit-sdk/src/viewer/scene/mesh/Mesh.js\")).then(function (m) {\n              return m.Mesh;\n            }), __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! @xeokit/xeokit-sdk/src/viewer/scene/geometry/VBOGeometry.js */ \"./node_modules/@xeokit/xeokit-sdk/src/viewer/scene/geometry/VBOGeometry.js\")).then(function (m) {\n              return m.VBOGeometry;\n            }), __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! @xeokit/xeokit-sdk/src/viewer/scene/geometry/builders/buildGridGeometry.js */ \"./node_modules/@xeokit/xeokit-sdk/src/viewer/scene/geometry/builders/buildGridGeometry.js\")).then(function (m) {\n              return m.buildGridGeometry;\n            }), __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! @xeokit/xeokit-sdk/src/viewer/scene/materials/PhongMaterial.js */ \"./node_modules/@xeokit/xeokit-sdk/src/viewer/scene/materials/PhongMaterial.js\")).then(function (m) {\n              return m.PhongMaterial;\n            }), __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! @xeokit/xeokit-sdk/src/plugins/AnnotationsPlugin/AnnotationsPlugin.js */ \"./node_modules/@xeokit/xeokit-sdk/src/plugins/AnnotationsPlugin/AnnotationsPlugin.js\")).then(function (m) {\n              return m.AnnotationsPlugin;\n            })]);\n\n          case 2:\n            _yield$Promise$all = _context.sent;\n            _yield$Promise$all2 = Object(_Users_ike_Code_github_com_dasiot_site_dasiot_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_yield$Promise$all, 9);\n            Viewer = _yield$Promise$all2[0];\n            XKTLoaderPlugin = _yield$Promise$all2[1];\n            NavCubePlugin = _yield$Promise$all2[2];\n            TreeViewPlugin = _yield$Promise$all2[3];\n            Mesh = _yield$Promise$all2[4];\n            VBOGeometry = _yield$Promise$all2[5];\n            buildGridGeometry = _yield$Promise$all2[6];\n            PhongMaterial = _yield$Promise$all2[7];\n            AnnotationsPlugin = _yield$Promise$all2[8];\n            viewer = new Viewer({\n              canvasId: \"myCanvas\" // transparent: true,\n\n            }); // viewer.cameraControl.doublePickFlyTo = true;\n            // viewer.cameraControl.navMode = \"planView\";\n\n            viewer.cameraControl.navMode = \"orbit\";\n            viewer.cameraControl.followPointer = true;\n            cameraFlight = viewer.cameraFlight;\n            cameraFlight.duration = 0.5; // cameraFlight.fitFOV = 25;\n\n            viewer.camera.eye = [10, 120, -50]; // 遠近，下上，旋轉近遠\n\n            viewer.camera.look = [-60, -3, 0];\n            viewer.camera.up = [0, 1, 0];\n            viewer.camera.zoom(-10);\n            viewer.camera.gimbalLock = true;\n            viewer.scene.xrayMaterial.fillAlpha = 0.1;\n            viewer.scene.xrayMaterial.fillColor = [0, 0, 0];\n            viewer.scene.xrayMaterial.edgeAlpha = 0.4;\n            viewer.scene.xrayMaterial.edgeColor = [0, 0, 0];\n            viewer.scene.highlightMaterial.fill = false;\n            viewer.scene.highlightMaterial.fillAlpha = 0.3;\n            viewer.scene.highlightMaterial.edgeColor = [1, 1, 0]; // Annotations\n\n            annotations = new AnnotationsPlugin(viewer, {\n              markerHTML: \"<div class='annotation-marker' style='background-color: {{markerBGColor}};'>{{glyph}}</div>\",\n              labelHTML: \"<div class='annotation-label' style='background-color: {{labelBGColor}};'>\\\n        <div class='annotation-title'>{{title}}</div>\\\n        <div class='annotation-desc'>{{description}}</div>\\\n        <div class='annotation-desc'>🔋 [---- ]</div>\\\n        </div>\",\n              values: {\n                markerBGColor: \"red\",\n                labelBGColor: \"white\",\n                glyph: \"X\",\n                title: \"Untitled\",\n                description: \"No description\"\n              }\n            });\n            annotations.on(\"markerClicked\", function (annotation) {\n              annotation.setLabelShown(!annotation.getLabelShown());\n            }); // Annotations\n\n            xktLoader = new XKTLoaderPlugin(viewer);\n            model = xktLoader.load({\n              id: \"myModel\",\n              src: \"/assets/models/schependomlaan.xkt\",\n              metaModelSrc: \"/assets/metaModels/schependomlaan.json\",\n              // Creates a MetaObject instances in scene.metaScene.metaObjects\n              // position: [0, 0, 0],\n              position: [x, y, z]\n            });\n            model.on(\"loaded\", function () {\n              annotations.createAnnotation({\n                id: \"myAnnotation1\",\n                // entity: viewer.scene.objects[\"2O2Fr$t4X7Zf8NOew3FLOH\"],\n                // worldPos: [2.039, 4.418, 17.965],\n                worldPos: [x + 0.1, y, z],\n                // occludable: true,\n                markerShown: true,\n                labelShown: true,\n                values: {\n                  glyph: \"W1\",\n                  title: \"Ike Watterson\",\n                  description: \"Happy worker bee\",\n                  markerBGColor: \"yellow\"\n                }\n              }); // const metaObject = viewer.metaScene.metaObjects[\"0u4wgLe6n0ABVaiXyikbkA\"];\n\n              var metaObject = viewer.metaScene.metaObjects[\"2SWZMQPyD9pfT9q87pgXa1\"]; // Skip \"node-1\" at first\n\n              if (metaObject) {\n                viewer.scene.setObjectsVisible(viewer.scene.visibleObjectIds, false);\n                viewer.scene.setObjectsVisible(metaObject.getObjectIDsInSubtree(), true);\n              }\n\n              viewer.cameraFlight.flyTo(model); // const treeView = new TreeViewPlugin(viewer, {\n              //   containerElement: document.getElementById(\"treeViewContainer\"),\n              //   autoExpandDepth: 3, // Initially expand tree three nodes deep\n              // });\n            });\n            new Mesh(viewer.scene, {\n              geometry: new VBOGeometry(viewer.scene, buildGridGeometry({\n                size: 300,\n                divisions: 60\n              })),\n              material: new PhongMaterial(viewer.scene, {\n                color: [0.0, 0.0, 0.0],\n                emissive: [0.4, 0.4, 0.4]\n              }),\n              // position: [0, 0, 0],\n              position: [x, y, z],\n              collidable: false\n            });\n\n          case 36:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function load() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction Home() {\n  _s();\n\n  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(load);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"px-14 divide-y divide-gray-300\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"DasIoT \\u2013 Smart Construction With Ease\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 165,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        id: \"product\",\n        className: \"title-font sm:text-4xl text-3xl pt-8 mb-4 font-medium text-gray-900\",\n        children: \"Product\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 169,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_HeroSection__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 175,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        id: \"ui\",\n        className: \"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900\",\n        children: \"Web Powered Control Panel\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 176,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          id: \"treeViewContainer\",\n          className: \"absolute\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 183,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"canvas\", {\n          id: \"myCanvas\",\n          className: \"w-full h-96\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 184,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 182,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        id: \"contact\",\n        className: \"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900\",\n        children: \"Contact\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 186,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ContactSection__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 194,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 163,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n\nfunction gpsToVector3(lat, lng, alt) {\n  var cosLat = Math.cos(lat * Math.PI / 180.0);\n  var sinLat = Math.sin(lat * Math.PI / 180.0);\n  var cosLon = Math.cos(lng * Math.PI / 180.0);\n  var sinLon = Math.sin(lng * Math.PI / 180.0); // const rad = 6378137.0;\n  // const f = 1.0 / 298.257224;\n  // const C =\n  //   1.0 / Math.sqrt(cosLat * cosLat + (1 - f) * (1 - f) * sinLat * sinLat);\n  // const S = (1.0 - f) * (1.0 - f) * C;\n  // const h = 0.0;\n\n  var rad = 500.0; // assuming on a perfect sphere\n\n  return [// (rad * C + h) * cosLat * cosLon,\n  // (rad * C + h) * cosLat * sinLon,\n  // (rad * S + h) * sinLat,\n  rad * cosLat * cosLon, rad * cosLat * sinLon, rad * sinLat];\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qc3g/ZWYyOSJdLCJuYW1lcyI6WyJncHNUb1ZlY3RvcjMiLCJ4IiwieSIsInoiLCJsb2FkIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJtIiwiVmlld2VyIiwiWEtUTG9hZGVyUGx1Z2luIiwiTmF2Q3ViZVBsdWdpbiIsIlRyZWVWaWV3UGx1Z2luIiwiTWVzaCIsIlZCT0dlb21ldHJ5IiwiYnVpbGRHcmlkR2VvbWV0cnkiLCJQaG9uZ01hdGVyaWFsIiwiQW5ub3RhdGlvbnNQbHVnaW4iLCJ2aWV3ZXIiLCJjYW52YXNJZCIsImNhbWVyYUNvbnRyb2wiLCJuYXZNb2RlIiwiZm9sbG93UG9pbnRlciIsImNhbWVyYUZsaWdodCIsImR1cmF0aW9uIiwiY2FtZXJhIiwiZXllIiwibG9vayIsInVwIiwiem9vbSIsImdpbWJhbExvY2siLCJzY2VuZSIsInhyYXlNYXRlcmlhbCIsImZpbGxBbHBoYSIsImZpbGxDb2xvciIsImVkZ2VBbHBoYSIsImVkZ2VDb2xvciIsImhpZ2hsaWdodE1hdGVyaWFsIiwiZmlsbCIsImFubm90YXRpb25zIiwibWFya2VySFRNTCIsImxhYmVsSFRNTCIsInZhbHVlcyIsIm1hcmtlckJHQ29sb3IiLCJsYWJlbEJHQ29sb3IiLCJnbHlwaCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvbiIsImFubm90YXRpb24iLCJzZXRMYWJlbFNob3duIiwiZ2V0TGFiZWxTaG93biIsInhrdExvYWRlciIsIm1vZGVsIiwiaWQiLCJzcmMiLCJtZXRhTW9kZWxTcmMiLCJwb3NpdGlvbiIsImNyZWF0ZUFubm90YXRpb24iLCJ3b3JsZFBvcyIsIm1hcmtlclNob3duIiwibGFiZWxTaG93biIsIm1ldGFPYmplY3QiLCJtZXRhU2NlbmUiLCJtZXRhT2JqZWN0cyIsInNldE9iamVjdHNWaXNpYmxlIiwidmlzaWJsZU9iamVjdElkcyIsImdldE9iamVjdElEc0luU3VidHJlZSIsImZseVRvIiwiZ2VvbWV0cnkiLCJzaXplIiwiZGl2aXNpb25zIiwibWF0ZXJpYWwiLCJjb2xvciIsImVtaXNzaXZlIiwiY29sbGlkYWJsZSIsIkhvbWUiLCJSZWFjdCIsInVzZUVmZmVjdCIsImxhdCIsImxuZyIsImFsdCIsImNvc0xhdCIsIk1hdGgiLCJjb3MiLCJQSSIsInNpbkxhdCIsInNpbiIsImNvc0xvbiIsInNpbkxvbiIsInJhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOzttQkFDa0JBLFlBQVksQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixDQUF4QixDOztJQUF2QkMsQztJQUFHQyxDO0lBQUdDLEMscUJBQTZDOzs7QUFFMUQsSUFBTUMsSUFBSTtBQUFBLHNVQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVdEQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNwQixvTEFBK0NDLElBQS9DLENBQW9ELFVBQUNDLENBQUQ7QUFBQSxxQkFBT0EsQ0FBQyxDQUFDQyxNQUFUO0FBQUEsYUFBcEQsQ0FEb0IsRUFFcEIsMk9BRUVGLElBRkYsQ0FFTyxVQUFDQyxDQUFEO0FBQUEscUJBQU9BLENBQUMsQ0FBQ0UsZUFBVDtBQUFBLGFBRlAsQ0FGb0IsRUFLcEIsbU9BRUVILElBRkYsQ0FFTyxVQUFDQyxDQUFEO0FBQUEscUJBQU9BLENBQUMsQ0FBQ0csYUFBVDtBQUFBLGFBRlAsQ0FMb0IsRUFRcEIsdU9BRUVKLElBRkYsQ0FFTyxVQUFDQyxDQUFEO0FBQUEscUJBQU9BLENBQUMsQ0FBQ0ksY0FBVDtBQUFBLGFBRlAsQ0FSb0IsRUFXcEIseU1BQTJETCxJQUEzRCxDQUNFLFVBQUNDLENBQUQ7QUFBQSxxQkFBT0EsQ0FBQyxDQUFDSyxJQUFUO0FBQUEsYUFERixDQVhvQixFQWNwQiwrTkFBc0VOLElBQXRFLENBQ0UsVUFBQ0MsQ0FBRDtBQUFBLHFCQUFPQSxDQUFDLENBQUNNLFdBQVQ7QUFBQSxhQURGLENBZG9CLEVBaUJwQiw2UEFF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QUEzQixDQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHSCxJQUFJLENBQUNJLEdBQUwsQ0FBVVIsR0FBRyxHQUFHSSxJQUFJLENBQUNFLEVBQVosR0FBa0IsS0FBM0IsQ0FBZjtBQUNBLE1BQU1HLE1BQU0sR0FBR0wsSUFBSSxDQUFDQyxHQUFMLENBQVVKLEdBQUcsR0FBR0csSUFBSSxDQUFDRSxFQUFaLEdBQWtCLEtBQTNCLENBQWY7QUFDQSxNQUFNSSxNQUFNLEdBQUdOLElBQUksQ0FBQ0ksR0FBTCxDQUFVUCxHQUFHLEdBQUdHLElBQUksQ0FBQ0UsRUFBWixHQUFrQixLQUEzQixDQUFmLENBSm1DLENBS25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNSyxHQUFHLEdBQUcsS0FBWixDQVhtQyxDQVdoQjs7QUFFbkIsU0FBTyxDQUNMO0FBQ0E7QUFDQTtBQUNBQSxLQUFHLEdBQUdSLE1BQU4sR0FBZU0sTUFKVixFQUtMRSxHQUFHLEdBQUdSLE1BQU4sR0FBZU8sTUFMVixFQU1MQyxHQUFHLEdBQUdKLE1BTkQsQ0FBUDtBQVFEIiwiZmlsZSI6Ii4vcGFnZXMvdGVzdC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9IZXJvU2VjdGlvblwiO1xuaW1wb3J0IENvbnRhY3RTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uXCI7XG5cbi8vIDI1LjA2OTQwNywgMTIxLjUyMTE5MlxuY29uc3QgW3gsIHksIHpdID0gZ3BzVG9WZWN0b3IzKDI1LjA2OTQwNywgMTIxLjUyMTE5MiwgMCk7IC8vQ0lUXG5cbmNvbnN0IGxvYWQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IFtcbiAgICBWaWV3ZXIsXG4gICAgWEtUTG9hZGVyUGx1Z2luLFxuICAgIE5hdkN1YmVQbHVnaW4sXG4gICAgVHJlZVZpZXdQbHVnaW4sXG4gICAgTWVzaCxcbiAgICBWQk9HZW9tZXRyeSxcbiAgICBidWlsZEdyaWRHZW9tZXRyeSxcbiAgICBQaG9uZ01hdGVyaWFsLFxuICAgIEFubm90YXRpb25zUGx1Z2luLFxuICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGltcG9ydChcIkB4ZW9raXQveGVva2l0LXNkay9zcmMvdmlld2VyL1ZpZXdlclwiKS50aGVuKChtKSA9PiBtLlZpZXdlciksXG4gICAgaW1wb3J0KFxuICAgICAgXCJAeGVva2l0L3hlb2tpdC1zZGsvc3JjL3BsdWdpbnMvWEtUTG9hZGVyUGx1Z2luL1hLVExvYWRlclBsdWdpbi5qc1wiXG4gICAgKS50aGVuKChtKSA9PiBtLlhLVExvYWRlclBsdWdpbiksXG4gICAgaW1wb3J0KFxuICAgICAgXCJAeGVva2l0L3hlb2tpdC1zZGsvc3JjL3BsdWdpbnMvTmF2Q3ViZVBsdWdpbi9OYXZDdWJlUGx1Z2luLmpzXCJcbiAgICApLnRoZW4oKG0pID0+IG0uTmF2Q3ViZVBsdWdpbiksXG4gICAgaW1wb3J0KFxuICAgICAgXCJAeGVva2l0L3hlb2tpdC1zZGsvc3JjL3BsdWdpbnMvVHJlZVZpZXdQbHVnaW4vVHJlZVZpZXdQbHVnaW4uanNcIlxuICAgICkudGhlbigobSkgPT4gbS5UcmVlVmlld1BsdWdpbiksXG4gICAgaW1wb3J0KFwiQHhlb2tpdC94ZW9raXQtc2RrL3NyYy92aWV3ZXIvc2NlbmUvbWVzaC9NZXNoLmpzXCIpLnRoZW4oXG4gICAgICAobSkgPT4gbS5NZXNoXG4gICAgKSxcbiAgICBpbXBvcnQoXCJAeGVva2l0L3hlb2tpdC1zZGsvc3JjL3ZpZXdlci9zY2VuZS9nZW9tZXRyeS9WQk9HZW9tZXRyeS5qc1wiKS50aGVuKFxuICAgICAgKG0pID0+IG0uVkJPR2VvbWV0cnlcbiAgICApLFxuICAgIGltcG9ydChcbiAgICAgIFwiQHhlb2tpdC94ZW9raXQtc2RrL3NyYy92aWV3ZXIvc2NlbmUvZ2VvbWV0cnkvYnVpbGRlcnMvYnVpbGRHcmlkR2VvbWV0cnkuanNcIlxuICAgICkudGhlbigobSkgPT4gbS5idWlsZEdyaWRHZW9tZXRyeSksXG4gICAgaW1wb3J0KFxuICAgICAgXCJAeGVva2l0L3hlb2tpdC1zZGsvc3JjL3ZpZXdlci9zY2VuZS9tYXRlcmlhbHMvUGhvbmdNYXRlcmlhbC5qc1wiXG4gICAgKS50aGVuKChtKSA9PiBtLlBob25nTWF0ZXJpYWwpLFxuICAgIGltcG9ydChcbiAgICAgIFwiQHhlb2tpdC94ZW9raXQtc2RrL3NyYy9wbHVnaW5zL0Fubm90YXRpb25zUGx1Z2luL0Fubm90YXRpb25zUGx1Z2luLmpzXCJcbiAgICApLnRoZW4oKG0pID0+IG0uQW5ub3RhdGlvbnNQbHVnaW4pLFxuICBdKTtcbiAgY29uc3Qgdmlld2VyID0gbmV3IFZpZXdlcih7XG4gICAgY2FudmFzSWQ6IFwibXlDYW52YXNcIixcbiAgICAvLyB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgfSk7XG4gIC8vIHZpZXdlci5jYW1lcmFDb250cm9sLmRvdWJsZVBpY2tGbHlUbyA9IHRydWU7XG4gIC8vIHZpZXdlci5jYW1lcmFDb250cm9sLm5hdk1vZGUgPSBcInBsYW5WaWV3XCI7XG4gIHZpZXdlci5jYW1lcmFDb250cm9sLm5hdk1vZGUgPSBcIm9yYml0XCI7XG4gIHZpZXdlci5jYW1lcmFDb250cm9sLmZvbGxvd1BvaW50ZXIgPSB0cnVlO1xuXG4gIGNvbnN0IGNhbWVyYUZsaWdodCA9IHZpZXdlci5jYW1lcmFGbGlnaHQ7XG4gIGNhbWVyYUZsaWdodC5kdXJhdGlvbiA9IDAuNTtcbiAgLy8gY2FtZXJhRmxpZ2h0LmZpdEZPViA9IDI1O1xuXG4gIHZpZXdlci5jYW1lcmEuZXllID0gWzEwLCAxMjAsIC01MF07IC8vIOmBoOi/ke+8jOS4i+S4iu+8jOaXi+i9iei/kemBoFxuICB2aWV3ZXIuY2FtZXJhLmxvb2sgPSBbLTYwLCAtMywgMF07XG4gIHZpZXdlci5jYW1lcmEudXAgPSBbMCwgMSwgMF07XG4gIHZpZXdlci5jYW1lcmEuem9vbSgtMTApO1xuICB2aWV3ZXIuY2FtZXJhLmdpbWJhbExvY2sgPSB0cnVlO1xuXG4gIHZpZXdlci5zY2VuZS54cmF5TWF0ZXJpYWwuZmlsbEFscGhhID0gMC4xO1xuICB2aWV3ZXIuc2NlbmUueHJheU1hdGVyaWFsLmZpbGxDb2xvciA9IFswLCAwLCAwXTtcbiAgdmlld2VyLnNjZW5lLnhyYXlNYXRlcmlhbC5lZGdlQWxwaGEgPSAwLjQ7XG4gIHZpZXdlci5zY2VuZS54cmF5TWF0ZXJpYWwuZWRnZUNvbG9yID0gWzAsIDAsIDBdO1xuXG4gIHZpZXdlci5zY2VuZS5oaWdobGlnaHRNYXRlcmlhbC5maWxsID0gZmFsc2U7XG4gIHZpZXdlci5zY2VuZS5oaWdobGlnaHRNYXRlcmlhbC5maWxsQWxwaGEgPSAwLjM7XG4gIHZpZXdlci5zY2VuZS5oaWdobGlnaHRNYXRlcmlhbC5lZGdlQ29sb3IgPSBbMSwgMSwgMF07XG5cbiAgLy8gQW5ub3RhdGlvbnNcbiAgY29uc3QgYW5ub3RhdGlvbnMgPSBuZXcgQW5ub3RhdGlvbnNQbHVnaW4odmlld2VyLCB7XG4gICAgbWFya2VySFRNTDpcbiAgICAgIFwiPGRpdiBjbGFzcz0nYW5ub3RhdGlvbi1tYXJrZXInIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiB7e21hcmtlckJHQ29sb3J9fTsnPnt7Z2x5cGh9fTwvZGl2PlwiLFxuICAgIGxhYmVsSFRNTDpcbiAgICAgIFwiPGRpdiBjbGFzcz0nYW5ub3RhdGlvbi1sYWJlbCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6IHt7bGFiZWxCR0NvbG9yfX07Jz5cXFxuICAgICAgICA8ZGl2IGNsYXNzPSdhbm5vdGF0aW9uLXRpdGxlJz57e3RpdGxlfX08L2Rpdj5cXFxuICAgICAgICA8ZGl2IGNsYXNzPSdhbm5vdGF0aW9uLWRlc2MnPnt7ZGVzY3JpcHRpb259fTwvZGl2PlxcXG4gICAgICAgIDxkaXYgY2xhc3M9J2Fubm90YXRpb24tZGVzYyc+8J+UiyBbLS0tLSBdPC9kaXY+XFxcbiAgICAgICAgPC9kaXY+XCIsXG5cbiAgICB2YWx1ZXM6IHtcbiAgICAgIG1hcmtlckJHQ29sb3I6IFwicmVkXCIsXG4gICAgICBsYWJlbEJHQ29sb3I6IFwid2hpdGVcIixcbiAgICAgIGdseXBoOiBcIlhcIixcbiAgICAgIHRpdGxlOiBcIlVudGl0bGVkXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJObyBkZXNjcmlwdGlvblwiLFxuICAgIH0sXG4gIH0pO1xuICBhbm5vdGF0aW9ucy5vbihcIm1hcmtlckNsaWNrZWRcIiwgKGFubm90YXRpb24pID0+IHtcbiAgICBhbm5vdGF0aW9uLnNldExhYmVsU2hvd24oIWFubm90YXRpb24uZ2V0TGFiZWxTaG93bigpKTtcbiAgfSk7XG5cbiAgLy8gQW5ub3RhdGlvbnNcblxuICBjb25zdCB4a3RMb2FkZXIgPSBuZXcgWEtUTG9hZGVyUGx1Z2luKHZpZXdlcik7XG4gIGNvbnN0IG1vZGVsID0geGt0TG9hZGVyLmxvYWQoe1xuICAgIGlkOiBcIm15TW9kZWxcIixcbiAgICBzcmM6IFwiL2Fzc2V0cy9tb2RlbHMvc2NoZXBlbmRvbWxhYW4ueGt0XCIsXG4gICAgbWV0YU1vZGVsU3JjOiBcIi9hc3NldHMvbWV0YU1vZGVscy9zY2hlcGVuZG9tbGFhbi5qc29uXCIsIC8vIENyZWF0ZXMgYSBNZXRhT2JqZWN0IGluc3RhbmNlcyBpbiBzY2VuZS5tZXRhU2NlbmUubWV0YU9iamVjdHNcbiAgICAvLyBwb3NpdGlvbjogWzAsIDAsIDBdLFxuICAgIHBvc2l0aW9uOiBbeCwgeSwgel0sXG4gIH0pO1xuICBtb2RlbC5vbihcImxvYWRlZFwiLCAoKSA9PiB7XG4gICAgYW5ub3RhdGlvbnMuY3JlYXRlQW5ub3RhdGlvbih7XG4gICAgICBpZDogXCJteUFubm90YXRpb24xXCIsXG4gICAgICAvLyBlbnRpdHk6IHZpZXdlci5zY2VuZS5vYmplY3RzW1wiMk8yRnIkdDRYN1pmOE5PZXczRkxPSFwiXSxcbiAgICAgIC8vIHdvcmxkUG9zOiBbMi4wMzksIDQuNDE4LCAxNy45NjVdLFxuICAgICAgd29ybGRQb3M6IFt4ICsgMC4xLCB5LCB6XSxcbiAgICAgIC8vIG9jY2x1ZGFibGU6IHRydWUsXG4gICAgICBtYXJrZXJTaG93bjogdHJ1ZSxcbiAgICAgIGxhYmVsU2hvd246IHRydWUsXG5cbiAgICAgIHZhbHVlczoge1xuICAgICAgICBnbHlwaDogXCJXMVwiLFxuICAgICAgICB0aXRsZTogXCJJa2UgV2F0dGVyc29uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkhhcHB5IHdvcmtlciBiZWVcIixcbiAgICAgICAgbWFya2VyQkdDb2xvcjogXCJ5ZWxsb3dcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBjb25zdCBtZXRhT2JqZWN0ID0gdmlld2VyLm1ldGFTY2VuZS5tZXRhT2JqZWN0c1tcIjB1NHdnTGU2bjBBQlZhaVh5aWtia0FcIl07XG4gICAgY29uc3QgbWV0YU9iamVjdCA9IHZpZXdlci5tZXRhU2NlbmUubWV0YU9iamVjdHNbXCIyU1daTVFQeUQ5cGZUOXE4N3BnWGExXCJdOyAvLyBTa2lwIFwibm9kZS0xXCIgYXQgZmlyc3RcbiAgICBpZiAobWV0YU9iamVjdCkge1xuICAgICAgdmlld2VyLnNjZW5lLnNldE9iamVjdHNWaXNpYmxlKHZpZXdlci5zY2VuZS52aXNpYmxlT2JqZWN0SWRzLCBmYWxzZSk7XG4gICAgICB2aWV3ZXIuc2NlbmUuc2V0T2JqZWN0c1Zpc2libGUobWV0YU9iamVjdC5nZXRPYmplY3RJRHNJblN1YnRyZWUoKSwgdHJ1ZSk7XG4gICAgfVxuICAgIHZpZXdlci5jYW1lcmFGbGlnaHQuZmx5VG8obW9kZWwpO1xuICAgIC8vIGNvbnN0IHRyZWVWaWV3ID0gbmV3IFRyZWVWaWV3UGx1Z2luKHZpZXdlciwge1xuICAgIC8vICAgY29udGFpbmVyRWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmVlVmlld0NvbnRhaW5lclwiKSxcbiAgICAvLyAgIGF1dG9FeHBhbmREZXB0aDogMywgLy8gSW5pdGlhbGx5IGV4cGFuZCB0cmVlIHRocmVlIG5vZGVzIGRlZXBcbiAgICAvLyB9KTtcbiAgfSk7XG5cbiAgbmV3IE1lc2godmlld2VyLnNjZW5lLCB7XG4gICAgZ2VvbWV0cnk6IG5ldyBWQk9HZW9tZXRyeShcbiAgICAgIHZpZXdlci5zY2VuZSxcbiAgICAgIGJ1aWxkR3JpZEdlb21ldHJ5KHtcbiAgICAgICAgc2l6ZTogMzAwLFxuICAgICAgICBkaXZpc2lvbnM6IDYwLFxuICAgICAgfSlcbiAgICApLFxuICAgIG1hdGVyaWFsOiBuZXcgUGhvbmdNYXRlcmlhbCh2aWV3ZXIuc2NlbmUsIHtcbiAgICAgIGNvbG9yOiBbMC4wLCAwLjAsIDAuMF0sXG4gICAgICBlbWlzc2l2ZTogWzAuNCwgMC40LCAwLjRdLFxuICAgIH0pLFxuICAgIC8vIHBvc2l0aW9uOiBbMCwgMCwgMF0sXG4gICAgcG9zaXRpb246IFt4LCB5LCB6XSxcbiAgICBjb2xsaWRhYmxlOiBmYWxzZSxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBSZWFjdC51c2VFZmZlY3QobG9hZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTE0IGRpdmlkZS15IGRpdmlkZS1ncmF5LTMwMFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EYXNJb1Qg4oCTIFNtYXJ0IENvbnN0cnVjdGlvbiBXaXRoIEVhc2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMVxuICAgICAgICAgIGlkPVwicHJvZHVjdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGl0bGUtZm9udCBzbTp0ZXh0LTR4bCB0ZXh0LTN4bCBwdC04IG1iLTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBQcm9kdWN0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxIZXJvU2VjdGlvbiAvPlxuICAgICAgICA8aDFcbiAgICAgICAgICBpZD1cInVpXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZS1mb250IHNtOnRleHQtNHhsIHRleHQtM3hsIG1iLTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBXZWIgUG93ZXJlZCBDb250cm9sIFBhbmVsXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBpZD1cInRyZWVWaWV3Q29udGFpbmVyXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGVcIj48L2Rpdj5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwibXlDYW52YXNcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05NlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDFcbiAgICAgICAgICBpZD1cImNvbnRhY3RcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRpdGxlLWZvbnQgc206dGV4dC00eGwgdGV4dC0zeGwgbWItNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPENvbnRhY3RTZWN0aW9uIC8+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdwc1RvVmVjdG9yMyhsYXQsIGxuZywgYWx0KSB7XG4gIGNvbnN0IGNvc0xhdCA9IE1hdGguY29zKChsYXQgKiBNYXRoLlBJKSAvIDE4MC4wKTtcbiAgY29uc3Qgc2luTGF0ID0gTWF0aC5zaW4oKGxhdCAqIE1hdGguUEkpIC8gMTgwLjApO1xuICBjb25zdCBjb3NMb24gPSBNYXRoLmNvcygobG5nICogTWF0aC5QSSkgLyAxODAuMCk7XG4gIGNvbnN0IHNpbkxvbiA9IE1hdGguc2luKChsbmcgKiBNYXRoLlBJKSAvIDE4MC4wKTtcbiAgLy8gY29uc3QgcmFkID0gNjM3ODEzNy4wO1xuICAvLyBjb25zdCBmID0gMS4wIC8gMjk4LjI1NzIyNDtcbiAgLy8gY29uc3QgQyA9XG4gIC8vICAgMS4wIC8gTWF0aC5zcXJ0KGNvc0xhdCAqIGNvc0xhdCArICgxIC0gZikgKiAoMSAtIGYpICogc2luTGF0ICogc2luTGF0KTtcbiAgLy8gY29uc3QgUyA9ICgxLjAgLSBmKSAqICgxLjAgLSBmKSAqIEM7XG4gIC8vIGNvbnN0IGggPSAwLjA7XG4gIGNvbnN0IHJhZCA9IDUwMC4wOyAvLyBhc3N1bWluZyBvbiBhIHBlcmZlY3Qgc3BoZXJlXG5cbiAgcmV0dXJuIFtcbiAgICAvLyAocmFkICogQyArIGgpICogY29zTGF0ICogY29zTG9uLFxuICAgIC8vIChyYWQgKiBDICsgaCkgKiBjb3NMYXQgKiBzaW5Mb24sXG4gICAgLy8gKHJhZCAqIFMgKyBoKSAqIHNpbkxhdCxcbiAgICByYWQgKiBjb3NMYXQgKiBjb3NMb24sXG4gICAgcmFkICogY29zTGF0ICogc2luTG9uLFxuICAgIHJhZCAqIHNpbkxhdCxcbiAgXTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test.jsx\n");

/***/ })

})