(()=>{var e={28:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a});var r=t(645),o=t.n(r)()(!1);o.push([e.id,'@charset "utf-8";\r\n\r\n\r\nbody {\r\n  margin: 0;\r\n  overflow-x: hidden;\r\n}\r\n\r\nh1 {\r\n  font-family: "Kreon", serif;\r\n  font-size: 4rem;\r\n  margin: 12px;\r\n  text-align: center;\r\n}\r\n\r\nh2,\r\nul li {\r\n  font-family: "Ranga", serif;\r\n}\r\n\r\nh2 {\r\n  font-size: 3rem;\r\n  font-weight: 400;\r\n  margin: 12px;\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  font-family: "Poppins", sans-serif;\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n  display: flex;\r\n  background-color: #d1cfc5;\r\n  margin-top: 0;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  display: block;\r\n}\r\n\r\nul li {\r\n  list-style-type: none;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  transition: color 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);\r\n}\r\n\r\nul li:hover {\r\n  color: #1490c4;\r\n}\r\n\r\n#img1 {\r\n  width: 560px;\r\n  height: 360px;\r\n  margin-left: 32%;\r\n}\r\n\r\n.home-page {\r\n  background-color: #f7ba00;\r\n}\r\n\r\n.main-text {\r\n  padding: 20px 100px;\r\n  margin: 20px;\r\n}\r\n\r\n/* Menu */\r\n\r\n.card-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.food-head {\r\n  text-align: left;\r\n}\r\n\r\nsection[data-page="food-menu"] {\r\n  background-color: #c9c59d;\r\n}\r\n\r\n.card-container img {\r\n  width: 80%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.food-card {\r\n  background-color: white;\r\n  position: relative;\r\n  display: block;\r\n  width: 350px;\r\n  height: 300px;\r\n  padding: 30px;\r\n  border: 1px solid rgb(185, 181, 181);\r\n  border-radius: 30px;\r\n  margin: 30px;\r\n  transition: transform 500ms cubic-bezier(0.79, 0.14, 0.15, 0.86);\r\n}\r\n\r\n.food-card p {\r\n  font-size: 24px;\r\n  text-align: center;\r\n}\r\n\r\n.food-card img {\r\n  padding-left: 40px;\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n.card-container:focus-within .food-card,\r\n.card-container:hover .food-card {\r\n  transform: translateX(-25%);\r\n}\r\n\r\n.food-card:hover ~ .food-card,\r\n.food-card:focus ~ .food-card {\r\n  transform: translateX(25%);\r\n}\r\n\r\n.card-container .food-card:focus,\r\n.card-container .food-card:hover {\r\n  transform: scale(1.5);\r\n  z-index: 1;\r\n}\r\n',""]);const a=o},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t,r,o,a=e[1]||"",i=e[3];if(!i)return a;if(n&&"function"==typeof btoa){var c=(t=i,r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),d=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(d).concat([c]).join("\n")}return[a].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},89:(e,n,t)=>{var r=t(379),o=t(28);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},379:(e,n,t)=>{"use strict";var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],d=n.base?c[0]+n.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=i(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:h(p,n),references:1}),r.push(l)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var a=m++;t=f||(f=d(n)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=d(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var d=c(e,n),s=0;s<t.length;s++){var l=i(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=d}}}},885:(e,n,t)=>{"use strict";t.d(n,{D:()=>x}),t(89);const r=t.p+"f809bf57f160be974b61c38338601729.jpg";function o(){const e=document.createElement("section");x.appendChild(e),e.setAttribute("class","home-page"),e.dataset.page="home";const n=document.createElement("h1");e.appendChild(n),n.textContent="The Dock";const t=document.createElement("h2");e.appendChild(t),t.textContent="Good food from the sea to the shore";const o=document.createElement("img");o.setAttribute("src",r),o.setAttribute("id","img1"),e.appendChild(o);const a=document.createElement("p");e.appendChild(a),a.textContent="Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. ",a.setAttribute("class","main-text")}const a=t.p+"c3086b5a6502a236df138ba54d78f810.jpg",i=t.p+"e69c68c63a6e116f92220b484d5f9305.jpg",c=t.p+"debeabb902f3c24672a1782f261dc165.jpg",d=t.p+"ff6ac2920eb4b4492b648e066ab98674.jpg",s=t.p+"170764d902eab4eef6955d02cebe6e29.jpg",l=t.p+"52eb5cc0970adfbf3a8daab3b3805deb.jpg",u=document.createElement("div"),p=document.createElement("div"),f=document.createElement("div");class m{constructor(e,n,t){this.name=e,this.imgSrc=n,this.type=t}renderCard(){const e=document.createElement("div");"entree"===this.type?u.appendChild(e):"mainDish"===this.type?p.appendChild(e):"dessert"===this.type&&f.appendChild(e),e.setAttribute("class","food-card");const n=document.createElement("img");n.setAttribute("src",this.imgSrc),e.appendChild(n);const t=document.createElement("p");t.textContent=this.name,e.appendChild(t)}static removeCard(){document.querySelectorAll(".food-card").forEach(e=>e.remove())}}const h=new m("Shrimps in peach sauce",a,"entree"),b=new m("Shimps in misterious sauce",i,"entree"),g=new m("Fried squid rings",c,"entree"),v=new m("Pufferfish nuggets",d,"mainDish"),C=new m("The Big Shrimp Platter",s,"mainDish"),y=new m("Fried octopus",l,"mainDish"),x=document.querySelector("main");!function(){const e=document.createElement("nav");x.appendChild(e);const n=document.createElement("ul");e.appendChild(n);const t=document.createElement("li");n.appendChild(t),t.textContent="Home",t.classList.add("el0");const r=document.createElement("li");n.appendChild(r),r.textContent="Menu",r.classList.add("el1");const a=document.createElement("li");n.appendChild(a),a.textContent="Contact",a.classList.add("el2"),o()}();const w=document.querySelector(".el0"),E=document.querySelector(".el1");w.addEventListener("click",()=>{const e=document.querySelector("section");"home"!==e.dataset.page&&(m.removeCard(),e.parentNode.removeChild(e),o())}),E.addEventListener("click",()=>{const e=document.querySelector("section");"food-menu"!==e.dataset.page&&(e.parentNode.removeChild(e),function(){const e=document.createElement("section");e.dataset.page="food-menu",x.appendChild(e);const n=document.createElement("h1");e.appendChild(n),n.textContent="Menu";const t=document.createElement("h2");t.textContent="Entrees",e.appendChild(t),t.setAttribute("class","food-head"),e.appendChild(u),u.dataset.content="seafood-entrees",u.className="card-container";const r=document.createElement("h2");r.textContent="Main Dishes",e.appendChild(r),r.setAttribute("class","food-head"),e.appendChild(p),p.dataset.content="seafood-main-dishes",p.className="card-container",e.appendChild(f),f.dataset.content="seafood-desserts",f.className="card-container",h.renderCard(),b.renderCard(),g.renderCard(),v.renderCard(),C.renderCard(),y.renderCard()}())})}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="",t(885)})();