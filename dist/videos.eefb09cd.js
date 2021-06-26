// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"ts/main.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLoadEvent = exports.copyText = void 0;

function copyText(text) {
  var temp = document.createElement('textarea');
  temp.innerHTML = text;
  document.body.appendChild(temp);
  temp.select();
  temp.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(temp);
}

exports.copyText = copyText;

function addLoadEvent(func) {
  var oldOnLoad = window.onload;

  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      if (oldOnLoad) {
        oldOnLoad(undefined);
      }

      func();
    };
  }
}

exports.addLoadEvent = addLoadEvent;

HTMLCollection.prototype.entries = function () {
  var out = [];

  for (var i = 0; i < this.length; i++) {
    out.push([i, this[i]]);
  }

  return out;
};

function _addNavbarListItem(list, href, html) {
  var listItem = document.createElement('li');
  var link = document.createElement('a');
  link.setAttribute('href', href);
  link.innerHTML = html;
  listItem.appendChild(link);
  list.appendChild(listItem);
}

function addNavbarListItem(list, href, icon, text) {
  if (window.location.href.includes('src') || window.location.href.includes('min') || window.location.href.includes('github.io')) {
    href = "/".concat(window.location.pathname.split('/')[1]).concat(href);
  }

  _addNavbarListItem(list, href, "<i class=\"".concat(icon, "\"></i><span style=\"vertical-align: middle;\">").concat(text, "</span>"));
}

addLoadEvent(function () {
  var navbars = document.getElementsByTagName('nav');

  if (!navbars) {
    return;
  }

  var navbar = navbars[0];
  var checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', 'nav-checkbox');
  navbar.appendChild(checkbox);
  var navbarList = document.createElement('div');
  navbarList.setAttribute('id', 'navbar-list');
  var list = document.createElement('ul');
  addNavbarListItem(list, '/', 'fas fa-home', 'Home');
  addNavbarListItem(list, '/creations', 'fas fa-code', 'Creations');
  addNavbarListItem(list, '/videos', 'fas fa-film', 'Videos');
  navbarList.appendChild(list);
  navbar.appendChild(navbarList);
  var hamburgerLabel = document.createElement('label');
  hamburgerLabel.setAttribute('for', 'nav-checkbox');
  var hamburgerContent = document.createElement('div');
  hamburgerContent.setAttribute('id', 'hamburger-content');
  var hamburgerLine = document.createElement('div');
  hamburgerLine.setAttribute('id', 'hamburger-middle');
  hamburgerContent.appendChild(hamburgerLine);
  hamburgerLabel.appendChild(hamburgerContent);
  navbar.appendChild(hamburgerLabel);
});
},{}],"ts/videos.ts":[function(require,module,exports) {
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var main_1 = require("./main");

function createButtonsDiv(videoFileName, videoYouTubeLink) {
  var divButtons = document.createElement('div');
  divButtons.setAttribute('class', 'buttons-div');
  var aDownload = document.createElement('a');
  aDownload.setAttribute('href', "https://downloads.rubixdev.de/videos/".concat(videoFileName));
  aDownload.setAttribute('tabindex', '-1');
  var buttonDownload = document.createElement('button');
  buttonDownload.setAttribute('class', 'btn btn-small btn-dl btn-hover-light');
  var spanDownload = document.createElement('span');
  spanDownload.setAttribute('class', 'vertical-align');
  spanDownload.innerHTML = 'Download';
  buttonDownload.appendChild(spanDownload);
  aDownload.appendChild(buttonDownload);
  divButtons.appendChild(aDownload);
  var aYouTube = document.createElement('a');
  aYouTube.setAttribute('href', videoYouTubeLink);
  aYouTube.setAttribute('target', '_blank');
  aYouTube.setAttribute('rel', 'noopener noreferrer');
  aYouTube.setAttribute('tabindex', '-1');
  var buttonYouTube = document.createElement('button');
  buttonYouTube.setAttribute('class', 'btn btn-small btn-yt btn-hover-dark');
  var spanYouTube = document.createElement('span');
  spanYouTube.setAttribute('class', 'vertical-align');
  spanYouTube.innerHTML = 'Watch';
  buttonYouTube.appendChild(spanYouTube);
  aYouTube.appendChild(buttonYouTube);
  divButtons.appendChild(aYouTube);
  return divButtons;
}

function createTextDiv(videoDescription) {
  var divText = document.createElement('div');
  divText.setAttribute('class', 'text-div');
  divText.innerHTML = videoDescription;
  return divText;
}

main_1.addLoadEvent(function () {
  var sections = document.getElementsByClassName('video-section');

  var _iterator = _createForOfIteratorHelper(sections.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          index = _step$value[0],
          section = _step$value[1];

      var videoTitle = section.getElementsByClassName('title')[0].innerText;
      var videoFileName = section.getElementsByClassName('filename')[0].innerText;
      var videoYouTubeLink = section.getElementsByClassName('yt-link')[0].innerText;
      var videoDescription = section.getElementsByClassName('description')[0].innerHTML;
      section.innerHTML = '';
      var divDarkerBg = document.createElement('div');
      divDarkerBg.setAttribute('class', 'darker-bg');
      var h3VideoTitle = document.createElement('h3');
      h3VideoTitle.setAttribute('class', 'video-title');
      h3VideoTitle.innerHTML = videoTitle;
      divDarkerBg.appendChild(h3VideoTitle);
      var divSplit = document.createElement('div');
      divSplit.setAttribute('class', 'split big-section');

      if (index % 2 === 0) {
        divSplit.appendChild(createButtonsDiv(videoFileName, videoYouTubeLink));
        divSplit.appendChild(createTextDiv(videoDescription));
      } else {
        divSplit.appendChild(createTextDiv(videoDescription));
        divSplit.appendChild(createButtonsDiv(videoFileName, videoYouTubeLink));
      }

      divDarkerBg.appendChild(divSplit);
      section.appendChild(divDarkerBg);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
},{"./main":"ts/main.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "32995" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ts/videos.ts"], null)
//# sourceMappingURL=/videos.eefb09cd.js.map