(function(t){function e(e){for(var s,r,c=e[0],l=e[1],o=e[2],f=0,d=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,o||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,c=1;c<i.length;c++){var l=i[c];0!==n[l]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={app:0},a=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Pomodoro-Timer/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("85ec"),n=i.n(s);n.a},"06ce":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Timer")],1)},a=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timer"},[i("div",{staticClass:"container"},[i("p",[t._v("今日你已完成 "+t._s(t.haveFinished)+" 个番茄时钟")]),i("p",[t._v(" 工作时长为 "),t._v(" "+t._s(t.getMinutes(60*t.workTime))+" "),t._v(" 分钟 ")])]),i("div",{staticClass:"container"},[i("div",{staticClass:"row justify-content-center mt-4"},[i("div",{staticClass:"clock",on:{click:function(e){t.action?t.resetTimer():t.beginWork()}}},["work"==t.status||"unhold"==t.status?i("div",{staticClass:"clock_timer"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25)]):"rest"==t.status&&this.workCount%this.groupCount!==0?i("div",{staticClass:"clock_timer"},[t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31)]):"rest"==t.status&&this.workCount%this.groupCount==0?i("div",{staticClass:"clock_timer"},[t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),t._m(45),t._m(46),t._m(47)]):t._e(),t._m(48),i("div",{staticClass:"count_down"},[i("span",[t._v(t._s(t.action?t.minutes:t.getMinutes(60*t.workTime))+" : "+t._s(t.action?t.seconds:t.getSeconds(60*t.workTime)))])]),t._m(49),t._m(50),t._m(51)])])]),t._m(52)])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b",[t._v("0")]),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b",[t._v("5")]),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b",[t._v("10")]),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b",[t._v("15")]),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b",[t._v("20")]),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b",[t._v("25")]),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b",[t._v("0")]),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b",[t._v("5")]),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b",[t._v("0")]),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b",[t._v("5")]),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b",[t._v("10")]),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b"),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dial"},[i("b",[t._v("15")]),i("br"),i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"clock_dial"},[i("div",{staticClass:"dial"},[i("span"),i("br"),i("b",[t._v("12")])]),i("div",{staticClass:"dial"},[i("span"),i("br"),i("b",[t._v("3")])]),i("div",{staticClass:"dial"},[i("span"),i("br"),i("b",[t._v("6")])]),i("div",{staticClass:"dial"},[i("span"),i("br"),i("b",[t._v("9")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"H"},[i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"M"},[i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"S"},[i("span")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"row justify-content-center mt-4"})])}],l=(i("1157"),window.localStorage),o={name:"Timer",props:{},created:function(){var t=new Date,e=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),i=l.getItem("have_finished");null==i?(i=new Object,i[e]=this.haveFinished,l.setItem("have_finished",JSON.stringify(i))):(i=JSON.parse(i),void 0==i[e]?(i[e]=this.haveFinished,l.setItem("have_finished",JSON.stringify(i))):this.haveFinished=i[e])},mounted:function(){for(var t=document.querySelectorAll(".clock_dial .dial"),e=0;e<t.length;e++){var i=90*e;t[e].style.transform="rotate("+i+"deg)",t[e].lastChild.style.transform="rotate("+-i+"deg)"}this.setTimer();var s=this;setInterval((function(){s.clockMove()}),1e3)},computed:{timerStatus:function(){return this.status}},watch:{timerStatus:function(){this.$nextTick((function(){this.setTimer()}))},haveFinished:function(){var t=new Date,e=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),i=l.getItem("have_finished");i=JSON.parse(i),i[e]=this.haveFinished,l.setItem("have_finished",JSON.stringify(i))}},data:function(){return{action:!1,status:"unhold",groupCount:"4",workCount:0,haveFinished:0,workTime:"25",shortRest:"5",longRest:"15",maxtime:0,minutes:"00",seconds:"00",timer:0}},methods:{getMinutes:function(t){return Math.floor(t/60)<10?"0"+Math.floor(t/60):Math.floor(t/60)},getSeconds:function(t){return Math.floor(t%60)<10?"0"+Math.floor(t%60):Math.floor(t%60)},resetTimer:function(){clearInterval(this.timer),this.action=!1,this.status="unhold",this.workCount=0,this.minutes=this.getMinutes(60*this.workTime),this.seconds=this.getSeconds(60*this.workTime);var t=document.querySelector(".clock_timer");t.style.transform="rotate(0deg)"},countDown:function(){if(this.maxtime>0)this.minutes=this.getMinutes(this.maxtime),this.seconds=this.getSeconds(this.maxtime),--this.maxtime;else if(this.action&&"work"==this.status){if(this.haveFinished++,this.workCount++,window.Notification&&"granted"===Notification.permission)if(this.workCount%this.groupCount==0)new Notification("时间到",{body:"这次可以休息久一些，活动下身子吧。"});else new Notification("时间到",{body:"稍微休息下，下一轮番茄时钟很快就到。"});else this.workCount%this.groupCount==0?alert("这次可以休息久一些，活动下身子吧。"):alert("稍微休息下，下一轮番茄时钟很快就到。");this.beginRest()}else{if(window.Notification&&"granted"===Notification.permission)new Notification("休息结束",{body:"准备开始新一轮番茄时钟吧。"});else alert("休息结束，准备开始新一轮番茄时钟吧。");this.beginWork()}},beginWork:function(){this.action=!0,this.status="work",this.maxtime=60*this.workTime-1,this.timerCalibration();var t=this;clearInterval(this.timer),this.timer=setInterval((function(){t.countDown()}),1e3)},beginRest:function(){this.status="rest";var t=this.workCount%this.groupCount==0?this.longRest:this.shortRest;this.maxtime=60*t-1,this.timerCalibration();var e=this;clearInterval(this.timer),this.timer=setInterval((function(){e.countDown()}),1e3)},clockMove:function(){var t=document.querySelector(".H"),e=document.querySelector(".M"),i=document.querySelector(".S"),s=new Date,n=s.getHours(),a=s.getMinutes(),r=s.getSeconds();i.style.transform="rotate("+6*r+"deg)",t.style.transform="rotate("+(30*n+.5*a)+"deg)",e.style.transform="rotate("+6*a+"deg)"},setTimer:function(){for(var t=document.querySelectorAll(".clock_timer .dial"),e=0;e<t.length;e++){var i=6*e;t[e].style.transform="rotate("+i+"deg)",t[e].firstChild.style.transform="rotate("+-i+"deg)"}},timerCalibration:function(){var t=new Date,e=t.getMinutes(),i=document.querySelector(".clock_timer");i.style.transform="rotate("+6*e+"deg)"}}},u=o,f=(i("8fed"),i("2877")),d=Object(f["a"])(u,r,c,!1,null,"429e0ec9",null),_=d.exports,m={name:"app",components:{Timer:_},mounted:function(){window.Notification&&"granted"!==Notification.permission&&Notification.requestPermission((function(t){Notification.permission!==t&&(Notification.permission=t)}))}},v=m,h=(i("034f"),Object(f["a"])(v,n,a,!1,null,null,null)),b=h.exports;i("ab8b"),i("0deb"),i("3e48"),i("1f54"),i("9a1d");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,i){},"8fed":function(t,e,i){"use strict";var s=i("06ce"),n=i.n(s);n.a},"9a1d":function(t,e,i){}});
//# sourceMappingURL=app.25748ee8.js.map