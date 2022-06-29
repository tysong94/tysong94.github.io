(function(){"use strict";var t={1933:function(t,a,r){var n=r(9242),e=r(3396);function c(t,a,r,n,c,o){const u=(0,e.up)("BarChart1"),s=(0,e.up)("BarChart2"),i=(0,e.up)("LineChart");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",null,[(0,e.Wm)(u,{chartData:c.barChart1Data},null,8,["chartData"])]),(0,e._)("div",null,[(0,e.Wm)(s,{chartData:c.barChart2Data},null,8,["chartData"])]),(0,e._)("div",null,[(0,e.Wm)(i,{chartData:c.lineChartData},null,8,["chartData"])])],64)}var o=r(6265),u=r.n(o);function s(){return u().create({baseURL:"https://dummyjson.com/products"})}const i=s();function h(){return i.get()}function l(t,a,r,n,c,o){const u=(0,e.up)("Bar");return(0,e.wg)(),(0,e.j4)(u,{"chart-data":r.chartData},null,8,["chart-data"])}var f=r(6294),d=r(5140);d.kL.register(d.Dx,d.u,d.De,d.ZL,d.uw,d.f$);var p={name:"BarChart1",components:{Bar:f.$Q},props:{chartData:{type:Object,required:!0}},data(){return{}}},v=r(89);const D=(0,v.Z)(p,[["render",l]]);var b=D;function C(t,a,r,n,c,o){const u=(0,e.up)("Bar");return(0,e.wg)(),(0,e.j4)(u,{"chart-data":r.chartData},null,8,["chart-data"])}d.kL.register(d.Dx,d.u,d.De,d.ZL,d.uw,d.f$);var m={name:"BarChart2",components:{Bar:f.$Q},props:{chartData:{type:Object,required:!0}},data(){return{}}};const g=(0,v.Z)(m,[["render",C]]);var y=g;function w(t,a,r,n,c,o){const u=(0,e.up)("Line");return(0,e.wg)(),(0,e.j4)(u,{"chart-data":r.chartData},null,8,["chart-data"])}d.kL.register(d.Dx,d.u,d.De,d.jn,d.f$,d.od,d.uw);var j={name:"LineChart",components:{Line:f.x1},props:{chartData:{type:Object,required:!0}},data(){return{}}};const k=(0,v.Z)(j,[["render",w]]);var B=k,O={name:"App",components:{BarChart1:b,BarChart2:y,LineChart:B},data(){return{barChart1Data:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],datasets:[{label:"counts",backgroundColor:"#f87979",data:[]}]},barChart2Data:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],datasets:[{label:"counts",backgroundColor:"#f87979",data:[]}]},lineChartData:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],datasets:[{label:"counts",backgroundColor:"#f87979",data:[]}]}}},methods:{async fetchBarChartData1(){const{data:t}=await h();let a=t.products.map((({stock:t})=>t));this.barChart1Data.datasets[0].data=a,console.log("fetching bar data",this.barChart1Data)},async fetchBarChartData2(){const{data:t}=await h();let a=t.products.map((({stock:t})=>t));a.sort((()=>Math.random()-.5)),this.barChart2Data.datasets[0].data=a,console.log("fetching bar data",this.barChart2Data)},async fetchLineChartData(){const{data:t}=await h();let a=t.products.map((({stock:t})=>t));a.sort((()=>Math.random()-.5)),this.lineChartData.datasets[0].data=a,console.log("fetching line data",this.lineChartData)},fetchIntervally5sec1(){setInterval(this.fetchBarChartData1,5e3)},fetchIntervally5sec2(){setInterval(this.fetchBarChartData2,5e3)},fetchIntervally10sec(){setInterval(this.fetchLineChartData,1e4)}},mounted(){this.fetchIntervally5sec1(),this.fetchIntervally5sec2(),this.fetchIntervally10sec()}};const L=(0,v.Z)(O,[["render",c]]);var I=L;(0,n.ri)(I).mount("#app")}},a={};function r(n){var e=a[n];if(void 0!==e)return e.exports;var c=a[n]={exports:{}};return t[n](c,c.exports,r),c.exports}r.m=t,function(){var t=[];r.O=function(a,n,e,c){if(!n){var o=1/0;for(h=0;h<t.length;h++){n=t[h][0],e=t[h][1],c=t[h][2];for(var u=!0,s=0;s<n.length;s++)(!1&c||o>=c)&&Object.keys(r.O).every((function(t){return r.O[t](n[s])}))?n.splice(s--,1):(u=!1,c<o&&(o=c));if(u){t.splice(h--,1);var i=e();void 0!==i&&(a=i)}}return a}c=c||0;for(var h=t.length;h>0&&t[h-1][2]>c;h--)t[h]=t[h-1];t[h]=[n,e,c]}}(),function(){r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,{a:a}),a}}(),function(){r.d=function(t,a){for(var n in a)r.o(a,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={143:0};r.O.j=function(a){return 0===t[a]};var a=function(a,n){var e,c,o=n[0],u=n[1],s=n[2],i=0;if(o.some((function(a){return 0!==t[a]}))){for(e in u)r.o(u,e)&&(r.m[e]=u[e]);if(s)var h=s(r)}for(a&&a(n);i<o.length;i++)c=o[i],r.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return r.O(h)},n=self["webpackChunkvue_chart"]=self["webpackChunkvue_chart"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(1933)}));n=r.O(n)})();
//# sourceMappingURL=app.aba48687.js.map