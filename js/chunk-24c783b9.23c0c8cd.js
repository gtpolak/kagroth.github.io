(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24c783b9"],{"2ef3":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",[a("main-navbar")],1),a("section",{staticClass:"section"},[a("b-tabs",{attrs:{type:"is-toggle",position:"is-centered",expanded:""}},[a("b-tab-item",{attrs:{label:"FACEIT Level Boost"}},[a("faceit-level-form")],1),a("b-tab-item",{attrs:{label:"FACEIT ELO Boost"}}),a("b-tab-item",{attrs:{label:"FACEIT Test Game"}})],1)],1)])},s=[],r=a("ec7e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("b-field",{attrs:{position:"is-centered"}},[a("b-radio-button",{attrs:{"native-value":"solo",size:"is-medium"},on:{input:t.calculateCost},model:{value:t.soloDuoType,callback:function(e){t.soloDuoType=e},expression:"soloDuoType"}},[a("b-icon",{attrs:{icon:"account"}}),t._v(" Solo ")],1),a("b-radio-button",{attrs:{"native-value":"duo",size:"is-medium"},on:{input:t.calculateCost},model:{value:t.soloDuoType,callback:function(e){t.soloDuoType=e},expression:"soloDuoType"}},[a("b-icon",{attrs:{icon:"account-multiple"}}),t._v(" Duo ")],1)],1),a("b-field",{attrs:{type:t.targetLowerThanStartError?"is-danger":"is-primary"}},[a("b-select",{on:{input:t.onStartLevelChange}},t._l(t.levels,(function(e,o){return a("option",{key:"index-"+o,domProps:{value:o}},[t._v(" "+t._s(e.name)+" ")])})),0)],1),a("b-field",{attrs:{type:t.targetLowerThanStartError?"is-danger":"is-primary"}},[a("b-select",{on:{input:t.onTargetLevelChange}},t._l(t.levels,(function(e,o){return a("option",{key:"index-"+o+"-1",domProps:{value:o}},[t._v(" "+t._s(e.name)+" ")])})),0)],1),a("div",[t._v(" Total Cost: "),a("b-tag",{attrs:{size:"is-medium",type:"is-primary"}},[t._v(" "+t._s(t.totalCost)+" "),a("b-icon",{staticClass:"ml-1",attrs:{icon:"currency-eur",size:"is-small"}})],1)],1)],1)},i=[],l={data:function(){return{targetLowerThanStartError:!1,totalCost:0,soloDuoType:"",startLevel:"",targetLevel:"",levels:[{name:"Level 1",price:{solo:12,duo:18}},{name:"Level 2",price:{solo:15,duo:19}},{name:"Level 3",price:{solo:16,duo:20}},{name:"Level 4",price:{solo:20,duo:25}},{name:"Level 5",price:{solo:25,duo:30}},{name:"Level 6",price:{solo:28,duo:32}},{name:"Level 7",price:{solo:35,duo:40}},{name:"Level 8",price:{solo:45,duo:50}},{name:"Level 9",price:{solo:55,duo:65}},{name:"Level 10 (Elo 2001)",price:{solo:120,duo:140}},{name:"Level 10 (Elo 2001 - 2200)",price:{solo:140,duo:165}},{name:"Level 10 (Elo 2201 - 2400)",price:{solo:250,duo:300}},{name:"Level 10 (Elo 2401 - 2700)",price:{solo:350,duo:300}},{name:"Level 10 (Elo 2701 - 3000)",price:{solo:12,duo:18}}]}},methods:{onStartLevelChange:function(t){this.startLevel=t,this.targetLowerThanStartError=this.startLevel>=this.targetLevel},onTargetLevelChange:function(t){this.targetLevel=t,this.targetLowerThanStartError=this.startLevel>=this.targetLevel,this.calculateCost()},calculateCost:function(){if(this.startLevel>=this.targetLevel)this.totalCost=0;else{for(var t=0,e=this.startLevel;e<this.targetLevel;e++)t+=this.levels[e].price[this.soloDuoType];this.totalCost=t}}}},c=l,u=a("2877"),v=Object(u["a"])(c,n,i,!1,null,null,null),d=v.exports,m={components:{MainNavbar:r["a"],"faceit-level-form":d}},p=m,b=Object(u["a"])(p,o,s,!1,null,null,null);e["default"]=b.exports},c56d:function(t,e,a){},dae1:function(t,e,a){"use strict";a("c56d")},ec7e:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"has-background-black",attrs:{centered:""},scopedSlots:t._u([{key:"brand",fn:function(){return[a("b-navbar-item",{staticClass:"has-text-white",attrs:{tag:"router-link",to:{name:"Home"}}},[t._v(" AbesBooster ")])]},proxy:!0},{key:"start",fn:function(){return[a("b-navbar-item",{staticClass:"has-text-white",attrs:{tag:"router-link",to:{name:"FaceIt"}}},[t._v(" FACEIT BOOST ")]),a("b-navbar-item",{staticClass:"has-text-white",attrs:{href:"#"}},[t._v(" RANK BOOST ")]),a("b-navbar-dropdown",{staticClass:"has-text-white",attrs:{label:"OTHER BOOSTS"}},[a("b-navbar-item",[t._v("ESPORTAL BOOST")]),a("b-navbar-item",[t._v("ESEA BOOST")])],1)]},proxy:!0},{key:"end",fn:function(){return[a("b-navbar-dropdown",{staticClass:"has-text-white",attrs:{label:"Our Team",right:""}},[a("b-navbar-item",[a("figure",{staticClass:"image is-64x64"},[a("img",{attrs:{src:"https://www.steamsignature.com/status/default/76561198193456817.png",alt:""}})])]),a("b-navbar-item",[a("a",{attrs:{href:"http://www.steamsignature.com/%22%3E"}},[t._v("Steam signature")])]),a("b-navbar-item",[a("a",{attrs:{href:"steam://friends/add/76561198193456817%22%3E"}},[a("img",{attrs:{src:"http://www.steamsignature.com/AddFriend.png",alt:"Add Friend"}})])])],1)]},proxy:!0}])})},s=[],r=(a("dae1"),a("2877")),n={},i=Object(r["a"])(n,o,s,!1,null,"84d0cbd4",null);e["a"]=i.exports}}]);
//# sourceMappingURL=chunk-24c783b9.23c0c8cd.js.map