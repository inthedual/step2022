"use strict";(()=>{var V=Object.defineProperty;var r=(z,j)=>V(z,"name",{value:j,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[5426,9753],{76745:(z,j,D)=>{D.d(j,{Z:()=>N});function m(c){const d=document.createElement("pre");return d.style.width="1px",d.style.height="1px",d.style.position="fixed",d.style.top="5px",d.textContent=c,d}r(m,"createNode");function x(c){if("clipboard"in navigator)return navigator.clipboard.writeText(c.textContent);const d=getSelection();if(d==null)return Promise.reject(new Error);d.removeAllRanges();const k=document.createRange();return k.selectNodeContents(c),d.addRange(k),document.execCommand("copy"),d.removeAllRanges(),Promise.resolve()}r(x,"copyNode");function _(c){if("clipboard"in navigator)return navigator.clipboard.writeText(c);const d=document.body;if(!d)return Promise.reject(new Error);const k=m(c);return d.appendChild(k),x(k),d.removeChild(k),Promise.resolve()}r(_,"copyText");function I(c){const d=c.getAttribute("for"),k=c.getAttribute("value");function F(){c.dispatchEvent(new CustomEvent("clipboard-copy",{bubbles:!0}))}if(r(F,"trigger"),k)_(k).then(F);else if(d){const M="getRootNode"in Element.prototype?c.getRootNode():c.ownerDocument;if(!(M instanceof Document||"ShadowRoot"in window&&M instanceof ShadowRoot))return;const R=M.getElementById(d);R&&C(R).then(F)}}r(I,"copy");function C(c){return c instanceof HTMLInputElement||c instanceof HTMLTextAreaElement?_(c.value):c instanceof HTMLAnchorElement&&c.hasAttribute("href")?_(c.href):x(c)}r(C,"copyTarget");function S(c){const d=c.currentTarget;d instanceof HTMLElement&&I(d)}r(S,"clicked");function A(c){if(c.key===" "||c.key==="Enter"){const d=c.currentTarget;d instanceof HTMLElement&&(c.preventDefault(),I(d))}}r(A,"keydown");function P(c){c.currentTarget.addEventListener("keydown",A)}r(P,"focused");function E(c){c.currentTarget.removeEventListener("keydown",A)}r(E,"blurred");class L extends HTMLElement{constructor(){super();this.addEventListener("click",S),this.addEventListener("focus",P),this.addEventListener("blur",E)}connectedCallback(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.hasAttribute("role")||this.setAttribute("role","button")}get value(){return this.getAttribute("value")||""}set value(d){this.setAttribute("value",d)}}r(L,"ClipboardCopyElement"),window.customElements.get("clipboard-copy")||(window.ClipboardCopyElement=L,window.customElements.define("clipboard-copy",L));const N=L},59753:(z,j,D)=>{D.d(j,{f:()=>B,on:()=>W});function m(){if(!(this instanceof m))return new m;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}r(m,"SelectorSet");var x=window.document.documentElement,_=x.matches||x.webkitMatchesSelector||x.mozMatchesSelector||x.oMatchesSelector||x.msMatchesSelector;m.prototype.matchesSelector=function(e,t){return _.call(e,t)},m.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},m.prototype.indexes=[];var I=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;m.prototype.indexes.push({name:"ID",selector:r(function(t){var n;if(n=t.match(I))return n[0].slice(1)},"matchIdSelector"),element:r(function(t){if(t.id)return[t.id]},"getElementId")});var C=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;m.prototype.indexes.push({name:"CLASS",selector:r(function(t){var n;if(n=t.match(C))return n[0].slice(1)},"matchClassSelector"),element:r(function(t){var n=t.className;if(n){if(typeof n=="string")return n.split(/\s/);if(typeof n=="object"&&"baseVal"in n)return n.baseVal.split(/\s/)}},"getElementClassNames")});var S=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;m.prototype.indexes.push({name:"TAG",selector:r(function(t){var n;if(n=t.match(S))return n[0].toUpperCase()},"matchTagSelector"),element:r(function(t){return[t.nodeName.toUpperCase()]},"getElementTagName")}),m.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}};var A;typeof window.Map=="function"?A=window.Map:A=function(){function e(){this.map={}}return r(e,"Map"),e.prototype.get=function(t){return this.map[t+" "]},e.prototype.set=function(t,n){this.map[t+" "]=n},e}();var P=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function E(e,t){e=e.slice(0).concat(e.default);var n=e.length,l,o,f,u,y=t,b,w,v=[];do if(P.exec(""),(f=P.exec(y))&&(y=f[3],f[2]||!y)){for(l=0;l<n;l++)if(w=e[l],b=w.selector(f[1])){for(o=v.length,u=!1;o--;)if(v[o].index===w&&v[o].key===b){u=!0;break}u||v.push({index:w,key:b});break}}while(f);return v}r(E,"parseSelectorIndexes");function L(e,t){var n,l,o;for(n=0,l=e.length;n<l;n++)if(o=e[n],t.isPrototypeOf(o))return o}r(L,"findByPrototype"),m.prototype.logDefaultIndexUsed=function(){},m.prototype.add=function(e,t){var n,l,o,f,u,y,b,w,v=this.activeIndexes,T=this.selectors,O=this.selectorObjects;if(typeof e=="string"){for(n={id:this.uid++,selector:e,data:t},O[n.id]=n,b=E(this.indexes,e),l=0;l<b.length;l++)w=b[l],f=w.key,o=w.index,u=L(v,o),u||(u=Object.create(o),u.map=new A,v.push(u)),o===this.indexes.default&&this.logDefaultIndexUsed(n),y=u.map.get(f),y||(y=[],u.map.set(f,y)),y.push(n);this.size++,T.push(e)}},m.prototype.remove=function(e,t){if(typeof e=="string"){var n,l,o,f,u,y,b,w,v=this.activeIndexes,T=this.selectors=[],O=this.selectorObjects,K={},U=arguments.length===1;for(n=E(this.indexes,e),o=0;o<n.length;o++)for(l=n[o],f=v.length;f--;)if(y=v[f],l.index.isPrototypeOf(y)){if(b=y.map.get(l.key),b)for(u=b.length;u--;)w=b[u],w.selector===e&&(U||w.data===t)&&(b.splice(u,1),K[w.id]=!0);break}for(o in K)delete O[o],this.size--;for(o in O)T.push(O[o].selector)}};function N(e,t){return e.id-t.id}r(N,"sortById"),m.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t={},n=[],l=this.querySelectorAll(this.selectors.join(", "),e),o,f,u,y,b,w,v,T;for(o=0,u=l.length;o<u;o++)for(b=l[o],w=this.matches(b),f=0,y=w.length;f<y;f++)T=w[f],t[T.id]?v=t[T.id]:(v={id:T.id,selector:T.selector,data:T.data,elements:[]},t[T.id]=v,n.push(v)),v.elements.push(b);return n.sort(N)},m.prototype.matches=function(e){if(!e)return[];var t,n,l,o,f,u,y,b,w,v,T,O=this.activeIndexes,K={},U=[];for(t=0,o=O.length;t<o;t++)if(y=O[t],b=y.element(e),b){for(n=0,f=b.length;n<f;n++)if(w=y.map.get(b[n]))for(l=0,u=w.length;l<u;l++)v=w[l],T=v.id,!K[T]&&this.matchesSelector(e,v.selector)&&(K[T]=!0,U.push(v))}return U.sort(N)};var c={},d={},k=new WeakMap,F=new WeakMap,M=new WeakMap,R=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function a(e,t,n){var l=e[t];return e[t]=function(){return n.apply(e,arguments),l.apply(e,arguments)},e}r(a,"before");function s(e,t,n){var l=[],o=t;do{if(o.nodeType!==1)break;var f=e.matches(o);if(f.length){var u={node:o,observers:f};n?l.unshift(u):l.push(u)}}while(o=o.parentElement);return l}r(s,"dist_matches");function i(){k.set(this,!0)}r(i,"trackPropagation");function g(){k.set(this,!0),F.set(this,!0)}r(g,"trackImmediate");function h(){return M.get(this)||null}r(h,"getCurrentTarget");function p(e,t){!R||Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:t||R.get})}r(p,"defineCurrentTarget");function H(e){try{return e.eventPhase,!0}catch{return!1}}r(H,"canDispatch");function q(e){if(!!H(e)){var t=e.eventPhase===1?d:c,n=t[e.type];if(!!n){var l=s(n,e.target,e.eventPhase===1);if(!!l.length){a(e,"stopPropagation",i),a(e,"stopImmediatePropagation",g),p(e,h);for(var o=0,f=l.length;o<f&&!k.get(e);o++){var u=l[o];M.set(e,u.node);for(var y=0,b=u.observers.length;y<b&&!F.get(e);y++)u.observers[y].data.call(u.node,e)}M.delete(e),p(e)}}}}r(q,"dispatch");function W(e,t,n){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=!!l.capture,f=o?d:c,u=f[e];u||(u=new m,f[e]=u,document.addEventListener(e,q,o)),u.add(t,n)}r(W,"on");function Z(e,t,n){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=!!l.capture,f=o?d:c,u=f[e];!u||(u.remove(t,n),!u.size&&(delete f[e],document.removeEventListener(e,q,o)))}r(Z,"off");function B(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n}))}r(B,"fire")},11793:(z,j,D)=>{D.d(j,{EL:()=>S,N9:()=>M,Tz:()=>R});class m{constructor(s){this.children=[],this.parent=s}delete(s){const i=this.children.indexOf(s);return i===-1?!1:(this.children=this.children.slice(0,i).concat(this.children.slice(i+1)),this.children.length===0&&this.parent.delete(this),!0)}add(s){return this.children.push(s),this}}r(m,"Leaf");class x{constructor(s){this.parent=null,this.children={},this.parent=s||null}get(s){return this.children[s]}insert(s){let i=this;for(let g=0;g<s.length;g+=1){const h=s[g];let p=i.get(h);if(g===s.length-1)return p instanceof x&&(i.delete(p),p=null),p||(p=new m(i),i.children[h]=p),p;p instanceof m&&(p=null),p||(p=new x(i),i.children[h]=p),i=p}return i}delete(s){for(const i in this.children)if(this.children[i]===s){const h=delete this.children[i];return Object.keys(this.children).length===0&&this.parent&&this.parent.delete(this),h}return!1}}r(x,"RadixTrie");function _(a){if(!(a instanceof HTMLElement))return!1;const s=a.nodeName.toLowerCase(),i=(a.getAttribute("type")||"").toLowerCase();return s==="select"||s==="textarea"||s==="input"&&i!=="submit"&&i!=="reset"&&i!=="checkbox"&&i!=="radio"||a.isContentEditable}r(_,"isFormField");function I(a,s){const i=new CustomEvent("hotkey-fire",{cancelable:!0,detail:{path:s}});!a.dispatchEvent(i)||(_(a)?a.focus():a.click())}r(I,"fireDeterminedAction");function C(a){const s=[];let i=[""],g=!1;for(let h=0;h<a.length;h++){if(g&&a[h]===","){s.push(i),i=[""],g=!1;continue}if(a[h]===" "){i.push(""),g=!1;continue}else a[h]==="+"?g=!1:g=!0;i[i.length-1]+=a[h]}return s.push(i),s.map(h=>h.filter(p=>p!=="")).filter(h=>h.length>0)}r(C,"expandHotkeyToEdges");function S(a){const{ctrlKey:s,altKey:i,metaKey:g,key:h}=a,p=[],H=[s,i,g,P(a)];for(const[q,W]of H.entries())W&&p.push(A[q]);return A.includes(h)||p.push(h),p.join("+")}r(S,"hotkey");const A=["Control","Alt","Meta","Shift"];function P(a){const{shiftKey:s,code:i,key:g}=a;return s&&!(i.startsWith("Key")&&g.toUpperCase()===g)}r(P,"showShift");const E=new x,L=new WeakMap;let N=E,c=null,d=[];function k(){d=[],c=null,N=E}r(k,"resetTriePosition");function F(a){if(a.defaultPrevented||!(a.target instanceof Node))return;if(_(a.target)){const i=a.target;if(!i.id||!i.ownerDocument.querySelector(`[data-hotkey-scope="${i.id}"]`))return}c!=null&&window.clearTimeout(c),c=window.setTimeout(k,1500);const s=N.get(S(a));if(!s){k();return}if(d.push(S(a)),N=s,s instanceof m){const i=a.target;let g=!1,h;const p=_(i);for(let H=s.children.length-1;H>=0;H-=1){h=s.children[H];const q=h.getAttribute("data-hotkey-scope");if(!p&&!q||p&&i.id===q){g=!0;break}}h&&g&&(I(h,d),a.preventDefault()),k()}}r(F,"keyDownHandler");function M(a,s){Object.keys(E.children).length===0&&document.addEventListener("keydown",F);const g=C(s||a.getAttribute("data-hotkey")||"").map(h=>E.insert(h).add(a));L.set(a,g)}r(M,"install");function R(a){const s=L.get(a);if(s&&s.length)for(const i of s)i&&i.delete(a);Object.keys(E.children).length===0&&document.removeEventListener("keydown",F)}r(R,"uninstall")},15205:(z,j,D)=>{D.d(j,{Z:()=>x});function m(..._){return JSON.stringify(_,(I,C)=>typeof C=="object"?C:String(C))}r(m,"defaultHash");function x(_,I={}){const{hash:C=m,cache:S=new Map}=I;return function(...A){const P=C.apply(this,A);if(S.has(P))return S.get(P);let E=_.apply(this,A);return E instanceof Promise&&(E=E.catch(L=>{throw S.delete(P),L})),S.set(P,E),E}}r(x,"memoize")}}]);})();

//# sourceMappingURL=5426-ed2911e7e3f4.js.map