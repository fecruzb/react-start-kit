(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{64964:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return r(34215)}])},57281:function(e,n,r){"use strict";r.d(n,{Z:function(){return g}});var t={};r.r(t),r.d(t,{list:function(){return h},read:function(){return f}});var s={};r.r(s),r.d(s,{List:function(){return j},ListItem:function(){return m},View:function(){return b}});var i=r(26042),u=r(69396),a=r(47568),c=r(34051),o=r.n(c),h=function(){var e=(0,a.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/users",e.next=3,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(o().mark((function e(n){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://jsonplaceholder.typicode.com/users/".concat(n),e.next=3,fetch(r).then((function(e){return e.json()}));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=r(85893),d=r(41664),l=r.n(d),m=function(e){var n=e.user;return(0,p.jsx)("li",{children:(0,p.jsx)(l(),{href:"/users/".concat(n.id),children:(0,p.jsx)("a",{children:n.name})})})},w=r(45309),v=r(11163),x=[{field:"id",headerName:"ID",width:90},{field:"name",headerName:"First name",width:150},{field:"username",headerName:"Username"},{field:"phone",headerName:"Phone"},{field:"website",headerName:"Website"}],j=function(e){var n=e.list,r=(0,v.useRouter)();return(0,p.jsx)(w._,{onRowClick:function(e){return r.push("/users/".concat(e.id))},autoHeight:!0,rows:n,columns:x,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0,disableSelectionOnClick:!0,experimentalFeatures:{newEditingApi:!0}})},_=r(15861),Z=r(12014),b=function(e){var n=e.user;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(_.Z,{variant:"h4",paragraph:!0,children:n.name}),(0,p.jsx)(Z.Z,{data:n})]})},g=(0,u.Z)((0,i.Z)({},s),{api:t})},34215:function(e,n,r){"use strict";r.r(n);var t=r(47568),s=r(34051),i=r.n(s),u=r(85893),a=r(87357),c=r(15861),o=r(57281),h=function(e){var n=e.users;return(0,u.jsxs)(a.Z,{bgcolor:"white",p:2,height:"100%",children:[(0,u.jsx)(c.Z,{variant:"h4",paragraph:!0,children:"Users"}),(0,u.jsx)(o.Z.List,{list:n})]})};h.getInitialProps=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.api.list();case 2:return n=e.sent,e.abrupt("return",{users:n});case 4:case"end":return e.stop()}}),e)}))),n.default=h}},function(e){e.O(0,[214,774,888,179],(function(){return n=64964,e(e.s=n);var n}));var n=e.O();_N_E=n}]);