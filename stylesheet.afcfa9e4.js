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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"font/gothman_pro/stylesheet.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./GothamPro-Bold.eot":[["GothamPro-Bold.eed8e758.eot","font/gothman_pro/GothamPro-Bold.eot"],"font/gothman_pro/GothamPro-Bold.eot"],"./GothamPro-Bold.woff2":[["GothamPro-Bold.290d2fda.woff2","font/gothman_pro/GothamPro-Bold.woff2"],"font/gothman_pro/GothamPro-Bold.woff2"],"./GothamPro-Bold.woff":[["GothamPro-Bold.dc236190.woff","font/gothman_pro/GothamPro-Bold.woff"],"font/gothman_pro/GothamPro-Bold.woff"],"./GothamPro-Bold.ttf":[["GothamPro-Bold.0fd2a877.ttf","font/gothman_pro/GothamPro-Bold.ttf"],"font/gothman_pro/GothamPro-Bold.ttf"],"./GothamPro-Light.eot":[["GothamPro-Light.0196bb9d.eot","font/gothman_pro/GothamPro-Light.eot"],"font/gothman_pro/GothamPro-Light.eot"],"./GothamPro-Light.woff2":[["GothamPro-Light.f2f691de.woff2","font/gothman_pro/GothamPro-Light.woff2"],"font/gothman_pro/GothamPro-Light.woff2"],"./GothamPro-Light.woff":[["GothamPro-Light.980b88e0.woff","font/gothman_pro/GothamPro-Light.woff"],"font/gothman_pro/GothamPro-Light.woff"],"./GothamPro-Light.ttf":[["GothamPro-Light.bc86c3e9.ttf","font/gothman_pro/GothamPro-Light.ttf"],"font/gothman_pro/GothamPro-Light.ttf"],"./GothamPro-Black.eot":[["GothamPro-Black.eda5e26f.eot","font/gothman_pro/GothamPro-Black.eot"],"font/gothman_pro/GothamPro-Black.eot"],"./GothamPro-Black.woff2":[["GothamPro-Black.eb40feb8.woff2","font/gothman_pro/GothamPro-Black.woff2"],"font/gothman_pro/GothamPro-Black.woff2"],"./GothamPro-Black.woff":[["GothamPro-Black.f63d7ab4.woff","font/gothman_pro/GothamPro-Black.woff"],"font/gothman_pro/GothamPro-Black.woff"],"./GothamPro-Black.ttf":[["GothamPro-Black.a9c20c99.ttf","font/gothman_pro/GothamPro-Black.ttf"],"font/gothman_pro/GothamPro-Black.ttf"],"./GothamProNarrow-Bold.eot":[["GothamProNarrow-Bold.ce1e5d82.eot","font/gothman_pro/GothamProNarrow-Bold.eot"],"font/gothman_pro/GothamProNarrow-Bold.eot"],"./GothamProNarrow-Bold.woff2":[["GothamProNarrow-Bold.4597b2ad.woff2","font/gothman_pro/GothamProNarrow-Bold.woff2"],"font/gothman_pro/GothamProNarrow-Bold.woff2"],"./GothamProNarrow-Bold.woff":[["GothamProNarrow-Bold.056cbe93.woff","font/gothman_pro/GothamProNarrow-Bold.woff"],"font/gothman_pro/GothamProNarrow-Bold.woff"],"./GothamProNarrow-Bold.ttf":[["GothamProNarrow-Bold.27db357b.ttf","font/gothman_pro/GothamProNarrow-Bold.ttf"],"font/gothman_pro/GothamProNarrow-Bold.ttf"],"./GothamPro-Medium.eot":[["GothamPro-Medium.c72e067f.eot","font/gothman_pro/GothamPro-Medium.eot"],"font/gothman_pro/GothamPro-Medium.eot"],"./GothamPro-Medium.woff2":[["GothamPro-Medium.a05cab5f.woff2","font/gothman_pro/GothamPro-Medium.woff2"],"font/gothman_pro/GothamPro-Medium.woff2"],"./GothamPro-Medium.woff":[["GothamPro-Medium.6a2219ba.woff","font/gothman_pro/GothamPro-Medium.woff"],"font/gothman_pro/GothamPro-Medium.woff"],"./GothamPro-Medium.ttf":[["GothamPro-Medium.213576fe.ttf","font/gothman_pro/GothamPro-Medium.ttf"],"font/gothman_pro/GothamPro-Medium.ttf"],"./GothamPro-BoldItalic.eot":[["GothamPro-BoldItalic.fd093699.eot","font/gothman_pro/GothamPro-BoldItalic.eot"],"font/gothman_pro/GothamPro-BoldItalic.eot"],"./GothamPro-BoldItalic.woff2":[["GothamPro-BoldItalic.ee1d9511.woff2","font/gothman_pro/GothamPro-BoldItalic.woff2"],"font/gothman_pro/GothamPro-BoldItalic.woff2"],"./GothamPro-BoldItalic.woff":[["GothamPro-BoldItalic.b1ee555b.woff","font/gothman_pro/GothamPro-BoldItalic.woff"],"font/gothman_pro/GothamPro-BoldItalic.woff"],"./GothamPro-BoldItalic.ttf":[["GothamPro-BoldItalic.1ef435c8.ttf","font/gothman_pro/GothamPro-BoldItalic.ttf"],"font/gothman_pro/GothamPro-BoldItalic.ttf"],"./GothamPro.eot":[["GothamPro.5059e881.eot","font/gothman_pro/GothamPro.eot"],"font/gothman_pro/GothamPro.eot"],"./GothamPro.woff2":[["GothamPro.de4554d0.woff2","font/gothman_pro/GothamPro.woff2"],"font/gothman_pro/GothamPro.woff2"],"./GothamPro.woff":[["GothamPro.a5f5829c.woff","font/gothman_pro/GothamPro.woff"],"font/gothman_pro/GothamPro.woff"],"./GothamPro.ttf":[["GothamPro.23f023b6.ttf","font/gothman_pro/GothamPro.ttf"],"font/gothman_pro/GothamPro.ttf"],"./GothamPro-MediumItalic.eot":[["GothamPro-MediumItalic.4e7c8355.eot","font/gothman_pro/GothamPro-MediumItalic.eot"],"font/gothman_pro/GothamPro-MediumItalic.eot"],"./GothamPro-MediumItalic.woff2":[["GothamPro-MediumItalic.3d0d9caf.woff2","font/gothman_pro/GothamPro-MediumItalic.woff2"],"font/gothman_pro/GothamPro-MediumItalic.woff2"],"./GothamPro-MediumItalic.woff":[["GothamPro-MediumItalic.1033fd56.woff","font/gothman_pro/GothamPro-MediumItalic.woff"],"font/gothman_pro/GothamPro-MediumItalic.woff"],"./GothamPro-MediumItalic.ttf":[["GothamPro-MediumItalic.a111aa4c.ttf","font/gothman_pro/GothamPro-MediumItalic.ttf"],"font/gothman_pro/GothamPro-MediumItalic.ttf"],"./GothamPro-BlackItalic.eot":[["GothamPro-BlackItalic.0da831d0.eot","font/gothman_pro/GothamPro-BlackItalic.eot"],"font/gothman_pro/GothamPro-BlackItalic.eot"],"./GothamPro-BlackItalic.woff2":[["GothamPro-BlackItalic.08a8bbea.woff2","font/gothman_pro/GothamPro-BlackItalic.woff2"],"font/gothman_pro/GothamPro-BlackItalic.woff2"],"./GothamPro-BlackItalic.woff":[["GothamPro-BlackItalic.107c32ad.woff","font/gothman_pro/GothamPro-BlackItalic.woff"],"font/gothman_pro/GothamPro-BlackItalic.woff"],"./GothamPro-BlackItalic.ttf":[["GothamPro-BlackItalic.fd188f45.ttf","font/gothman_pro/GothamPro-BlackItalic.ttf"],"font/gothman_pro/GothamPro-BlackItalic.ttf"],"./GothamProNarrow-Medium.eot":[["GothamProNarrow-Medium.7b1d9669.eot","font/gothman_pro/GothamProNarrow-Medium.eot"],"font/gothman_pro/GothamProNarrow-Medium.eot"],"./GothamProNarrow-Medium.woff2":[["GothamProNarrow-Medium.a093cd73.woff2","font/gothman_pro/GothamProNarrow-Medium.woff2"],"font/gothman_pro/GothamProNarrow-Medium.woff2"],"./GothamProNarrow-Medium.woff":[["GothamProNarrow-Medium.c508c59a.woff","font/gothman_pro/GothamProNarrow-Medium.woff"],"font/gothman_pro/GothamProNarrow-Medium.woff"],"./GothamProNarrow-Medium.ttf":[["GothamProNarrow-Medium.e1822902.ttf","font/gothman_pro/GothamProNarrow-Medium.ttf"],"font/gothman_pro/GothamProNarrow-Medium.ttf"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51299" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/stylesheet.afcfa9e4.js.map