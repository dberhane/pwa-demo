(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{214:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=n(221),a=n.n(i);e.default=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Hi people"),o.a.createElement("p",null,"Welcome to your new Gatsby site."),o.a.createElement("p",null,"Now go build something great."),o.a.createElement(a.a,{to:"/page-2/"},"Go to page 2"))}},221:function(t,e,n){"use strict";var r=n(5);e.__esModule=!0,e.withPrefix=function(t){return function(t){return t.replace(/\/+/g,"/")}("/pwa-demo/"+t)},e.navigateTo=e.replace=e.push=e.default=void 0;var o=r(n(61)),i=r(n(233)),a=r(n(247)),u=r(n(31)),f=r(n(56)),c=r(n(238)),s=r(n(1)),l=n(33),p=n(106),d=n(17),h={activeClassName:c.default.string,activeStyle:c.default.object,exact:c.default.bool,strict:c.default.bool,isActive:c.default.func,location:c.default.object},y=function(t){function e(e,n){var r;r=t.call(this)||this;var o=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(o=!0);var i=n.router.history.location,a=(0,d.createLocation)(e.to,null,null,i);return r.state={path:(0,d.createPath)(a),to:a,IOSupported:o,location:i},r.handleRef=r.handleRef.bind((0,f.default)((0,f.default)(r))),r}(0,u.default)(e,t),e.getDerivedStateFromProps=function(t,e){if(e.to===t.to)return null;var n=(0,d.createLocation)(t.to,null,null,e.location);return{path:(0,d.createPath)(n),to:n}};var n=e.prototype;return n.componentDidUpdate=function(t,e){this.props.to===t.to||this.state.IOSupported||___loader.enqueue(this.state.path)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},n.handleRef=function(t){var e,n,r,o=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(e=t,n=function(){___loader.enqueue(o.state.to.pathname)},(r=new window.IntersectionObserver(function(t){t.forEach(function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(r.unobserve(e),r.disconnect(),n())})})).observe(e))},n.render=function(){var t,e=this,n=this.props,r=n.onClick,u=n.onMouseEnter,f=(0,a.default)(n,["onClick","onMouseEnter"]);return t=(0,i.default)(h).some(function(t){return e.props[t]})?l.NavLink:l.Link,s.default.createElement(t,(0,o.default)({onMouseEnter:function(t){u&&u(t),___loader.hovering(e.state.path)},onClick:function(t){if(r&&r(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var n=e.state.path;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var o=e.state.path.split("#").slice(1).join("#"),i=o?document.getElementById(o):null;return null!==i?(i.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___push(e.state.to)}return!0}},f,{to:this.state.to,innerRef:this.handleRef}))},e}(s.default.Component);y.propTypes=(0,o.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object]).isRequired}),y.contextTypes={router:c.default.object};var v=(0,p.polyfill)(y);e.default=v;var b=function(t){window.___push(t)};e.push=b,e.replace=function(t){window.___replace(t)},e.navigateTo=function(t){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),b(t)}},231:function(t,e,n){var r=n(108),o=n(59).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},232:function(t,e,n){e.f=n(7)},233:function(t,e,n){t.exports=n(249)},236:function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},237:function(t,e,n){"use strict";var r=n(236);function o(){}t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=o,n.PropTypes=n,n}},238:function(t,e,n){t.exports=n(237)()},239:function(t,e,n){var r=n(15),o=n(231).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},240:function(t,e,n){var r=n(23);t.exports=Array.isArray||function(t){return"Array"==r(t)}},241:function(t,e,n){var r=n(50),o=n(104),i=n(52);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,u=n(t),f=i.f,c=0;u.length>c;)f.call(t,a=u[c++])&&e.push(a);return e}},242:function(t,e,n){var r=n(6),o=n(4),i=n(32),a=n(232),u=n(12).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},243:function(t,e,n){var r=n(51)("meta"),o=n(14),i=n(13),a=n(12).f,u=0,f=Object.isExtensible||function(){return!0},c=!n(22)(function(){return f(Object.preventExtensions({}))}),s=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!f(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return c&&l.NEED&&f(t)&&!i(t,r)&&s(t),t}}},244:function(t,e,n){"use strict";var r=n(6),o=n(13),i=n(10),a=n(9),u=n(107),f=n(243).KEY,c=n(22),s=n(60),l=n(34),p=n(51),d=n(7),h=n(232),y=n(242),v=n(241),b=n(240),m=n(8),w=n(14),g=n(15),O=n(62),_=n(35),S=n(57),E=n(239),P=n(110),j=n(12),x=n(50),T=P.f,k=j.f,I=E.f,R=r.Symbol,N=r.JSON,C=N&&N.stringify,D=d("_hidden"),F=d("toPrimitive"),K={}.propertyIsEnumerable,M=s("symbol-registry"),A=s("symbols"),J=s("op-symbols"),L=Object.prototype,q="function"==typeof R,W=r.QObject,G=!W||!W.prototype||!W.prototype.findChild,U=i&&c(function(){return 7!=S(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=T(L,e);r&&delete L[e],k(t,e,n),r&&t!==L&&k(L,e,r)}:k,Y=function(t){var e=A[t]=S(R.prototype);return e._k=t,e},B=q&&"symbol"==typeof R.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof R},H=function(t,e,n){return t===L&&H(J,e,n),m(t),e=O(e,!0),m(n),o(A,e)?(n.enumerable?(o(t,D)&&t[D][e]&&(t[D][e]=!1),n=S(n,{enumerable:_(0,!1)})):(o(t,D)||k(t,D,_(1,{})),t[D][e]=!0),U(t,e,n)):k(t,e,n)},V=function(t,e){m(t);for(var n,r=v(e=g(e)),o=0,i=r.length;i>o;)H(t,n=r[o++],e[n]);return t},z=function(t){var e=K.call(this,t=O(t,!0));return!(this===L&&o(A,t)&&!o(J,t))&&(!(e||!o(this,t)||!o(A,t)||o(this,D)&&this[D][t])||e)},Q=function(t,e){if(t=g(t),e=O(e,!0),t!==L||!o(A,e)||o(J,e)){var n=T(t,e);return!n||!o(A,e)||o(t,D)&&t[D][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=I(g(t)),r=[],i=0;n.length>i;)o(A,e=n[i++])||e==D||e==f||r.push(e);return r},Z=function(t){for(var e,n=t===L,r=I(n?J:g(t)),i=[],a=0;r.length>a;)!o(A,e=r[a++])||n&&!o(L,e)||i.push(A[e]);return i};q||(u((R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===L&&e.call(J,n),o(this,D)&&o(this[D],t)&&(this[D][t]=!1),U(this,t,_(1,n))};return i&&G&&U(L,t,{configurable:!0,set:e}),Y(t)}).prototype,"toString",function(){return this._k}),P.f=Q,j.f=H,n(231).f=E.f=X,n(52).f=z,n(104).f=Z,i&&!n(32)&&u(L,"propertyIsEnumerable",z,!0),h.f=function(t){return Y(d(t))}),a(a.G+a.W+a.F*!q,{Symbol:R});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var et=x(d.store),nt=0;et.length>nt;)y(et[nt++]);a(a.S+a.F*!q,"Symbol",{for:function(t){return o(M,t+="")?M[t]:M[t]=R(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in M)if(M[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!q,"Object",{create:function(t,e){return void 0===e?S(t):V(S(t),e)},defineProperty:H,defineProperties:V,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),N&&a(a.S+a.F*(!q||c(function(){var t=R();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(w(e)||void 0!==t)&&!B(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,C.apply(N,r)}}),R.prototype[F]||n(11)(R.prototype,F,R.prototype.valueOf),l(R,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},245:function(t,e,n){n(244),t.exports=n(4).Object.getOwnPropertySymbols},246:function(t,e,n){t.exports=n(245)},247:function(t,e,n){var r=n(246),o=n(233);t.exports=function(t,e){if(null==t)return{};var n,i,a={},u=o(t);for(i=0;i<u.length;i++)n=u[i],e.indexOf(n)>=0||(a[n]=t[n]);if(r){var f=r(t);for(i=0;i<f.length;i++)n=f[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}},248:function(t,e,n){var r=n(58),o=n(50);n(109)("keys",function(){return function(t){return o(r(t))}})},249:function(t,e,n){n(248),t.exports=n(4).Object.keys}}]);
//# sourceMappingURL=component---src-pages-page-1-js-56bd24c7614451216174.js.map