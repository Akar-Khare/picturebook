"use strict";(self.webpackChunkpicture_book=self.webpackChunkpicture_book||[]).push([[101],{101:function(e,t,n){n.r(t);var s=n(165),r=n(861),c=n(885),o=n(791),a=n(565),i=n(507),u=n(184);t.default=function(e){var t=e.isAuthenticated;console.log("In feeds");var n=(0,o.useState)([]),d=(0,c.Z)(n,2),l=d[0],h=d[1],p=(0,o.useContext)(a.S),f=(0,o.useState)(!1),k=(0,c.Z)(f,2),x=k[0],m=k[1],j=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pbookserver.onrender.com/cards",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,h(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e,t){fetch("/liked",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cardId:e,liked:t})}).then((function(e){console.log("Like status "+e.status),201===e.status&&m(!x)}))};return(0,o.useEffect)((function(){j()}),[x]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{style:{textAlign:"center",marginTop:"20px"},children:[p&&(0,u.jsxs)("h5",{children:[" ","Welcome ".concat(p.name)]}),(0,u.jsx)("h6",{style:{color:"grey"},children:"Stories"})]}),l[0]&&(0,u.jsx)("div",{className:"card-container",children:l.map((function(e){return(0,u.jsx)(i.Z,{data:e,user:p,likePost:v,isAuthenticated:t})}))})]})}}}]);
//# sourceMappingURL=101.d49f373f.chunk.js.map