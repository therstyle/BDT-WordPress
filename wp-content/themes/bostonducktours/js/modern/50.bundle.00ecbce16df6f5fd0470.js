(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{159:function(n,r,e){var t;
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
!function(){"use strict";var e={}.hasOwnProperty;function i(){for(var n=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)n.push(t);else if(Array.isArray(t)&&t.length){var o=i.apply(null,t);o&&n.push(o)}else if("object"===a)for(var s in t)e.call(t,s)&&t[s]&&n.push(s)}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0===(t=function(){return i}.apply(r,[]))||(n.exports=t)}()},484:function(n,r,e){var t=e(485);"string"==typeof t&&(t=[[n.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(105)(t,i);t.locals&&(n.exports=t.locals)},485:function(n,r,e){(n.exports=e(104)(!1)).push([n.i,".Image img {\n  display: block;\n  height: auto;\n  max-width: 100%; }\n",""])},791:function(n,r,e){"use strict";e.r(r);var t=e(0),i=e.n(t),a=e(1),o=e.n(a),s=e(159),l=e.n(s),p=(e(484),{align:o.a.oneOf(["","left","center","right"]),innerHTML:o.a.string}),u=function(n){var r=n.align,e=n.innerHTML;return e.trim()?i.a.createElement("div",{className:l()("Image",r),dangerouslySetInnerHTML:{__html:e}}):null};u.propTypes=p,u.defaultProps={align:"",innerHTML:""},r.default=u}}]);