(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1177:function(t,i,s){"use strict";(function(t,s){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{i:0,num:new Array,rlist:new Array,vrlist:new Array}},onLoad:function(){this.$set(this.rlist,this.GV.rlist),this.$set(this.vrlist,this.GV.vrlist)},onHide:function(){try{t.setStorageSync("rlist",this.GV.rlist)}catch(i){}try{t.setStorageSync("vrlist",this.GV.vrlist)}catch(i){}},onReady:function(){this.$set(this.rlist,this.GV.rlist),this.$set(this.vrlist,this.GV.vrlist)},onShow:function(){try{t.setStorageSync("rlist",this.GV.rlist)}catch(i){}try{t.setStorageSync("vrlist",this.GV.vrlist)}catch(i){}this.rlist=this.GV.rlist,this.vrlist=this.GV.vrlist,this.$set(this.rlist,this.GV.rlist),this.$set(this.vrlist,this.GV.vrlist),console.log(s("rlistshow",this.GV.rlist[this.i]," at pages\\index\\index.vue:79"))},methods:{navato:function(i){console.log(s("index"+i," at pages\\index\\index.vue:83"));var e=i;t.navigateTo({url:"../record/record?id="+e}),console.log(s("num"+this.num," at pages\\index\\index.vue:88")),this.vrlist=this.GV.vrlist,this.rlist=this.GV.rlist},navato_add:function(){this.i=this.GV.rlist.length;var i=this.i;this.GV.rlist[i]=new this.ldrs,this.GV.vrlist[i]=new this.vvs,this.vrlist=this.GV.vrlist,this.rlist=this.GV.rlist,console.log(s("i",i,this.rlist[i]," at pages\\index\\index.vue:99")),t.navigateTo({url:"../level/level?id="+i}),this.num.push(i),console.log(s("rlist",this.rlist[i],this.GV.rlist.length[i]," at pages\\index\\index.vue:104"))},clear:function(){t.removeStorage({key:"rlist",success:function(t){console.log(s("removesuccess"," at pages\\index\\index.vue:111"))}}),t.removeStorage({key:"vrlist",success:function(t){console.log(s("success"," at pages\\index\\index.vue:117"))}}),this.GV.rlist=new Array,this.GV.vrlist=new Array,this.rlist=this.GV.rlist,this.vrlist=this.GV.vrlist,this.$set(this.rlist,this.GV.rlist),this.$set(this.vrlist,this.GV.vrlist)}}};i.default=e}).call(this,s("6e42")["default"],s("0de9")["default"])},"1a82":function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement;t._self._c},r=[];s.d(i,"a",function(){return e}),s.d(i,"b",function(){return r})},3936:function(t,i,s){"use strict";var e=s("ebc6"),r=s.n(e);r.a},bf53:function(t,i,s){"use strict";s.r(i);var e=s("1a82"),r=s("ee6e");for(var n in r)"default"!==n&&function(t){s.d(i,t,function(){return r[t]})}(n);s("3936");var l=s("2877"),o=Object(l["a"])(r["default"],e["a"],e["b"],!1,null,null,null);i["default"]=o.exports},ebc6:function(t,i,s){},ee6e:function(t,i,s){"use strict";s.r(i);var e=s("1177"),r=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(i,t,function(){return e[t]})}(n);i["default"]=r.a}},[["1834","common/runtime","common/vendor"]]]);