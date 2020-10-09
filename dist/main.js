(()=>{var e={28:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});var o=t(645),a=t.n(o)()(!1);a.push([e.id,'@charset "utf-8";\n\n\nbody {\n  margin: 0;\n  overflow-x: hidden;\n}\n\nh1 {\n  font-family: "Kreon", serif;\n  font-size: 4rem;\n  margin: 12px;\n  text-align: center;\n}\n\nh2,\nul li {\n  font-family: "Ranga", serif;\n}\n\nh2 {\n  font-size: 3rem;\n  font-weight: 400;\n  margin: 12px;\n  text-align: center;\n}\n\np {\n  font-family: "Poppins", sans-serif;\n}\n\nnav {\n  width: 100%;\n  display: flex;\n  background-color: #d1cfc5;\n  margin-top: 0;\n}\n\nul {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  width: 100%;\n  padding: 0;\n}\n\nli {\n  display: block;\n}\n\nul li {\n  list-style-type: none;\n  font-size: 2rem;\n  cursor: pointer;\n  transition: color 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);\n}\n\nul li:hover {\n  color: #1490c4;\n}\n\n#img1 {\n  width: 560px;\n  height: 360px;\n  margin-left: 32%;\n}\n\n.home-page {\n  background-color: #f7ba00;\n}\n\n.main-text {\n  padding: 20px 100px;\n  margin: 20px;\n}\n\n/* Menu */\n\n.card-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.food-head {\n  text-align: left;\n}\n\nsection[data-page="food-menu"] {\n  background-color: #c9c59d;\n}\n\n.card-container img {\n  width: 80%;\n  box-sizing: border-box;\n}\n\n.food-card {\n  background-color: white;\n  position: relative;\n  display: block;\n  width: 350px;\n  height: 300px;\n  padding: 30px;\n  border: 1px solid rgb(185, 181, 181);\n  border-radius: 30px;\n  margin: 30px;\n  transition: transform 500ms cubic-bezier(0.79, 0.14, 0.15, 0.86);\n}\n\n.food-card p {\n  font-size: 24px;\n  text-align: center;\n}\n\n.food-card img {\n  padding-left: 40px;\n  max-width: 100%;\n  display: block;\n}\n\n.card-container:focus-within .food-card,\n.card-container:hover .food-card {\n  transform: translateX(-25%);\n}\n\n.food-card:hover ~ .food-card,\n.food-card:focus ~ .food-card {\n  transform: translateX(25%);\n}\n\n.card-container .food-card:focus,\n.card-container .food-card:hover {\n  transform: scale(1.5);\n  z-index: 1;\n}\n',""]);const r=a},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t,o,a,r=e[1]||"",c=e[3];if(!c)return r;if(n&&"function"==typeof btoa){var i=(t=c,o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(a," */")),d=c.sources.map((function(e){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(e," */")}));return[r].concat(d).concat([i]).join("\n")}return[r].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(a[c]=!0)}for(var i=0;i<e.length;i++){var d=[].concat(e[i]);o&&a[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},89:(e,n,t)=>{var o=t(379),a=t(28);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.id,a,""]]);o(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},379:(e,n,t)=>{"use strict";var o,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),r=[];function c(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function i(e,n){for(var t={},o=[],a=0;a<e.length;a++){var i=e[a],d=n.base?i[0]+n.base:i[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:l,updater:h(p,n),references:1}),o.push(l)}return o}function d(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var c=a(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,o){var a=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(n,a);else{var r=document.createTextNode(a),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(r,c[n]):e.appendChild(r)}}function p(e,n,t){var o=t.css,a=t.media,r=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,m=0;function h(e,n){var t,o,a;if(n.singleton){var r=m++;t=f||(f=d(n)),o=u.bind(null,t,r,!1),a=u.bind(null,t,r,!0)}else t=d(n),o=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=i(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var a=c(t[o]);r[a].references--}for(var d=i(e,n),s=0;s<t.length;s++){var l=c(t[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}t=d}}}},71:(e,n,t)=>{"use strict";t.d(n,{D:()=>M}),t(89);const o=t.p+"f809bf57f160be974b61c38338601729.jpg";function a(){const e=document.createElement("section");M.appendChild(e),e.setAttribute("class","home-page"),e.dataset.page="home";const n=document.createElement("h1");e.appendChild(n),n.textContent="The Dock";const t=document.createElement("h2");e.appendChild(t),t.textContent="Good food from the sea to the shore";const a=document.createElement("img");a.setAttribute("src",o),a.setAttribute("id","img1"),e.appendChild(a);const r=document.createElement("p");e.appendChild(r),r.textContent="Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. ",r.setAttribute("class","main-text")}const r=t.p+"c3086b5a6502a236df138ba54d78f810.jpg",c=t.p+"e69c68c63a6e116f92220b484d5f9305.jpg",i=t.p+"debeabb902f3c24672a1782f261dc165.jpg",d=t.p+"ff6ac2920eb4b4492b648e066ab98674.jpg",s=t.p+"170764d902eab4eef6955d02cebe6e29.jpg",l=t.p+"52eb5cc0970adfbf3a8daab3b3805deb.jpg",u=t.p+"4bc4acd719c29e868efab8c6aba732e5.jpg",p=t.p+"90617c45a6de9e6de269be22b4c22829.jpg",f=t.p+"704b0f1adfb588432d0e8c967683bb8a.jpg",m=document.createElement("div"),h=document.createElement("div"),b=document.createElement("div");class g{constructor(e,n,t){this.name=e,this.imgSrc=n,this.type=t}renderCard(){const e=document.createElement("div");"entree"===this.type?m.appendChild(e):"mainDish"===this.type?h.appendChild(e):"dessert"===this.type&&b.appendChild(e),e.setAttribute("class","food-card");const n=document.createElement("img");n.setAttribute("src",this.imgSrc),e.appendChild(n);const t=document.createElement("p");t.textContent=this.name,e.appendChild(t)}static removeCard(){document.querySelectorAll(".food-card").forEach(e=>e.remove())}}const v=new g("Shrimps in peach sauce",r,"entree"),C=new g("Shrimps in mysterious sauce",c,"entree"),y=new g("Fried squid rings",i,"entree"),x=new g("Pufferfish nuggets",d,"mainDish"),w=new g("The Big Shrimp Platter",s,"mainDish"),E=new g("Fried octopus",l,"mainDish"),S=new g("Blackberry cheesecake",u,"dessert"),j=new g("Chocolate fudge cake",p,"dessert"),k=new g("Vanilla ice cream with chocolate topping",f,"dessert"),M=document.querySelector("main");!function(){const e=document.createElement("nav");M.appendChild(e);const n=document.createElement("ul");e.appendChild(n);const t=document.createElement("li");n.appendChild(t),t.textContent="Home",t.classList.add("el0");const o=document.createElement("li");n.appendChild(o),o.textContent="Menu",o.classList.add("el1");const r=document.createElement("li");n.appendChild(r),r.textContent="Contact",r.classList.add("el2"),a()}();const A=document.querySelector(".el0"),N=document.querySelector(".el1"),L=document.querySelector(".el2");A.addEventListener("click",()=>{const e=document.querySelector("section");"home"!==e.dataset.page&&(g.removeCard(),e.parentNode.removeChild(e),a())}),N.addEventListener("click",()=>{const e=document.querySelector("section");"food-menu"!==e.dataset.page&&(e.parentNode.removeChild(e),function(){const e=document.createElement("section");e.dataset.page="food-menu",M.appendChild(e);const n=document.createElement("h1");e.appendChild(n),n.textContent="Menu";const t=document.createElement("h2");t.textContent="Entrees",e.appendChild(t),t.setAttribute("class","food-head"),e.appendChild(m),m.dataset.content="seafood-entrees",m.className="card-container";const o=document.createElement("h2");o.textContent="Main Dishes",e.appendChild(o),o.setAttribute("class","food-head"),e.appendChild(h),h.dataset.content="seafood-main-dishes",h.className="card-container";const a=document.createElement("h2");a.textContent="Desserts",a.setAttribute("class","food-head"),e.appendChild(a),e.appendChild(b),b.dataset.content="seafood-desserts",b.className="card-container",v.renderCard(),C.renderCard(),y.renderCard(),x.renderCard(),w.renderCard(),E.renderCard(),S.renderCard(),j.renderCard(),k.renderCard()}())}),L.addEventListener("click",()=>{const e=document.querySelector("section");"contact-menu"!==e.dataset.page&&(g.removeCard(),e.parentNode.removeChild(e),function(){const e=document.createElement("section");M.appendChild(e),e.setAttribute("class","contact-page"),e.dataset.page="contact.menu";const n=document.createElement("h1");e.appendChild(n),n.textContent="Contact"}())})}},n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="",t(71)})();