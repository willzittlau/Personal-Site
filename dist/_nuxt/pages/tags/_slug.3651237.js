(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{218:function(t,e,n){var content=n(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("59e9f086",content,!0,{sourceMap:!1})},230:function(t,e,n){"use strict";var r=n(218);n.n(r).a},231:function(t,e,n){(e=n(10)(!1)).push([t.i,"ul[data-v-3dfce49c]{width:100%}.container.journal[data-v-3dfce49c]{max-width:100vw;min-width:75vw}.journal-hero[data-v-3dfce49c]{padding:1rem 0;text-align:center;color:grey}.journal-header[data-v-3dfce49c]{font-size:3rem;font-weight:700;padding:0;margin:0}.journal-post[data-v-3dfce49c]{display:block;padding:1rem 0;text-decoration:none;transition:background .5s ease}.journal-post>*[data-v-3dfce49c]{transition:transform .5s ease}.journal-post[data-v-3dfce49c]:hover{background-color:#f8f8f8}.journal-post:hover>*[data-v-3dfce49c]{transform:translateX(3rem)}.journal-post h1[data-v-3dfce49c],.journal-post h2[data-v-3dfce49c]{margin:0;padding:0}.journal-title[data-v-3dfce49c]{font-size:2rem;color:#323232;font-weight:600}.journal-excerpt[data-v-3dfce49c]{color:#000}@media (min-width:560px){.journal-post[data-v-3dfce49c]{padding:1rem 0}}@media (min-width:860px){.journal-post[data-v-3dfce49c]{padding:1rem 0}}",""]),t.exports=e},254:function(t,e,n){"use strict";n.r(e);n(24);var r=n(2),o={methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.error,o=t.$content,e.prev=1,e.next=4,o("articles",{deep:!0}).where({tags:{$contains:n.slug}}).sortBy("createdAt","desc").fetch();case 4:return c=e.sent,e.abrupt("return",{articles:c});case 8:e.prev=8,e.t0=e.catch(1),r({statusCode:404,message:"Page could not be found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},c=(n(230),n(4)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container journal"},[n("h1",[t._v("Tags: "+t._s(t.$route.params.slug))]),t._v(" "),n("ul",t._l(t.articles,(function(article){return n("li",{key:article.slug},[n("NuxtLink",{staticClass:"journal-post",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("div",[n("h2",{staticClass:"journal-title"},[t._v(t._s(article.title))]),t._v(" "),n("p",{staticClass:"journal-excerpt"},[t._v(t._s(article.description))]),t._v(" "),n("span",{staticClass:"journal-excerpt"},[t._v("\n            "+t._s(t.formatDate(article.createdAt))+" •\n            "+t._s(article.readingTime)+"\n          ")])])])],1)})),0)])}),[],!1,null,"3dfce49c",null);e.default=component.exports}}]);