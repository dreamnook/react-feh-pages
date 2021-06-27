self["webpackHotUpdate_N_E"]("pages/uniteditor",{

/***/ "./app/components/HeroSelect/HeroOptions.tsx":
/*!***************************************************!*\
  !*** ./app/components/HeroSelect/HeroOptions.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_HeroHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/HeroHeader */ "./app/components/HeroHeader/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\HeroSelect\\HeroOptions.tsx",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function HeroOptions(_ref) {
  _s();

  var _this = this;

  var heroId = _ref.heroId,
      heroes = _ref.heroes,
      heroesOrder = _ref.heroesOrder,
      onSelect = _ref.onSelect;
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (event) {
    event.stopPropagation();
    onSelect(event.currentTarget.value);
  }, [onSelect]);
  console.log(heroesOrder);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [heroes.map(function (hero) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        disabled: heroId === hero.id,
        "data-active": heroId === hero.id,
        value: hero.id,
        hidden: hero.hidden,
        onClick: onClick,
        style: {
          order: heroesOrder[hero.id]
        },
        className: "jsx-987587854",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_HeroHeader__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({
          id: hero.id
        }, hero), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)
      }, heroesOrder[hero.id], false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "987587854",
      children: "button.jsx-987587854{display:block;width:100%;text-align:left;background-color:transparent;padding:0;}button.jsx-987587854:disabled,button[data-active='true'].jsx-987587854{cursor:default;pointer-events:none;background-color:#476d7c;}button.jsx-987587854:hover{background-color:#77abb7aa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcSGVyb1NlbGVjdFxcSGVyb09wdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDa0IsQUFHeUIsQUFRQyxBQUtZLGNBWmhCLENBUVMsVUFQSixFQVlsQixRQUoyQixNQVBJLG1CQVEvQixVQVBZLFVBQ1oiLCJmaWxlIjoiRjpcXHJlcG9zXFxyZWFjdC1mZWgtc2l0ZVxcYXBwXFxjb21wb25lbnRzXFxIZXJvU2VsZWN0XFxIZXJvT3B0aW9ucy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vLCBTeW50aGV0aWNFdmVudCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVyb0hlYWRlciBmcm9tICdAL2FwcC9jb21wb25lbnRzL0hlcm9IZWFkZXInO1xuaW1wb3J0IHsgVEhlcm9PcHRpb24gfSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuXG5mdW5jdGlvbiBIZXJvT3B0aW9ucyh7XG4gIGhlcm9JZCxcbiAgaGVyb2VzLFxuICBoZXJvZXNPcmRlcixcbiAgb25TZWxlY3QsXG59OiB7XG4gIGhlcm9JZDogc3RyaW5nO1xuICBoZXJvZXM6IFRIZXJvT3B0aW9uW107XG4gIGhlcm9lc09yZGVyOiB7IFtoZXJvSWQ6IHN0cmluZ106IG51bWJlciB9O1xuICBvblNlbGVjdDogKG5ld0hlcm9JZDogc3RyaW5nKSA9PiB2b2lkO1xufSkge1xuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgb25TZWxlY3QoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgICBbb25TZWxlY3RdLFxuICApO1xuICBjb25zb2xlLmxvZyhoZXJvZXNPcmRlcik7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtoZXJvZXMubWFwKChoZXJvKSA9PiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBrZXk9e2hlcm9lc09yZGVyW2hlcm8uaWRdfVxuICAgICAgICAgIGRpc2FibGVkPXtoZXJvSWQgPT09IGhlcm8uaWR9XG4gICAgICAgICAgZGF0YS1hY3RpdmU9e2hlcm9JZCA9PT0gaGVyby5pZH1cbiAgICAgICAgICB2YWx1ZT17aGVyby5pZH1cbiAgICAgICAgICBoaWRkZW49e2hlcm8uaGlkZGVufVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3sgb3JkZXI6IGhlcm9lc09yZGVyW2hlcm8uaWRdIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SGVyb0hlYWRlciBpZD17aGVyby5pZH0gey4uLmhlcm99IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpkaXNhYmxlZCxcbiAgICAgICAgYnV0dG9uW2RhdGEtYWN0aXZlPSd0cnVlJ10ge1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc2ZDdjO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3YWJiN2FhO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oSGVyb09wdGlvbnMpO1xuIl19 */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\HeroSelect\\\\HeroOptions.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_s(HeroOptions, "bUqifs7h7EVXqFrOnyVIJNrl0EY=");

_c = HeroOptions;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(HeroOptions));

var _c, _c2;

$RefreshReg$(_c, "HeroOptions");
$RefreshReg$(_c2, "%default%");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9IZXJvT3B0aW9ucy50c3giXSwibmFtZXMiOlsiSGVyb09wdGlvbnMiLCJoZXJvSWQiLCJoZXJvZXMiLCJoZXJvZXNPcmRlciIsIm9uU2VsZWN0Iiwib25DbGljayIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaGVybyIsImlkIiwiaGlkZGVuIiwib3JkZXIiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsU0FBU0EsV0FBVCxPQVVHO0FBQUE7O0FBQUE7O0FBQUEsTUFUREMsTUFTQyxRQVREQSxNQVNDO0FBQUEsTUFSREMsTUFRQyxRQVJEQSxNQVFDO0FBQUEsTUFQREMsV0FPQyxRQVBEQSxXQU9DO0FBQUEsTUFOREMsUUFNQyxRQU5EQSxRQU1DO0FBQ0QsTUFBTUMsT0FBTyxHQUFHQyxrREFBVyxDQUN6QixVQUFDQyxLQUFELEVBQThDO0FBQzVDQSxTQUFLLENBQUNDLGVBQU47QUFDQUosWUFBUSxDQUFDRyxLQUFLLENBQUNFLGFBQU4sQ0FBb0JDLEtBQXJCLENBQVI7QUFDRCxHQUp3QixFQUt6QixDQUFDTixRQUFELENBTHlCLENBQTNCO0FBT0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxXQUFaO0FBQ0Esc0JBQ0U7QUFBQSxlQUNHRCxNQUFNLENBQUNXLEdBQVAsQ0FBVyxVQUFDQyxJQUFEO0FBQUEsMEJBQ1Y7QUFFRSxnQkFBUSxFQUFFYixNQUFNLEtBQUthLElBQUksQ0FBQ0MsRUFGNUI7QUFHRSx1QkFBYWQsTUFBTSxLQUFLYSxJQUFJLENBQUNDLEVBSC9CO0FBSUUsYUFBSyxFQUFFRCxJQUFJLENBQUNDLEVBSmQ7QUFLRSxjQUFNLEVBQUVELElBQUksQ0FBQ0UsTUFMZjtBQU1FLGVBQU8sRUFBRVgsT0FOWDtBQU9FLGFBQUssRUFBRTtBQUFFWSxlQUFLLEVBQUVkLFdBQVcsQ0FBQ1csSUFBSSxDQUFDQyxFQUFOO0FBQXBCLFNBUFQ7QUFBQTtBQUFBLCtCQVNFLDhEQUFDLCtEQUFEO0FBQVksWUFBRSxFQUFFRCxJQUFJLENBQUNDO0FBQXJCLFdBQTZCRCxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEYsU0FDT1gsV0FBVyxDQUFDVyxJQUFJLENBQUNDLEVBQU4sQ0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVO0FBQUEsS0FBWCxDQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFtQ0Q7O0dBdERRZixXOztLQUFBQSxXO0FBd0RULCtEQUFlLG1CQUFBa0IsMkNBQUksQ0FBQ2xCLFdBQUQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci4yMWM2OTVhZjdmMWQ4MjY1MTY5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbywgU3ludGhldGljRXZlbnQsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlcm9IZWFkZXIgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9IZXJvSGVhZGVyJztcbmltcG9ydCB7IFRIZXJvT3B0aW9uIH0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcblxuZnVuY3Rpb24gSGVyb09wdGlvbnMoe1xuICBoZXJvSWQsXG4gIGhlcm9lcyxcbiAgaGVyb2VzT3JkZXIsXG4gIG9uU2VsZWN0LFxufToge1xuICBoZXJvSWQ6IHN0cmluZztcbiAgaGVyb2VzOiBUSGVyb09wdGlvbltdO1xuICBoZXJvZXNPcmRlcjogeyBbaGVyb0lkOiBzdHJpbmddOiBudW1iZXIgfTtcbiAgb25TZWxlY3Q6IChuZXdIZXJvSWQ6IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG9uU2VsZWN0KGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIH0sXG4gICAgW29uU2VsZWN0XSxcbiAgKTtcbiAgY29uc29sZS5sb2coaGVyb2VzT3JkZXIpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aGVyb2VzLm1hcCgoaGVybykgPT4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAga2V5PXtoZXJvZXNPcmRlcltoZXJvLmlkXX1cbiAgICAgICAgICBkaXNhYmxlZD17aGVyb0lkID09PSBoZXJvLmlkfVxuICAgICAgICAgIGRhdGEtYWN0aXZlPXtoZXJvSWQgPT09IGhlcm8uaWR9XG4gICAgICAgICAgdmFsdWU9e2hlcm8uaWR9XG4gICAgICAgICAgaGlkZGVuPXtoZXJvLmhpZGRlbn1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIHN0eWxlPXt7IG9yZGVyOiBoZXJvZXNPcmRlcltoZXJvLmlkXSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEhlcm9IZWFkZXIgaWQ9e2hlcm8uaWR9IHsuLi5oZXJvfSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246ZGlzYWJsZWQsXG4gICAgICAgIGJ1dHRvbltkYXRhLWFjdGl2ZT0ndHJ1ZSddIHtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NmQ3YztcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3N2FiYjdhYTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEhlcm9PcHRpb25zKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=