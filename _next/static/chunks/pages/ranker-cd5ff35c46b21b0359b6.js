_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"7Qh5":function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return m}));var o=r("nKUr"),n=r("OyYD"),c=r("q1tI"),i=r("g4pe"),s=r.n(i),a=r("rlh6"),l=r("rePB"),g=r("0unf");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function y(e){var t=e.heroes,r=e.heroesOrder;return Object(o.jsx)(o.Fragment,{children:t.map((function(e){return Object(o.jsx)(g.a,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:e.id,order:r[e.id]},e),e.id)}))})}var b=Object(c.memo)(y),p=r("YVe8"),j=r("I5BY"),d=r("0YX2");function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(){var e=Object(n.b)(),t=e.heroDB,r=e.assistDB,o=e.resplendentDB,i=Object(c.useMemo)((function(){return Object(j.d)({heroDB:t,assistDB:r,resplendentDB:o})}),[t,r,o]),s=Object(d.a)(),a=s.allChecked,g=s.allIndeterminated,u=s.toggleAll,y=s.moveTypeFilter,b=s.toggleMoveType,O=s.weaponTypeFilter,B=s.toggleWeaponType,h=s.isRarity5,v=s.toggleRarity5,D=s.isRarity4,S=s.toggleRarity4,m=s.isGrail,k=s.toggleGrail,R=s.isDuo,_=s.toggleDuo,w=s.isDancer,x=s.toggleDancer,P=function(){var e=Object(c.useState)(!1),t=e[0],r=e[1],o=Object(c.useCallback)((function(){r((function(e){return!e}))}),[]),n=Object(c.useState)(!1),i=n[0],s=n[1],a=Object(c.useCallback)((function(){s((function(e){return!e}))}),[]),l=Object(c.useState)(!1),g=l[0],u=l[1],y=Object(c.useCallback)((function(){u((function(e){return!e}))}),[]),b=Object(c.useState)(!1),p=b[0],j=b[1],d=Object(c.useCallback)((function(){j((function(e){return!e}))}),[]),O=Object(c.useState)(!1),f=O[0],B=O[1],h=Object(c.useCallback)((function(){B((function(e){return!e}))}),[]);return{sortBy:Object(c.useMemo)((function(){var e=[];return t&&e.push("hp"),i&&e.push("atk"),g&&e.push("spd"),p&&e.push("def"),f&&e.push("res"),e}),[t,i,g,p,f]),sortByHP:t,toggleSortByHp:o,sortByAtk:i,toggleSortByAtk:a,sortBySpd:g,toggleSortBySpd:y,sortByDef:p,toggleSortByDef:d,sortByRes:f,toggleSortByRes:h}}(),T=P.sortBy,C=P.sortByHP,H=P.toggleSortByHp,A=P.sortByAtk,F=P.toggleSortByAtk,E=P.sortBySpd,G=P.toggleSortBySpd,N=P.sortByDef,M=P.toggleSortByDef,I=P.sortByRes,X=P.toggleSortByRes,W=Object(c.useMemo)((function(){return i.sort((function(e,t){var r=T.reduce((function(t,r){return t+e[r]}),0),o=T.reduce((function(e,r){return e+t[r]}),0);return r>o?-1:o>r?1:e.index-t.index})).reduce((function(e,t,r){return f(f({},e),{},Object(l.a)({},t.id,r))}),{})}),[i,T]),Y=Object(c.useMemo)((function(){return i.map((function(e){return f({hidden:Object(j.e)(e,{moveTypeFilter:y,weaponTypeFilter:O,isRarity5:h,isRarity4:D,isGrail:m,isDuo:R,isDancer:w})},e)}))}),[i,y,O,h,D,m,R,w]);return{bg:Object(p.a)("/assets/summon-stone.jpg"),allChecked:a,allIndeterminated:g,toggleAll:u,moveTypeFilter:y,toggleMoveType:b,weaponTypeFilter:O,toggleWeaponType:B,isRarity5:h,toggleRarity5:v,isRarity4:D,toggleRarity4:S,isGrail:m,toggleGrail:k,isDuo:R,toggleDuo:_,isDancer:w,toggleDancer:x,sortByHP:C,toggleSortByHp:H,sortByAtk:A,toggleSortByAtk:F,sortBySpd:E,toggleSortBySpd:G,sortByDef:N,toggleSortByDef:M,sortByRes:I,toggleSortByRes:X,computedHeroes:Y,heroesOrder:W}}var h=r("X2qb"),v=r.n(h),D=function(){var e=B(),t=e.bg,r=e.allChecked,n=e.allIndeterminated,c=e.toggleAll,i=e.moveTypeFilter,l=e.toggleMoveType,g=e.weaponTypeFilter,u=e.toggleWeaponType,y=e.isRarity5,p=e.toggleRarity5,j=e.isRarity4,d=e.toggleRarity4,O=e.isGrail,f=e.toggleGrail,h=e.isDuo,D=e.toggleDuo,S=e.isDancer,m=e.toggleDancer,k=e.sortByHP,R=e.toggleSortByHp,_=e.sortByAtk,w=e.toggleSortByAtk,x=e.sortBySpd,P=e.toggleSortBySpd,T=e.sortByDef,C=e.toggleSortByDef,H=e.sortByRes,A=e.toggleSortByRes,F=e.computedHeroes,E=e.heroesOrder;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s.a,{children:Object(o.jsx)("title",{children:"\u9ad4\u8cea\u6392\u6392\u770b"})}),Object(o.jsx)("div",{className:v.a.container,style:{background:"url('".concat(t,"') center / cover no-repeat fixed")},children:Object(o.jsxs)("div",{className:v.a["bg-layer"],children:[Object(o.jsx)(a.a,{allChecked:r,allIndeterminated:n,toggleAll:c,moveTypeFilter:i,toggleMoveType:l,weaponTypeFilter:g,toggleWeaponType:u,isRarity5:y,toggleRarity5:p,isRarity4:j,toggleRarity4:d,isGrail:O,toggleGrail:f,isDuo:h,toggleDuo:D,isDancer:S,toggleDancer:m}),Object(o.jsxs)("div",{className:v.a["stats-buttons"],children:[Object(o.jsx)("div",{className:v.a.title,children:"\u6392\u5e8f\u4f9d\u64da"}),Object(o.jsx)("button",{"data-active":k,onClick:R,children:"HP"}),Object(o.jsx)("button",{"data-active":_,onClick:w,children:"\u653b\u64ca"}),Object(o.jsx)("button",{"data-active":x,onClick:P,children:"\u901f\u5ea6"}),Object(o.jsx)("button",{"data-active":T,onClick:C,children:"\u9632\u5b88"}),Object(o.jsx)("button",{"data-active":H,onClick:A,children:"\u9b54\u9632"})]}),Object(o.jsx)("div",{className:v.a.list,children:Object(o.jsx)(b,{heroes:F,heroesOrder:E})})]})})]})},S=Object(c.memo)(D);var m=!0;t.default=function(e){var t=e.db;return Object(o.jsx)(n.a.Provider,{value:t,children:Object(o.jsx)(S,{})})}},X2qb:function(e,t,r){e.exports={container:"Ranker_container__p14h9","bg-layer":"Ranker_bg-layer__1lbzo",list:"Ranker_list__8kpX4","stats-buttons":"Ranker_stats-buttons__QpHH1",title:"Ranker_title__1tGj4"}},vEBx:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ranker",function(){return r("7Qh5")}])}},[["vEBx",0,1,2,4]]]);