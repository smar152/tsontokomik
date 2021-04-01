webpackHotUpdate_N_E("pages/[page]",{

/***/ "./Components/Content/Kickstarter.js":
/*!*******************************************!*\
  !*** ./Components/Content/Kickstarter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "D:\\_Work\\_Unpaid\\Others\\tsontokomik\\Components\\Content\\Kickstarter.js",
    _this = undefined;

var Kickstarter = function Kickstarter(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "hi"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 3
  }, _this);
};

_c = Kickstarter;
/* harmony default export */ __webpack_exports__["default"] = (Kickstarter);

var _c;

$RefreshReg$(_c, "Kickstarter");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./Components/Page.js":
/*!****************************!*\
  !*** ./Components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/pageLayout.js */ "./Components/pageLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_pagesData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/pagesData */ "./data/pagesData.js");


var _jsxFileName = "D:\\_Work\\_Unpaid\\Others\\tsontokomik\\Components\\Page.js",
    _s = $RefreshSig$();





function Page(_ref) {
  _s();

  var language = _ref.language;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var page = router.query.page;
  var pageData = Object(_data_pagesData__WEBPACK_IMPORTED_MODULE_4__["getPageData"])(page);

  var _ref2 = pageData || {},
      content = _ref2.content,
      title = _ref2.title,
      kati = _ref2.kati;

  console.log("Loading page ".concat(page));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["TsontokomikLang - ", title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      pageTitle: title,
      pageContent: content,
      kati: kati && kati[language]
    }, "page", false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_s(Page, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Page;

var _c;

$RefreshReg$(_c, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./Components/pageLayout.js":
/*!**********************************!*\
  !*** ./Components/pageLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.js */ "./Components/header.js");
/* harmony import */ var _DesktopNavigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DesktopNavigation.js */ "./Components/DesktopNavigation.js");
/* harmony import */ var _PhoneNavigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhoneNavigation.js */ "./Components/PhoneNavigation.js");
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/data.js */ "./data/data.js");

var _jsxFileName = "D:\\_Work\\_Unpaid\\Others\\tsontokomik\\Components\\pageLayout.js";





function PageLayout(_ref) {
  var pageTitle = _ref.pageTitle,
      pageSubtitle = _ref.pageSubtitle,
      pageContent = _ref.pageContent,
      kati = _ref.kati;
  var language = "en";
  var title = _data_data_js__WEBPACK_IMPORTED_MODULE_5__["data"].title[language];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-1493562663" + " " + "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-1493562663" + " " + "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-1493562663" + " " + "col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "jsx-1493562663",
          children: kati
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-1493562663" + " " + "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-1493562663" + " " + "col-12 col-md-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DesktopNavigation_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
          currentPageTitle: pageTitle,
          className: "d-none d-md-block"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-1493562663" + " " + "phoneNav",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PhoneNavigation_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
            currentPageTitle: pageTitle,
            className: "d-md-none d-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-1493562663" + " " + "col-12 col-md-9 content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "jsx-1493562663",
          children: pageTitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "jsx-1493562663",
          children: pageSubtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), pageContent]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1493562663",
      children: "html{margin-left:calc(100vw - 100%);}body{font-family:Verdana,Geneva,sans-serif;color:#3e3e3e;}.container{padding-top:60px;}h6{font-style:italic;}.floatingImage{float:right;}svg{height:30px;cursor:pointer;-webkit-animation:rotation 2s infinite linear;animation:rotation 2s infinite linear;}.drawer{z-index:1;right:0px;width:240px;top:0px;-webkit-transform:translateX(400px);-ms-transform:translateX(400px);transform:translateX(400px);-webkit-transition-duration:1s;transition-duration:1s;padding:35px;padding-top:40px;padding-right:80px;text-align:right;}.active{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);}.phoneNav{position:fixed;bottom:20px;right:20px;background-color:hsl(10,0%,80%);padding-left:5px;padding-right:5px;padding-bottom:15px;border-radius:5px;z-index:1;}.content{margin-bottom:70px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxfV29ya1xcX1VucGFpZFxcT3RoZXJzXFx0c29udG9rb21pa1xcQ29tcG9uZW50c1xccGFnZUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ1MsQUFHNEMsQUFHUyxBQUl2QixBQUdDLEFBR04sQUFHQSxBQUtGLEFBWWdCLEFBR1gsQUFXSSxVQXpCVCxFQVJaLEFBR2lCLEdBb0JILEVBN0JkLENBR0EsQ0FxQ0EsQ0F6QmMsT0FMMEIsQUFvQjNCLElBckNiLENBdUJVLE1BcEJNLEFBbUNvQixFQWROLFlBcEI5QixrQkFtQ21CLGlCQUNDLEdBUHBCLGVBUXNCLE1BdkJ0QixjQXdCb0IsV0FqQkssT0FrQmIsVUFDWixxQ0FsQmUsYUFDSSxpQkFDRSxtQkFDRixpQkFDbkIiLCJmaWxlIjoiRDpcXF9Xb3JrXFxfVW5wYWlkXFxPdGhlcnNcXHRzb250b2tvbWlrXFxDb21wb25lbnRzXFxwYWdlTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcclxuaW1wb3J0IERlc2t0b3BOYXZpZ2F0aW9uIGZyb20gXCIuL0Rlc2t0b3BOYXZpZ2F0aW9uLmpzXCI7XHJcbmltcG9ydCBQaG9uZU5hdmlnYXRpb24gZnJvbSBcIi4vUGhvbmVOYXZpZ2F0aW9uLmpzXCI7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vZGF0YS9kYXRhLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlTGF5b3V0KHtcclxuICBwYWdlVGl0bGUsXHJcbiAgcGFnZVN1YnRpdGxlLFxyXG4gIHBhZ2VDb250ZW50LFxyXG4gIGthdGksXHJcbn0pIHtcclxuICBsZXQgbGFuZ3VhZ2UgPSBcImVuXCI7XHJcbiAgY29uc3QgdGl0bGUgPSBkYXRhLnRpdGxlW2xhbmd1YWdlXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPGgxPntrYXRpfTwvaDE+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICA8RGVza3RvcE5hdmlnYXRpb25cclxuICAgICAgICAgICAgY3VycmVudFBhZ2VUaXRsZT17cGFnZVRpdGxlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZU5hdlwiPlxyXG4gICAgICAgICAgICA8UGhvbmVOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2VUaXRsZT17cGFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbWQtbm9uZSBkLWJsb2NrXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC05IGNvbnRlbnRcIj5cclxuICAgICAgICAgIDxoMj57cGFnZVRpdGxlfTwvaDI+XHJcbiAgICAgICAgICA8aDY+e3BhZ2VTdWJ0aXRsZX08L2g2PlxyXG4gICAgICAgICAge3BhZ2VDb250ZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwdncgLSAxMDAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjb2xvcjogIzNlM2UzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZsb2F0aW5nSW1hZ2Uge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZHJhd2VyIHtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5waG9uZU5hdiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDEwLCAwJSwgODAlKTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=D:\\\\_Work\\\\_Unpaid\\\\Others\\\\tsontokomik\\\\Components\\\\pageLayout.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
