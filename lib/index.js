const e="undefined"!=typeof window,t=(t,r)=>e?t():r,r=()=>t(()=>-1!==navigator.userAgent.indexOf("MSIE")||!!winodw.StyleMedia||1==!!document.documentMode),n=()=>t(()=>{let e=window.chrome,t=window.navigator,r=t.vendor,n=void 0!==window.opr,i=t.userAgent.indexOf("Edge")>-1;return t.userAgent.match("CriOS")||null!=e&&"Google Inc."===r&&!1===n&&!1===i}),i=e=>{t(()=>{window.addEventListener("online",()=>e(!1)),window.addEventListener("offline",()=>e(!0)),e(!1===navigator.onLine)})},o=(e,t=null)=>{if(document.cookie&&""!==document.cookie){let r=document.cookie.split(";");for(let n=0;n<r.length;n++){let i=r[n].trim();if(i.substring(0,e.length+1)===e+"="){t=decodeURIComponent(i.substring(e.length+1));break}}}return t},l=e=>0===Object.keys(e||{}).length,s=(e,t)=>{let r=e.length,n=t.length;if(!r&&!n||r&&!n||!r&&n)return!1;for(let n=r;n--;)if(t.includes(e[n]))return!0;return!1},a=(e,t)=>{let r=e.length,n=t.length;if(!r&&!n||r&&!n||!r&&n)return!1;for(let r=n;r--;)if(e.includes(t[r]))return!0;return!1},c=(e,t)=>{let r=e.length;if(r!==t.length)return!1;for(let n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0},u=(e,t)=>{e=e||{},t=t||{};for(let r in e)if(!(r in t))return!0;for(let r in t)if(e[r]!==t[r])return!0;return!1},d=()=>{},f=()=>Math.round(+new Date/1e3),p=e=>Object.entries({hr:e/3600,min:e%3600/60,sec:e%3600%60}).reduce((e,[t,r,n=Math.floor(r)])=>e+(n?n+`${t} `:""),"");function h(e,t,r){var n;return function(){var i=this,o=arguments,l=function(){n=null,r||e.apply(i,o)},s=r&&!n;clearTimeout(n),n=setTimeout(l,t),s&&e.apply(i,o)}}const m=Array.isArray,g=e=>"[object Object]"===Object.prototype.toString.call(e),w=e=>"function"==typeof e,b=e=>"string"==typeof e,v=e=>!isNaN(parseFloat(e))&&!isNaN(e-0),y=e=>"boolean"==typeof e,O=e=>g(e)||m(e),A=e=>{let t=g(e)?{}:m(e)?[]:e;if(O(e))for(let r in e)t[r]=O(e[r])?A(e[r]):e[r];return t},j=(e=[],t=(t=>e.splice(e.indexOf(t)>>>0,1)))=>[r=>(e.push(r),()=>t(r)),(...t)=>e.slice().map(e=>e(...t))],C=(e,t,r)=>e.addEventListener(t,r),k=(e,t,r)=>e.removeEventListener(t,r),E=(e,t,r,n)=>{if(!Array.isArray(e))return C(e,t,r),()=>k(e,t,r);let i=[];return e.forEach(e=>{C(e[0],e[1],e[2]),i.push(()=>k(e[0],e[1],e[2]))}),()=>i.forEach(e=>e())},I=e=>{e=e||Object.create(null);let t=(t,r)=>e[t]&&e[t].splice(e[t].indexOf(r)>>>0,1);return{on:(r,n)=>((e[r]||(e[r]=[])).push(n),()=>t(r,n)),off:t,destroy:t=>delete e[t],emit:(t,...r)=>{(e[t]||[]).slice().map(e=>e(...r)),(e["*"]||[]).slice().map(e=>e(t,...r))}}},$=e=>{e=e||Object.create(null);let t=(t,r)=>(e[t]||(e[t]=[])).push(r),r=(t,r)=>e[t]&&e[t].splice(e[t].indexOf(r)>>>0,1),n=0;return{on:t,off:r,once:(e,i)=>{const o={},l=n+++"",s=()=>r(e,o[l]);return o[l]=(...e)=>(i(...e),s()),t(e,o[l]),s},destroy:t=>delete e[t],emit:(t,...r)=>{(e[t]||[]).slice().map(e=>e(...r)),(e["*"]||[]).slice().map(e=>e(t,...r))}}},x=()=>{let e={},r=(r,n)=>(e[r]||(e[r]=(()=>{let[e,t]=j();return{listener:({detail:e})=>t(e),sub:e}})(),t(()=>{C(window,r,e[r].listener)})),e[r].sub(n));return{on:r,once:(e,t)=>{let n=r(e,e=>{t(e),n()});return n},emit:(e,r)=>t(()=>{window.dispatchEvent(new CustomEvent(e,{detail:r,bubbles:!0,composed:!0}))})}},N=(e,t)=>{for(let r in t)e[r]=t[r];return e},M=e=>{let t;try{t={ok:!0,data:JSON.parse(e)}}catch(e){t={ok:!1}}return t};let S={getItem:()=>{}};e&&(S=window.localStorage);const L={clear:()=>S.clear(),removeItem:e=>S.removeItem(e),setItem:(e,t)=>S.setItem(e,JSON.stringify(t)),getItem:e=>{let t=S.getItem(e);if(!t||"undefined"===t)return null;const{ok:r,data:n}=M(t);return r?n:null}},U=(e=0,t={})=>({nq:r=>t[`${e++}`]=r,kill:t={},invoke:()=>Object.keys(t).forEach(e=>(t[e](),delete t[e]))}),T=(e,t)=>Math.floor(Math.random()*(t-e))+e,F=e=>e[T(0,e.length-1)],R=e=>{if(!e)return"";var t=decodeURIComponent(e);return"false"!==t&&("true"===t||(0*+t==0?+t:t))},q=e=>{let t,r,n,i={};if(n=(e=e||window.location.search).indexOf("?"),n<0)return;let o=(e=e.substr(n+1)).split("&");for(;t=o.shift();)t=t.split("="),r=t.shift(),i[r]=void 0!==i[r]?[].concat(i[r],R(t.shift())):R(t.shift());return i},z=e=>{var t,r,n,i=encodeURIComponent,o="";for(t in e)if(void 0!==(n=e[t]))if(Array.isArray(n))for(r=0;r<n.length;r++)o&&(o+="&"),o+=i(t)+"="+i(n[r]);else o&&(o+="&"),o+=i(t)+"="+i(n);return"?"+o},G=(e,r,n,i)=>(i=i||t(()=>window),{unlisten:t(()=>E(i,"scroll",()=>e&&i.scrollTo(r,n)),d),lock:()=>{e=!0,r=t(()=>window).pageXOffset,n=t(()=>window).pageYOffset},letGo:()=>e=!1}),J=(e,t,r)=>{let n,i,o=e=>"string"==typeof e?e.toLowerCase():e;return e.sort((e,l)=>(n=o(e[t]),i=o(l[t]),n<i?r?1:-1:n>i?r?-1:1:0))},W=(e,t,r)=>{const n=[...e],[i]=n.splice(t,1);return n.splice(r,0,i),n},Z=e=>e.toUpperCase(),_=e=>e.charAt(0).toUpperCase()+e.slice(1),D=e=>e.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()),X=(e,t)=>"everyFirst"===t?D(e):"first"===t?_(e):Z(e),Y=e=>e.split("-").join(""),B=e=>e.split("_").join(" "),H=(e,t=[{string:"",with:""}])=>{let r=e;return t.forEach(e=>{r=r.split(e.string).join(e.with)}),r},K=[{string:"_",with:" "},{string:".",with:" "},{string:"-",with:" "}],P=e=>(e=H(e,K),e=X(e,"everyFirst"),(e=H(e,[{string:" ",with:""}])).charAt(0).toLowerCase()+e.slice(1)),Q=e=>{let t=document.createElement("style");return t.appendChild(document.createTextNode("")),(e||document.head).appendChild(t),e=>(t.appendChild(document.createTextNode(e)),t)},V=e=>Object.keys(e).reduce((t,r)=>(t[r]=`var(--${r},${e[r]})`,t),{}),ee=(e,t)=>`${t||":root"}{${Object.keys(e).map(t=>`--${t}:${e[t]};`).join("")}}`,te=e=>requestAnimationFrame(e),re=e=>{var t,r={},n=e.split(";").map(e=>e.split(":").map(e=>e&&e.trim()));for(var[i,o]of n){let e=(t=i).startsWith("-")?t:t.replace(/\W+\w/g,e=>e.slice(-1).toUpperCase());e&&(r[e]=o)}return r},ne=(e,t)=>{let r=[...e.substring(1)];return 3===r.length&&(r=[r[0],r[0],r[1],r[1],r[2],r[2]]),r=`0x${r.join("")}`,`rgba(${[r>>16&255,r>>8&255,255&r].join(",")}, ${t||"1"})`},ie=e=>"css"+e.split("").reduce((e,t)=>10*e+t.charCodeAt(0)>>>0,0),oe=()=>Math.floor(65536*(1+Math.random())).toString(16).substring(1),le=()=>oe()+oe()+"-"+oe()+"-"+oe()+"-"+oe()+"-"+oe()+oe()+oe(),se=()=>le+"-"+f(),ae=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,ce=e=>ae.test(e),ue="customElements"in window,de=(e,t)=>!(!e.getAttribute||!e.localName)&&(t=e.getAttribute("is"),e.localName.includes("-")||t&&t.includes("-"));export{re as CSSTextToObj,I as Eve,$ as Eventer,x as Events,d as NOOP,U as Q,G as ScrollLocker,j as Subie,C as addListener,Z as allCaps,a as arrayIncludesAllItemsFromArray,s as arrayIncludesItemFromArray,P as camelCase,D as capEveryFirst,_ as capFirstLet,X as capitalize,ee as convertThemeToCssVars,Y as deKabob,B as deSnake,h as debounce,A as deepCopy,E as eventListener,N as extend,p as formatSeconds,o as getCookie,q as getParams,T as getRandomInt,F as getRandomOneOf,f as getUnixTimeStampNow,Q as headStyleTag,ne as hexToRgbA,t as ifBrowser,i as installOfflineWatcher,m as isArray,y as isBool,e as isBrowser,n as isChrome,de as isCustomElement,c as isEqualArray,w as isFunc,v as isNum,g as isObj,O as isObjOrArr,b as isString,ce as isValidEmail,r as is_ie_or_old_edge,M as jsonParse,L as localStore,l as objectIsEmpty,u as propsChanged,te as raf,k as removeListener,W as reorder,J as sortOrderOfObjArr,z as stringifyParams,ue as supportsCustomElementsV1,H as textReplacer,V as toCssVarsFromJsThemeObj,ie as toHash,R as toValue,se as uniqueId,le as uuid};
//# sourceMappingURL=index.js.map