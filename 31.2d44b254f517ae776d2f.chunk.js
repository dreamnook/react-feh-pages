(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"12989b5129d66dd4114e":function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return p}));var a=n("54f683fcda7806277002");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,c({},t.value,t))},f=[{name:"\u706b\u4e4b\u795d\u798f",value:"fire"},{name:"\u6c34\u4e4b\u795d\u798f",value:"water"},{name:"\u98a8\u4e4b\u795d\u798f",value:"wind"},{name:"\u5730\u4e4b\u795d\u798f",value:"earth"},{name:"\u5149\u4e4b\u795d\u798f",value:"light"},{name:"\u95c7\u4e4b\u795d\u798f",value:"dark"},{name:"\u5929\u4e4b\u795d\u798f",value:"astra"},{name:"\u7406\u4e4b\u795d\u798f",value:"anima"}],i=f.reduce(u,{}),o=[{value:"fire-atk",name:"\u706b\u4e4b\u50b3\u627f - \u653b\u64ca"},{value:"fire-spd",name:"\u706b\u4e4b\u50b3\u627f - \u901f\u5ea6"},{value:"fire-def",name:"\u706b\u4e4b\u50b3\u627f - \u9632\u5b88"},{value:"fire-res",name:"\u706b\u4e4b\u50b3\u627f - \u9b54\u9632"},{value:"fire-hp",name:"\u706b\u4e4b\u50b3\u627f - \u6b7b\u9b25"},{value:"water-atk",name:"\u6c34\u4e4b\u50b3\u627f - \u653b\u64ca"},{value:"water-spd",name:"\u6c34\u4e4b\u50b3\u627f - \u901f\u5ea6"},{value:"water-def",name:"\u6c34\u4e4b\u50b3\u627f - \u9632\u5b88"},{value:"water-res",name:"\u6c34\u4e4b\u50b3\u627f - \u9b54\u9632"},{value:"wind-atk",name:"\u98a8\u4e4b\u50b3\u627f - \u653b\u64ca"},{value:"wind-spd",name:"\u98a8\u4e4b\u50b3\u627f - \u901f\u5ea6"},{value:"wind-def",name:"\u98a8\u4e4b\u50b3\u627f - \u9632\u5b88"},{value:"wind-res",name:"\u98a8\u4e4b\u50b3\u627f - \u9b54\u9632"},{value:"earth-atk",name:"\u5730\u4e4b\u50b3\u627f - \u653b\u64ca"},{value:"earth-spd",name:"\u5730\u4e4b\u50b3\u627f - \u901f\u5ea6"},{value:"earth-def",name:"\u5730\u4e4b\u50b3\u627f - \u9632\u5b88"},{value:"earth-res",name:"\u5730\u4e4b\u50b3\u627f - \u9b54\u9632"},{value:"earth-hp",name:"\u5730\u4e4b\u50b3\u627f - \u6b7b\u9b25"},{value:"light-atk",name:"\u5149\u4e4b\u795e\u968e - \u653b\u64ca"},{value:"light-spd",name:"\u5149\u4e4b\u795e\u968e - \u901f\u5ea6"},{value:"light-def",name:"\u5149\u4e4b\u795e\u968e - \u9632\u5b88"},{value:"light-res",name:"\u5149\u4e4b\u795e\u968e - \u9b54\u9632"},{value:"dark-atk",name:"\u95c7\u4e4b\u795e\u968e - \u653b\u64ca"},{value:"dark-spd",name:"\u95c7\u4e4b\u795e\u968e - \u901f\u5ea6"},{value:"dark-def",name:"\u95c7\u4e4b\u795e\u968e - \u9632\u5b88"},{value:"dark-res",name:"\u95c7\u4e4b\u795e\u968e - \u9b54\u9632"},{value:"astra-atk",name:"\u5929\u4e4b\u795e\u968e - \u653b\u64ca"},{value:"astra-spd",name:"\u5929\u4e4b\u795e\u968e - \u901f\u5ea6"},{value:"astra-def",name:"\u5929\u4e4b\u795e\u968e - \u9632\u5b88"},{value:"astra-res",name:"\u5929\u4e4b\u795e\u968e - \u9b54\u9632"},{value:"anima-atk",name:"\u7406\u4e4b\u795e\u968e - \u653b\u64ca"},{value:"anima-spd",name:"\u7406\u4e4b\u795e\u968e - \u901f\u5ea6"},{value:"anima-def",name:"\u7406\u4e4b\u795e\u968e - \u9632\u5b88"},{value:"anima-res",name:"\u7406\u4e4b\u795e\u968e - \u9b54\u9632"}],l=o.reduce(u,{}),s=Object(a.fromJS)({name:"\u7121\u795d\u798f",value:"-"}),v=Object(a.fromJS)(f),b=Object(a.fromJS)(i),d=(Object(a.fromJS)(o),Object(a.fromJS)(l)),m=function(e){return"-"===e?"":b.has(e)||d.has(e)?"assets/blessing-".concat(e,".png"):""},p=function(e){return{src:m(e),name:function(e){var t=b.get(e)||d.get(e);return t?t.get("name"):s.get("name")}(e)}}},"364993f960e577004d3e":function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n("54f683fcda7806277002"),r=n("6e3b109f4f1d2f9b5f1b");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=Object.keys(r.allDisabled.moveType);function o(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return Object(a.fromJS)(i.reduce((function(t,n){return u({},t,f({},n,e))}),{}))}t.a=i},"6054d02a778fdf853e8a":function(e,t,n){"use strict";var a=n("54f683fcda7806277002"),r=n("12989b5129d66dd4114e"),c=n("6ceadaea642dceea7a37"),u=n("e745436eeff6db2aae0f");t.a=u.a.map((function(e){var t=e.get("id"),n=e.get("title"),u=e.get("name"),f=e.get("weaponType"),i=e.get("moveType"),o=e.get("id",""),l=o&&"faces/".concat(o,".png"),s=o?"faces/".concat(Object(c.a)(o,!0),".png"):"",v=Object(r.c)(e.get("blessing")),b=e.get("pool"),d="".concat(t.toLowerCase(),"|").concat(n,"|").concat(u),m=e.get("statMax"),p=e.get("bst");return Object(a.fromJS)({id:t,title:n,name:u,faceSrc:l,faceSrcR:s,weaponType:f,moveType:i,blessingSrc:v,pool:b,query:d,bst:p>m?p:m})}))},"6ceadaea642dceea7a37":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("54f683fcda7806277002"),r=n("95e3842e5a4a2d1f0e07"),c=Object(a.fromJS)(new Set(r)),u=function(e,t){return t&&c.has(e)?"".concat(e,"(R)"):e}},"8c4452cdaa895301c113":function(e,t,n){function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=n("6e3b109f4f1d2f9b5f1b");e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({queryRule:function(e){if(void 0!==e)return c[e]}},c)},"8d2820cef4f1c7ddf8ef":function(e,t,n){"use strict";var a=n("fd25004594b2a5734809");function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,c=void 0;try{for(var u,f=e[Symbol.iterator]();!(a=(u=f.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==f.return||f.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=function(e){return a[e]||{}},u=function(e){return c(e).weapon||"-"},f=function(e){return c(e).assist||"-"},i=function(e){return c(e).special||"-"},o=function(e){return c(e).skillA||"-"},l=function(e){return c(e).skillB||"-"},s=function(e){return c(e).skillC||"-"},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=Object.entries(e).reverse(),a=n.find((function(e){return r(e,2)[1]<=t}));return a?a[0]:""};t.a={getDefaultSkills:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=v(u(e),t),a=v(f(e),t),r=v(i(e),t),c=v(o(e),t),b=v(l(e),t),d=v(s(e),t);return{weapon:n,assist:a,special:r,skillA:c,skillB:b,skillC:d}}}},"94e0bbfd03b3bc0cc189":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return v}));var a=n("54f683fcda7806277002");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={name:"\u6a19\u6e96",value:"-"},f=[{name:"+HP -\u653b\u64ca",value:"+hp-atk"},{name:"+HP -\u901f\u5ea6",value:"+hp-spd"},{name:"+HP -\u9632\u5b88",value:"+hp-def"},{name:"+HP -\u9b54\u9632",value:"+hp-res"},{name:"+\u653b\u64ca -HP",value:"+atk-hp"},{name:"+\u653b\u64ca -\u901f\u5ea6",value:"+atk-spd"},{name:"+\u653b\u64ca -\u9632\u5b88",value:"+atk-def"},{name:"+\u653b\u64ca -\u9b54\u9632",value:"+atk-res"},{name:"+\u901f\u5ea6 -HP",value:"+spd-hp"},{name:"+\u901f\u5ea6 -\u653b\u64ca",value:"+spd-atk"},{name:"+\u901f\u5ea6 -\u9632\u5b88",value:"+spd-def"},{name:"+\u901f\u5ea6 -\u9b54\u9632",value:"+spd-res"},{name:"+\u9632\u5b88 -HP",value:"+def-hp"},{name:"+\u9632\u5b88 -\u653b\u64ca",value:"+def-atk"},{name:"+\u9632\u5b88 -\u901f\u5ea6",value:"+def-spd"},{name:"+\u9632\u5b88 -\u9b54\u9632",value:"+def-res"},{name:"+\u9b54\u9632 -HP",value:"+res-hp"},{name:"+\u9b54\u9632 -\u653b\u64ca",value:"+res-atk"},{name:"+\u9b54\u9632 -\u901f\u5ea6",value:"+res-spd"},{name:"+\u9b54\u9632 -\u9632\u5b88",value:"+res-def"}],i=f.concat(u).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,c({},t.value,t))}),{}),o=Object(a.fromJS)(u),l=Object(a.fromJS)(f),s=Object(a.fromJS)(i),v=function(e){return s.getIn([e,"name"],"-")}},a26587e371e5e49676a3:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n("54f683fcda7806277002"),r=Object(a.fromJS)({4:{name:"4\u2605",value:"4"},5:{name:"5\u2606",value:"5"}}),c=function(e){return r.getIn([e,"name"],"-")};t.a=function(e){return e.get("rarity").slice(0,2).toJS()}},a6e2d435064622867754:function(e,t,n){"use strict";var a=n("54f683fcda7806277002"),r=n("3edbb1346c28107ce687"),c=n("ef55fb2ebc45364e784e"),u=Object(a.fromJS)({}),f={atk:{name:"\u653b\u64ca",value:"atk"},spd:{name:"\u901f\u5ea6",value:"spd"},def:{name:"\u9632\u5b88",value:"def"},res:{name:"\u9b54\u9632",value:"res"}};t.a=function(e,t){var n=c.a.getSkill(e,t);if(!n||!n.get("refine"))return u;var i=Object(a.fromJS)({},r.a),o=n.get("mt",0);return n.get("refine").forEach((function(e,n){var r=e.get("exclusive");if(!r||r.includes(t.get("id"))){var c="skills/weapon/".concat(e.get("icon")||n,".png"),u=f[n]?f[n].name:e.get("name"),l=n,s=o+e.get("mt",0),v=e.get("cd"),b=e.get("hp"),d=e.get("atk"),m=e.get("spd"),p=e.get("def"),O=e.get("res");i=i.set(n,Object(a.fromJS)({icon:c,name:u,value:l,mt:s,cd:v,hp:b,atk:d,spd:m,def:p,res:O}))}})),i}},a893e7cfc42e2eda2550:function(e,t,n){"use strict";var a=n("54f683fcda7806277002");t.a=Object(a.fromJS)({0:{name:"-",value:0},1:{name:"+1",value:1},2:{name:"+2",value:2},3:{name:"+3",value:3},4:{name:"+4",value:4},5:{name:"+5",value:5},6:{name:"+6",value:6},7:{name:"+7",value:7},8:{name:"+8",value:8},9:{name:"+9",value:9},10:{name:"+10",value:10}})},c1d0df1466113eca96ac:function(e,t,n){"use strict";var a=n("54f683fcda7806277002"),r=n("ad4eeb1c4e6cb9bb294c"),c=n("5be368021296fc104fe9"),u=Object(r.a)(c);u.dancers=(new a.List).concat(u.getSkill("Dance").get("exclusive"),u.getSkill("Sing").get("exclusive"),u.getSkill("Play").get("exclusive")),t.a=u},e745436eeff6db2aae0f:function(e,t,n){"use strict";var a=n("54f683fcda7806277002"),r=n("3edbb1346c28107ce687"),c=n("1bffa4d759817e4b6bea");t.a=Object(a.fromJS)(c,r.a)}}]);