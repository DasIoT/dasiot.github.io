_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,s=void 0!==a&&a;return r||o&&s}},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},s=r("lwAK"),c=r("FYa8"),i=r("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,s=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){s=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,l=f.length;i<l;i++){var u=f[i];if(o.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?a=!1:r.add(u);else{var d=o.props[u],m=n[u]||new Set;"name"===u&&s||!m.has(d)?(m.add(d),n[u]=m):a=!1}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}function p(e){var t=e.children,r=(0,o.useContext)(s.AmpStateContext),n=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,i.isInAmpMode)(r)},t)}p.rewind=function(){};var x=p;t.default=x},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),s=r("Bnag");e.exports=function(e){return n(e)||o(e)||a(e)||s()}},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var n=r("nKUr"),o=r("g4pe"),a=r.n(o);r("q1tI");function s(){return Object(n.jsx)("header",{className:"text-gray-600 body-font",children:Object(n.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[Object(n.jsx)("a",{href:"#",className:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",children:Object(n.jsx)("img",{height:"64px",width:"64px",src:"/logo.png"})}),Object(n.jsx)("span",{className:"ml-3 text-xl italic",children:" \u2013 Smart Construction With Ease "}),Object(n.jsxs)("nav",{className:"md:ml-auto flex flex-wrap items-center text-base justify-center",children:[Object(n.jsx)("a",{className:"mr-5 hover:text-gray-900",href:"#",children:"Home"}),Object(n.jsx)("a",{className:"mr-5 hover:text-gray-900",href:"#product",children:"Product"}),Object(n.jsx)("a",{className:"mr-5 hover:text-gray-900",href:"#contact",children:"Contact"})]})]})})}function c(e){return Object(n.jsx)("footer",{className:"text-gray-600 body-font "+e.className,children:Object(n.jsxs)("div",{className:"container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col",children:[Object(n.jsx)("a",{href:"#",className:"flex title-font font-medium items-center md:justify-start justify-center text-gray-900",children:Object(n.jsx)("img",{height:"64px",width:"64px",src:"/logo.png"})}),Object(n.jsx)("p",{className:"text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",children:"\xa9 2020 DasIoT \u2013 All rights reserved"}),Object(n.jsxs)("span",{className:"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",children:[Object(n.jsx)("a",{className:"text-gray-500",children:Object(n.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}),Object(n.jsx)("a",{className:"ml-3 text-gray-500",children:Object(n.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}),Object(n.jsx)("a",{className:"ml-3 text-gray-500",children:Object(n.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:[Object(n.jsx)("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),Object(n.jsx)("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"})]})}),Object(n.jsx)("a",{className:"ml-3 text-gray-500",children:Object(n.jsxs)("svg",{fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"0",className:"w-5 h-5",viewBox:"0 0 24 24",children:[Object(n.jsx)("path",{stroke:"none",d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),Object(n.jsx)("circle",{cx:"4",cy:"4",r:"2",stroke:"none"})]})})]})]})})}function i(){return Object(n.jsx)("section",{className:"text-gray-600 body-font",children:Object(n.jsxs)("div",{className:"container mx-auto flex px-5 py-6 md:flex-row flex-col items-center",children:[Object(n.jsxs)("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",children:[Object(n.jsx)("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-light text-gray-900",children:"DasIoT"}),Object(n.jsx)("p",{className:"mb-8 leading-relaxed",children:"DasIoT is a all in one IoT platform that help you to manage construction site with custom IoT device integration."}),Object(n.jsxs)("span",{children:[Object(n.jsx)("a",{className:"underline hover:text-gray-900",href:"#contact",children:"Contact us"})," for more detail."]})]}),Object(n.jsx)("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6",children:Object(n.jsx)("img",{className:"object-cover object-center rounded",alt:"hero",src:"arch.png"})})]})})}var l=r("rePB");function u(){var e;return Object(n.jsxs)("section",{className:"text-gray-600 body-font relative mb-8",children:[Object(n.jsx)("div",{className:"absolute inset-0 bg-gray-300",children:Object(n.jsx)("iframe",(e={width:"100%",height:"100%",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"},Object(l.a)(e,"scrolling","no"),Object(l.a)(e,"style",{filter:"grayscale(0.5) contrast(1.2) opacity(0.4)",pointerEvents:"none"}),Object(l.a)(e,"src","https://maps.google.com/maps?ll=25.069082, 121.535371&width=100%25&height=600&hl=en&q=10452%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E7%8E%89%E9%96%80%E8%A1%971%E8%99%9F+(DasIot)&t=&z=14&ie=UTF8&iwloc=B&output=embed"),e))}),Object(n.jsx)("div",{className:"container px-5 py-24 mx-auto flex",children:Object(n.jsxs)("div",{className:"lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md",children:[Object(n.jsx)("h2",{className:"text-gray-900 text-lg mb-1 font-medium title-font",children:"Contact us with email"}),Object(n.jsxs)("div",{className:"relative mb-4",children:[Object(n.jsx)("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-600",children:"Email*"}),Object(n.jsx)("input",{type:"email",id:"email",name:"email",className:"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),Object(n.jsxs)("div",{className:"relative mb-4",children:[Object(n.jsx)("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-600",children:"Message*"}),Object(n.jsx)("textarea",{id:"message",name:"message",className:"w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"})]}),Object(n.jsx)("button",{className:"text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg",children:"Submit"}),Object(n.jsx)("p",{className:"text-xs text-gray-500 mt-3",children:"We will reach out to you shortly."})]})})]})}function d(){return Object(n.jsxs)("div",{className:"px-14 divide-y divide-gray-300",children:[Object(n.jsx)(a.a,{children:Object(n.jsx)("title",{children:"DasIoT \u2013 Smart Construction With Ease"})}),Object(n.jsx)(s,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)("h1",{id:"product",className:"title-font sm:text-4xl text-3xl pt-8 mb-4 font-medium text-gray-900",children:"Product"}),Object(n.jsx)(i,{}),Object(n.jsx)("h1",{id:"contact",className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900",children:"Contact"}),Object(n.jsx)(u,{})]}),Object(n.jsx)(c,{})]})}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),o=r("lwsE"),a=r("W8MJ"),s=(r("PJYZ"),r("7W2i")),c=r("a1gu"),i=r("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var u=r("q1tI"),d=function(e){s(r,e);var t=l(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=d},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},a1gu:function(e,t,r){var n=r("cDf5"),o=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},g4pe:function(e,t,r){e.exports=r("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,1]]]);