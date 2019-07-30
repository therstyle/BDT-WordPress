(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{162:function(n,r,e){var t;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var e={}.hasOwnProperty;function i(){for(var n=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)n.push(t);else if(Array.isArray(t)&&t.length){var o=i.apply(null,t);o&&n.push(o)}else if("object"===a)for(var s in t)e.call(t,s)&&t[s]&&n.push(s)}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0===(t=function(){return i}.apply(r,[]))||(n.exports=t)}()},492:function(n,r,e){var t=e(493);"string"==typeof t&&(t=[[n.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(107)(t,i);t.locals&&(n.exports=t.locals)},493:function(n,r,e){(n.exports=e(106)(!1)).push([n.i,".Image img {\n  display: block;\n  height: auto;\n  max-width: 100%; }\n",""])},801:function(n,r,e){"use strict";e.r(r);var t=e(1),i=e.n(t),a=e(0),o=e.n(a),s=e(162),l=e.n(s),p=(e(492),{align:o.a.oneOf(["","left","center","right"]),innerHTML:o.a.string}),u=function(n){var r=n.align,e=n.innerHTML;return e.trim()?i.a.createElement("div",{className:l()("Image",r),dangerouslySetInnerHTML:{__html:e}}):null};u.propTypes=p,u.defaultProps={align:"",innerHTML:""},r.default=u}}]);