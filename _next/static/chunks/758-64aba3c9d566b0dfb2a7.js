(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[758],{6234:function(e,n,t){"use strict";var r=t(5893),c=t(7294),i=t(5120),a=t(786),o=t(5262),s=t(124),d=t.n(s);function u(e){var n=e.hidden,t=e.faceSrc,s=e.title,u=e.name,l=e.weaponType,p=e.moveType,h=e.blessingSrc,f=e.bst,g=e.hp,y=e.atk,m=e.spd,b=e.def,v=e.res,k=e.pool,x=e.order,j=(0,c.useMemo)((function(){return n?{display:"none",order:x}:{order:x}}),[n,x]);return(0,r.jsxs)("div",{className:d().container,style:j,children:[(0,r.jsxs)("div",{className:d()["img-container"],children:[(0,r.jsx)(o.Z,{src:t,loading:"lazy"}),f&&(0,r.jsx)("div",{className:d().bst,children:f})]}),(0,r.jsxs)("div",{className:d().right,children:[(0,r.jsx)("div",{className:d()["title-and-name"],children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:d().title,children:s}),(0,r.jsx)("div",{className:d().name,children:u})]})}),(0,r.jsxs)("div",{className:d().types,children:[(0,r.jsx)(i.Z,{weaponType:l}),(0,r.jsx)(a.Z,{moveType:p}),"duo"===k&&(0,r.jsx)(o.Z,{src:"/assets/unit-duo.png",loading:"lazy",className:d().blessing}),"harmonized"===k&&(0,r.jsx)(o.Z,{src:"/assets/harmonized.png",loading:"lazy",className:d().blessing}),h&&(0,r.jsx)(o.Z,{src:h,loading:"lazy",className:d().blessing})]}),(0,r.jsxs)("div",{className:d().stats,children:[g&&(0,r.jsxs)("div",{children:["HP ",g]}),y&&(0,r.jsxs)("div",{children:["\u653b\u64ca ",y]}),m&&(0,r.jsxs)("div",{children:["\u901f\u5ea6 ",m]}),b&&(0,r.jsxs)("div",{children:["\u9632\u5b88 ",b]}),v&&(0,r.jsxs)("div",{children:["\u9b54\u9632 ",v]})]})]})]})}n.Z=(0,c.memo)(u)},5262:function(e,n,t){"use strict";var r=t(6156),c=t(5893),i=t(7375),a=t(2565);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}n.Z=function(e){var n=e.src,t=(0,i.Z)(e,["src"]),s=(0,a.Z)(n);return(0,c.jsx)("img",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({src:s},t))}},786:function(e,n,t){"use strict";var r=t(5893),c=t(5988),i=t(7294),a=t(6469),o=t(2565),s=function(e){return"".concat(-56*e,"px 0")};n.Z=function(e){var n=e.moveType,t=(0,i.useMemo)((function(){var e=a.dM.indexOf(n);return{backgroundPosition:s(e)}}),[n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:t,className:c.default.dynamic([["2617712003",[(0,o.Z)("/assets/move-type.png")]]])}),(0,r.jsx)(c.default,{id:"2617712003",dynamic:[(0,o.Z)("/assets/move-type.png")],children:["div.__jsx-style-dynamic-selector{background:no-repeat url('".concat((0,o.Z)("/assets/move-type.png"),"');width:52px;height:55px;}")]})]})}},8285:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var r=t(5893),c=t(7294),i=t(5988);var a=function(e){var n=e.checked,t=e.indeterminated,a=e.onClick,o=(0,c.useMemo)((function(){return t?.5:n?1:.25}),[t,n]);return(0,r.jsxs)("div",{role:"button",style:{opacity:o},onClick:a,className:"jsx-867646372",children:[(0,r.jsx)("div",{className:"jsx-867646372",children:"\u5168"}),(0,r.jsx)(i.default,{id:"867646372",children:["div.jsx-867646372{padding:8px 8px 11px;cursor:pointer;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;display:inline-block;vertical-align:top;box-sizing:border-box;}","div.jsx-867646372>div.jsx-867646372{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:44px;height:44px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:black;background-color:white;border-radius:0.25em;}"]})]})},o=t(6156),s=t(7375);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=function(e){var n=e.checked,t=e.onClick,c=e.children,a=(0,s.Z)(e,["checked","onClick","children"]),o=n?1:.25;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",u(u({"data-checked":n,onClick:t},a),{},{className:i.default.dynamic([["1657900522",[o]]])+" "+(a&&null!=a.className&&a.className||""),children:c})),(0,r.jsx)(i.default,{id:"1657900522",dynamic:[o],children:["button.__jsx-style-dynamic-selector{color:white;opacity:".concat(o,";padding:0.25em;display:inline-block;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;text-align:left;outline:none;background-color:transparent;}")]})]})},p=t(2565);var h=function(e){var n=e.checked,t=e.onClick;return(0,r.jsxs)(l,{checked:n,onClick:t,children:[(0,r.jsx)("div",{className:i.default.dynamic([["4090559497",[(0,p.Z)("/assets/rarity5.png")]]])}),(0,r.jsx)(i.default,{id:"4090559497",dynamic:[(0,p.Z)("/assets/rarity5.png")],children:["div.__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-image:url('".concat((0,p.Z)("/assets/rarity5.png"),"');width:52px;height:55px;}")]})]})};var f=function(e){var n=e.checked,t=e.onClick;return(0,r.jsxs)(l,{checked:n,onClick:t,children:[(0,r.jsx)("div",{className:i.default.dynamic([["2154148204",[(0,p.Z)("/assets/rarity4.png")]]])}),(0,r.jsx)(i.default,{id:"2154148204",dynamic:[(0,p.Z)("/assets/rarity4.png")],children:[".__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-image:url('".concat((0,p.Z)("/assets/rarity4.png"),"');width:52px;height:55px;}")]})]})};var g=function(e){var n=e.checked,t=e.onClick;return(0,r.jsxs)(l,{checked:n,onClick:t,children:[(0,r.jsx)("div",{className:i.default.dynamic([["2124255049",[(0,p.Z)("/assets/Heroic_Grail.png")]]])}),(0,r.jsx)(i.default,{id:"2124255049",dynamic:[(0,p.Z)("/assets/Heroic_Grail.png")],children:[".__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-size:contain;background-image:url('".concat((0,p.Z)("/assets/Heroic_Grail.png"),"');width:52px;height:55px;}")]})]})};var y=function(e){var n=e.checked,t=e.onClick;return(0,r.jsxs)(l,{checked:n,onClick:t,children:[(0,r.jsx)("div",{className:i.default.dynamic([["1089836651",[(0,p.Z)("/assets/unit-duo.png")]]])}),(0,r.jsx)(i.default,{id:"1089836651",dynamic:[(0,p.Z)("/assets/unit-duo.png")],children:[".__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-size:contain;background-image:url('".concat((0,p.Z)("/assets/unit-duo.png"),"');width:52px;height:55px;}")]})]})};var m=function(e){var n=e.checked,t=e.onClick;return(0,r.jsxs)(l,{checked:n,onClick:t,children:[(0,r.jsx)("div",{className:i.default.dynamic([["1793609765",[(0,p.Z)("/assets/dancer.png")]]])}),(0,r.jsx)(i.default,{id:"1793609765",dynamic:[(0,p.Z)("/assets/dancer.png")],children:[".__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-image:url('".concat((0,p.Z)("/assets/dancer.png"),"');width:52px;height:55px;}")]})]})},b=t(6469),v=t(786),k=function(e){var n=e.moveType,t=e.checked,c=e.onClick;return(0,r.jsx)(l,{checked:t,onClick:c,"data-move-type":n,children:(0,r.jsx)(v.Z,{moveType:n})})};function x(e){var n=e.moveTypeFilter,t=e.onToggle,i=(0,c.useCallback)((function(e){var n=e.currentTarget.dataset,r=n.moveType,c="true"===n.checked;t({moveType:r,checked:c})}),[t]);return(0,r.jsx)(r.Fragment,{children:b.dM.map((function(e){return(0,r.jsx)(k,{moveType:e,checked:n[e],onClick:i},e)}))})}var j=(0,c.memo)(x),w=t(5120),_=function(e){var n=e.weaponType,t=e.checked,c=e.onClick;return(0,r.jsx)(l,{checked:t,onClick:c,"data-weapon-type":n,children:(0,r.jsx)(w.Z,{weaponType:n})})};function O(e){var n=e.weaponTypeFilter,t=e.onToggle,i=(0,c.useCallback)((function(e){var n=e.currentTarget.dataset,r=n.weaponType,c="true"===n.checked;t({weaponType:r,checked:c})}),[t]);return(0,r.jsx)(r.Fragment,{children:b.s6.map((function(e){return(0,r.jsx)(_,{weaponType:e,checked:n[e],onClick:i},e)}))})}var C=(0,c.memo)(O),T=t(3882),Z=t.n(T);function D(e){var n=e.allChecked,t=e.allIndeterminated,i=e.toggleAll,o=e.moveTypeFilter,s=e.toggleMoveType,d=e.weaponTypeFilter,u=e.toggleWeaponType,l=e.isRarity5,p=e.toggleRarity5,b=e.isRarity4,v=e.toggleRarity4,k=e.isGrail,x=e.toggleGrail,w=e.isDuo,_=e.toggleDuo,O=e.isDancer,T=e.toggleDancer,D=(0,c.useState)(!1),N=D[0],P=D[1],S=(0,c.useCallback)((function(){P((function(e){return!e}))}),[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:Z().content,children:(0,r.jsxs)("div",{className:Z().checkboxs,hidden:!N,children:[(0,r.jsx)(a,{onClick:i,checked:n,indeterminated:t}),(0,r.jsx)(j,{moveTypeFilter:o,onToggle:s}),(0,r.jsx)(C,{weaponTypeFilter:d,onToggle:u}),(0,r.jsx)(h,{checked:l,onClick:p}),(0,r.jsx)(f,{checked:b,onClick:v}),(0,r.jsx)(y,{checked:w,onClick:_}),(0,r.jsx)(g,{checked:k,onClick:x}),(0,r.jsx)(m,{checked:O,onClick:T})]})}),(0,r.jsx)("div",{className:Z()["expand-button"],onClick:S,children:N?"\u25b2":"\u25bc"})]})}var N=(0,c.memo)(D)},4912:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(7294),c=t(8172),i=t(6469);function a(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{infantry:e,armored:e,cavalry:e,flying:e}}function o(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return i.s6.reduce((function(n,t){return n[t]=e,n}),{})}var s=function(){var e=(0,r.useState)((function(){return a(!0)})),n=e[0],t=e[1],s=(0,r.useCallback)((function(e){var n=e.moveType,r=e.checked;t((function(e){return(0,c.ZP)(e,(function(e){e[n]=!r}))}))}),[]),d=(0,r.useState)((function(){return o(!0)})),u=d[0],l=d[1],p=(0,r.useCallback)((function(e){var n=e.weaponType,t=e.checked;l((function(e){return(0,c.ZP)(e,(function(e){e[n]=!t}))}))}),[]),h=(0,r.useState)(!0),f=h[0],g=h[1],y=(0,r.useCallback)((function(){g((function(e){return!e}))}),[]),m=(0,r.useState)(!0),b=m[0],v=m[1],k=(0,r.useCallback)((function(){v((function(e){return!e}))}),[]),x=(0,r.useState)(!1),j=x[0],w=x[1],_=(0,r.useCallback)((function(){w((function(e){return!e}))}),[]),O=(0,r.useState)(!1),C=O[0],T=O[1],Z=(0,r.useCallback)((function(){T((function(e){return!e}))}),[]),D=(0,r.useState)(!1),N=D[0],P=D[1],S=(0,r.useCallback)((function(){P((function(e){return!e}))}),[]),F=(0,r.useMemo)((function(){var e=i.dM.reduce((function(e,t){var r=n[t];return{checked:e.checked&&r,indeterminated:e.indeterminated||r}}),{checked:!0,indeterminated:!1}),t=i.s6.reduce((function(e,n){var t=u[n];return{checked:e.checked&&t,indeterminated:e.indeterminated||t}}),{checked:!0,indeterminated:!1}),r=e.checked&&t.checked;return[r,!r&&(e.indeterminated||t.indeterminated)]}),[n,u]),R=F[0],M=F[1],z=(0,r.useCallback)((function(){M?(t(a(!1)),l(o(!1))):(t(a(!R)),l(o(!R)))}),[R,M]);return{allChecked:R,allIndeterminated:M,toggleAll:z,moveTypeFilter:n,toggleMoveType:s,weaponTypeFilter:u,toggleWeaponType:p,isRarity5:f,toggleRarity5:y,isRarity4:b,toggleRarity4:k,isGrail:N,toggleGrail:S,isDuo:j,toggleDuo:_,isDancer:C,toggleDancer:Z}}},5120:function(e,n,t){"use strict";var r=t(5893),c=t(5988),i=t(7294),a=t(6469),o=t(2565),s=function(e){return"".concat(-56*e-2,"px -2px")};n.Z=function(e){var n=e.weaponType,t=(0,i.useMemo)((function(){var e=a.s6.indexOf(n);return{backgroundPosition:s(e)}}),[n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:t,className:c.default.dynamic([["3169364258",[(0,o.Z)("/assets/weapon-type.png")]]])}),(0,r.jsx)(c.default,{id:"3169364258",dynamic:[(0,o.Z)("/assets/weapon-type.png")],children:["div.__jsx-style-dynamic-selector{background:no-repeat url('".concat((0,o.Z)("/assets/weapon-type.png"),"');width:52px;height:55px;}")]})]})}},9127:function(e,n,t){"use strict";t.d(n,{Q:function(){return c},K:function(){return i}});var r=t(7294),c=(0,r.createContext)(null),i=function(){return(0,r.useContext)(c)}},7226:function(e,n,t){"use strict";t.d(n,{dk:function(){return p},_n:function(){return f},YM:function(){return g}});var r=t(6156),c=t(3391),i=t(6469);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s={fire:"\u706b\u4e4b\u795d\u798f",water:"\u6c34\u4e4b\u795d\u798f",wind:"\u98a8\u4e4b\u795d\u798f",earth:"\u5730\u4e4b\u795d\u798f",light:"\u5149\u4e4b\u795d\u798f",dark:"\u95c7\u4e4b\u795d\u798f",astra:"\u5929\u4e4b\u795d\u798f",anima:"\u7406\u4e4b\u795d\u798f"},d={fire:"\u706b\u4e4b\u50b3\u627f",water:"\u6c34\u4e4b\u50b3\u627f",wind:"\u98a8\u4e4b\u50b3\u627f",earth:"\u5730\u4e4b\u50b3\u627f",light:"\u5149\u4e4b\u50b3\u627f",dark:"\u95c7\u4e4b\u50b3\u627f",astra:"\u5929\u4e4b\u50b3\u627f",anima:"\u7406\u4e4b\u50b3\u627f"},u={hp:"\u6b7b\u9b25",atk:"\u653b\u64ca",spd:"\u901f\u5ea6",def:"\u9632\u5b88",res:"\u9b54\u9632"},l=i.$0.reduce((function(e,n){var t=n.split("-"),i=(0,c.Z)(t,2),a=i[0],s=i[1];return o(o({},e),{},(0,r.Z)({},n,"".concat(d[a]," - ").concat(u[s])))}),{});function p(e){return e&&"-"!==e&&(s[e]||l[e])?"/assets/blessing-".concat(e,".png"):""}function h(e){return e&&"-"!==e?s[e]||l[e]||"\u7121\u795d\u798f":""}function f(e){return{src:p(e),name:h(e)}}var g=Object.entries(s).map((function(e){var n=(0,c.Z)(e,2);return{value:n[0],name:n[1]}}))},6469:function(e,n,t){"use strict";t.d(n,{dM:function(){return r},s6:function(){return c},$0:function(){return a}});var r=["infantry","armored","cavalry","flying"],c=["red-sword","blue-lance","green-axe","red-bow","blue-bow","green-bow","white-bow","red-dagger","blue-dagger","green-dagger","white-dagger","red-tome","blue-tome","green-tome","white-tome","white-staff","red-dragon","blue-dragon","green-dragon","white-dragon","red-beast","blue-beast","green-beast","white-beast"],i=["hp","atk","spd","def","res"],a=["fire","water","wind","earth","light","dark","astra","anima"].reduce((function(e,n){return i.forEach((function(t){e.push("".concat(n,"-").concat(t))})),e}),[])},5545:function(e,n,t){"use strict";t.d(n,{cK:function(){return c},eM:function(){return i},gO:function(){return a},$f:function(){return o},_u:function(){return s}});var r=t(7226);function c(e,n){return e[n]?e[n]:e.Feh}function i(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=e.id,c=e.title,i=e.name,a=e.rarity,o=e.colorType,s=e.weaponType,d=e.moveType,u=e.blessing,l=e.bst,p=e.statMax,h=e.stats,f=e.pool,g="/faces/".concat(t,".png"),y=(0,r.dk)(u),m=h[5].hp[1],b=h[5].atk[1],v=h[5].spd[1],k=h[5].def[1],x=h[5].res[1],j="".concat(t.toLowerCase(),"|").concat(c,"|").concat(i);return n&&(m=void 0,b=void 0,v=void 0,k=void 0,x=void 0),{id:t,title:c,name:i,rarity:a,colorType:o,weaponType:s,moveType:d,bst:Math.max(l||0,p||0)||void 0,hp:m,atk:b,spd:v,def:k,res:x,pool:f,query:j,faceSrc:g,blessingSrc:y}}function a(e){var n=e.heroDB,t=e.assistDB,r=e.resplendentDB,c=e.heroId,a=e.noStat,o=n[c],s=t.Dance.exclusive,d=i(o,a);return d.isDancer=s.includes(o.id),d.hasResplendent=r.includes(o.id),d.faceSrcR=d.hasResplendent?"/faces/".concat(o.id,"(R).png"):d.faceSrc,d}function o(e){var n=e.heroDB,t=e.assistDB,r=e.resplendentDB,c=e.noStat,a=t.Dance.exclusive;return Object.values(n).map((function(e,n){var t=i(e,c);return t.isDancer=a.includes(e.id),t.hasResplendent=r.includes(e.id),t.faceSrcR=t.hasResplendent?"/faces/".concat(e.id,"(R).png"):t.faceSrc,t.index=n,t}))}function s(e,n){var t=n.filter,r=n.moveTypeFilter,c=n.weaponTypeFilter,i=n.isRarity5,a=n.isRarity4,o=n.isDuo,s=n.isGrail,d=n.isDancer;return function(e,n){return!!n&&!e.query.includes(n.toLowerCase())}(e,t)||function(e,n){return!!n&&"Feh"!==e.id&&!n[e.moveType]}(e,r)||function(e,n){return!!n&&"Feh"!==e.id&&!n[e.weaponType]}(e,c)||function(e,n){return!!n&&"duo"!==e.pool&&"harmonized"!==e.pool}(e,o)||function(e,n){return!!n&&"grail"!==e.pool}(e,s)||function(e,n){return!!n&&!e.isDancer}(e,d)||function(e,n){return!n&&"Feh"!==e.id&&1===e.rarity.length}(e,i)||function(e,n){return!n&&"Feh"!==e.id&&e.rarity.length>1}(e,a)}},124:function(e){e.exports={container:"heroheader_container__3TiRd",right:"heroheader_right__1mb0I","img-container":"heroheader_img-container__2kBJA",bst:"heroheader_bst__2Fe7m","title-and-name":"heroheader_title-and-name__2eeAv",title:"heroheader_title__1X9uL",name:"heroheader_name__1xVHD",types:"heroheader_types__q6tFs",blessing:"heroheader_blessing__2-7aN",stats:"heroheader_stats__987nw"}},3882:function(e){e.exports={content:"typecheckboxs_content__oldWb",checkboxs:"typecheckboxs_checkboxs__3_Up0","expand-button":"typecheckboxs_expand-button__22EOZ"}}}]);