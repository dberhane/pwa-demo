(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);a(52),a(167),a(169);var n=a(0),o=a.n(n),r=a(152),i=a(159),l=function(e){return e.test?o.a.createElement("span",null,e.text):o.a.createElement(r.Link,{to:e.url},e.text)};t.default=function(e){var t=e.pageContext,a=t.group,n=t.index,c=t.first,s=t.last,d=n-1==1?"":(n-1).toString(),u=(n+1).toString();return o.a.createElement(i.a,null,o.a.createElement("div",{style:{marginTop:40}},o.a.createElement("h1",null,"Latest blogs"),o.a.createElement("div",{className:"postItems",style:{listStyleType:"none",margin:0,padding:0}},a.map(function(e){var t=e.node;return[o.a.createElement("div",{key:t.id,className:"post",style:{marginTop:20,marginBottom:40}},o.a.createElement(r.Link,{to:"/post/"+t.slug},o.a.createElement("h3",null,t.title)),o.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:t.excerpt}}),o.a.createElement("div",{style:{paddingLeft:10}},o.a.createElement("i",null,t.date))),o.a.createElement("hr",null)]})),o.a.createElement("div",{className:"tocNav"},o.a.createElement("button",null,o.a.createElement(l,{test:c,url:"/"+d,text:"Previous Page"})),o.a.createElement("button",{style:{float:"right"}},o.a.createElement(l,{test:s,url:"/"+u,text:"Next Page"})))))}},151:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return p});var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=a(150),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(27);a.d(t,"waitForRouteChange",function(){return s.c});var d=a(151),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var g=o.a.createContext({}),p=function(e){return o.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=a(53),c=a(1),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},154:function(e){e.exports={data:{site:{siteMetadata:{title:"BMJ PWA demo"}},allWordpressCategory:{edges:[{node:{id:"07acb10c-8a0f-5c7b-8c16-ef2e2c5fd519",name:"About the journal",slug:"about-the-journal"}},{node:{id:"dc49b913-f070-5a12-99c2-65b2799a519f",name:"Author Profile",slug:"author-profile"}},{node:{id:"69390d22-95b7-5e16-9983-1300b1b77c1c",name:"BMJ Open Editions",slug:"bmj-open-editions"}},{node:{id:"4b225b5d-57f6-5fac-881d-8b39604edd1f",name:"Content",slug:"content"}},{node:{id:"b9d4de2a-7eda-5a44-9d0e-5348fe6892f3",name:"Discounts",slug:"discounts"}},{node:{id:"81455f1d-c264-5716-b8c6-0b6332960946",name:"Editors picks",slug:"editors-picks"}},{node:{id:"5e974932-e700-54c2-a58f-b9402ea0f9f4",name:"Events",slug:"events"}},{node:{id:"6d9e25d8-8c99-505c-af39-bdc0acbdcc83",name:"Highly accessed",slug:"highly-accessed"}},{node:{id:"c0ef9851-2bf8-52ef-b34a-08873ab7b2e7",name:"In the news",slug:"in-the-news"}},{node:{id:"1d6a483c-8ecf-5d7d-aff7-83b354811279",name:"Instructions for authors",slug:"instructions-for-authors"}},{node:{id:"63c422c3-558c-5df7-8204-be0e85131f8c",name:"Journalology",slug:"journalology"}},{node:{id:"fb98bbf0-fa36-5ca8-80ef-4ebc6899a094",name:"Launch",slug:"launch"}},{node:{id:"17121eaa-ad8a-5a8e-a3a8-cf47ce39225e",name:"new post",slug:"new-post"}},{node:{id:"93d70e43-a898-5f17-98af-3cb280997e3c",name:"Open access",slug:"open-access"}},{node:{id:"73eb17de-115a-54c2-9859-6782b36cb1d0",name:"Open peer review",slug:"open-peer-review"}},{node:{id:"f24b5a9e-ed37-56c1-978a-9c95dbc988a9",name:"Uncategorized",slug:"uncategorized"}}]},allDataJson:{edges:[{node:{id:"69189a56-9eee-5cb1-9b61-68d6ff7785a1",bmjsiteHead:[{id:"34866726",accountId:"5351042",webPropertyId:"UA-5351042-34",name:"bmjopen.bmj.com - Reporting",websiteUrl:"http://bmjopen.bmj.com"}],bmjsiteData:[{pagePath:"/content/5/2/e006784",pageTitle:"The combined perceptions of people with stroke and their carers regarding rehabilitation needs 1 year after stroke: a mixed methods study | BMJ Open",pageviews:"994"},{pagePath:"/content/8/3/e018895",pageTitle:"Maternal caffeine intake during pregnancy and childhood growth and overweight: results from a large Norwegian prospective observational cohort study | BMJ Open",pageviews:"967"},{pagePath:"/content/4/9/e005055",pageTitle:"The role of hospital managers in quality and patient safety: a systematic review | BMJ Open",pageviews:"857"},{pagePath:"/content/8/2/e018846",pageTitle:"Assessing the nutrient intake of a low-carbohydrate, high-fat (LCHF) diet: a hypothetical case study design | BMJ Open",pageviews:"717"},{pagePath:"/content/5/11/e008052.full",pageTitle:"Bicycling injury hospitalisation rates in Canadian jurisdictions: analyses examining associations with helmet legislation and mode share | BMJ Open",pageviews:"672"},{pagePath:"/content/8/4/e019399",pageTitle:"Support for midlife anxiety diagnosis as an independent risk factor for dementia: a systematic review | BMJ Open",pageviews:"622"},{pagePath:"/content/6/6/e010401",pageTitle:"Lack of an association or an inverse association between low-density-lipoprotein cholesterol and mortality in the elderly: a systematic review | BMJ Open",pageviews:"548"},{pagePath:"/content/7/5/e015233",pageTitle:"Long-term antibiotics for prevention of recurrent urinary tract infection in older adults: systematic review and meta-analysis of randomised trials | BMJ Open",pageviews:"473"},{pagePath:"/content/8/3/e019438",pageTitle:"Effect of pasta in the context of low-glycaemic index dietary patterns on body weight and markers of adiposity: a systematic review and meta-analysis of randomised controlled trials in adults | BMJ Open",pageviews:"440"},{pagePath:"/content/7/10/e016089",pageTitle:"Do emotions related to alcohol consumption differ by alcohol type? An international cross-sectional survey of emotions associated with alcohol consumption and influence on drink choice in different settings | BMJ Open",pageviews:"397"}]}}]}}}},155:function(e,t,a){e.exports=a.p+"static/ad001-5bf624e8658e9633b36b0d4c8d01ce11.gif"},156:function(e,t){e.exports="data:image/png;base64,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"},157:function(e,t,a){},159:function(e,t,a){"use strict";var n=a(154),o=a(0),r=a.n(o),i=a(163),l=a.n(i),c=a(152),s=a(150),d=a.n(s),u=a(155),m=a.n(u),g=a(156),p=a.n(g),f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{justifyContent:"center"}},r.a.createElement(d.a,{to:"/"},r.a.createElement("img",{src:m.a,alt:"banner"}))),r.a.createElement("header",{className:"sticky",style:{paddingRight:150}},r.a.createElement("label",{htmlFor:"drawer-checkbox",className:"button drawer-toggle"}),r.a.createElement(d.a,{className:"logo",to:"/"},r.a.createElement("img",{src:p.a,alt:"Logo",style:{maxWidth:"12.0em"}})),r.a.createElement(d.a,{className:"button hidden-sm",to:"/page/about",style:{float:"right"}},"About us"),r.a.createElement(d.a,{className:"button hidden-sm",to:"/page/topic-index",style:{float:"right"}},"Topic Index"),r.a.createElement(d.a,{className:"button hidden-sm",to:"/",style:{float:"right"}},"Home")),r.a.createElement("div",{className:"row hidden-md hidden-lg"},r.a.createElement("input",{type:"checkbox",name:"drawer-checkbox",id:"drawer-checkbox"}),r.a.createElement("div",{className:"col-md-3 drawer"},r.a.createElement("label",{htmlFor:"drawer-checkbox",className:"close"}),r.a.createElement("nav",null,r.a.createElement(d.a,{className:"button",to:"/"},"BMJ Open blogs"),r.a.createElement("br",null),r.a.createElement(d.a,{className:"button",to:"/page/about"},"About us"),r.a.createElement("br",null),r.a.createElement(d.a,{className:"button",to:"/page/topic-index"},"Topic Index"),r.a.createElement("br",null),r.a.createElement(d.a,{className:"button",to:"/"},"Home")))))},h=(a(157),a(164),function(){return r.a.createElement("div",{style:{paddingBottom:"0.5em"}},r.a.createElement("h2",null,"Blogroll"),r.a.createElement("ul",{style:{listStyleType:"none",paddingBottom:20}},r.a.createElement("li",null,"ALPSP"),r.a.createElement("li",null,"CEBM"),r.a.createElement("li",null,"COPE"),r.a.createElement("li",null,"JISC Managing Research Data programme"),r.a.createElement("li",null,"OASPA blog"),r.a.createElement("li",null,"Research Information Network"),r.a.createElement("li",null,"UK PubMed Central Blog")))}),b=(a(52),function(e){var t=e.gdata,a=e.ghead,n=void 0===a?"Most Read":a,o=e.gsite,i=void 0===o?0:o,l=t[i].node.bmjsiteData,c=t[i].node.bmjsiteHead[0].websiteUrl;return r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("ol",{style:{paddingBottom:20}},l.map(function(e,t){return void 0===t&&(t=0),r.a.createElement("li",{style:{paddingBottom:10},key:t++},r.a.createElement("a",{href:""+c+e.pagePath},e.pageTitle))})))}),y=(a(160),function(e){var t=e.categories;return r.a.createElement("div",{style:{marginTop:50}},r.a.createElement("h2",null,"Categories"),r.a.createElement("ul",{style:{listStyleType:"none",paddingBottom:20}},t.map(function(e){var t=e.node;return r.a.createElement("li",{key:t.id,style:{paddingBottom:5}},r.a.createElement(d.a,{to:"/post/category/"+t.slug},t.name))})))});t.a=function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"1789482495",render:function(e){return r.a.createElement("div",null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"lang",content:"en"},{name:"description",content:"PWA website"},{name:"keywords",content:"paw, gatsby, react"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-7 col-lg-offset-1"},t),r.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-3"},r.a.createElement("div",{width:4},r.a.createElement(y,{categories:e.allWordpressCategory.edges}),r.a.createElement(h,null),r.a.createElement(b,{gdata:e.allDataJson.edges,ghead:"BMJ Open most read"}))))),r.a.createElement("footer",null,r.a.createElement("p",null,"© BMJ Publishing Group Ltd. 2018 | ",r.a.createElement("a",{href:"/"},"About")," |"," ",r.a.createElement("a",{href:"/"},"Terms of use"))))},data:n})}},165:function(e,t,a){"use strict";var n=a(11);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},167:function(e,t,a){"use strict";a(168);var n=a(11),o=a(165),r=a(17),i=/./.toString,l=function(e){a(18)(RegExp.prototype,"toString",e,!0)};a(19)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?l(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?o.call(e):void 0)}):"toString"!=i.name&&l(function(){return i.call(this)})},168:function(e,t,a){a(17)&&"g"!=/./g.flags&&a(28).f(RegExp.prototype,"flags",{configurable:!0,get:a(165)})},169:function(e,t,a){var n=Date.prototype,o=n.toString,r=n.getTime;new Date(NaN)+""!="Invalid Date"&&a(18)(n,"toString",function(){var e=r.call(this);return e==e?o.call(this):"Invalid Date"})}}]);
//# sourceMappingURL=component---src-templates-index-js-7cc41185168a995ff798.js.map