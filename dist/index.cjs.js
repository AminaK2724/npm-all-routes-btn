'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".all-routes-btn{background:transparent;border:none;color:#00e0ff;font-family:Roboto,sans-serif;font-size:1.2rem;padding:.8rem 2rem;position:fixed;right:20px;text-shadow:0 0 5px #00e0ff,0 0 10px #00e0ff;top:20px;transition:all .3s ease-in-out;z-index:1000}.all-routes-btn:hover{background:#00e0ff;box-shadow:0 0 10px #00e0ff,0 0 20px #00e0ff;color:#072451;transform:scale(1.1)}.all-routes-page{align-items:center;background:rgba(10,25,47,.98);display:flex;height:100vh;justify-content:center;left:0;opacity:0;position:fixed;text-align:center;top:0;transition:opacity .5s ease-in-out,visibility .5s ease-in-out;visibility:hidden;width:100vw}.all-routes-page.fade-in,.all-routes-page.slide-in,.all-routes-page.zoom-in{opacity:1;visibility:visible}.all-routes-page.fade-out,.all-routes-page.slide-out,.all-routes-page.zoom-out{opacity:0;visibility:hidden}.routes-container{background:hsla(0,0%,100%,.1);border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.3);color:#fff;font-family:Roboto,sans-serif;max-width:600px;padding:2rem;width:90%}.routes-container h1{font-size:2rem;margin-bottom:1.5rem;text-shadow:0 0 5px #00e0ff,0 0 10px #00e0ff}.all-routes-page ul{list-style:none;margin:0;padding:0}.all-routes-page li{animation:slideIn .5s ease-in-out forwards;margin:1rem 0;opacity:0;transform:translateY(-20px)}.all-routes-page a{color:#00e0ff;font-size:1.2rem;text-decoration:none;transition:color .3s ease,transform .3s ease}.all-routes-page a:hover{color:#fff;transform:scale(1.05)}@keyframes slideIn{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes slideOut{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-20px)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes zoomIn{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes zoomOut{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}.slide-in{animation:slideIn .5s ease-in-out}.slide-out{animation:slideOut .5s ease-in-out}.fade-in{animation:fadeIn .5s ease-in-out}.fade-out{animation:fadeOut .5s ease-in-out}.zoom-in{animation:zoomIn .5s ease-in-out}.zoom-out{animation:zoomOut .5s ease-in-out}";
styleInject(css_248z);

var AllRoutesButton = function AllRoutesButton(_ref) {
  var routes = _ref.routes,
    _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? 'fade-in' : _ref$animation,
    _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = React.useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    previousPage = _useState4[0],
    setPreviousPage = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    closing = _useState6[0],
    setClosing = _useState6[1];
  var location = reactRouterDom.useLocation();
  var navigate = reactRouterDom.useNavigate();
  var handleOpen = function handleOpen() {
    setPreviousPage(location.pathname);
    setClosing(false);
    setIsOpen(true);
  };
  var handleGoBack = function handleGoBack() {
    setClosing(true);
    setTimeout(function () {
      setIsOpen(false);
      if (previousPage) {
        navigate(previousPage);
      }
    }, 500);
  };
  var handleNavigation = function handleNavigation(path) {
    setClosing(true);
    setTimeout(function () {
      setIsOpen(false);
      navigate(path);
    }, 500);
  };
  return /*#__PURE__*/React__default["default"].createElement("div", null, !isOpen ? /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: handleOpen,
    className: "all-routes-btn",
    style: styles.buttonStyles,
    onMouseEnter: function onMouseEnter(e) {
      return Object.assign(e.target.style, styles.buttonHoverStyles);
    },
    onMouseLeave: function onMouseLeave(e) {
      return Object.assign(e.target.style, styles.buttonStyles);
    }
  }, "All Routes \u2192") : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "all-routes-page ".concat(closing ? animation.replace('-in', '-out') : animation),
    style: styles.overlayStyles
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "routes-container",
    style: styles.containerStyles
  }, /*#__PURE__*/React__default["default"].createElement("h1", {
    style: styles.headerStyles
  }, "Explore All Pages"), /*#__PURE__*/React__default["default"].createElement("ul", null, routes.map(function (route, index) {
    return /*#__PURE__*/React__default["default"].createElement("li", {
      key: route.path,
      style: _objectSpread2(_objectSpread2({}, styles.linkContainerStyles), {}, {
        animationDelay: "".concat(index * 0.3, "s")
      })
    }, /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Link, {
      to: route.path,
      style: styles.linkStyles,
      onClick: function onClick(e) {
        e.preventDefault();
        handleNavigation(route.path);
      },
      onMouseEnter: function onMouseEnter(e) {
        return Object.assign(e.target.style, styles.linkHoverStyles);
      },
      onMouseLeave: function onMouseLeave(e) {
        return Object.assign(e.target.style, styles.linkStyles);
      }
    }, route.name));
  })), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: handleGoBack,
    className: "all-routes-btn",
    style: styles.buttonStyles,
    onMouseEnter: function onMouseEnter(e) {
      return Object.assign(e.target.style, styles.buttonHoverStyles);
    },
    onMouseLeave: function onMouseLeave(e) {
      return Object.assign(e.target.style, styles.buttonStyles);
    }
  }, "Go Back"))));
};
AllRoutesButton.propTypes = {
  routes: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    path: PropTypes__default["default"].string.isRequired
  })).isRequired,
  animation: PropTypes__default["default"].string,
  // 'slide-in', 'fade-in', 'zoom-in'
  styles: PropTypes__default["default"].shape({
    buttonStyles: PropTypes__default["default"].object,
    buttonHoverStyles: PropTypes__default["default"].object,
    overlayStyles: PropTypes__default["default"].object,
    containerStyles: PropTypes__default["default"].object,
    headerStyles: PropTypes__default["default"].object,
    linkContainerStyles: PropTypes__default["default"].object,
    linkStyles: PropTypes__default["default"].object,
    linkHoverStyles: PropTypes__default["default"].object
  })
};

module.exports = AllRoutesButton;
