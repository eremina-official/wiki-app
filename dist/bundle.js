!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=11)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(i).concat([o]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),s=null,l=0,u=[],p=e(4);function d(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],t))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(b(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:c}}}}function f(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):e.push(r[a]={id:a,parts:[c]})}return e}function m(n,t){var e=c(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),u.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(n.insertAt.before,e);e.insertBefore(t,o)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=u.indexOf(n);t>=0&&u.splice(t,1)}function h(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return v(t,n.attrs),m(n,t),t}function v(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function b(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=l++;e=s||(s=h(t)),r=w.bind(null,e,a,!1),o=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(t,n.attrs),m(n,t),t}(t),r=function(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,e,t),o=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){g(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=f(n,t);return d(e,t),function(n){for(var r=[],o=0;o<e.length;o++){var a=e[o];(c=i[a.id]).refs--,r.push(c)}n&&d(f(n,t),t);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var y,x=(y=[],function(n,t){return y[n]=t,y.filter(Boolean).join("\n")});function w(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t,e){var r=e(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,".search-results__item {\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.search-results__item p {\r\n  margin: 0;\r\n  padding: 0 0 6px;\r\n}\r\n\r\n.search-results__item a {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  padding: 0 0 6px;\r\n}\r\n\r\n.search-results__item a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.extract {\r\n  font-size: 90%;\r\n}\r\n\r\n.button-language {\r\n  font-size: 80%;\r\n  display: inline-block;\r\n  padding-bottom: 6px;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-language:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.more-results-button {\r\n  font-size: 80%;\r\n  display: inline-block;\r\n  border: 1px solid black;\r\n  padding: 6px;\r\n  cursor: pointer;\r\n}\r\n\r\n.more-results-button:hover {\r\n  background-color: gray;\r\n  color: white;\r\n}",""])},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,t,e){var r=e(6);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,".lang-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 80%;\r\n}\r\n\r\n.lang-container__item {\r\n  padding: 6px;\r\n}\r\n\r\n.is-not-active {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 400px) {\r\n  .lang-container {\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .lang-container__item {\r\n    padding: 14px;\r\n    flex-basis: 50%;\r\n  }\r\n}\r\n\r\n@media (min-width: 700px) {\r\n  .lang-container__item {\r\n    flex-basis: 25%;\r\n  }\r\n}",""])},function(n,t,e){var r=e(8);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"body {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Verdana, Arial, Helvetica, sans-serif;;\r\n}\r\n\r\n/* box-sizing property is not inherited */\r\n* {\r\n  box-sizing: border-box; \r\n}\r\n\r\nheader {\r\n  max-width: 1024px;\r\n  margin: auto;\r\n  padding: 14px;\r\n  border-bottom: 1px solid gray;\r\n  background-color: #fafafb;\r\n}\r\n\r\nheader a {\r\n  text-decoration: none;\r\n  font-weight: bold;\r\n  color: #07c;\r\n}\r\n\r\n.main {\r\n  max-width: 1024px;\r\n  margin: auto;\r\n  padding: 14px;\r\n}\r\n\r\n@media only screen and (min-width: 700px) {\r\n  header {\r\n    font-size: 120%;\r\n  }\r\n}",""])},function(n,t,e){var r=e(10);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"form {\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.form__keyword-input-label {\r\n  display: block;\r\n}\r\n\r\n.form__keyword-input-wrapper {\r\n  display: flex;\r\n  padding: 15px 0;\r\n}\r\n\r\n.keyword-input {\r\n  flex-grow: 1;\r\n  padding: 6px 3px;\r\n  border: 1px solid black;\r\n  border-right: none;\r\n}\r\n\r\n.submit-button {\r\n  background-color: #0095ff;\r\n  color: white;\r\n  border: 1px solid #07c;\r\n  cursor: pointer;\r\n}\r\n\r\n.submit-button:hover {\r\n  background-color: #07c;\r\n}\r\n\r\n.language-input-label {\r\n  cursor: pointer;\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  form {\r\n    padding: 15px 0 30px;\r\n  }\r\n}",""])},function(n,t,e){"use strict";e.r(t);e(2);function r(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o,i,a,c=document.querySelector(".search-results-container"),s=document.querySelector(".search-results");function l(n){i=0,a=10,o=[],s.innerHTML="";var t=document.querySelector(".js-more-results-button");if(t&&t.remove(),n.query){for(var e=Object.entries(n.query.pages),c=0;c<e.length;c++){var l=r(e[c],2),p=l[0],d=l[1];o.push([p,d])}u(o.slice(i,a))}else s.textContent="No results found."}function u(n){var t=!0,e=!1,r=void 0;try{for(var o,a=n[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var l=o.value,u=document.createElement("div");u.setAttribute("class","search-results__item"),u.setAttribute("id",l[0]);var p=document.createElement("a");p.setAttribute("href",l[1].fullurl),p.textContent=l[1].title;var d=document.createElement("p");d.setAttribute("class","extract"),d.innerHTML=l[1].extract;var f=document.createElement("div");f.setAttribute("class","button-language js-button-language"),f.textContent="Show/Hide languages",u.appendChild(p),u.appendChild(d),u.appendChild(f),s.appendChild(u)}}catch(n){e=!0,r=n}finally{try{t||null==a.return||a.return()}finally{if(e)throw r}}if(0===i&&n.length>1){var m=document.createElement("div");m.setAttribute("class","more-results-button js-more-results-button"),m.textContent="Show more results",c.appendChild(m)}}document.addEventListener("click",function(n){if(!n.target.classList.contains("js-more-results-button"))return;i+=10,a+=10;var t=o.slice(i,a);t.length?u(t):n.target.remove()});e(5);var p=document.querySelector(".js-language-input");function d(n){if(n.query){var t=Object.keys(n.query.pages),e=n.query.pages[t].langlinks;(function(n,t){var e=document.createElement("div");e.setAttribute("class","lang-container js-lang-container"),n?n.forEach(function(n){var t=document.createElement("p");t.textContent=n.autonym;var r=document.createElement("a");r.setAttribute("class","lang-title"),r.setAttribute("lang",n.lang),r.setAttribute("href",n.url),r.textContent=n["*"];var o=document.createElement("div");o.setAttribute("class","lang-container__item"),o.appendChild(t),o.appendChild(r),e.appendChild(o)}):e.textContent="There are no interlanguage links found.";document.getElementById(t).appendChild(e)})(e=p.checked?e.filter(f):e,t)}}function f(n){return"de"===n.lang||"pl"===n.lang||"ru"===n.lang}document.addEventListener("click",function(n){if(!n.target.classList.contains("js-button-language"))return;if(n.target.nextElementSibling)n.target.nextElementSibling.classList.toggle("is-not-active");else{var t=n.target.parentElement,e=t.getAttribute("id");y(e)}}),p.addEventListener("change",function(){var n=document.querySelectorAll(".js-lang-container");n.length&&n.forEach(function(n){var t=n.parentElement,e=t.getAttribute("id");n.remove(),y(e)})});var m=document.querySelector(".js-form"),g=document.querySelector(".js-keyword-input"),h="https://en.wikipedia.org/w/api.php",v={action:"action=query",generator:"generator=search",gsrlimit:"gsrlimit=20",prop:"prop=info|extracts",lprop:"prop=langlinks",inprop:"inprop=url",exprop:"exintro=&explaintext=&exsentences=1",llprop:"llprop=url|autonym",lllimit:"lllimit=300",format:"format=json",origin:"origin=*"};function b(){var n=g.value;if(n.includes("https://en.wikipedia.org/wiki/")||n.includes("https://en.m.wikipedia.org/wiki/")){var t=n.lastIndexOf("/")+1,e=n.slice(t).replace(/_/g,"%20");return"".concat(h,"?").concat(v.action,"&titles=").concat(e,"&").concat(v.prop,"&").concat(v.inprop,"&").concat(v.exprop,"&").concat(v.format,"&").concat(v.origin)}return"".concat(h,"?").concat(v.action,"&").concat(v.generator,"&gsrsearch=").concat(n,"&").concat(v.gsrlimit,"&").concat(v.prop,"&").concat(v.inprop,"&").concat(v.exprop,"&").concat(v.format,"&").concat(v.origin)}function y(n){x(function(n){return"".concat(h,"?").concat(v.action,"&pageids=").concat(n,"&").concat(v.lprop,"&").concat(v.llprop,"&").concat(v.lllimit,"&").concat(v.format,"&").concat(v.origin)}(n),d)}function x(n,t){fetch(n).then(function(n){return n.json()}).then(function(n){t(n)}).catch(function(n){return console.log(n)})}m.addEventListener("submit",function(n){n.preventDefault();var t=b();history.pushState({url:t},document.title,"?q=".concat(g.value)),x(t,l)}),window.addEventListener("popstate",function(n){n.state&&x(n.state.url,l)}),window.addEventListener("load",function(){g.value&&x(b(),l)});e(7),e(9)}]);