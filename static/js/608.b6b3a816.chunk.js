"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[608],{667:function(e,t,n){n.d(t,{Z:function(){return s}});n(791);var r="Alert_alert__njX-k",a=n(184);var s=function(e){var t=e.message;return(0,a.jsx)("p",{className:r,children:t})}},787:function(e,t,n){n.d(t,{Z:function(){return i}});n(791);var r=n(87),a="MovieItem_link__9v1yn",s=n(184);var i=function(e){return e.movieList.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(r.rU,{className:a,to:"".concat(e.id),children:e.title})},e.id)}))}},608:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),s=n(757),i=n.n(s),u=n(791),c=n(16),o=n(390),l=n(787),f=n(856),h=n(667),v={list:"Movies_list__hqYjd"},m=n(184);var d=function(){var e=(0,u.useState)(!1),t=(0,a.Z)(e,2),n=t[0],s=t[1],d=(0,u.useState)(null),p=(0,a.Z)(d,2),_=p[0],g=p[1],b=(0,u.useState)([]),x=(0,a.Z)(b,2),j=x[0],Z=x[1],k=(0,u.useState)(""),y=(0,a.Z)(k,2),S=y[0],w=y[1];return c.Z.defaults.baseURL="https://api.themoviedb.org/3",(0,u.useEffect)((function(){return w("")}),[]),(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,c.Z.get("/search/movie?query=".concat(S,"&api_key=").concat(o.q1,"&include_adult=false&language=en-US&page=1"));case 4:t=e.sent,n=t.data.results,Z(n),g(null),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),g("Sorry ! There are no movies with this searchtherm ! Please try again !");case 14:return e.prev=14,s(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[S]),(0,m.jsxs)("main",{children:[n&&(0,m.jsx)(f.Z,{}),_&&(0,m.jsx)(h.Z,{message:_}),(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target;w(t.elements.searchTherm.value),console.log(S),t.reset()},className:v.form,children:[(0,m.jsx)("input",{className:v.input,type:"text",name:"searchTherm"}),(0,m.jsx)("button",{className:v.button,type:"submit",children:"Search"})]}),j.length>0&&(0,m.jsx)("ul",{className:v.list,children:(0,m.jsx)(l.Z,{movieList:j})})]})}},390:function(e,t,n){n.d(t,{q1:function(){return a}});var r=n(16);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var a="90080ff184cabebdf1b42eaa88fb5738"}}]);
//# sourceMappingURL=608.b6b3a816.chunk.js.map