_c = PageLayout;

var _c;

$RefreshReg$(_c, "PageLayout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./data/pagesData.js":
/*!***************************!*\
  !*** ./data/pagesData.js ***!
  \***************************/
/*! exports provided: pages, getPageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageData", function() { return getPageData; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Content_Kickstarter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Content/Kickstarter */ "./Components/Content/Kickstarter.js");

var _jsxFileName = "D:\\_Work\\_Unpaid\\Others\\tsontokomik\\data\\pagesData.js";

var pages = {
  home: {
    slug: "",
    title: "Smutcomic",
    content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "hi"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  },
  kickstarter: {
    slug: "kickstarter",
    title: "Kickstarter",
    content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Content_Kickstarter__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 14
    }, undefined)
  },
  smutcomic1: {
    slug: "smutcomic1",
    title: "smutcomic1",
    content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "hi"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  },
  smutcomic2: {
    slug: "smutcomic2",
    title: "smutcomic2",
    content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "hi"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)
  },
  artists: {
    slug: "artists",
    title: "artists",
    content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "hi"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)
  },
  faq: {
    slug: "faq",
    title: "FAQ",
    kati: {
      en: "FAQ",
      el: "ΦΑΚ"
    },
    content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "faq",
        children: "\u03A0\u03CE\u03C2 \u03B3\u03C5\u03BD\u03B1\u03AF\u03BA\u03B5\u03C2;!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "faa",
        children: "\u039A\u03B9 \u03CC\u03BC\u03C9\u03C2!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined)
  }
};
function getPageData(key) {
  if (key) {
    return pages[key];
  } else {
    return pages.about;
  }
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/[page].js":
/*!*************************!*\
  !*** ./pages/[page].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Page */ "./Components/Page.js");

