(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"12989b5129d66dd4114e":function(e,a,t){"use strict";t.d(a,"e",(function(){return s})),t.d(a,"b",(function(){return v})),t.d(a,"a",(function(){return m})),t.d(a,"c",(function(){return b})),t.d(a,"d",(function(){return p}));var n=t("54f683fcda7806277002");function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var u=function(e,a){return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},e,c({},a.value,a))},f=[{name:"\u706b\u4e4b\u795d\u798f",value:"fire"},{name:"\u6c34\u4e4b\u795d\u798f",value:"water"},{name:"\u98a8\u4e4b\u795d\u798f",value:"wind"},{name:"\u5730\u4e4b\u795d\u798f",value:"earth"},{name:"\u5149\u4e4b\u795d\u798f",value:"light"},{name:"\u95c7\u4e4b\u795d\u798f",value:"dark"},{name:"\u5929\u4e4b\u795d\u798f",value:"astra"},{name:"\u7406\u4e4b\u795d\u798f",value:"anima"}],i=f.reduce(u,{}),o=[{value:"fire-atk",name:"\u706b\u4e4b\u50b3\u627f - \u653b\u64ca"},{value:"fire-spd",name:"\u706b\u4e4b\u50b3\u627f - \u901f\u5ea6"},{value:"fire-def",name:"\u706b\u4e4b\u50b3\u627f - \u9632\u5b88"},{value:"fire-res",name:"\u706b\u4e4b\u50b3\u627f - \u9b54\u9632"},{value:"fire-hp",name:"\u706b\u4e4b\u50b3\u627f - \u6b7b\u9b25"},{value:"water-atk",name:"\u6c34\u4e4b\u50b3\u627f - \u653b\u64ca"},{value:"water-spd",name:"\u6c34\u4e4b\u50b3\u627f - \u901f\u5ea6"},{value:"water-def",name:"\u6c34\u4e4b\u50b3\u627f - \u9632\u5b88"},{value:"water-res",name:"\u6c34\u4e4b\u50b3\u627f - \u9b54\u9632"},{value:"wind-atk",name:"\u98a8\u4e4b\u50b3\u627f - \u653b\u64ca"},{value:"wind-spd",name:"\u98a8\u4e4b\u50b3\u627f - \u901f\u5ea6"},{value:"wind-def",name:"\u98a8\u4e4b\u50b3\u627f - \u9632\u5b88"},{value:"wind-res",name:"\u98a8\u4e4b\u50b3\u627f - \u9b54\u9632"},{value:"earth-atk",name:"\u5730\u4e4b\u50b3\u627f - \u653b\u64ca"},{value:"earth-spd",name:"\u5730\u4e4b\u50b3\u627f - \u901f\u5ea6"},{value:"earth-def",name:"\u5730\u4e4b\u50b3\u627f - \u9632\u5b88"},{value:"earth-res",name:"\u5730\u4e4b\u50b3\u627f - \u9b54\u9632"},{value:"earth-hp",name:"\u5730\u4e4b\u50b3\u627f - \u6b7b\u9b25"},{value:"light-atk",name:"\u5149\u4e4b\u795e\u968e - \u653b\u64ca"},{value:"light-spd",name:"\u5149\u4e4b\u795e\u968e - \u901f\u5ea6"},{value:"light-def",name:"\u5149\u4e4b\u795e\u968e - \u9632\u5b88"},{value:"light-res",name:"\u5149\u4e4b\u795e\u968e - \u9b54\u9632"},{value:"dark-atk",name:"\u95c7\u4e4b\u795e\u968e - \u653b\u64ca"},{value:"dark-spd",name:"\u95c7\u4e4b\u795e\u968e - \u901f\u5ea6"},{value:"dark-def",name:"\u95c7\u4e4b\u795e\u968e - \u9632\u5b88"},{value:"dark-res",name:"\u95c7\u4e4b\u795e\u968e - \u9b54\u9632"},{value:"astra-atk",name:"\u5929\u4e4b\u795e\u968e - \u653b\u64ca"},{value:"astra-spd",name:"\u5929\u4e4b\u795e\u968e - \u901f\u5ea6"},{value:"astra-def",name:"\u5929\u4e4b\u795e\u968e - \u9632\u5b88"},{value:"astra-res",name:"\u5929\u4e4b\u795e\u968e - \u9b54\u9632"},{value:"anima-atk",name:"\u7406\u4e4b\u795e\u968e - \u653b\u64ca"},{value:"anima-spd",name:"\u7406\u4e4b\u795e\u968e - \u901f\u5ea6"},{value:"anima-def",name:"\u7406\u4e4b\u795e\u968e - \u9632\u5b88"},{value:"anima-res",name:"\u7406\u4e4b\u795e\u968e - \u9b54\u9632"}],l=o.reduce(u,{}),s=Object(n.fromJS)({name:"\u7121\u795d\u798f",value:"-"}),v=Object(n.fromJS)(f),m=Object(n.fromJS)(i),d=(Object(n.fromJS)(o),Object(n.fromJS)(l)),b=function(e){return"-"===e?"":m.has(e)||d.has(e)?"assets/blessing-".concat(e,".png"):""},p=function(e){return{src:b(e),name:function(e){var a=m.get(e)||d.get(e);return a?a.get("name"):s.get("name")}(e)}}},"364993f960e577004d3e":function(e,a,t){"use strict";var n=t("6e3b109f4f1d2f9b5f1b");a.a=Object.keys(n.allDisabled.moveType)},"6054d02a778fdf853e8a":function(e,a,t){"use strict";var n=t("54f683fcda7806277002"),r=t("12989b5129d66dd4114e"),c=t("6ceadaea642dceea7a37"),u=t("e745436eeff6db2aae0f");a.a=u.a.map((function(e){var a=e.get("id"),t=e.get("title"),u=e.get("name"),f=e.get("weaponType"),i=e.get("moveType"),o=e.get("id",""),l=o&&"faces/".concat(o,".png"),s=o?"faces/".concat(Object(c.a)(o,!0),".png"):"",v=Object(r.c)(e.get("blessing")),m="".concat(a.toLowerCase(),"|").concat(t,"|").concat(u);return Object(n.fromJS)({id:a,title:t,name:u,faceSrc:l,faceSrcR:s,weaponType:f,moveType:i,blessingSrc:v,query:m})}))},"6ceadaea642dceea7a37":function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t("54f683fcda7806277002"),r=t("95e3842e5a4a2d1f0e07"),c=Object(n.fromJS)(new Set(r)),u=function(e,a){return a&&c.has(e)?"".concat(e,"(R)"):e}},"8c4452cdaa895301c113":function(e,a,t){function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var c=t("6e3b109f4f1d2f9b5f1b");e.exports=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({queryRule:function(e){if(void 0!==e)return c[e]}},c)},"8d2820cef4f1c7ddf8ef":function(e,a,t){"use strict";var n=t("fd25004594b2a5734809");function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,r=!1,c=void 0;try{for(var u,f=e[Symbol.iterator]();!(n=(u=f.next()).done)&&(t.push(u.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==f.return||f.return()}finally{if(r)throw c}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=function(e){return n[e]||{}},u=function(e){return c(e).weapon||"-"},f=function(e){return c(e).assist||"-"},i=function(e){return c(e).special||"-"},o=function(e){return c(e).skillA||"-"},l=function(e){return c(e).skillB||"-"},s=function(e){return c(e).skillC||"-"},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,t=Object.entries(e).reverse(),n=t.find((function(e){return r(e,2)[1]<=a}));return n?n[0]:""};a.a={getDefaultSkills:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,t=v(u(e),a),n=v(f(e),a),r=v(i(e),a),c=v(o(e),a),m=v(l(e),a),d=v(s(e),a);return{weapon:t,assist:n,special:r,skillA:c,skillB:m,skillC:d}}}},"94e0bbfd03b3bc0cc189":function(e,a,t){"use strict";t.d(a,"c",(function(){return o})),t.d(a,"b",(function(){return l})),t.d(a,"a",(function(){return v}));var n=t("54f683fcda7806277002");function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var u={name:"\u6a19\u6e96",value:"-"},f=[{name:"+HP -\u653b\u64ca",value:"+hp-atk"},{name:"+HP -\u901f\u5ea6",value:"+hp-spd"},{name:"+HP -\u9632\u5b88",value:"+hp-def"},{name:"+HP -\u9b54\u9632",value:"+hp-res"},{name:"+\u653b\u64ca -HP",value:"+atk-hp"},{name:"+\u653b\u64ca -\u901f\u5ea6",value:"+atk-spd"},{name:"+\u653b\u64ca -\u9632\u5b88",value:"+atk-def"},{name:"+\u653b\u64ca -\u9b54\u9632",value:"+atk-res"},{name:"+\u901f\u5ea6 -HP",value:"+spd-hp"},{name:"+\u901f\u5ea6 -\u653b\u64ca",value:"+spd-atk"},{name:"+\u901f\u5ea6 -\u9632\u5b88",value:"+spd-def"},{name:"+\u901f\u5ea6 -\u9b54\u9632",value:"+spd-res"},{name:"+\u9632\u5b88 -HP",value:"+def-hp"},{name:"+\u9632\u5b88 -\u653b\u64ca",value:"+def-atk"},{name:"+\u9632\u5b88 -\u901f\u5ea6",value:"+def-spd"},{name:"+\u9632\u5b88 -\u9b54\u9632",value:"+def-res"},{name:"+\u9b54\u9632 -HP",value:"+res-hp"},{name:"+\u9b54\u9632 -\u653b\u64ca",value:"+res-atk"},{name:"+\u9b54\u9632 -\u901f\u5ea6",value:"+res-spd"},{name:"+\u9b54\u9632 -\u9632\u5b88",value:"+res-def"}],i=f.concat(u).reduce((function(e,a){return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},e,c({},a.value,a))}),{}),o=Object(n.fromJS)(u),l=Object(n.fromJS)(f),s=Object(n.fromJS)(i),v=function(e){return s.getIn([e,"name"],"-")}},a26587e371e5e49676a3:function(e,a,t){"use strict";t.d(a,"b",(function(){return c}));var n=t("54f683fcda7806277002"),r=Object(n.fromJS)({4:{name:"4\u2605",value:"4"},5:{name:"5\u2606",value:"5"}}),c=function(e){return r.getIn([e,"name"],"-")};a.a=function(e){return e.get("rarity").slice(0,2).toJS()}},a6e2d435064622867754:function(e,a,t){"use strict";var n=t("54f683fcda7806277002"),r=t("3edbb1346c28107ce687"),c=t("ef55fb2ebc45364e784e"),u=Object(n.fromJS)({}),f={atk:{name:"\u653b\u64ca",value:"atk"},spd:{name:"\u901f\u5ea6",value:"spd"},def:{name:"\u9632\u5b88",value:"def"},res:{name:"\u9b54\u9632",value:"res"}};a.a=function(e,a){var t=c.a.getSkill(e,a);if(!t||!t.get("refine"))return u;var i=Object(n.fromJS)({},r.a),o=t.get("mt",0);return t.get("refine").forEach((function(e,t){var r=e.get("exclusive");if(!r||r.includes(a.get("id"))){var c="skills/weapon/".concat(e.get("icon")||t,".png"),u=f[t]?f[t].name:e.get("name"),l=t,s=o+e.get("mt",0),v=e.get("cd"),m=e.get("hp"),d=e.get("atk"),b=e.get("spd"),p=e.get("def"),g=e.get("res");i=i.set(t,Object(n.fromJS)({icon:c,name:u,value:l,mt:s,cd:v,hp:m,atk:d,spd:b,def:p,res:g}))}})),i}},a893e7cfc42e2eda2550:function(e,a,t){"use strict";var n=t("54f683fcda7806277002");a.a=Object(n.fromJS)({0:{name:"-",value:0},1:{name:"+1",value:1},2:{name:"+2",value:2},3:{name:"+3",value:3},4:{name:"+4",value:4},5:{name:"+5",value:5},6:{name:"+6",value:6},7:{name:"+7",value:7},8:{name:"+8",value:8},9:{name:"+9",value:9},10:{name:"+10",value:10}})},c1d0df1466113eca96ac:function(e,a,t){"use strict";var n=t("54f683fcda7806277002"),r=t("ad4eeb1c4e6cb9bb294c"),c=t("5be368021296fc104fe9"),u=Object(r.a)(c);u.dancers=(new n.List).concat(u.getSkill("Dance").get("exclusive"),u.getSkill("Sing").get("exclusive"),u.getSkill("Play").get("exclusive")),a.a=u},e745436eeff6db2aae0f:function(e,a,t){"use strict";var n=t("54f683fcda7806277002"),r=t("3edbb1346c28107ce687"),c=t("1bffa4d759817e4b6bea");a.a=Object(n.fromJS)(c,r.a)}}]);