webpackJsonp([0x5eadfb0a5d2a],{22:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(2),u=a(n),r=l(14),d=(a(r),function(){return u.default.createElement("div",{style:{paddingBottom:"0.5em"}},u.default.createElement("h2",null,"Blogroll"),u.default.createElement("ul",{style:{listStyleType:"none",paddingBottom:20}},u.default.createElement("li",null,"ALPSP"),u.default.createElement("li",null,"CEBM"),u.default.createElement("li",null,"COPE"),u.default.createElement("li",null,"JISC Managing Research Data programme"),u.default.createElement("li",null,"OASPA blog"),u.default.createElement("li",null,"Research Information Network"),u.default.createElement("li",null,"UK PubMed Central Blog")))});t.default=d,e.exports=t.default},212:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=l(2),u=a(n),r=l(14),d=a(r),o=l(22),c=(a(o),function(e){return e.test?u.default.createElement("span",null,e.text):u.default.createElement(d.default,{to:e.url},e.text)}),f=function(e){var t=(e.data,e.pathContext),l=t.group,a=t.index,n=t.first,r=t.last,o=(t.pageCount,a-1==1?"":(a-1).toString()),f=(a+1).toString();return u.default.createElement("div",{style:{marginTop:40}},u.default.createElement("h1",null,"Latest blogs"),u.default.createElement("div",{className:"postItems",style:{listStyleType:"none",margin:0,padding:0}},l.map(function(e){var t=e.node;return[u.default.createElement("div",{key:t.id,className:"post",style:{marginTop:20,marginBottom:40}},u.default.createElement(d.default,{to:"/post/"+t.slug},u.default.createElement("h3",null,t.title)),u.default.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:t.excerpt}}),u.default.createElement("div",{style:{paddingLeft:10}},u.default.createElement("i",null,t.date))),u.default.createElement("hr",null)]})),u.default.createElement("div",{className:"tocNav"},u.default.createElement("button",null,u.default.createElement(c,{test:n,url:"/"+o,text:"Previous Page"})),u.default.createElement("button",{style:{float:"right"}},u.default.createElement(c,{test:r,url:"/"+f,text:"Next Page"}))))};t.default=f;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-index-js-7edede2069d777ab93f7.js.map