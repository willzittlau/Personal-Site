(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{360:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("f5e2c2f8",content,!0,{sourceMap:!1})},386:function(t,e,n){"use strict";n(360)},387:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"h1[data-v-3151f48e]{font-size:2rem;font-weight:600;text-align:center}hr[data-v-3151f48e]{width:30%}ul[data-v-3151f48e]{width:100%}.container.journal[data-v-3151f48e]{max-width:100vw;min-width:75vw}.journal-post[data-v-3151f48e]{display:block;padding:1rem 0;-webkit-text-decoration:none;text-decoration:none;transition:background .5s ease}.journal-post>*[data-v-3151f48e]{transition:transform .5s ease}.journal-post[data-v-3151f48e]:hover{background-color:#f8f8f8}.journal-post:hover>*[data-v-3151f48e]{transform:translateX(3rem)}.journal-post h1[data-v-3151f48e],.journal-post h2[data-v-3151f48e]{margin:0;padding:0}.journal-title[data-v-3151f48e]{color:#323232;font-size:1.5rem;font-weight:600}.journal-excerpt[data-v-3151f48e]{color:#000}@media (min-width:560px){.journal-post[data-v-3151f48e]{padding:1rem 0}}@media (min-width:860px){.journal-post[data-v-3151f48e]{padding:1rem 0}}",""]),r.locals={},t.exports=r},408:function(t,e,n){"use strict";n.r(e);n(34),n(58);var r=n(8),o=(n(41),{methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.error,o=t.$content,e.prev=1,e.next=4,o("articles",{deep:!0}).where({tags:{$contains:n.slug}}).sortBy("createdAt","desc").fetch();case 4:return l=e.sent,e.abrupt("return",{articles:l});case 8:e.prev=8,e.t0=e.catch(1),r({statusCode:404,message:"Page could not be found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},head:{title:"Will Zittlau - Tags",meta:[{hid:"description",name:"description",content:"Will Zittlau - Post Tags"}]}}),l=(n(386),n(11)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container journal"},[e("h1",[t._v("Tags: "+t._s(t.$route.params.slug))]),t._v(" "),e("hr"),t._v(" "),e("ul",t._l(t.articles,(function(article){return e("li",{key:article.slug},[e("NuxtLink",{staticClass:"journal-post",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[e("div",[e("h2",{staticClass:"journal-title"},[t._v(t._s(article.title))]),t._v(" "),e("p",{staticClass:"journal-excerpt"},[t._v(t._s(article.description))]),t._v(" "),e("span",{staticClass:"journal-excerpt"},[t._v("\n            "+t._s(t.formatDate(article.createdAt))+" •\n            "+t._s(article.readingTime)+"\n          ")])])])],1)})),0)])}),[],!1,null,"3151f48e",null);e.default=component.exports}}]);