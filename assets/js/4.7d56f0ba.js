(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{342:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},343:function(t,e,r){var i=r(2),n=r(31),a=r(21),o=r(342),s=i("".replace),f="["+o+"]",u=RegExp("^"+f+f+"*"),c=RegExp(f+f+"*$"),h=function(t){return function(e){var r=a(n(e));return 1&t&&(r=s(r,u,"")),2&t&&(r=s(r,c,"")),r}};t.exports={start:h(1),end:h(2),trim:h(3)}},345:function(t,e,r){var i=r(4),n=r(7),a=r(85);t.exports=function(t,e,r){var o,s;return a&&i(o=e.constructor)&&o!==r&&n(s=o.prototype)&&s!==r.prototype&&a(t,s),t}},367:function(t,e,r){},397:function(t,e,r){"use strict";var i=r(11),n=r(0),a=r(2),o=r(111),s=r(15),f=r(9),u=r(345),c=r(37),h=r(86),p=r(193),m=r(3),l=r(58).f,d=r(33).f,I=r(12).f,v=r(398),N=r(343).trim,g=n.Number,w=g.prototype,b=n.TypeError,E=a("".slice),x=a("".charCodeAt),y=function(t){var e=p(t,"number");return"bigint"==typeof e?e:_(e)},_=function(t){var e,r,i,n,a,o,s,f,u=p(t,"number");if(h(u))throw b("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=N(u),43===(e=x(u,0))||45===e){if(88===(r=x(u,2))||120===r)return NaN}else if(48===e){switch(x(u,1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+u}for(o=(a=E(u,2)).length,s=0;s<o;s++)if((f=x(a,s))<48||f>n)return NaN;return parseInt(a,i)}return+u};if(o("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var S,k=function(t){var e=arguments.length<1?0:g(y(t)),r=this;return c(w,r)&&m((function(){v(r)}))?u(Object(e),r,k):e},A=i?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;A.length>T;T++)f(g,S=A[T])&&!f(k,S)&&I(k,S,d(g,S));k.prototype=w,w.constructor=k,s(n,"Number",k)}},398:function(t,e,r){var i=r(2);t.exports=i(1..valueOf)},399:function(t,e,r){"use strict";r(367)},406:function(t,e,r){"use strict";r.r(e);r(397),r(59),r(30),r(82),r(184),r(202);var i={props:{href:{type:String},width:{type:String|Number,default:"100%"},height:{type:Number,default:600},iframeId:{type:String,default:"example-iframe"+Math.random()}},data:function(){return{iframeLink:"",showIframe:!1}},computed:{iframeHeight:function(){return this.height,600}},mounted:function(){var t=this,e=this.$router.options.base;var r="";r=this.href?""+e.slice(0,-1)+this.href:""+location.pathname.replace("guide","examples/#").replace(".html",""),r+="".concat(-1===r.indexOf("?")?"?":"&","from=doc"),this.iframeLink=r,document.getElementById(this.iframeId).onload=function(){t.showIframe=!0},setTimeout((function(){t.showIframe=!0}),1e3)}},n=(r(399),r(29)),a=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example",style:{width:this.width,height:this.height+"px"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showIframe,expression:"!showIframe"}],staticClass:"mask"}),this._v(" "),e("iframe",{staticClass:"iframe",attrs:{id:this.iframeId,src:this.iframeLink}})])}),[],!1,null,"249729e0",null);e.default=a.exports}}]);