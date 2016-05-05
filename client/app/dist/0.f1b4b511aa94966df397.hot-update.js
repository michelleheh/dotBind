webpackHotUpdate(0,{

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(146); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(146);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(253);

	var _tagActions = __webpack_require__(310);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AddTagContainer = function AddTagContainer(_ref) {
	  var dispatch = _ref.dispatch;

	  var input = void 0;
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'form',
	      { onSubmit: function onSubmit(e) {
	          e.preventDefault();

	          if (!input.value.trim()) {
	            return;
	          }
	          dispatch((0, _tagActions.addTag)(input.value));
	          input.value = '';
	        } },
	      _react2.default.createElement('input', { type: 'text', ref: function ref(node) {
	          input = node;
	        } }),
	      _react2.default.createElement(
	        'button',
	        { type: 'submit' },
	        'Add Tag!'
	      )
	    )
	  );
	};

	AddTagContainer = (0, _reactRedux.connect)()(AddTagContainer);

	exports.default = AddTagContainer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(284); if (makeExportsHot(module, __webpack_require__(146))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AddTagContainer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(146); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchTagsAction = exports.addTag = undefined;

	var _axios = __webpack_require__(291);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var tagId = 0;
	var addTag = exports.addTag = function addTag(tag) {
	  return {
	    type: 'ADD_TAG',
	    id: tagId++,
	    name: tag
	  };
	};

	var fetchTagsAction = exports.fetchTagsAction = function fetchTagsAction() {
	  var url = 'http://localhost:3000/v1/tags';
	  var request = _axios2.default.get(url);
	  return {
	    type: 'FETCH_TAGS',
	    payload: request
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(284); if (makeExportsHot(module, __webpack_require__(146))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "tagActions.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})