var _jsxFileName = "D:\\_Work\\_Unpaid\\Others\\tsontokomik\\pages\\[page].js";

function PageContainer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    language: "el"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
_c = PageContainer;

var _c;

$RefreshReg$(_c, "PageContainer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Db250ZW50L0tpY2tzdGFydGVyLmpzIiwid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvcGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9wYWdlc0RhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1twYWdlXS5qcyJdLCJuYW1lcyI6WyJLaWNrc3RhcnRlciIsInByb3BzIiwiUGFnZSIsImxhbmd1YWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwicGFnZSIsInF1ZXJ5IiwicGFnZURhdGEiLCJnZXRQYWdlRGF0YSIsImNvbnRlbnQiLCJ0aXRsZSIsImthdGkiLCJjb25zb2xlIiwibG9nIiwiUGFnZUxheW91dCIsInBhZ2VUaXRsZSIsInBhZ2VTdWJ0aXRsZSIsInBhZ2VDb250ZW50IiwiZGF0YSIsInBhZ2VzIiwiaG9tZSIsInNsdWciLCJraWNrc3RhcnRlciIsInNtdXRjb21pYzEiLCJzbXV0Y29taWMyIiwiYXJ0aXN0cyIsImZhcSIsImVuIiwiZWwiLCJrZXkiLCJhYm91dCIsIlBhZ2VDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxzQkFDbEI7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEa0I7QUFBQSxDQUFwQjs7S0FBTUQsVztBQU1TQSwwRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0UsSUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN6QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUQsSUFBMUI7QUFDQSxNQUFNRSxRQUFRLEdBQUdDLG1FQUFXLENBQUNILElBQUQsQ0FBNUI7O0FBSHlDLGNBSVZFLFFBQVEsSUFBSSxFQUpGO0FBQUEsTUFJbkNFLE9BSm1DLFNBSW5DQSxPQUptQztBQUFBLE1BSTFCQyxLQUowQixTQUkxQkEsS0FKMEI7QUFBQSxNQUluQkMsSUFKbUIsU0FJbkJBLElBSm1COztBQUt6Q0MsU0FBTyxDQUFDQyxHQUFSLHdCQUE0QlIsSUFBNUI7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQSx5Q0FBMEJLLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLGlFQUFEO0FBRUUsZUFBUyxFQUFFQSxLQUZiO0FBR0UsaUJBQVcsRUFBRUQsT0FIZjtBQUlFLFVBQUksRUFBRUUsSUFBSSxJQUFJQSxJQUFJLENBQUNULFFBQUQ7QUFKcEIsT0FDTSxNQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztHQW5CdUJELEk7VUFDUEcscUQ7OztLQURPSCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x4QjtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNhLFVBQVQsT0FLWjtBQUFBLE1BSkRDLFNBSUMsUUFKREEsU0FJQztBQUFBLE1BSERDLFlBR0MsUUFIREEsWUFHQztBQUFBLE1BRkRDLFdBRUMsUUFGREEsV0FFQztBQUFBLE1BREROLElBQ0MsUUFEREEsSUFDQztBQUNELE1BQUlULFFBQVEsR0FBRyxJQUFmO0FBQ0EsTUFBTVEsS0FBSyxHQUFHUSxrREFBSSxDQUFDUixLQUFMLENBQVdSLFFBQVgsQ0FBZDtBQUNBLHNCQUNFO0FBQUEsd0NBQWUsV0FBZjtBQUFBLDRCQUNFO0FBQUEsMENBQWUsS0FBZjtBQUFBLDZCQUNFO0FBQUEsNENBQWUsS0FBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQSxvQkFBS1M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRTtBQUFBLDBDQUFlLEtBQWY7QUFBQSw4QkFDRTtBQUFBLDRDQUFlLGlCQUFmO0FBQUEsZ0NBQ0UscUVBQUMsNkRBQUQ7QUFDRSwwQkFBZ0IsRUFBRUksU0FEcEI7QUFFRSxtQkFBUyxFQUFDO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUEsOENBQWUsVUFBZjtBQUFBLGlDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsNEJBQWdCLEVBQUVBLFNBRHBCO0FBRUUscUJBQVMsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBYUU7QUFBQSw0Q0FBZSx5QkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQSxvQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBLG9CQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFHR0MsV0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9GRDtLQTVGdUJILFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x4QjtBQUVPLElBQU1LLEtBQUssR0FBRztBQUNuQkMsTUFBSSxFQUFFO0FBQ0pDLFFBQUksRUFBRSxFQURGO0FBRUpYLFNBQUssRUFBRSxXQUZIO0FBR0pELFdBQU8sZUFDTDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpFLEdBRGE7QUFVbkJhLGFBQVcsRUFBRTtBQUNYRCxRQUFJLEVBQUUsYUFESztBQUVYWCxTQUFLLEVBQUUsYUFGSTtBQUdYRCxXQUFPLGVBQUUscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhFLEdBVk07QUFlbkJjLFlBQVUsRUFBRTtBQUNWRixRQUFJLEVBQUUsWUFESTtBQUVWWCxTQUFLLEVBQUUsWUFGRztBQUdWRCxXQUFPLGVBQ0w7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKUSxHQWZPO0FBd0JuQmUsWUFBVSxFQUFFO0FBQ1ZILFFBQUksRUFBRSxZQURJO0FBRVZYLFNBQUssRUFBRSxZQUZHO0FBR1ZELFdBQU8sZUFDTDtBQUFLLGVBQVMsRUFBQyxFQUFmO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlEsR0F4Qk87QUFpQ25CZ0IsU0FBTyxFQUFFO0FBQ1BKLFFBQUksRUFBRSxTQURDO0FBRVBYLFNBQUssRUFBRSxTQUZBO0FBR1BELFdBQU8sZUFDTDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpLLEdBakNVO0FBMENuQmlCLEtBQUcsRUFBRTtBQUNITCxRQUFJLEVBQUUsS0FESDtBQUVIWCxTQUFLLEVBQUUsS0FGSjtBQUdIQyxRQUFJLEVBQUU7QUFDSmdCLFFBQUUsRUFBRSxLQURBO0FBRUpDLFFBQUUsRUFBRTtBQUZBLEtBSEg7QUFPSG5CLFdBQU8sZUFDTDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkM7QUExQ2MsQ0FBZDtBQTBEQSxTQUFTRCxXQUFULENBQXFCcUIsR0FBckIsRUFBMEI7QUFDL0IsTUFBSUEsR0FBSixFQUFTO0FBQ1AsV0FBT1YsS0FBSyxDQUFDVSxHQUFELENBQVo7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPVixLQUFLLENBQUNXLEtBQWI7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVEO0FBRWUsU0FBU0MsYUFBVCxHQUF5QjtBQUN0QyxzQkFBTyxxRUFBQyx3REFBRDtBQUFNLFlBQVEsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEO0tBRnVCQSxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1twYWdlXS40NmM0MjY4M2NjMWQzNzk1OTkxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgS2lja3N0YXJ0ZXIgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPHA+aGk8L3A+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLaWNrc3RhcnRlcjtcclxuIiwiaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSBcIi4uL0NvbXBvbmVudHMvcGFnZUxheW91dC5qc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBnZXRQYWdlRGF0YSB9IGZyb20gXCIuLi9kYXRhL3BhZ2VzRGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IGxhbmd1YWdlIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwYWdlID0gcm91dGVyLnF1ZXJ5LnBhZ2U7XHJcbiAgY29uc3QgcGFnZURhdGEgPSBnZXRQYWdlRGF0YShwYWdlKTtcclxuICBsZXQgeyBjb250ZW50LCB0aXRsZSwga2F0aSB9ID0gcGFnZURhdGEgfHwge307XHJcbiAgY29uc29sZS5sb2coYExvYWRpbmcgcGFnZSAke3BhZ2V9YCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Uc29udG9rb21pa0xhbmcgLSB7dGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8UGFnZUxheW91dFxyXG4gICAgICAgIGtleT1cInBhZ2VcIlxyXG4gICAgICAgIHBhZ2VUaXRsZT17dGl0bGV9XHJcbiAgICAgICAgcGFnZUNvbnRlbnQ9e2NvbnRlbnR9XHJcbiAgICAgICAga2F0aT17a2F0aSAmJiBrYXRpW2xhbmd1YWdlXX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcclxuaW1wb3J0IERlc2t0b3BOYXZpZ2F0aW9uIGZyb20gXCIuL0Rlc2t0b3BOYXZpZ2F0aW9uLmpzXCI7XHJcbmltcG9ydCBQaG9uZU5hdmlnYXRpb24gZnJvbSBcIi4vUGhvbmVOYXZpZ2F0aW9uLmpzXCI7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vZGF0YS9kYXRhLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlTGF5b3V0KHtcclxuICBwYWdlVGl0bGUsXHJcbiAgcGFnZVN1YnRpdGxlLFxyXG4gIHBhZ2VDb250ZW50LFxyXG4gIGthdGksXHJcbn0pIHtcclxuICBsZXQgbGFuZ3VhZ2UgPSBcImVuXCI7XHJcbiAgY29uc3QgdGl0bGUgPSBkYXRhLnRpdGxlW2xhbmd1YWdlXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPGgxPntrYXRpfTwvaDE+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICA8RGVza3RvcE5hdmlnYXRpb25cclxuICAgICAgICAgICAgY3VycmVudFBhZ2VUaXRsZT17cGFnZVRpdGxlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZU5hdlwiPlxyXG4gICAgICAgICAgICA8UGhvbmVOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2VUaXRsZT17cGFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbWQtbm9uZSBkLWJsb2NrXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC05IGNvbnRlbnRcIj5cclxuICAgICAgICAgIDxoMj57cGFnZVRpdGxlfTwvaDI+XHJcbiAgICAgICAgICA8aDY+e3BhZ2VTdWJ0aXRsZX08L2g2PlxyXG4gICAgICAgICAge3BhZ2VDb250ZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwdncgLSAxMDAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjb2xvcjogIzNlM2UzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZsb2F0aW5nSW1hZ2Uge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZHJhd2VyIHtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5waG9uZU5hdiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDEwLCAwJSwgODAlKTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgS2lja3N0YXJ0ZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvQ29udGVudC9LaWNrc3RhcnRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2VzID0ge1xyXG4gIGhvbWU6IHtcclxuICAgIHNsdWc6IFwiXCIsXHJcbiAgICB0aXRsZTogXCJTbXV0Y29taWNcIixcclxuICAgIGNvbnRlbnQ6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5oaTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAga2lja3N0YXJ0ZXI6IHtcclxuICAgIHNsdWc6IFwia2lja3N0YXJ0ZXJcIixcclxuICAgIHRpdGxlOiBcIktpY2tzdGFydGVyXCIsXHJcbiAgICBjb250ZW50OiA8S2lja3N0YXJ0ZXIgLz4sXHJcbiAgfSxcclxuICBzbXV0Y29taWMxOiB7XHJcbiAgICBzbHVnOiBcInNtdXRjb21pYzFcIixcclxuICAgIHRpdGxlOiBcInNtdXRjb21pYzFcIixcclxuICAgIGNvbnRlbnQ6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5oaTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAgc211dGNvbWljMjoge1xyXG4gICAgc2x1ZzogXCJzbXV0Y29taWMyXCIsXHJcbiAgICB0aXRsZTogXCJzbXV0Y29taWMyXCIsXHJcbiAgICBjb250ZW50OiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPHA+aGk8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG4gIGFydGlzdHM6IHtcclxuICAgIHNsdWc6IFwiYXJ0aXN0c1wiLFxyXG4gICAgdGl0bGU6IFwiYXJ0aXN0c1wiLFxyXG4gICAgY29udGVudDogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwPmhpPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICBmYXE6IHtcclxuICAgIHNsdWc6IFwiZmFxXCIsXHJcbiAgICB0aXRsZTogXCJGQVFcIixcclxuICAgIGthdGk6IHtcclxuICAgICAgZW46IFwiRkFRXCIsXHJcbiAgICAgIGVsOiBcIs6mzpHOmlwiLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhcVwiPs6gz47PgiDOs8+Fzr3Osc6vzrrOtc+COyE8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhYVwiPs6azrkgz4zOvM+Jz4IhPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhZ2VEYXRhKGtleSkge1xyXG4gIGlmIChrZXkpIHtcclxuICAgIHJldHVybiBwYWdlc1trZXldO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gcGFnZXMuYWJvdXQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQYWdlIGZyb20gXCIuLi9Db21wb25lbnRzL1BhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VDb250YWluZXIoKSB7XHJcbiAgcmV0dXJuIDxQYWdlIGxhbmd1YWdlPVwiZWxcIj48L1BhZ2U+O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=