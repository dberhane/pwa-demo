webpackJsonp([0xfd8249085412],{22:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(3),r=n(a),o=l(15),u=(n(o),function(){return r.default.createElement("div",{style:{paddingBottom:"2.5em"}},r.default.createElement("h2",null,"Blogroll"),r.default.createElement("ul",{style:{listStyleType:"none",paddingBottom:20}},r.default.createElement("li",null,"ALPSP"),r.default.createElement("li",null,"CEBM"),r.default.createElement("li",null,"COPE"),r.default.createElement("li",null,"JISC Managing Research Data programme"),r.default.createElement("li",null,"OASPA blog"),r.default.createElement("li",null,"Research Information Network"),r.default.createElement("li",null,"UK PubMed Central Blog")))});t.default=u,e.exports=t.default},214:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=l(3),i=n(u),c=l(7),d=n(c),s=l(15),f=n(s),p=l(22),m=(n(p),function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.pathContext.name,t=this.props.data.allWordpressPost.edges;return i.default.createElement("div",{style:{marginTop:40}},i.default.createElement("h1",null,"Category: ",e),i.default.createElement("ul",{className:"postItems",style:{listStyleType:"none",margin:0,padding:0}},t.map(function(e){var t=e.node;return[i.default.createElement("li",{key:t.id,className:"post",style:{marginTop:20,marginBottom:40}},i.default.createElement(f.default,{to:"/post/"+t.slug},i.default.createElement("h3",null,t.title)),i.default.createElement("div",{className:"excerpt",dangerouslySetInnerHTML:{__html:t.excerpt}}),i.default.createElement("div",{style:{paddingLeft:10}},i.default.createElement("i",null,t.date))),i.default.createElement("hr",null)]})))},t}(u.Component));m.propTypes={data:d.default.object.isRequired,edges:d.default.array},t.default=m;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-post-categories-js-c468257d24a4c9eea0f3.js.map