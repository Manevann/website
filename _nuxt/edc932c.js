(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{320:function(t,e,r){"use strict";r.r(e);r(26);var n=r(10),l=(r(51),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.article.title," - Månevann AS"),meta:[{hid:"description",name:"description",content:this.article.subtitle},{hid:"author",name:"author",content:this.article.author.name},{hid:"article:published_time",property:"article:published_time",content:this.article.createdAt},{hid:"article:modified_time",property:"article:modified_time",content:this.article.updatedAt},{hid:"og:title",property:"og:title",content:this.article.title},{hid:"og:description",property:"og:description",content:this.article.subtitle},{hid:"twitter:title",name:"twitter:title",content:this.article.title},{hid:"twitter:description",name:"twitter:description",content:this.article.subtitle}]}}}),c=r(24),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"w-full px-4 py-8 flex flex-col items-center"},[e("article",{staticClass:"max-w-full text-gray-50"},[e("h1",{staticClass:"text-2xl md:text-3xl font-light text-center"},[t._v("\n      "+t._s(t.article.title)+"\n    ")]),t._v(" "),e("h2",{staticClass:"text-md md:text-xl font-light text-center"},[t._v("\n      "+t._s(t.article.subtitle)+"\n    ")]),t._v(" "),t.article.author?e("div",{staticClass:"flex mt-8 justify-center items-center"},[e("img",{staticClass:"rounded-full overflow-hidden h-12 w-12 mr-4 shadow-lg",attrs:{src:t.article.author.photo.thumbnail,alt:"Thumbnail photo of ".concat(t.article.author.name)}}),t._v(" "),e("span",{staticClass:"font-light"},[t._v("\n        Written by\n        "),e("a",{staticClass:"font-medium",attrs:{href:t.article.author.website,target:"_blank"}},[t._v("\n          "+t._s(t.article.author.name)+"\n        ")]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"text-gray-400 font-light"},[t._v("Published "+t._s(t.article.publishedAt))])])]):t._e(),t._v(" "),e("nuxt-content",{staticClass:"prose dark:prose-light prose-sm sm:prose mx-auto lg:max-w-3xl mt-8 lg:mt-12",attrs:{document:t.article}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);