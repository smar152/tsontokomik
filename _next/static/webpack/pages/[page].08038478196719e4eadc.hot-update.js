webpackHotUpdate_N_E("pages/[page]",{

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

var _jsxFileName = "C:\\Users\\Panagis\\code\\tsontokomik\\Components\\pageLayout.js";





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
      children: "html{margin-left:calc(100vw - 100%);}body{font-family:Verdana,Geneva,sans-serif;color:#3e3e3e;}.container{padding-top:60px;}h6{font-style:italic;}.floatingImage{float:right;}svg{height:30px;cursor:pointer;-webkit-animation:rotation 2s infinite linear;animation:rotation 2s infinite linear;}.drawer{z-index:1;right:0px;width:240px;top:0px;-webkit-transform:translateX(400px);-ms-transform:translateX(400px);transform:translateX(400px);-webkit-transition-duration:1s;transition-duration:1s;padding:35px;padding-top:40px;padding-right:80px;text-align:right;}.active{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);}.phoneNav{position:fixed;bottom:20px;right:20px;background-color:hsl(10,0%,80%);padding-left:5px;padding-right:5px;padding-bottom:15px;border-radius:5px;z-index:1;}.content{margin-bottom:70px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUGFuYWdpc1xcY29kZVxcdHNvbnRva29taWtcXENvbXBvbmVudHNcXHBhZ2VMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENTLEFBRzRDLEFBR1MsQUFJdkIsQUFHQyxBQUdOLEFBR0EsQUFLRixBQVlnQixBQUdYLEFBV0ksVUF6QlQsRUFSWixBQUdpQixHQW9CSCxFQTdCZCxDQUdBLENBcUNBLENBekJjLE9BTDBCLEFBb0IzQixJQXJDYixDQXVCVSxNQXBCTSxBQW1Db0IsRUFkTixZQXBCOUIsa0JBbUNtQixpQkFDQyxHQVBwQixlQVFzQixNQXZCdEIsY0F3Qm9CLFdBakJLLE9Ba0JiLFVBQ1oscUNBbEJlLGFBQ0ksaUJBQ0UsbUJBQ0YsaUJBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUGFuYWdpc1xcY29kZVxcdHNvbnRva29taWtcXENvbXBvbmVudHNcXHBhZ2VMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlci5qc1wiO1xuaW1wb3J0IERlc2t0b3BOYXZpZ2F0aW9uIGZyb20gXCIuL0Rlc2t0b3BOYXZpZ2F0aW9uLmpzXCI7XG5pbXBvcnQgUGhvbmVOYXZpZ2F0aW9uIGZyb20gXCIuL1Bob25lTmF2aWdhdGlvbi5qc1wiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi9kYXRhL2RhdGEuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUxheW91dCh7XG4gIHBhZ2VUaXRsZSxcbiAgcGFnZVN1YnRpdGxlLFxuICBwYWdlQ29udGVudCxcbiAga2F0aSxcbn0pIHtcbiAgbGV0IGxhbmd1YWdlID0gXCJlblwiO1xuICBjb25zdCB0aXRsZSA9IGRhdGEudGl0bGVbbGFuZ3VhZ2VdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxoMT57a2F0aX08L2gxPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0zXCI+XG4gICAgICAgICAgPERlc2t0b3BOYXZpZ2F0aW9uXG4gICAgICAgICAgICBjdXJyZW50UGFnZVRpdGxlPXtwYWdlVGl0bGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lTmF2XCI+XG4gICAgICAgICAgICA8UGhvbmVOYXZpZ2F0aW9uXG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlVGl0bGU9e3BhZ2VUaXRsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1tZC1ub25lIGQtYmxvY2tcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC05IGNvbnRlbnRcIj5cbiAgICAgICAgICA8aDI+e3BhZ2VUaXRsZX08L2gyPlxuICAgICAgICAgIDxoNj57cGFnZVN1YnRpdGxlfTwvaDY+XG4gICAgICAgICAge3BhZ2VDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMHZ3IC0gMTAwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiAjM2UzZTNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNiB7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mbG9hdGluZ0ltYWdlIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gMnMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZHJhd2VyIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDAwcHgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgICBwYWRkaW5nOiAzNXB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5waG9uZU5hdiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxMCwgMCUsIDgwJSk7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Panagis\\\\code\\\\tsontokomik\\\\Components\\\\pageLayout.js */"
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9wYWdlTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlBhZ2VMYXlvdXQiLCJwYWdlVGl0bGUiLCJwYWdlU3VidGl0bGUiLCJwYWdlQ29udGVudCIsImthdGkiLCJsYW5ndWFnZSIsInRpdGxlIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFVBQVQsT0FLWjtBQUFBLE1BSkRDLFNBSUMsUUFKREEsU0FJQztBQUFBLE1BSERDLFlBR0MsUUFIREEsWUFHQztBQUFBLE1BRkRDLFdBRUMsUUFGREEsV0FFQztBQUFBLE1BRERDLElBQ0MsUUFEREEsSUFDQztBQUNELE1BQUlDLFFBQVEsR0FBRyxJQUFmO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxrREFBSSxDQUFDRCxLQUFMLENBQVdELFFBQVgsQ0FBZDtBQUNBLHNCQUNFO0FBQUEsd0NBQWUsV0FBZjtBQUFBLDRCQUNFO0FBQUEsMENBQWUsS0FBZjtBQUFBLDZCQUNFO0FBQUEsNENBQWUsS0FBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQSxvQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRTtBQUFBLDBDQUFlLEtBQWY7QUFBQSw4QkFDRTtBQUFBLDRDQUFlLGlCQUFmO0FBQUEsZ0NBQ0UscUVBQUMsNkRBQUQ7QUFDRSwwQkFBZ0IsRUFBRUgsU0FEcEI7QUFFRSxtQkFBUyxFQUFDO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUEsOENBQWUsVUFBZjtBQUFBLGlDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsNEJBQWdCLEVBQUVBLFNBRHBCO0FBRUUscUJBQVMsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBYUU7QUFBQSw0Q0FBZSx5QkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQSxvQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBLG9CQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFHR0MsV0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9GRDtLQTVGdUJILFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3BhZ2VdLjA4MDM4NDc4MTk2NzE5ZTRlYWRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlci5qc1wiO1xuaW1wb3J0IERlc2t0b3BOYXZpZ2F0aW9uIGZyb20gXCIuL0Rlc2t0b3BOYXZpZ2F0aW9uLmpzXCI7XG5pbXBvcnQgUGhvbmVOYXZpZ2F0aW9uIGZyb20gXCIuL1Bob25lTmF2aWdhdGlvbi5qc1wiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi9kYXRhL2RhdGEuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUxheW91dCh7XG4gIHBhZ2VUaXRsZSxcbiAgcGFnZVN1YnRpdGxlLFxuICBwYWdlQ29udGVudCxcbiAga2F0aSxcbn0pIHtcbiAgbGV0IGxhbmd1YWdlID0gXCJlblwiO1xuICBjb25zdCB0aXRsZSA9IGRhdGEudGl0bGVbbGFuZ3VhZ2VdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxoMT57a2F0aX08L2gxPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0zXCI+XG4gICAgICAgICAgPERlc2t0b3BOYXZpZ2F0aW9uXG4gICAgICAgICAgICBjdXJyZW50UGFnZVRpdGxlPXtwYWdlVGl0bGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lTmF2XCI+XG4gICAgICAgICAgICA8UGhvbmVOYXZpZ2F0aW9uXG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlVGl0bGU9e3BhZ2VUaXRsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1tZC1ub25lIGQtYmxvY2tcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC05IGNvbnRlbnRcIj5cbiAgICAgICAgICA8aDI+e3BhZ2VUaXRsZX08L2gyPlxuICAgICAgICAgIDxoNj57cGFnZVN1YnRpdGxlfTwvaDY+XG4gICAgICAgICAge3BhZ2VDb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMHZ3IC0gMTAwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiAjM2UzZTNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNiB7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mbG9hdGluZ0ltYWdlIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gMnMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZHJhd2VyIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDAwcHgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgICBwYWRkaW5nOiAzNXB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5waG9uZU5hdiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxMCwgMCUsIDgwJSk7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==