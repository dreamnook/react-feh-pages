(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[736],{9487:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(5893),o=r(7294),a=r(8285),i=r(6156),c=r(5988),l=r(6234);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e){var t=e.heroId,r=e.heroes,a=e.onSelect,i=(0,o.useCallback)((function(e){e.stopPropagation(),a(e.currentTarget.value)}),[a]);return(0,n.jsxs)(n.Fragment,{children:[r.map((function(e){return(0,n.jsx)("button",{disabled:t===e.id,"data-active":t===e.id,value:e.id,hidden:e.hidden,onClick:i,className:"jsx-987587854",children:(0,n.jsx)(l.Z,s({id:e.id},e))},e.id)})),(0,n.jsx)(c.default,{id:"987587854",children:["button.jsx-987587854{display:block;width:100%;text-align:left;background-color:transparent;padding:0;}","button.jsx-987587854:disabled,button[data-active='true'].jsx-987587854{cursor:default;pointer-events:none;background-color:#476d7c;}","button.jsx-987587854:hover{background-color:#77abb7aa;}"]})]})}var d=(0,o.memo)(p),f=r(5545),g=r(4912),v=r(9127);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=r(8487),m=r.n(y);function O(e){var t=e.noDropdown,r=e.inputRef,o=e.disabled,a=e.placeholder,i=e.open,c=e.toggleOpen,l=e.onInputClick,u=e.onChangeFilter;return t?(0,n.jsx)("input",{className:m()["toggle-input"],ref:r,placeholder:"\u8f38\u5165\u540d\u5b57/\u7a31\u865f",onChange:u,disabled:o}):(0,n.jsxs)("button",{className:m().toggle,onClick:c,role:"button",disabled:o,"data-open":i,children:[(0,n.jsx)("input",{className:m()["toggle-input"],ref:r,defaultValue:a,placeholder:a,onClick:l,onChange:u,disabled:o}),(0,n.jsx)("span",{className:m().arrow,children:"\u25bc"})]})}var j=function(e){var t=e.heroId,r=e.onSelect,i=e.noDropdown,c=void 0!==i&&i,l=e.noStat,u=function(e){var t=e.heroId,r=e.noDropdown,n=void 0!==r&&r,a=e.noStat,i=void 0!==a&&a,c=e.onSelect,l=e.resplendent,u=(0,v.K)(),s=u.heroDB,p=u.assistDB,d=u.resplendentDB,b=(0,o.useMemo)((function(){return(0,f.$f)({heroDB:s,assistDB:p,resplendentDB:d,noStat:i})}),[s,p,d,i]),y=(0,o.useMemo)((function(){var e=s[t];return"".concat(e.name," - ").concat(e.title)}),[t,s]),m=(0,o.useRef)(),O=(0,o.useState)(n||!1),j=O[0],k=O[1],D=(0,o.useCallback)((function(){k((function(e){return e?m.current.value=y:(m.current.focus(),m.current.value="",m.current.placeholder=y),!e}))}),[y]),w=(0,o.useCallback)((function(e){e.stopPropagation(),j||(k(!0),m.current.focus(),m.current.value="",m.current.placeholder=y)}),[j,y]),P=(0,o.useState)(""),x=P[0],_=P[1],C=(0,o.useCallback)((function(e){_(e.currentTarget.value)}),[]),S=(0,g.Z)(),R=S.allChecked,T=S.allIndeterminated,Z=S.toggleAll,N=S.moveTypeFilter,F=S.toggleMoveType,I=S.weaponTypeFilter,H=S.toggleWeaponType,E=S.isRarity5,M=S.toggleRarity5,G=S.isRarity4,A=S.toggleRarity4,B=S.isGrail,W=S.toggleGrail,U=S.isDuo,J=S.toggleDuo,$=S.isDancer,z=S.toggleDancer,K=(0,o.useMemo)((function(){return b.map((function(e){return h(h({hidden:(0,f._u)(e,{filter:x,moveTypeFilter:N,weaponTypeFilter:I,isRarity5:E,isRarity4:G,isGrail:B,isDuo:U,isDancer:$})},e),{},{faceSrc:l?e.faceSrcR:e.faceSrc})}))}),[b,x,N,I,E,G,B,U,$,l]),L=(0,o.useCallback)((function(e){if(c(e),k(n||!1),!n){var t=s[e],r="".concat(t.name," - ").concat(t.title);m.current.value=r}}),[c,k,n,s]);return{inputRef:m,open:j,setOpen:k,toggleOpen:n?void 0:D,placeholder:y,disabled:b.length<2,onInputClick:n?void 0:w,handleOnSelect:L,filter:x,onChangeFilter:C,allChecked:R,allIndeterminated:T,toggleAll:Z,moveTypeFilter:N,toggleMoveType:F,weaponTypeFilter:I,toggleWeaponType:H,isRarity5:E,toggleRarity5:M,isRarity4:G,toggleRarity4:A,isGrail:B,toggleGrail:W,isDuo:U,toggleDuo:J,isDancer:$,toggleDancer:z,computedHeroes:K}}({heroId:t,noDropdown:c,noStat:void 0!==l&&l,onSelect:r,resplendent:e.resplendent}),s=u.inputRef,p=u.open,b=u.toggleOpen,y=u.placeholder,j=u.disabled,k=u.onInputClick,D=u.handleOnSelect,w=u.onChangeFilter,P=u.allChecked,x=u.allIndeterminated,_=u.toggleAll,C=u.moveTypeFilter,S=u.toggleMoveType,R=u.weaponTypeFilter,T=u.toggleWeaponType,Z=u.isRarity5,N=u.toggleRarity5,F=u.isRarity4,I=u.toggleRarity4,H=u.isGrail,E=u.toggleGrail,M=u.isDuo,G=u.toggleDuo,A=u.isDancer,B=u.toggleDancer,W=u.computedHeroes;return(0,n.jsxs)("div",{className:m().container,children:[(0,n.jsx)(O,{noDropdown:c,inputRef:s,disabled:j,placeholder:y,open:p,toggleOpen:b,onInputClick:k,onChangeFilter:w}),(0,n.jsx)("div",{className:m().anchor,"data-open":p,children:(0,n.jsxs)("div",{className:m().menu,"data-nobgcolor":c,children:[(0,n.jsx)(a.Z,{allChecked:P,allIndeterminated:x,toggleAll:_,moveTypeFilter:C,toggleMoveType:S,weaponTypeFilter:R,toggleWeaponType:T,isRarity5:Z,toggleRarity5:N,isRarity4:F,toggleRarity4:I,isGrail:H,toggleGrail:E,isDuo:M,toggleDuo:G,isDancer:A,toggleDancer:B}),(0,n.jsx)("div",{className:m().list,children:(0,n.jsx)(d,{heroId:t,heroes:W,onSelect:D})})]})})]})}},4162:function(e,t,r){"use strict";var n=r(5893),o=(r(7294),r(6374)),a=[0,1,2,3,4,5,6,7,8,9,10];t.Z=function(e){var t=e.merge,r=e.onSelect;return(0,n.jsx)(o.Z,{value:t,onSelect:r,options:a})}},6374:function(e,t,r){"use strict";var n=r(5893),o=r(7294),a=r(5320),i=r.n(a);t.Z=function(e){var t=e.value,r=e.options,a=e.onSelect,c=(0,o.useCallback)((function(e){a&&a(Number(e.currentTarget.value))}),[a]);return(0,n.jsx)("div",{className:i().wrapper,children:(0,n.jsx)("div",{className:i().container,children:r.map((function(e){return(0,n.jsx)("button",{value:e,"data-active":e===t,onClick:c,children:e},e)}))})})}},5170:function(e,t,r){"use strict";var n=r(5893),o=r(7294),a=r(4482),i=r.n(a),c=[{name:"5\u2606",value:5},{name:"4\u2605",value:4}];t.Z=function(e){var t=e.rarity,r=void 0===t?5:t,a=e.minRarity,l=void 0===a?5:a,u=e.onSelect,s=(0,o.useCallback)((function(e){u&&u(Number(e.currentTarget.value))}),[u]),p=(0,o.useMemo)((function(){return l<5?c:c.slice(0,1)}),[l]);return(0,n.jsx)("div",{className:i().raritypicker,children:p.map((function(e){return(0,n.jsx)("button",{onClick:s,"data-active":e.value===r,value:e.value,children:e.name},e.value)}))})}},629:function(e,t,r){"use strict";r.d(t,{$r:function(){return c},Ty:function(){return l},Ud:function(){return u},YM:function(){return s},Zx:function(){return p}});var n=r(6156),o=r(3391);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=function(e){if(!e||"-"===e)return{boon:"hp",bane:"hp"};var t=e.substring(1).split("-");return{boon:t[0],bane:t[1]}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hp:0,atk:0,spd:0,def:0,res:0},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,a=Array.isArray(e.hp),l=c(t),u=l.boon,s=l.bane,p={hp:1,atk:1,spd:1,def:1,res:1};p[u]+=1,p[s]-=1;var d=Object.entries(e).reduce((function(e,t){var r,c=(0,o.Z)(t,2),l=c[0],u=c[1],s=a?u[p[l]]:u;return i(i({},e),{},(r={},(0,n.Z)(r,l,s),(0,n.Z)(r,"bst",e.bst+s),r))}),{bst:0});return r>0&&(a?(d[s]=e[s][1],d.bst+=u===s?3:e[s][1]-e[s][0]):(d[s]=e[s],d.bst+=3)),d},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hp:0,atk:0,spd:0,def:0,res:0},t=arguments.length>1?arguments[1]:void 0,r=c(t),a=r.boon,l=r.bane,u={hp:0,atk:0,spd:0,def:0,res:0};return u[a]+=1,u[l]-=1,Object.entries(e).reduce((function(e,t){var r=(0,o.Z)(t,2),a=r[0],c=r[1];return i(i({},e),{},(0,n.Z)({},a,c+u[a]))}),{hp:0,atk:0,spd:0,def:0,res:0})},s=[{name:"+HP -\u653b\u64ca",value:"+hp-atk"},{name:"+HP -\u901f\u5ea6",value:"+hp-spd"},{name:"+HP -\u9632\u5b88",value:"+hp-def"},{name:"+HP -\u9b54\u9632",value:"+hp-res"},{name:"+\u653b\u64ca -HP",value:"+atk-hp"},{name:"+\u653b\u64ca -\u901f\u5ea6",value:"+atk-spd"},{name:"+\u653b\u64ca -\u9632\u5b88",value:"+atk-def"},{name:"+\u653b\u64ca -\u9b54\u9632",value:"+atk-res"},{name:"+\u901f\u5ea6 -HP",value:"+spd-hp"},{name:"+\u901f\u5ea6 -\u653b\u64ca",value:"+spd-atk"},{name:"+\u901f\u5ea6 -\u9632\u5b88",value:"+spd-def"},{name:"+\u901f\u5ea6 -\u9b54\u9632",value:"+spd-res"},{name:"+\u9632\u5b88 -HP",value:"+def-hp"},{name:"+\u9632\u5b88 -\u653b\u64ca",value:"+def-atk"},{name:"+\u9632\u5b88 -\u901f\u5ea6",value:"+def-spd"},{name:"+\u9632\u5b88 -\u9b54\u9632",value:"+def-res"},{name:"+\u9b54\u9632 -HP",value:"+res-hp"},{name:"+\u9b54\u9632 -\u653b\u64ca",value:"+res-atk"},{name:"+\u9b54\u9632 -\u901f\u5ea6",value:"+res-spd"},{name:"+\u9b54\u9632 -\u9632\u5b88",value:"+res-def"}];function p(e){var t=s.find((function(t){return e===t.value}));return(null===t||void 0===t?void 0:t.name)||"-"}},1665:function(e,t,r){"use strict";r.d(t,{s:function(){return n}});var n=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n={hp:0,atk:0,spd:0,def:0,res:0};r&&t>0&&(n[e[0]]=1,n[e[1]]=1,n[e[2]]=1);for(var o=0;o<2*t;o+=1){var a=o%5;n[e[a]]+=1}return n}},6032:function(e,t,r){"use strict";r.d(t,{h:function(){return s},f:function(){return p}});var n=r(6156),o=r(7375),a=r(3391),i=r(629),c=r(1665);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){var t=Object.entries(e).map((function(e,t){var r=(0,a.Z)(e,2);return{key:r[0],stat:r[1],index:t}}));return t.sort((function(e,t){return e.stat>t.stat?-1:e.stat<t.stat?1:e.index<t.index?-1:e.index>t.index?1:0})),t.map((function(e){return e.key}))}var p=function(e,t,r,l,p,d,f,g,v,b){var h=(0,i.Ty)(t["".concat(e)],r,l),y=h.bst,m=(0,o.Z)(h,["bst"]),O=(0,i.Ud)(t["".concat(e,"-1")],r),j=s((0,i.Ud)(t["5-1"],r)),k=(0,c.s)(j,l,!r||"-"===r),D=function(e,t){for(var r={hp:0,atk:0,spd:0,def:0,res:0},n=0;n<t;n+=1)r[e[n%5]]+=1;return r}(j,v),w=p?{hp:5,atk:2,spd:2,def:2,res:2}:{hp:0,atk:0,spd:0,def:0,res:0},P=g?{hp:10,atk:4,spd:4,def:4,res:4}:{hp:0,atk:0,spd:0,def:0,res:0},x=b?2:0;return{stats:Object.entries(f?O:m).reduce((function(e,t){var r=(0,a.Z)(t,2),o=r[0],i=r[1]+d[o]+k[o]+D[o]+w[o]+P[o]+x;return u(u({},e),{},(0,n.Z)({},o,i>-1?i:0))}),{}),bst:y}}},8487:function(e){e.exports={container:"heroselect_container__3rZU3",toggle:"heroselect_toggle__3mzOy","toggle-input":"heroselect_toggle-input__1HNnH",arrow:"heroselect_arrow__29LW2",anchor:"heroselect_anchor__2sHR4",menu:"heroselect_menu__2cACs",list:"heroselect_list__2sGnM"}},5320:function(e){e.exports={container:"numberpicker_container__2xJWI",wrapper:"numberpicker_wrapper__19oMe"}},4482:function(e){e.exports={raritypicker:"raritypicker_raritypicker__JEpxm"}}}]);