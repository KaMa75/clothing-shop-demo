(this["webpackJsonpclothing-shop-demo"]=this["webpackJsonpclothing-shop-demo"]||[]).push([[0],{60:function(c,e,t){},66:function(c,e,t){},67:function(c,e,t){},68:function(c,e,t){},69:function(c,e,t){},70:function(c,e,t){},71:function(c,e,t){},72:function(c,e,t){},73:function(c,e,t){},74:function(c,e,t){},75:function(c,e,t){},76:function(c,e,t){},77:function(c,e,t){},78:function(c,e,t){},79:function(c,e,t){"use strict";t.r(e);var n=t(9),a=t.n(n),i=t(49),r=t.n(i),s=t(29),l=t(0),o=t.n(l),p=t(22),h=t(1),b=t(2),d=t(3),m=t(10),u=t(11),j=t(35),g=(t(80),t(58),{apiKey:"AIzaSyDiH3ot-csFjv1FD8XKdq6_lacLYyI89vo",authDomain:"csd-db.firebaseapp.com",projectId:"csd-db",storageBucket:"csd-db.appspot.com",messagingSenderId:"268501751922",appId:"1:268501751922:web:866eb940dcf62cd73ecaeb",measurementId:"G-ZQ906EH93V"}),v=function(){var c=Object(h.a)(o.a.mark((function c(e,t){var n,a,i,r;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(e){c.next=2;break}return c.abrupt("return");case 2:return n=O.doc("users/".concat(e.uid)),c.next=5,n.get();case 5:if(c.sent.exists){c.next=17;break}return a=e.displayName,i=e.email,r=new Date,c.prev=9,c.next=12,n.set(Object(p.a)({displayName:a,email:i,createdAt:r},t));case 12:c.next=17;break;case 14:c.prev=14,c.t0=c.catch(9),console.log(c.t0);case 17:return c.abrupt("return",n);case 18:case"end":return c.stop()}}),c,null,[[9,14]])})));return function(e,t){return c.apply(this,arguments)}}();j.a.initializeApp(g);var f=j.a.auth(),O=j.a.firestore(),x=new j.a.auth.GoogleAuthProvider;x.setCustomParameters({prompt:"select_account"});var w,k,y,N,U,C,S,M,z,B,E=function(){return f.signInWithPopup(x)},P=(j.a,["title","titleId"]);function I(){return(I=Object.assign||function(c){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(c[n]=t[n])}return c}).apply(this,arguments)}function A(c,e){if(null==c)return{};var t,n,a=function(c,e){if(null==c)return{};var t,n,a={},i=Object.keys(c);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(a[t]=c[t]);return a}(c,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(c,t)&&(a[t]=c[t])}return a}function L(c,e){var t=c.title,a=c.titleId,i=A(c,P);return n.createElement("svg",I({id:"\\xD1\\xEB\\xEE\\xE9_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 708.7 708.7",style:{enableBackground:"new 0 0 708.7 708.7"},xmlSpace:"preserve",ref:e,"aria-labelledby":a},i),t?n.createElement("title",{id:a},t):null,w||(w=n.createElement("g",null,n.createElement("path",{d:"M21.2,310.4v-33.8h-6v-13.5h6v-1.6c0-5.2,2-12.1,6.4-16.1c4.3-3.9,10.1-5,14.3-5c3.2,0,5.6,0.3,7.9,0.8V255 c-1.3-0.3-2.8-0.5-4.6-0.5c-3.8,0-6.1,2.6-6.1,6.1v2.5H48v13.5h-8.7v33.8H21.2z"}),n.createElement("path",{d:"M100.2,298.6c0,5,0.3,9.6,0.8,11.7H84.6l-1-4h-0.4c-3.5,3.8-8.5,5.2-13.8,5.2c-10.4,0-16.5-7.2-16.5-14.9 c0-12.7,11.3-18.6,29.2-18.6v-0.3c0-1.7-1.2-3.8-8.3-3.8c-5.3,0-11.2,2-14.3,3.7l-3.2-11.3c3.1-1.6,10.1-4.4,20.7-4.4 c16.2,0,23.2,8.2,23.2,20.9V298.6z M82.7,289c-8,0-11.8,2-11.8,5.9c0,2.7,1.8,4.2,5.2,4.2c2.8,0,5.7-2.1,6.4-4.9 c0.2-0.8,0.2-1.7,0.2-2.6V289z"}),n.createElement("path",{d:"M112.3,295.3c3,1.8,9.9,3.9,14.5,3.9c3.9,0,5.4-0.8,5.4-2.4c0-1.6-1-2.3-6.4-3.7c-11.1-2.9-15.4-8.7-15.3-14.7 c0-9.6,8.7-16.4,21.7-16.4c6.4,0,12.3,1.4,15.4,2.9l-2.9,12.1c-2.4-1.2-7.5-2.9-11.7-2.9c-3,0-4.9,0.6-4.9,2.5 c0,1.5,1.6,2.5,7.7,4.1c9.9,2.7,14,7.4,14.1,14.9c0,8.7-7,16-22.9,16c-7.4,0-13.6-1.5-17.8-3.6L112.3,295.3z"}),n.createElement("path",{d:"M158.7,241.5h18.2v26.5h0.2c1.7-2,3.8-3.6,6.1-4.5c2.2-1.1,4.8-1.6,7.4-1.6c11,0,18,7.3,18,21.2v27.3h-18.2v-24.6 c0-6.2-2.2-9.4-6.9-9.4c-3.7,0-5.4,2.3-6.2,3.9c-0.4,0.8-0.4,1.8-0.4,2.6v27.5h-18.2V241.5z"}),n.createElement("path",{d:"M229,258.2c-5.8,0-9.2-3.7-9.2-8.4c0-4.7,3.5-8.4,9.3-8.4c5.9,0,9.2,3.7,9.3,8.4C238.5,254.5,235,258.2,229,258.2 L229,258.2z M220,310.4v-47.3h18.2v47.3H220z"}),n.createElement("path",{d:"M274.1,311.5c-14.7,0-27.1-8.8-27.1-24.4c0-14.4,10.1-25.2,28.3-25.2c15.7,0,26.5,10,26.5,24.2 C301.8,302.3,289.4,311.5,274.1,311.5L274.1,311.5z M274.6,298.9c5.2,0,8.3-4.3,8.3-12.2c0-6.6-2.5-12.2-8.3-12.2 c-6.3,0-8.7,6.1-8.7,12.2C265.9,293.4,268.6,298.9,274.6,298.9L274.6,298.9z"}),n.createElement("path",{d:"M310.6,279.5c0-6.7-0.2-12.2-0.4-16.4h15.7l0.8,6.2h0.4c1.4-2,6.1-7.4,15-7.4c11.3,0,18.4,7.3,18.4,21.2v27.3h-18.2v-24.6 c0-6.2-2.2-9.4-6.7-9.4c-3.9,0-5.6,2.8-6.3,4.6c-0.4,0.9-0.4,2.1-0.4,3.2v26.2h-18.2V279.5z"}))),k||(k=n.createElement("g",null,n.createElement("path",{d:"M56.4,385.5c3.7,2.5,8.7,4.3,14.2,4.3c9.6,0,15.6-5.5,15.6-13.5c0-7.3-3.7-11.5-13.1-15.2c-10.5-3.7-16.7-9-16.7-17.9 c0-9.5,7.9-16.4,18.8-16.4c6.1,0,10.7,1.6,12.9,3.1l-1.7,3.8c-1.7-1.3-5.9-3.1-11.4-3.1c-10.5,0-14,6.7-14,11.8 c0,7.2,4.1,10.9,13.5,14.5c10.7,4.3,16.3,9.1,16.3,18.8c0,9.4-6.7,17.9-20.6,17.9c-5.6,0-12.1-1.9-15.5-4.4L56.4,385.5z"}),n.createElement("path",{d:"M127.8,327.9v28.5h35.8v-28.5h4.5v64.8h-4.5v-32.4h-35.8v32.4h-4.5v-64.8H127.8z"}),n.createElement("path",{d:"M257,359.6c0,22.9-13.9,34.1-28.9,34.1c-16,0-28.3-12.6-28.3-32.8c0-21.2,12.8-34.1,29-34.1 C245.2,326.9,257,339.5,257,359.6z M204.5,360.8c0,14.6,8.5,29.1,23.8,29.1s23.9-13.9,23.9-30c0-13.7-7.5-29.2-23.7-29.2 C212.1,330.7,204.5,345.7,204.5,360.8z"}),n.createElement("path",{d:"M288.7,328.7c3.7-0.8,8.4-1.2,13.8-1.2c7.7,0,13.6,1.9,17.1,5.5c3.1,3,5,7.2,5,12.7c0,5.6-1.6,9.7-4.5,12.9 c-4.1,4.8-11.2,7.3-19,7.3c-2.9,0-5.6-0.1-7.9-0.8v27.7h-4.5V328.7z M293.2,361c2.3,0.7,5.1,1,8.3,1c11.5,0,18.6-5.7,18.6-16 c0-10.2-7.4-14.7-17.7-14.7c-4.2,0-7.4,0.4-9.1,0.8V361z"}))),y||(y=n.createElement("path",{d:"M419.3,232.6c-1.9,13.9-9.4,166,0.2,177.4c2-8.9,6.2-142.7,16.7-136.2c10.5,6.6,1.7-43-2.6-46.2 C429.3,224.5,421.9,213.9,419.3,232.6z"})),N||(N=n.createElement("path",{d:"M539.9,232c4.3,12,24,66.5,26.2,79.4c2.1,12.8-55.6,33.5-54.9,72.8c0.7,39.3-3,2.3-4.9-1.7c-1.9-4,13-43.9,34.3-57.9 c21.4-14-10.6-78.6-19-62.4c-8.4,16.2-14.1-13.4-9-26.5C517.7,222.6,534.4,216.8,539.9,232z"})),U||(U=n.createElement("path",{d:"M465.1,196.1c0,0,12.3-10.7,10.5-24.6c-1.8-13.9-12.1-3.7-19,0c-6.9,3.7-11.3-13.2-11.3-37.3s5.9-32.2,19.8-42.4 c13.8-10.2,38.7-5.8,45.3,11.7c6.6,17.5-16.2,53-16,65.4C494.6,181.2,485.6,189.3,465.1,196.1z"})),C||(C=n.createElement("path",{d:"M441.8,514.1c0.4,17.6,21.1,78,24.2,102.7c3.2,24.7,13.1,91.3,13.5,110.5c0.4,19.2,14.9-47.4,12.9-63.9 c-2-16.5,3.9-129.3-10.9-148.4c-14.8-19.1,7.2-60.9-11-55.1C452.4,465.7,441.2,490.9,441.8,514.1z"})),S||(S=n.createElement("path",{d:"M487.4,792.4c8-13.7,6.5-26.9,6.1-45c-0.3-18.1,13.1-94.1,7.2-118.1c-5.9-24,4.1-61.5,11.5-95c7.4-33.5,6.4-86.1-15.5-99 c-21.8-12.9-32.8,61.6-25.6,101.2c7.2,39.6,23.1,77.3,12.3,95.6c-12.9,21.8-6.9,42.5-2.9,110.8C473.5,788.7,473.6,815.9,487.4,792.4 z"})),M||(M=n.createElement("path",{d:"M478.7,326.3c0,0-37.8-37.3-52.2-68c-14.3-30.7,17-72.7,48.9-32.6c16.3-26.1,51.5-21.4,56.1,5.6 C536.1,258.3,502.2,316.1,478.7,326.3z"})),z||(z=n.createElement("path",{d:"M407.9,360.3c1.7-1.7,3.7-3,5.7-4.1c3.8-2.1,7.8-3.9,11.8-5.6c5.5-2.2,11.1-3.8,16.7-5.4c6.6-1.9,13.4-3.4,20.1-4.7 c8.4-1.6,16.9-2.4,25.4-3c9-0.6,17.9-0.6,26.9-0.5c8.1,0,16.2,0.9,24.2,2.5c3.1,0.7,6.1,1.6,9.1,2.7c4.3,1.7,11.7,1.5,13.5,6.5 c0.5,2,0.2,4-0.3,6c-0.9,2.8-3,4.8-5.2,6.6c-3,2.4-6.3,4.2-9.7,5.9c-4.4,2.1-9.1,3.6-13.7,4.9c-5.5,1.6-11.2,2.7-16.8,3.6 c-6.4,1.1-12.8,1.8-19.3,2.4c-6.8,0.6-13.7,1-20.5,1.5c-7.1,0.4-14.2,1.1-21.2,1.7c-6.8,0.6-13.7,0.9-20.5,0.8 c-4.7-0.2-9.4-0.8-13.8-2.7c-1.7-1.3-3.8-2.3-5.2-3.9c-0.3-0.3,4.8-4.4,5.3-4.7c3.5-2,7.3-3.5,11.1-4.9c5.2-1.8,10.6-2.8,16-3.8 c6.6-1,13.4-1.5,20.1-1.9c7.4-0.4,14.8-0.5,22.2-0.4c7.3,0.1,14.6,0.4,21.9,1c6.9,0.5,13.8,1.3,20.6,2.3c6,0.8,12,1.9,17.9,3.3 c8.7,2.6,17.9,4.8,25.4,10.1c2.3,1.7,4,3.9,5.1,6.6c1.3,2.5,1.3,5.3,1.1,8.1c-0.3,3.2-1.5,6-2.9,8.8c-1.9,3.3-4.5,6.1-7.2,8.8 c-3.6,3.5-7.8,6.3-12.1,8.9c-5.7,3.4-11.8,6.1-17.9,8.5c-7.7,2.8-15.6,4.9-23.6,6.4c-8.6,1.8-17.5,2.9-26.3,3.8 c-8.8,0.8-17.8,1.2-26.7,1.4c-8.6,0.2-17.1-0.1-25.6-0.4c-7.7-0.2-15.3-0.8-23.1-1.4c-6.9-0.5-13.7-1.6-20.3-3.4 c-6.7-3.1-18.3-2.7-20.8-10.3c-0.7-2.7-0.3-5.3,0.2-7.9c1-3.5,3.2-6.3,5.6-8.9c3.1-3.1,6.7-5.5,10.4-7.8c4.3-2.4,8.9-4.2,13.5-5.9 c5.2-1.9,10.5-3.4,15.9-4.7c6.2-1.4,12.4-2.5,18.6-3.4c7.1-1,14.4-1.3,21.5-1.5c7.9-0.1,15.9,0.2,23.8,0.7c8,0.6,15.9,1.5,23.8,2.4 c7.3,0.9,14.6,1.9,21.9,3.2c6.6,1.2,13.2,2.9,19.7,4.8c11.4,3.1,22.4,7.8,33.4,12.2c4.1,1.8,8,4,11.7,6.5c3,2,5.5,4.7,7.2,7.9 c1.8,3.1,2.3,6.6,2.5,10c0.2,4.1-0.8,8.1-2,12c-1.6,4.6-3.9,8.8-6.6,12.8c-3.3,4.8-7.4,8.7-11.8,12.4c-5.2,4.3-10.9,8.1-16.8,11.6 c-7.2,4.3-15,7.5-22.9,10.4c-9,3.2-18.2,5.3-27.4,7.2c-9.8,1.9-19.7,3.1-29.7,4c-10,0.8-20,0.9-30,0.7c-9.3-0.3-18.5-1-27.7-2 c-8-0.9-15.9-2.3-23.7-3.9c-6.6-1.4-13.1-3.2-19.5-5.4c-10.2-4-21.3-6.6-29.5-14c-2.8-2.5-4.4-5.7-5.6-9.1c-1-3.6-0.7-7.3-0.1-10.8 c0.9-4.3,3.3-7.9,5.9-11.4c3.3-3.9,7.4-7.1,11.6-9.9c5.2-3.2,10.9-5.6,16.6-7.9c6.5-2.5,13-4.5,19.7-6.3c7.4-2,15-3,22.5-4 c7.8-0.9,15.6-1.3,23.5-1.7c8-0.4,16-0.3,23.9-0.1c7.9,0.2,15.7,0.8,23.5,1.4c7.9,0.7,15.8,1.8,23.6,3.1c7.9,1.4,15.8,3.2,23.6,5.3 c7.3,1.9,14.4,4.3,21.5,6.7c12.7,4.7,25.4,9.3,37.2,15.7c4.5,2.5,8.7,5.4,12.6,8.7c3.4,3.1,5.5,7.1,7.2,11.2c1.7,4.4,2,9.1,2,13.8 c0,5-1.3,9.9-2.8,14.8c-1.8,5.4-4.5,10.6-7.4,15.6c-3.4,5.9-7.5,11.3-12.1,16.5c-5.3,6.2-11.6,11.2-18.4,15.7 c-7.7,5-15.9,8.8-24.3,12.4c-8.6,3.6-17.4,6.7-26.3,9.5c-8.8,2.7-17.8,4.6-26.8,6.4c-9.1,1.7-18.2,2.6-27.3,3.2 c-9,0.6-18,0.6-27,0.5c-8.3-0.1-16.7-0.6-25-1.4c-7.8-0.8-15.6-2.1-23.3-3.5c-6.9-1.2-13.6-2.7-20.4-4.5c-11.9-3.5-23.3-8.4-34.8-13 c-4.4-1.8-8.6-4-12.7-6.4c-3.7-2.1-6.8-4.9-9.5-8c-2.5-2.9-3.7-6.4-4.5-10.1c-0.7-4-0.3-8,0.7-12c1.1-4.5,3.6-8.5,6.3-12.2 c3.2-4.1,7.2-7.5,11.4-10.6c4.6-3.5,9.7-6.2,14.9-8.9c5.6-2.9,11.5-5.1,17.4-7.3c6.2-2.2,12.5-3.9,18.8-5.6c6.6-1.8,13.3-3.1,20-4.4 c7.1-1.2,14.4-1.9,21.6-2.5c7.4-0.6,14.9-0.7,22.4-0.6c7.5,0.2,15,0.7,22.5,1.4c7.4,0.7,14.7,1.7,22,2.7c7.4,1.1,14.6,2.5,21.9,4 c6.8,1.5,13.6,3.1,20.3,5c6.2,1.6,12.3,3.7,18.3,5.8c11.8,4.2,23.4,8.7,34.4,14.6c4.6,2.5,9,5.3,13.3,8.2c3.7,2.7,7.1,5.7,10.4,8.9 c3,3,5.5,6.3,7.4,10.1c1.7,3.5,2.3,7.3,2.7,11.2c0.3,4.3-0.3,8.5-1.4,12.8c-1.3,4.6-3.4,8.8-5.8,13c-2.6,4.6-5.8,8.8-9.2,12.8 c-3.9,4.3-8,8.3-12.4,12.1c-4.7,4-9.5,7.8-14.4,11.4c-5.3,4.1-11.3,7.3-17.2,10.6c-6.5,3.3-13.3,6.1-20.2,8.6 c-7.4,2.6-14.9,4.5-22.5,6.2c-7.9,1.7-15.9,2.9-23.9,4c-8.1,1-16.2,1.6-24.3,2.1c-8.6,0.5-17.1,0-25.7-0.7 c-8.3-0.7-16.6-1.6-24.9-2.9c-7.5-1.2-15-2.9-22.4-4.8c-6.5-1.6-12.9-3.7-19.3-5.9c-11.2-3.8-22.2-8.1-32.5-13.8 c-3.9-2.3-7.7-4.8-11.4-7.6c-3.1-2.4-6-5.1-8.6-8c-2.3-2.6-4.3-5.5-5.9-8.5c-1.3-2.8-2.3-5.6-2.8-8.4c-0.6-2.6-0.9-5.2-0.9-7.9 c0.2-2.5,0.7-5,1.7-7.4c1.1-2.5,2.8-4.7,4.7-6.7c2.1-2.4,4.7-4.1,7.5-5.7c2.2-1.3,4.5-2.1,6.9-2.9l13.4,6.9l0,0 c-3.1,0.2-6.3,0.4-9.3,1.3c-3.4,1-6.7,2.2-9.6,4.3c-2.2,1.7-4.3,3.5-5.7,5.9c-1.1,2.2-1.8,4.5-1.5,7c0.3,2.8,0.9,5.4,2,8 c1.4,3,2.8,6,4.6,8.7c2.2,3.1,4.7,6.2,7.5,8.8c3.4,3,7,5.8,10.8,8.2c4.5,2.8,9,5.6,13.7,7.9c2.6,1.3,5.2,2.6,7.9,3.7 c0.9,0.4,3.6,1.5,2.7,1.1c-31.6-12.1-17.3-6.7-12.4-4.8c5.5,1.8,11.1,3.5,16.8,4.7c6.5,1.4,13.1,2.7,19.7,3.6c7.5,1,15,1.6,22.5,1.8 c8.5,0.3,17.1,0.8,25.6,0.9c8.4,0,16.7-0.4,25-1.5c8-0.9,16.1-2.1,24.1-3.6c7.9-1.5,15.8-3.2,23.4-5.4c7.3-2.2,14.6-4.5,21.6-7.5 c6.6-2.8,12.8-6,19-9.4c5.5-3.2,10.9-6.6,15.8-10.6c4.7-3.7,9.3-7.3,13.7-11.3c3.9-3.6,7.8-7.3,11.1-11.6c2.8-3.7,5.5-7.5,7.1-11.9 c1.4-3.7,2.9-7.6,2.9-11.6c-0.2-4-1.5-7.6-3.9-10.9c-2.7-3.7-5.6-7.2-9.1-10.1c-3.9-3.4-8.1-6.4-12.5-9.2c-4.9-3-10-5.9-15.2-8.5 c-2.8-1.4-5.5-2.7-8.3-3.9c-0.9-0.4-3.7-1.6-2.8-1.2c6.9,2.6,22.5,8.8,12.8,4.9c-5.6-2.1-11.3-4-17.1-5.4c-6.2-1.6-12.4-3-18.6-4.2 c-6.9-1.3-13.8-2.5-20.8-3.5c-7.3-1.1-14.6-2.1-21.9-2.8c-7.4-0.7-14.7-1.2-22.1-1.4c-7.5-0.2-15-0.2-22.4,0.3 c-7.4,0.5-14.8,1.1-22.2,2c-7.1,0.9-14.2,2.1-21.2,3.6c-6.6,1.4-13.1,3-19.5,5.1c-6.2,2-12.3,4.1-18.3,6.6 c-5.6,2.3-11.2,4.9-16.6,7.8c-4.6,2.7-9.2,5.6-13.2,9.2c-3.4,3.1-6.4,6.6-8.4,10.7c-1.5,3.5-2.7,7-1.8,10.8c1.1,3.9,3.4,7.1,6.4,9.9 c3.5,3.2,7.4,6,11.7,8.1c5,2.5,10.1,4.9,15.3,6.8c-30.5-11.9-8.7-3.1-1.3-1.2c5.9,1.5,12,2.6,18,3.4c7,1,13.9,1.8,20.9,2.4 c7.8,0.6,15.5,0.9,23.2,0.7c8.4-0.2,16.8-0.5,25.2-1.1c9-0.7,17.9-1.7,26.8-3.1c8.9-1.5,17.8-3.4,26.4-6.2 c8.8-2.7,17.4-5.7,25.9-9.3c8.6-3.6,17.2-7.2,25.5-11.5c7.7-4,15.4-7.9,22.4-13.1c5.6-4.5,11-9.2,15.8-14.4c3.8-4.3,7.5-8.8,10.3-14 c2.2-4.2,4.1-8.7,4.5-13.5c0.2-4.5-0.1-8.9-2-13c-2.1-4.6-5.4-8.2-9.6-11c-4.9-3.4-10.1-6.4-15.5-9c-3-1.4-6-2.8-9.1-4.1 c-1-0.5-4.3-1.7-3.2-1.3c35.2,13.5,20.1,7.8,14.3,5.6c-6.4-2.2-12.8-4.2-19.4-5.8c-7.3-1.7-14.7-3.4-22.2-4.7 c-7.9-1.4-15.9-2.6-23.9-3.5c-7.8-0.8-15.6-1.4-23.5-1.6c-7.9-0.2-15.7-0.1-23.6,0.1c-7.9,0.3-15.8,0.6-23.7,1.4 c-7.9,0.9-15.7,1.8-23.5,3.2c-7.3,1.3-14.6,2.8-21.6,5c-6.4,1.9-12.9,3.9-19.3,6.3c-5.2,2-10.4,4.3-14.8,7.8 c-3.4,2.7-6.5,5.7-8.7,9.6c-1.5,3.3-1.9,6.5,0,9.8c2.3,3.9,5.6,6.9,9.3,9.4c2.3,1.5,4.7,3,7.1,4.2c0.9,0.4,3.6,1.6,2.7,1.2 c-4-1.5-21-8.1-12-4.7c5.4,1.8,10.9,3.2,16.6,4.1c6.6,1,13.2,1.8,19.9,2.1c8,0.3,15.9,0.4,23.9,0.2c9.4-0.2,18.7-0.7,28-1.4 c10-0.9,20-1.9,29.9-3.5c9.7-1.5,19.4-3.4,28.9-6c9-2.4,17.9-5.2,26.7-8.1c7.3-2.6,14.6-5.3,21.5-9c5.3-3,10.4-6.3,14.9-10.4 c3.5-3.4,6.8-6.9,9.2-11.2c1.9-3.3,3.7-6.8,4.3-10.6c0.2-3.6-0.8-6.7-3.1-9.4c-3-3.3-6.5-6-10.4-8.2c-4.6-2.6-9.4-4.9-14.4-6.9 c29,11.3,8.5,2.9,1.4,1.6c-5.8-1.5-11.7-2.9-17.7-3.8c-6.6-1-13.2-1.8-19.8-2.4c-7.3-0.7-14.6-1.2-22-1.5c-8.1-0.5-16.1-0.9-24.1-1 c-7.9-0.2-15.9-0.3-23.8,0.1c-7,0.3-14.1,0.8-21,1.8c-6.1,0.8-12.2,1.8-18.2,3.3c-5.1,1.4-10.2,2.8-15.1,4.9 c-4.3,1.8-8.5,3.9-12.4,6.4c-3.2,2-6.3,4.1-8.8,6.9c-1.8,2.1-2.9,4.5-0.6,6.7c1.5,1.1,1.4,1.2,3.2,2.1c0.7,0.3,2.8,1.2,2.1,0.9 c-19.4-7.2-11.8-4.1-7.4-3.3c4.9,0.6,9.8,0.6,14.8,0.7c6.8,0.1,13.6,0.1,20.4,0.1c7.7-0.2,15.4-0.4,23.1-0.8 c8.6-0.5,17.1-0.8,25.7-1.7c8.9-0.9,17.8-1.9,26.6-3.3c8.8-1.5,17.4-3,26.1-4.9c7.7-1.7,15.3-3.5,22.8-5.8c5.8-1.8,11.5-3.7,17-6.2 c3.8-1.8,7.4-3.9,10.4-6.9c2.1-2.1,4.2-4.5,4.8-7.5c0.4-2.8-0.3-5.3-1.7-7.6c-2.3-2.9-5-5.2-8.3-6.8c-4.5-2.2-14-6,7.1,2.4 c0.6,0.2-1.2-0.4-1.8-0.6c-1.7-0.5-2.1-0.6-3.9-0.9c-4.9-0.8-9.9-1.3-14.8-1.7c-6.1-0.4-12.2-0.8-18.2-1.1 c-6.9-0.3-13.7-0.6-20.6-0.5c-7.4,0.1-14.8,0.1-22.2,0.3c-7.4,0.2-14.8,0.4-22.2,0.7c-6.6,0.3-13.2,0.7-19.8,1.5 c-5.1,0.6-10.2,1.5-15.3,2.6c-2.1,0.4-4.2,0.7-6.2,1.2c-0.5,0.1-1.1,0.2-1.6,0.5c-0.3,0.2-0.5,0.8-0.9,0.7c-2.2-0.3-4.4-1.1-6.6-1.7 c-0.9-0.9,3-2.3,3.4-2.5c4.7-1.9,9.7-3.2,14.7-3.9c6.9-0.9,13.8-1.7,20.7-2c7.1-0.4,14.1-0.7,21.3-1.2c6.9-0.5,13.7-1,20.6-1.6 c6.4-0.6,12.8-1.3,19.1-2.2c5.5-0.8,10.9-2,16.3-3.4c4.4-1.1,8.8-2.4,13.1-4c3-1.2,6-2.6,8.6-4.6c2.4-2.2,1.7-3.4-0.9-5.2 c-1.2-0.6-5-2.3-3.8-1.7c16.8,6.6,10.6,3.3,5.6,3.5c-5.6,0.1-11.2,0.8-16.8,1.1c-8.2,0.6-16.3,1.2-24.4,1.7 c-9.1,0.6-18.2,1.2-27.2,1.8c-8.3,0.6-16.6,1-24.8,2.1c-6.6,1-13.2,2.3-19.7,3.7c-5.6,1.1-11.1,2.3-16.7,3.2c-4,0.5-8,0.8-12,0.9 L407.9,360.3L407.9,360.3z"})),B||(B=n.createElement("path",{d:"M511.7,46.6c-1.6,0.1-3.1,0.7-4.7,1.1c-3,1.1-6,2.1-9.1,2.9c-5.4,1.4-11,2.4-16.5,3.3c-7.5,1.1-15.1,2.1-22.5,3.2 c-8.8,1.3-17.5,2.3-26.3,3.3c-8.9,1-17.8,2.3-26.6,3.8c-8.4,1.4-16.8,3.4-25,5.5c-7.8,2-15.4,4.3-23.1,6.7 c-6.7,2.1-13.2,4.5-19.7,7.2c-5.6,2.3-11,5-16.4,7.8c-4.7,2.3-9.2,5-13.5,8c-3.5,2.3-6.6,5.2-9.3,8.4c-2.2,2.4-3.6,5.2-4.6,8.3 c-0.7,2.8-0.2,5.3,1.2,7.7c1.8,2.9,4.7,4.6,7.6,6.3c1.8,0.9,3.7,1.8,5.6,2.5c0.7,0.3,2.6,1,1.9,0.8c-10.1-4-13.7-5.2-8.4-3.4 c4,1.3,8.1,2.1,12.2,2.6c5.2,0.5,10.3,0.9,15.5,1.3c6.1,0.6,12.2,1,18.3,1.2c6.6,0.3,13.2,0.5,19.9,0.8c6.8,0.3,13.6,0.5,20.3,0.7 c7,0,13.9,0.1,20.9,0c7.1,0,14.2-0.1,21.3-0.3c7.2-0.1,14.5-0.6,21.7-0.8c7.5-0.4,15.1-0.6,22.6-1c7.5-0.4,15-1,22.5-1.6 c7.2-0.4,14.4-1,21.5-1.8c6.9-0.9,13.9-1.7,20.8-2.7c6.7-0.9,13.5-1.8,20.1-3.1c6-1.2,12.1-2.6,18-4.2c5.8-1.6,11.6-3.3,17.5-4.9 c5.6-1.5,11.3-3.3,16.9-5c5.3-1.5,10.6-3.1,15.9-4.8c4.7-1.5,9.4-3.1,14.1-4.8c4-1.6,8-3.2,11.8-5.2c3-1.5,5.8-3.6,8.3-5.8 c2-1.7,3.6-3.8,5-6c1.1-1.9,1.3-4.1,0.9-6.2c-0.6-2.6-2.2-4.8-4-6.8c-2.4-2.6-5.3-4.7-8.3-6.7c-3.9-2.6-8-4.7-12.2-6.8 c-4.6-2.3-9.3-4.3-14.1-6.2c27.6,10.1,7.4,3.2,0.8,1.3c-5.3-1.5-10.7-2.7-16.1-3.8c-6-1.3-12.1-2.2-18.2-3 c-6.9-1.1-13.8-2.2-20.8-3.1c-6.8-1-13.7-1.7-20.6-2.3c-7-0.5-14-0.2-20.9,0.2c-8.1,0.5-16.3,1.2-24.4,1.7 c-8.5,0.6-17.1,1.3-25.6,1.9c-7.9,0.4-15.9,1.1-23.8,1.8c-6.9,0.6-13.7,1.9-20.5,3.3c-6.3,1.3-12.7,2.8-18.9,4.3 c-5.6,1.5-11,3-16.4,5.1c-4.8,1.8-9.4,4-14,6.2c-4,1.9-8,4.1-11.7,6.7c-3.2,2.1-6.1,4.3-8.8,6.9c-2.2,2-3.8,4.5-5.1,7.2 c-1,2.3-1.1,4.8-0.6,7.3c0.4,2.4,1.7,4.5,3.2,6.4c1.9,2.2,4.3,3.8,6.9,5.1c1.7,0.8,3.4,1.5,5.2,2.1c0.6,0.2,2.4,0.9,1.8,0.7 c-8.8-3.6-12.4-4.7-7.6-3.2c3.7,1.1,7.4,1.8,11.2,2.4c4.6,0.7,9.2,1.2,13.8,1.6c5.1,0.5,10.2,0.7,15.3,0.7 c5.7-0.1,11.4-0.4,17.1-0.5c6.2-0.2,12.3-0.4,18.4-0.7c6.3-0.4,12.6-1.1,18.8-2c6.7-1,13.3-2.2,20-3.3c7-1.2,14-2.3,21-3.6 c6.8-1.2,13.6-2.6,20.5-4c6.5-1.3,12.9-2.9,19.3-4.5c6-1.6,12-3.6,17.9-5.4c5.6-1.6,11-3.6,16.5-5.3c4.5-1.6,9-3.2,13.2-5.5 c3-1.6,5.8-3.7,7.9-6.4c1.5-2.3,1.5-4.7,0.5-7.2c-1.4-3-4.1-5.2-6.7-7.1c-3.7-2.5-7.8-4.2-12-5.8c-7-2.6,1.3,0.4,9.3,3.7 c0.7,0.3-1.4-0.5-2.1-0.7c-2.1-0.7-4.4-1.2-6.6-1.7c-4.8-1.1-9.6-1.7-14.5-2.2c-5.8-0.6-11.7-0.6-17.6-0.6 c-6.7,0.1-13.3,0.4-19.9,0.8c-7,0.5-13.9,1.1-20.8,1.8c-6.7,0.6-13.5,1.3-20.3,2.1c-6.1,0.7-12.3,1.7-18.3,2.9 c-5.9,1-11.6,2.6-17.3,4c-5.6,1.4-11.2,2.9-16.7,4.5c-4.9,1.5-9.8,2.9-14.6,4.7c-3.8,1.5-7.5,3.1-11,5.1c-2.4,1.4-4.6,3-6.1,5.4 c-1,1.8-0.9,3.6-0.3,5.5c0.8,2.1,2.3,3.5,4.1,4.8c1.2,0.7,2.5,1.4,3.8,1.9c0.5,0.2,2.1,0.7,1.5,0.5c-7-2.9-9.8-3.5-6-2.6 c3.1,0.7,6.3,0.9,9.4,1.1c3.9,0.3,7.7,0.3,11.6,0.2c4.2-0.1,8.3-0.5,12.4-1c4.2-0.6,8.4-1.3,12.6-2.1c4.2-0.7,8.4-1.7,12.5-2.6 c4.2-1,8.2-2.3,12.3-3.6c4.3-1.2,8.4-2.9,12.5-4.3c4-1.4,8.1-2.8,12.1-4.2c3.3-1.1,6.5-2.6,9.6-4.2c2.2-1.1,4.2-2.4,5.9-4.2 c1-1.1,2-2.3,2.1-3.9c0.1-1.2-0.5-2.2-1.2-3.1c-1-1-2.2-1.6-3.5-2.1c9.1,3.7,1.9,0.9-0.6,0.7c-1.7-0.1-3.5,0.1-5.2,0.2 c-2.1,0.2-4.2,0.5-6.2,0.8c-2.2,0.3-4.4,0.7-6.5,1.2c-2,0.6-4.1,1.3-6.1,1.9l-0.9,0.4l-5-2.3l0,0c0.2-0.2,0.3-0.4,0.5-0.6 c1.5-1.3,3.2-2.1,5.2-2.6c2.1-0.6,4.2-1,6.4-1.3c2.2-0.3,4.4-0.5,6.6-0.6c2.1-0.1,4.2,0.1,6.4,0.3c3.8,0.4,5.9,0.6,9.8,2.9 c1.1,0.5,2.2,1.1,2.9,2.1c0.8,1.1,1.4,2.2,1.6,3.5c0.1,1.6,0.2,3.2-0.4,4.8c-0.8,2.1-1.9,3.9-3.3,5.6c-2,2.2-4.3,4.1-6.8,5.8 c-3.3,2.1-6.8,3.7-10.4,5.2c-4,1.7-8.2,3.1-12.3,4.5c-4.3,1.2-8.5,2.4-12.9,3.5c-4.1,1-8.2,1.9-12.4,2.8c-4.3,0.8-8.5,1.6-12.9,2.1 c-4.2,0.5-8.5,1-12.8,0.9c-4.2,0.1-8.4,0-12.5-0.5c-4-0.5-7.9-1-11.7-2.2c-5.3-1.7-10.9-3.1-15.3-6.7c-1.4-1.4-2.6-3-3.2-4.9 c-0.7-2.1-0.9-4.2-0.5-6.4c0.6-2.6,1.6-5,3.3-7.1c2.3-2.6,4.8-4.9,7.7-6.9c3.7-2.4,7.7-4.7,11.9-6.3c5-2,10-3.8,15.1-5.4 c5.7-1.6,11.4-3,17-4.3c5.8-1.2,11.6-2.3,17.5-3.5c6.2-1.1,12.4-2.2,18.7-3c6.9-0.9,13.8-1.6,20.7-1.9c7-0.4,14-0.6,21.1-0.4 c6.6,0.2,13.2,0.8,19.8,1.6c5.8,1,11.6,2,17.3,3.5c9.3,2.5,18.5,5.7,27.3,9.8c3.1,1.4,6.3,3,8.8,5.5c1.9,2,3.5,4.2,4.2,7 c0.6,2.7,0.7,5.4-0.1,8.1c-1,3.1-2.4,6-4.7,8.3c-3,2.9-6.2,5.4-9.9,7.4c-4.5,2.5-9.3,4.6-14,6.6c-5.5,2.4-11.2,4.3-16.9,6 c-6,1.9-12.1,3.7-18.1,5.2c-6.5,1.7-13.1,3.2-19.7,4.5c-6.9,1.4-13.8,2.8-20.6,3.9c-7.1,1.1-14.1,2.1-21.3,2.8 c-6.7,0.7-13.4,1.2-20.1,1.4c-6.3,0.3-12.5,0.5-18.8,0.6s-12.5,0.1-18.8-0.2c-5.6-0.2-11.3-0.6-16.9-1.4c-5.1-0.6-10.2-1.3-15.3-2.3 c-4.6-1-9.1-2-13.5-3.5c-6.7-2.3-13.5-4.6-19.7-8.1c-2.1-1.4-4-3-5.4-5.1c-1.4-2.1-2.5-4.3-3.2-6.7c-0.4-2.6-0.4-5.3,0.1-8 c0.7-2.9,1.9-5.6,3.5-8.2c1.9-2.9,4.1-5.7,6.6-8.2c3.1-2.8,6.2-5.6,9.9-7.9c4.1-2.6,8.2-5,12.6-7.1c4.8-2.2,9.6-4.4,14.6-6.1 c5.6-2.1,11.2-4,17-5.5c6.3-1.6,12.7-3,19.2-4.2c6.9-1.3,13.8-2.4,20.7-3.5c8.1-1.1,16.2-1.9,24.3-2.6c8.7-0.7,17.4-1.1,26.1-1 c8,0.1,16,0.4,24,1.1c6.9,0.7,13.8,1.3,20.7,2.2c6.9,0.9,13.9,1.9,20.8,3c7,1.3,13.9,2.7,20.8,4.4c6,1.4,12,2.9,17.9,4.7 c10.7,3.2,21.1,6.8,31.3,11.3c4.2,1.8,8.4,3.7,12.4,6c3.1,1.8,6.2,3.8,8.9,6.2c2.1,1.9,4.2,3.8,5.6,6.4c1.2,2.1,2.1,4.2,2.2,6.6 c0.1,2.3,0,4.5-0.7,6.7c-0.7,2.5-1.8,4.9-3.2,7c-1.8,2.6-3.8,5-6.2,7.1c-2.9,2.5-6,4.8-9.5,6.5c-4,2.1-8.2,4-12.3,5.8 c-4.7,2-9.5,3.8-14.3,5.6c-5.4,1.9-10.7,3.7-16.1,5.4c-5.7,1.8-11.4,3.6-17.1,5.2c-5.8,1.6-11.6,3.2-17.4,4.7 c-6.1,1.5-12.1,3.1-18.3,4.2c-6.9,1.2-13.7,2.1-20.7,2.9c-6.8,0.8-13.7,1.5-20.5,2.4c-7.3,0.7-14.6,1.5-21.9,1.9 c-7.5,0.5-15.1,0.9-22.6,1c-7.5,0.2-15.1,0.3-22.6,0.4c-7.1,0.1-14.4,0.2-21.6,0.2c-7.2,0-14.4,0.1-21.5-0.3 c-6.9-0.2-13.8-0.6-20.7-0.8c-6.9-0.3-13.7-0.6-20.6-1.1c-6.6-0.5-13.1-1.2-19.7-1.9c-6.1-0.8-12.3-1.7-18.4-2.9 c-5-1-10.1-2.2-14.9-3.9c-7.5-2.7-15.1-5.1-22-9.3c-2.3-1.7-4.3-3.7-5.5-6.4c-1-2.7-1.6-5.5-1.5-8.4c0.2-3.3,1-6.6,2.3-9.6 c1.8-3.6,4.1-6.9,6.7-10c3.3-3.5,7-6.7,10.8-9.6c4.7-3.2,9.4-6.2,14.3-9c5.5-3.1,11.2-6,16.9-8.8c6.7-3.1,13.5-5.9,20.5-8.2 c7.8-2.4,15.7-4.8,23.7-6.4c8.5-1.8,17-3.5,25.6-4.6c9.1-1.3,18.3-2.3,27.4-2.8c8.8-0.5,17.5-1,26.3-1.2c7.6-0.2,15.2-0.3,22.8-0.1 c5.4,0.1,10.7,0.4,16.1,0.7c2.9,0.2,5.7,0.4,8.6,0.8L511.7,46.6L511.7,46.6z"})))}var J=n.forwardRef(L),V=(t.p,t(60),t(8)),W=function(c){var e=c.currentUser;return Object(V.jsxs)("div",{className:"header",children:[Object(V.jsx)(s.b,{className:"logo-container",to:"/",children:Object(V.jsx)(J,{className:"logo"})}),Object(V.jsxs)("div",{className:"options",children:[Object(V.jsx)(s.b,{className:"option",to:"/shop",children:"Shop"}),Object(V.jsx)(s.b,{className:"option",to:"/contact",children:"Contact"}),e?Object(V.jsx)("div",{className:"option",onClick:function(){return f.signOut()},children:"Sign Out"}):Object(V.jsx)(s.b,{className:"option",to:"/signin",children:"Sign In"}),Object(V.jsx)(s.b,{className:"option",to:"/order",children:"Order"})]})]})},D=t(28),T=(t(66),[{id:1,title:"hats",subtitle:"shop now",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",linkUrl:"hats"},{id:2,title:"jackets",subtitle:"shop now",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",linkUrl:"jackets"},{id:3,title:"sneakers",subtitle:"shop now",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",linkUrl:"sneakers"},{id:4,title:"womans",subtitle:"shop now",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",linkUrl:"womans"},{id:5,title:"mans",subtitle:"shop now",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",linkUrl:"mans"}]),H=["id"],F=function(c){Object(m.a)(t,c);var e=Object(u.a)(t);function t(){var c;Object(b.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(c=e.call.apply(e,[this].concat(a))).state={menuItems:T},c}return Object(d.a)(t,[{key:"render",value:function(){var c=this.state.menuItems;return Object(V.jsx)("div",{className:"directory-menu",children:c.map((function(c){var e=c.id,t=Object(D.a)(c,H);return Object(V.jsx)(R,Object(p.a)({},t),e)}))})}}]),t}(n.Component),G=t(15),q=(t(67),function(c){var e=c.title,t=c.subtitle,n=c.imageUrl,a=c.linkUrl,i=c.size,r=c.history,s=c.match;return Object(V.jsxs)("div",{className:"menu-item ".concat(i),onClick:function(){return r.push("".concat(s.url).concat(a))},children:[Object(V.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(V.jsxs)("div",{className:"content",children:[Object(V.jsx)("h1",{className:"title",children:e}),Object(V.jsx)("span",{className:"subtitle",children:t})]})]})});q.defaultProps={size:"",subtitle:"shop now"};var R=Object(G.f)(q),K=(t(68),["id"]),Q=function(c){var e=c.title,t=c.items;return console.log(e),Object(V.jsxs)("div",{className:"collection-preview",children:[Object(V.jsx)("h1",{className:"title",children:e.toUpperCase()}),Object(V.jsx)("div",{className:"preview",children:t.filter((function(c,e){return e<4})).map((function(c){var e=c.id,t=Object(D.a)(c,K);return Object(V.jsx)(X,Object(p.a)({},t),e)}))})]})},X=(t(69),function(c){var e=c.name,t=c.price,n=c.imageUrl;return Object(V.jsxs)("div",{className:"collection-item",children:[Object(V.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(n,")")}}),Object(V.jsxs)("div",{className:"collection-footer",children:[Object(V.jsx)("span",{className:"name",children:e}),Object(V.jsx)("span",{className:"price",children:"".concat(t,"$")})]})]})}),Y=t(4),Z=(t(70),function(c){Object(m.a)(t,c);var e=Object(u.a)(t);function t(){var c;Object(b.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(c=e.call.apply(e,[this].concat(a))).state={email:"",password:""},c.handleSubmit=function(){var e=Object(h.a)(o.a.mark((function e(t){var n,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=c.state,a=n.email,i=n.password,e.prev=2,e.next=5,f.signInWithEmailAndPassword(a,i);case 5:c.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(c){return e.apply(this,arguments)}}(),c.handleChange=function(e){var t=e.target,n=t.value,a=t.name;c.setState(Object(Y.a)({},a,n))},c}return Object(d.a)(t,[{key:"render",value:function(){var c=this.state,e=c.email,t=c.password;return Object(V.jsxs)("div",{className:"form-section",children:[Object(V.jsx)("h2",{children:"I already have an acount"}),Object(V.jsx)("span",{children:"Sign in with your email and password"}),Object(V.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(V.jsx)(ec,{name:"email",type:"email",label:"Email",value:e,handleChange:this.handleChange,required:!0}),Object(V.jsx)(ec,{name:"password",type:"password",label:"Password",value:t,handleChange:this.handleChange,required:!0}),Object(V.jsxs)("div",{className:"form-buttons",children:[Object(V.jsx)(nc,{type:"submit",children:"Sign in"}),Object(V.jsx)(nc,{type:"button",onClick:E,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),t}(n.Component)),_=(t(71),function(c){Object(m.a)(t,c);var e=Object(u.a)(t);function t(){var c;Object(b.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(c=e.call.apply(e,[this].concat(a))).state={displayName:"",email:"",password:"",confirmPassword:""},c.handleSubmit=function(){var e=Object(h.a)(o.a.mark((function e(t){var n,a,i,r,s,l,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=c.state,a=n.displayName,i=n.email,r=n.password,s=n.confirmPassword,r===s){e.next=5;break}return alert("Passwords doesn't match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,f.createUserWithEmailAndPassword(i,r);case 8:return l=e.sent,p=l.user,e.next=12,v(p,{displayName:a});case 12:c.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(c){return e.apply(this,arguments)}}(),c.handleChange=function(e){var t=e.target,n=t.value,a=t.name;c.setState(Object(Y.a)({},a,n))},c}return Object(d.a)(t,[{key:"render",value:function(){var c=this.state,e=c.displayName,t=c.email,n=c.password,a=c.confirmPassword;return Object(V.jsxs)("div",{className:"form-section",children:[Object(V.jsx)("h2",{children:"I do not have an acount"}),Object(V.jsx)("span",{children:"Sign up with your email and password"}),Object(V.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(V.jsx)(ec,{name:"displayName",type:"text",label:"Display Name",value:e,handleChange:this.handleChange,required:!0}),Object(V.jsx)(ec,{name:"email",type:"email",label:"Email",value:t,handleChange:this.handleChange,required:!0}),Object(V.jsx)(ec,{name:"password",type:"password",label:"Password",value:n,handleChange:this.handleChange,required:!0}),Object(V.jsx)(ec,{name:"confirmPassword",type:"password",label:"Confirm Password",value:a,handleChange:this.handleChange,required:!0}),Object(V.jsx)("div",{className:"form-buttons",children:Object(V.jsx)(nc,{type:"submit",children:"Sign up"})})]})]})}}]),t}(n.Component)),$=(t(72),["handleChange","label"]),cc=function(c){var e=c.handleChange,t=c.label,n=Object(D.a)(c,$);return Object(V.jsxs)("div",{className:"input-group",children:[Object(V.jsx)("input",Object(p.a)({className:"input-field",onChange:e},n)),t&&Object(V.jsx)("label",{className:"input-label ".concat(n.value.length?"shrink":""),children:t})]})};cc.defaultProps={type:"text",required:!1};var ec=cc,tc=(t(73),["children","isGoogleSignIn"]),nc=function(c){var e=c.children,t=c.isGoogleSignIn,n=Object(D.a)(c,tc);return Object(V.jsx)("button",Object(p.a)(Object(p.a)({className:"custom-button ".concat(t?"google-sign-in":"")},n),{},{children:e}))},ac=(t(74),function(){return Object(V.jsx)("div",{className:"homepage",children:Object(V.jsx)(F,{})})}),ic=function(){return Object(V.jsx)("h1",{children:"Hats page"})},rc=(t(75),[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:1,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:2,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:3,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:4,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:5,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:6,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:7,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:8,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:1,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:2,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:3,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:4,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:5,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:1,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:2,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:3,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:4,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:5,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:6,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:7,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:1,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:2,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:3,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:4,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:5,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:6,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}]),sc=["id"],lc=function(c){Object(m.a)(t,c);var e=Object(u.a)(t);function t(){var c;Object(b.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(c=e.call.apply(e,[this].concat(a))).state={collections:rc},c}return Object(d.a)(t,[{key:"render",value:function(){var c=this.state.collections;return console.log(c),Object(V.jsx)("div",{className:"shop-page",children:c.map((function(c){var e=c.id,t=Object(D.a)(c,sc);return Object(V.jsx)(Q,Object(p.a)({},t),e)}))})}}]),t}(n.Component),oc=(t(76),function(){return Object(V.jsxs)("div",{className:"sign-in",children:[Object(V.jsx)(Z,{}),Object(V.jsx)(_,{})]})}),pc=(t(77),function(c){Object(m.a)(t,c);var e=Object(u.a)(t);function t(){var c;Object(b.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(c=e.call.apply(e,[this].concat(a))).state={currentUser:null},c.unsubscribeFromAuth=null,c}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var c=this;this.unsubscribeFromAuth=f.onAuthStateChanged(function(){var e=Object(h.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,v(t);case 3:e.sent.onSnapshot((function(e){c.setState({currentUser:Object(p.a)({id:e.id},e.data())})})),e.next=8;break;case 7:c.setState({currentUser:t});case 8:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return Object(V.jsxs)("div",{className:"container",children:[Object(V.jsx)(W,{currentUser:this.state.currentUser}),Object(V.jsxs)(G.c,{children:[Object(V.jsx)(G.a,{exact:!0,path:"/",component:ac}),Object(V.jsx)(G.a,{exact:!0,path:"/hats",component:ic}),Object(V.jsx)(G.a,{exact:!0,path:"/shop",component:lc}),Object(V.jsx)(G.a,{exact:!0,path:"/signin",component:oc})]})]})}}]),t}(n.Component));t(78);r.a.render(Object(V.jsx)(a.a.StrictMode,{children:Object(V.jsx)(s.a,{children:Object(V.jsx)(pc,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.0756b208.chunk.js.map