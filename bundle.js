(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var i=n(81),o=n.n(i),r=n(645),a=n.n(r)()(o());a.push([t.id,"* {\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  height: 100%;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\nheader {\n  background-color: rgb(172, 169, 169);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  flex: 1;\n}\nh1 {\n  margin-left: 250px;\n}\nmain {\n  display: flex;\n  height: 100%;\n}\n#main {\n  background-color: rgb(226, 228, 228);\n  display: flex;\n  flex-direction: column;\n  flex: 8;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 16px;\n  padding: 20px;\n}\n.maintext {\n  display: flex;\n  font-size: 20px;\n  align-items: center;\n  justify-content: center;\n  flex: 0;\n  margin-top: 50px;\n  padding: 20px;\n}\n#wrapper {\n  background-color: rgb(153, 150, 150);\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  flex: 1;\n  gap: 16px;\n  align-items: center;\n  overflow: auto;\n}\n\nnav > div,\np {\n  display: block;\n  max-height: 25px;\n  padding: 4px;\n}\n#newproject {\n  color: rgb(104, 62, 8);\n  font-weight: bold;\n  max-height: 50px;\n}\n#projectheadline {\n  text-decoration: underline;\n  font-weight: 600;\n  max-height: 50px;\n}\ninput,\n.input,\n#submitbtn,\n#successtext {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n}\n\nfooter {\n  background-color: rgb(172, 169, 169);\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  flex: 1;\n}\n#footertext {\n  margin-left: 250px;\n}\n",""]);const c=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,o,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);i&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},a=[],c=0;c<t.length;c++){var s=t[c],d=i.base?s[0]+i.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,i);i.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var r=i(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var c=n(r[a]);e[c].references--}for(var s=i(t,o),d=0;d<r.length;d++){var l=n(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=s}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return t[i](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),i=n(795),o=n.n(i),r=n(569),a=n.n(r),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=["Title:"],h=["Title:","Discription:","Due Date:","Priority:"];function v(){const t=document.getElementById("main");for(;t.firstChild;)t.firstChild.remove()}function x(){for(let t=0;t<h.length;t++){const e=document.createElement("input"),n=document.createElement("p");n.className="input",n.textContent=h[t],e.id=h[t],console.log(h[t]),e.dataset.id=t,main.appendChild(n),main.appendChild(e)}main.firstChild.remove();const t=document.createElement("button");t.textContent="Submit Project",t.id="submitbtn",main.appendChild(t),document.getElementById("submitbtn").addEventListener("click",w)}function y(t){const e=t.target.getAttribute("data-id");console.log(t),v();const n=document.createElement("button");main.appendChild(n),main.setAttribute("data-project-id",e),n.textContent="Add Item",n.addEventListener("click",x)}class b{items=[];constructor(t,e){this.id=t,this.title=e}}class E{constructor(t,e,n,i){this.title=t,this.discription=e,this.dueDate=n,this.priority=i}}function C(){console.log("working submitProject");const t=document.getElementById("Title:");if(t.value.length>20)return void alert("Input too long, maximum 20 characters");const e=function(){const t=document.getElementById("Title:"),e=document.getElementById("nav"),n=document.createElement("p");return n.className="projectNav",n.textContent=t.value,n.setAttribute("data-id",Date.now()),console.log(n.getAttribute("data-id")),e.appendChild(n),n.addEventListener("click",y),n.getAttribute("data-id")}();let n=new b(e,t.value);window.projects.push(n),v(),function(){const t=document.createElement("p");main.appendChild(t),t.textContent="Project successfully added, open it by clicking its name on the left.",t.id="successtext"}()}function w(){console.log("working submitItem");const t=document.getElementById("Title:"),e=document.getElementById("Discription:"),n=document.getElementById("Due Date:"),i=document.getElementById("Priority:"),o=new E(t,e,n,i),r=document.getElementById("main").getAttribute("data-project-id");window.projects.find((function(t){return r===t.id})).items.push(o)}document.getElementById("newproject").addEventListener("click",(function(){v(),function(){for(let t=0;t<g.length;t++){const e=document.createElement("input"),n=document.createElement("p");n.className="input",n.textContent=g[t],e.id=g[t],console.log(e.id),main.appendChild(n),main.appendChild(e)}const t=document.createElement("button");t.textContent="Submit Project",t.id="submitbtn",main.appendChild(t),document.getElementById("submitbtn").addEventListener("click",C)}()})),window.projects=[]})()})();