/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/config.ts":
/*!******************************!*\
  !*** ./src/server/config.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar path = __webpack_require__(/*! path */ \"path\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nfunction loadConfig() {\n    return new Promise(function (resolve, reject) {\n        fs.readFile(path.resolve('config.json'), function (err, data) {\n            if (err) {\n                reject(err);\n            }\n            try {\n                var config = JSON.parse(data.toString('UTF-8'));\n                resolve(config);\n            } catch (ex) {\n                reject(ex);\n            }\n        });\n    });\n}\nexports.loadConfig = loadConfig;\n\n//# sourceURL=webpack:///./src/server/config.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar server_1 = __webpack_require__(/*! ./server */ \"./src/server/server.ts\");\nnew server_1.Server().bootstrap().then(function () {\n  return console.log('Server started!');\n});\n\n//# sourceURL=webpack:///./src/server/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) {\n            try {\n                step(generator.next(value));\n            } catch (e) {\n                reject(e);\n            }\n        }\n        function rejected(value) {\n            try {\n                step(generator[\"throw\"](value));\n            } catch (e) {\n                reject(e);\n            }\n        }\n        function step(result) {\n            result.done ? resolve(result.value) : new P(function (resolve) {\n                resolve(result.value);\n            }).then(fulfilled, rejected);\n        }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = undefined && undefined.__generator || function (thisArg, body) {\n    var _ = { label: 0, sent: function sent() {\n            if (t[0] & 1) throw t[1];return t[1];\n        }, trys: [], ops: [] },\n        f,\n        y,\n        t,\n        g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n        return this;\n    }), g;\n    function verb(n) {\n        return function (v) {\n            return step([n, v]);\n        };\n    }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) {\n            try {\n                if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\n                if (y = 0, t) op = [0, t.value];\n                switch (op[0]) {\n                    case 0:case 1:\n                        t = op;break;\n                    case 4:\n                        _.label++;return { value: op[1], done: false };\n                    case 5:\n                        _.label++;y = op[1];op = [0];continue;\n                    case 7:\n                        op = _.ops.pop();_.trys.pop();continue;\n                    default:\n                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n                            _ = 0;continue;\n                        }\n                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n                            _.label = op[1];break;\n                        }\n                        if (op[0] === 6 && _.label < t[1]) {\n                            _.label = t[1];t = op;break;\n                        }\n                        if (t && _.label < t[2]) {\n                            _.label = t[2];_.ops.push(op);break;\n                        }\n                        if (t[2]) _.ops.pop();\n                        _.trys.pop();continue;\n                }\n                op = body.call(thisArg, _);\n            } catch (e) {\n                op = [6, e];y = 0;\n            } finally {\n                f = t = 0;\n            }\n        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Express = __webpack_require__(/*! express */ \"express\");\nvar Path = __webpack_require__(/*! path */ \"path\");\nvar Multer = __webpack_require__(/*! multer */ \"multer\");\nvar uuid = __webpack_require__(/*! uuid/v1 */ \"uuid/v1\");\nvar config_1 = __webpack_require__(/*! ./config */ \"./src/server/config.ts\");\nvar Server = /** @class */function () {\n    function Server() {\n        this.images = [];\n        this.app = Express();\n        this.app.use(Express.static(Path.resolve('public')));\n        this.app.set('view engine', 'pug');\n        this.app.set('views', Path.resolve('views'));\n        this.setupMulter();\n        this.setupRoutes();\n    }\n    Server.prototype.bootstrap = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        return [4 /*yield*/, this.load()];\n                    case 1:\n                        _a.sent();\n                        return [4 /*yield*/, this.listen()];\n                    case 2:\n                        _a.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    Server.prototype.load = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var _a;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        _a = this;\n                        return [4 /*yield*/, config_1.loadConfig()];\n                    case 1:\n                        _a.config = _b.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    Server.prototype.setupMulter = function () {\n        this.upload = Multer({\n            storage: Multer.memoryStorage()\n        });\n    };\n    Server.prototype.setupRoutes = function () {\n        var _this = this;\n        this.app.get('/js/bundle.js', function (req, res) {\n            res.sendFile(Path.resolve('dist/client.bundle.js'));\n        });\n        this.app.get('/image/:key', function (req, res) {\n            if (req.params.key == 'default') {\n                res.type(_this.config.placeholderImage.mime);\n                res.sendFile(Path.resolve(_this.config.placeholderImage.path));\n                return;\n            }\n            var image = _this.shiftImage(req.params.key);\n            res.type(image.mime);\n            res.send(image.buffer);\n        });\n        this.app.post('/upload', this.upload.single('image'), function (req, res) {\n            try {\n                var file = req.file;\n                var reward = _this.getNextImage();\n                if (reward == null) {\n                    reward = {\n                        buffer: '',\n                        mime: _this.config.placeholderImage.mime,\n                        key: 'default'\n                    };\n                }\n                _this.images.push({\n                    key: uuid(),\n                    mime: file.mimetype,\n                    buffer: file.buffer\n                });\n                res.json({\n                    status: 'success',\n                    key: reward.key\n                });\n            } catch (ex) {\n                res.json({\n                    status: 'failed',\n                    reason: ex\n                });\n            }\n        });\n        this.app.get('*', function (req, res) {\n            res.render('index', {});\n        });\n    };\n    Server.prototype.getNextImage = function () {\n        return this.images[0];\n    };\n    Server.prototype.shiftImage = function (key) {\n        var i = 0;\n        for (var _i = 0, _a = this.images; _i < _a.length; _i++) {\n            var image = _a[_i];\n            if (image.key == key) {\n                this.images.splice(i, 1);\n                return image;\n            }\n            i++;\n        }\n    };\n    Server.prototype.listen = function () {\n        var _this = this;\n        return new Promise(function (resolve) {\n            _this.app.listen(_this.config.port, function () {\n                resolve();\n            });\n        });\n    };\n    return Server;\n}();\nexports.Server = Server;\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v1\");\n\n//# sourceURL=webpack:///external_%22uuid/v1%22?");

/***/ })

/******/ });