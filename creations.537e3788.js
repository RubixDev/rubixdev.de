parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"g7hl":[function(require,module,exports) {
"use strict";function e(e){var t=document.createElement("textarea");t.innerHTML=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(t)}function t(e){var t=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){t&&t(void 0),e()}}function n(e,t,n){var o=document.createElement("li"),i=document.createElement("a");i.setAttribute("href",t),i.innerHTML=n,o.appendChild(i),e.appendChild(o)}function o(e,t,o,i){(window.location.href.includes("src")||window.location.href.includes("min")||window.location.href.includes("github.io"))&&(t="/".concat(window.location.pathname.split("/")[1]).concat(t)),n(e,t,'<i class="'.concat(o,'"></i><span style="vertical-align: middle;">').concat(i,"</span>"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addLoadEvent=exports.copyText=void 0,exports.copyText=e,exports.addLoadEvent=t,HTMLCollection.prototype.entries=function(){for(var e=[],t=0;t<this.length;t++)e.push([t,this[t]]);return e},t(function(){var e=document.getElementsByTagName("nav");if(e){var t=e[0],n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("id","nav-checkbox"),t.appendChild(n);var i=document.createElement("div");i.setAttribute("id","navbar-list");var a=document.createElement("ul");o(a,"/","fas fa-home","Home"),o(a,"/creations","fas fa-code","Creations"),o(a,"/videos","fas fa-film","Videos"),i.appendChild(a),t.appendChild(i);var d=document.createElement("label");d.setAttribute("for","nav-checkbox");var c=document.createElement("div");c.setAttribute("id","hamburger-content");var r=document.createElement("div");r.setAttribute("id","hamburger-middle"),c.appendChild(r),d.appendChild(c),t.appendChild(d)}});
},{}],"C3ei":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./main");e.addLoadEvent(function(){for(var e=document.getElementsByClassName("btn-curseforge"),t=0;t<e.length;t++){var r=e[t],s=document.createElement("i");s.setAttribute("class","si si-curseforge"),r.appendChild(s)}});
},{"./main":"g7hl"}]},{},["C3ei"], null)
//# sourceMappingURL=/creations.537e3788.js.map