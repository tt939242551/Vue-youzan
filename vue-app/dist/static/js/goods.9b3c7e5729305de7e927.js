webpackJsonp([1],{AeEs:function(t,n){},AnIW:function(t,n){},"Do/K":function(t,n){},HFfA:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=i("U/rD"),a=i("JWK+"),e=(i.n(a),i("pI1A")),o=(i.n(e),i("AeEs")),c=(i.n(o),i("AnIW")),u=(i.n(c),i("d7BR")),r=(i.n(u),i("Do/K")),l=(i.n(r),i("7+uW")),d=i("mtWM"),p=i.n(d),f=i("mw3O"),h=i.n(f),m=i("MWbZ"),g=h.a.parse(location.search.substr(1)).id;new l.default({el:"#app",data:{id:g,lists:null,deals:null,inactive:!0,bannerLists:null,Actions:0,skuNumber:1,sku:!1,cart:!1},components:{Slides:m.a},methods:{getLists:function(){var t=this;p.a.get("http://rap2api.taobao.org/app/mock/7058/goods/details",{id:g}).then(function(n){t.lists=n.data.data,t.bannerLists=[],t.lists.imgs.forEach(function(n){t.bannerLists.push({clickUrl:"",img:n})})}).catch(function(t){console.log(t)})},changeActive:function(t){this.Actions=t,document.body.style.overflow=t?"hidden":"auto",document.documentElement.style.overflow=t?"hidden":"auto"},changeSku:function(t){(this.skuNumber-1||-1!==t)&&(this.skuNumber=this.skuNumber+t)},addCart:function(){var t=this;this.changeActive(0),this.skuNumber&&p.a.post("http://rap2api.taobao.org/app/mock/7058/cart/add",{id:g,number:this.skuNumber}).then(function(n){200===n.data.status&&(t.cart=!0,setTimeout(function(){t.sku=!0},500),setTimeout(function(){t.sku=!1},1500))})},sales:function(){var t=this;this.inactive=!1,p.a.get("http://rap2api.taobao.org/app/mock/7058/goods/deal",{id:g}).then(function(n){t.deals=n.data.data.lists}).catch(function(t){console.log(t)})},goods:function(){this.inactive=!0}},created:function(){this.getLists()},mixins:[s.a]})},"JWK+":function(t,n){},MWbZ:function(t,n,i){"use strict";var s=i("DNVT"),a=(i("v2ns"),{name:"Swiper",data:function(){return{slists:this.lists}},props:["lists"],mounted:function(){new s.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},autoplay:{delay:3e3}})}}),e={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},this._l(this.slists,function(t,i){return n("div",{key:i,staticClass:"swiper-slide"},[n("a",{attrs:{href:t.clickUrl}},[n("img",{attrs:{src:t.img}})])])}),0),this._v(" "),n("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var o=i("VU/8")(a,e,!1,function(t){i("bqQH")},null,null);n.a=o.exports},"U/rD":function(t,n,i){"use strict";n.a={filters:{Price:function(t){var n=(t+="").split(".");return n[1]?1===n[1].length?t.concat("0"):t:t.concat(".00")}}}},bqQH:function(t,n){},d7BR:function(t,n){},pI1A:function(t,n){},v2ns:function(t,n){}},["HFfA"]);
//# sourceMappingURL=goods.9b3c7e5729305de7e927.js.map