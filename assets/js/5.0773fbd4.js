(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{386:function(t,e,n){},400:function(t,e,n){},407:function(t,e,n){},416:function(t,e,n){"use strict";n(421);var i=n(19),a=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"page-footer"},[e("a",{attrs:{href:"https://github.com/sanic-org/sanic/blob/master/LICENSE"}},[this._v("\n    MIT Licensed\n  ")]),this._v(" "),e("br"),this._v("\n  Copyright © 2018-present Sanic Community Organization"),e("br"),this._v(" "),e("p",[this._v("~ Made with ❤️ and ☕️ ~")])])}],!1,null,null,null);e.a=a.exports},421:function(t,e,n){"use strict";n(386)},434:function(t,e,n){"use strict";n(400)},441:function(t,e,n){"use strict";n(407)},452:function(t,e,n){"use strict";var i=n(456),a=n(416),s={components:{Home:i.a,Footer:a.a}},o=n(19),r=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Home",this._b({},"Home",this.$attrs,!1)),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=r.exports},453:function(t,e,n){"use strict";n(227);var i=n(457),a=n(451),s=n(458),o=n(413);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:s.a,NavLinks:o.a,SearchBox:a.a,AlgoliaSearchBox:i.a},data:function(){return{darkMode:!1,linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName},logo:function(){return this.darkMode?"https://raw.githubusercontent.com/huge-success/sanic-assets/master/png/sanic-framework-logo-simple-white-400x97.png":"https://raw.githubusercontent.com/huge-success/sanic-assets/master/png/sanic-framework-logo-simple-400x97.png"}},methods:{handleDarkMode:function(t){this.darkMode=t}},mounted:function(){var t=this,e=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};this.handleDarkMode(!0),n(),window.addEventListener("resize",n,!1)}},c=(n(434),n(19)),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo&&!1!==t.$page.frontmatter.logo?n("img",{staticClass:"logo",attrs:{src:t.logo,alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"}),t._v(" "),n("ClientOnly",[n("ToggleDarkMode",{on:{darkmode:t.handleDarkMode}})],1)],1)],1)}),[],!1,null,null,null);e.a=u.exports},454:function(t,e,n){"use strict";var i=n(450),a=n(416),s={components:{Page:i.a,Footer:a.a}},o=n(19),r=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Page",this._b({},"Page",this.$attrs,!1)),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=r.exports},455:function(t,e,n){"use strict";var i=n(412),a=n(413),s={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:a.a},props:["items"],computed:{current:function(){return this.$root.$localeConfig.current||""}}},o=(n(441),n(19)),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),n("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom"),t._v(" "),t.current?n("div",{staticClass:"current"},[t._v("\n    "+t._s(t.current)+"\n  ")]):t._e()],2)}),[],!1,null,null,null);e.a=r.exports}}]);