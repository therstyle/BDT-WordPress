(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{129:function(n,r,e){var t;
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
!function(){"use strict";var e={}.hasOwnProperty;function a(){for(var n=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var i=typeof t;if("string"===i||"number"===i)n.push(t);else if(Array.isArray(t)&&t.length){var o=a.apply(null,t);o&&n.push(o)}else if("object"===i)for(var s in t)e.call(t,s)&&t[s]&&n.push(s)}}return n.join(" ")}n.exports?(a.default=a,n.exports=a):void 0===(t=function(){return a}.apply(r,[]))||(n.exports=t)}()},382:function(n,r,e){var t=e(383);"string"==typeof t&&(t=[[n.i,t,""]]);var a={insert:"head",singleton:!1};e(85)(t,a);t.locals&&(n.exports=t.locals)},383:function(n,r,e){(n.exports=e(84)(!1)).push([n.i,".Image img {\n  display: block;\n  height: auto;\n  max-width: 100%; }\n",""])},729:function(n,r,e){"use strict";e.r(r);var t=e(1),a=e.n(t),i=e(0),o=e.n(i),s=e(129),l=e.n(s),p=(e(382),{align:o.a.oneOf(["","left","center","right"]),innerHTML:o.a.string}),u=function(n){var r=n.align,e=n.innerHTML;return e.trim()?a.a.createElement("div",{className:l()("Image",r),dangerouslySetInnerHTML:{__html:e}}):null};u.propTypes=p,u.defaultProps={align:"",innerHTML:""},r.default=u}}]);