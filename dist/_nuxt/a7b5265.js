(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{352:function(t,n,e){var content=e(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("4ff0057c",content,!0,{sourceMap:!1})},368:function(t,n,e){"use strict";e(352)},369:function(t,n,e){var r=e(21)((function(i){return i[1]}));r.push([t.i,"h1[data-v-30360ac6]{font-size:2rem;font-weight:600;text-align:center}hr[data-v-30360ac6]{width:30%}ul[data-v-30360ac6]{width:100%}.journal-post[data-v-30360ac6]{display:block;padding:1rem 0;-webkit-text-decoration:none;text-decoration:none;transition:background .5s ease}.journal-post>*[data-v-30360ac6]{transition:transform .5s ease}.journal-post[data-v-30360ac6]:hover{background-color:#f8f8f8}.journal-post:hover>*[data-v-30360ac6]{transform:translateX(3rem)}.journal-post h1[data-v-30360ac6],.journal-post h2[data-v-30360ac6]{margin:0;padding:0}.journal-title[data-v-30360ac6]{color:#323232;font-size:1.5rem;font-weight:600}.journal-excerpt[data-v-30360ac6]{color:#000}@media (min-width:560px){.journal-post[data-v-30360ac6]{padding:1rem 0}.container.journal[data-v-30360ac6]{min-width:100vw}}@media (min-width:860px){.journal-post[data-v-30360ac6]{padding:1rem 0}.container.journal[data-v-30360ac6]{min-width:100vw}}",""]),r.locals={},t.exports=r},401:function(t,n,e){"use strict";e.r(n);e(34),e(58);var r=e(8),o=(e(41),{methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,r=t.params,n.next=3,e("articles",r.slug).sortBy("createdAt","desc").fetch();case 3:return o=n.sent,n.abrupt("return",{articles:o});case 5:case"end":return n.stop()}}),n)})))()},head:{title:"Will Zittlau - Blog",meta:[{hid:"description",name:"description",content:"Will Zittlau - Blog Posts"}]}}),c=(e(368),e(11)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("div",[n("div",{staticClass:"container journal"},[n("h1",[t._v("All Blog Posts")]),t._v(" "),n("hr"),t._v(" "),n("ul",t._l(t.articles,(function(article){return n("li",{key:article.slug},[n("NuxtLink",{staticClass:"journal-post",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("div",[n("h2",{staticClass:"journal-title"},[t._v(t._s(article.title))]),t._v(" "),n("p",{staticClass:"journal-excerpt"},[t._v(t._s(article.description))]),t._v(" "),n("span",{staticClass:"journal-excerpt"},[t._v("\n              "+t._s(t.formatDate(article.createdAt))+" •\n              "+t._s(article.readingTime)+"\n            ")])])])],1)})),0)])])}),[],!1,null,"30360ac6",null);n.default=component.exports}}]);