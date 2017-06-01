!function(){"use strict";function t(t){return parseFloat(t)||0}function e(e){return Array.prototype.slice.call(arguments,1).reduce(function(n,r){return n+t(e["border-"+r+"-width"])},0)}function n(e){for(var n={},r=0,i=["top","right","bottom","left"];r<i.length;r+=1){var o=i[r],s=e["padding-"+o];n[o]=t(s)}return n}function r(t){var e=t.getBBox();return u(0,0,e.width,e.height)}function i(r){var i=r.clientWidth,s=r.clientHeight;if(!i&&!s)return k;var a=getComputedStyle(r),c=n(a),h=c.left+c.right,f=c.top+c.bottom,d=t(a.width),l=t(a.height);if("border-box"===a.boxSizing&&(Math.round(d+h)!==i&&(d-=e(a,"left","right")+h),Math.round(l+f)!==s&&(l-=e(a,"top","bottom")+f)),!o(r)){var v=Math.round(d+h)-i,p=Math.round(l+f)-s;1!==Math.abs(v)&&(d-=v),1!==Math.abs(p)&&(l-=p)}return u(c.left,c.top,d,l)}function o(t){return t===document.documentElement}function s(t){return _?x(t)?r(t):i(t):k}function a(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return M(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}function u(t,e,n,r){return{x:t,y:e,width:n,height:r}}function c(t,e){return Math.floor(Math.random()*(e-t+1))+t}function h(){z.hue=q[c(0,5)]}function f(){return j(z)}function d(t){return Array.prototype.slice.call(t)}function l(t,e,n){void 0===n&&(n=4);var r=n;for(e--;r--;){var i="block",o=document.createElement("div");e?(i+=" parent",l(o,e,n)):(i+=" leaf",o.innerHTML='<span class="dimen"></span>',o.style.backgroundColor=f()),o.className=i,t.appendChild(o)}}function v(){B=0,D=d(W),h(),requestAnimationFrame(p)}function p(){var t=D.shift();t?(B&&2!==B||(t.style.maxWidth=c(30,50)+"%",2===B&&(t.style.minHeight=c(0,80)+"%")),~t.className.indexOf("leaf")&&(t.style.backgroundColor=f()),4==++B&&(B=0),requestAnimationFrame(p)):setTimeout(v,2500)}var b=function(){function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return"undefined"!=typeof Map?Map:function(){function e(){this.t=[]}var n={size:{}};return n.size.get=function(){return this.t.length},e.prototype.get=function(e){var n=t(this.t,e),r=this.t[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.t,e);~r?this.t[r][1]=n:this.t.push([e,n])},e.prototype.delete=function(e){var n=this.t,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.t,e)},e.prototype.clear=function(){this.t.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.t;n<r.length;n+=1){var i=r[n];t.call(e,i[1],i[0])}},Object.defineProperties(e.prototype,n),e}()}(),_="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,m=function(){return"function"==typeof requestAnimationFrame?requestAnimationFrame:function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),g=2,y=function(t,e){function n(){o&&(o=!1,t()),s&&i()}function r(){m(n)}function i(){var t=Date.now();if(o){if(t-a<g)return;s=!0}else o=!0,s=!1,setTimeout(r,e);a=t}var o=!1,s=!1,a=0;return i},w=["top","right","bottom","left","width","height","size","weight"],E="undefined"!=typeof navigator&&/Trident\/.*rv:11/.test(navigator.userAgent),O="undefined"!=typeof MutationObserver&&!E,A=function(){this.e=!1,this.n=!1,this.r=null,this.i=[],this.o=this.o.bind(this),this.refresh=y(this.refresh.bind(this),20)};A.prototype.addObserver=function(t){~this.i.indexOf(t)||this.i.push(t),this.e||this.s()},A.prototype.removeObserver=function(t){var e=this.i,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.e&&this.a()},A.prototype.refresh=function(){this.u()&&this.refresh()},A.prototype.u=function(){var t=this.i.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},A.prototype.s=function(){_&&!this.e&&(document.addEventListener("transitionend",this.o),window.addEventListener("resize",this.refresh),O?(this.r=new MutationObserver(this.refresh),this.r.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.n=!0),this.e=!0)},A.prototype.a=function(){_&&this.e&&(document.removeEventListener("transitionend",this.o),window.removeEventListener("resize",this.refresh),this.r&&this.r.disconnect(),this.n&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.r=null,this.n=!1,this.e=!1)},A.prototype.o=function(t){var e=t.propertyName;w.some(function(t){return!!~e.indexOf(t)})&&this.refresh()},A.getInstance=function(){return this.c||(this.c=new A),this.c},A.c=null;var M=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n+=1){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},k=u(0,0,0,0),x=function(){return"undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof SVGGraphicsElement}:function(t){return t instanceof SVGElement&&"function"==typeof t.getBBox}}(),R=function(t){this.broadcastWidth=0,this.broadcastHeight=0,this.h=u(0,0,0,0),this.target=t};R.prototype.isActive=function(){var t=s(this.target);return this.h=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},R.prototype.broadcastRect=function(){var t=this.h;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var T=function(t,e){var n=a(e);M(this,{target:t,contentRect:n})},C=function(t,e,n){if("function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.f=[],this.d=new b,this.l=t,this.v=e,this.p=n};C.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.d;e.has(t)||(e.set(t,new R(t)),this.v.addObserver(this),this.v.refresh())}},C.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.d;e.has(t)&&(e.delete(t),e.size||this.v.removeObserver(this))}},C.prototype.disconnect=function(){this.clearActive(),this.d.clear(),this.v.removeObserver(this)},C.prototype.gatherActive=function(){var t=this;this.clearActive(),this.d.forEach(function(e){e.isActive()&&t.f.push(e)})},C.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.p,e=this.f.map(function(t){return new T(t.target,t.broadcastRect())});this.l.call(t,e,t),this.clearActive()}},C.prototype.clearActive=function(){this.f.splice(0)},C.prototype.hasActive=function(){return this.f.length>0};var S="undefined"!=typeof WeakMap?new WeakMap:new b,F=function(t){if(!(this instanceof F))throw new TypeError("Cannot call a class as a function");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=A.getInstance(),n=new C(t,e,this);S.set(this,n)};["observe","unobserve","disconnect"].forEach(function(t){F.prototype[t]=function(){return(e=S.get(this))[t].apply(e,arguments);var e}});var I=function(){return"undefined"!=typeof ResizeObserver?ResizeObserver:F}(),j=("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t,e){!function(n,r){var i=function(){function t(t){var e=u(o(t.hue));return e<0&&(e=360+e),e}function e(t,e){if("monochrome"===e.hue)return 0;if("random"===e.luminosity)return u([0,100]);var n=s(t),r=n[0],i=n[1];switch(e.luminosity){case"bright":r=55;break;case"dark":r=i-10;break;case"light":i=55}return u([r,i])}function n(t,e,n){var r=i(t,e),o=100;switch(n.luminosity){case"dark":o=r+20;break;case"light":r=(o+r)/2;break;case"random":r=0,o=100}return u([r,o])}function r(t,e){switch(e.format){case"hsvArray":return t;case"hslArray":return l(t);case"hsl":var n=l(t);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var r=l(t),i=e.alpha||Math.random();return"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+i+")";case"rgbArray":return f(t);case"rgb":return"rgb("+f(t).join(", ")+")";case"rgba":var o=f(t),i=e.alpha||Math.random();return"rgba("+o.join(", ")+", "+i+")";default:return c(t)}}function i(t,e){for(var n=a(t).lowerBounds,r=0;r<n.length-1;r++){var i=n[r][0],o=n[r][1],s=n[r+1][0],u=n[r+1][1];if(e>=i&&e<=s){var c=(u-o)/(s-i);return c*e+(o-c*i)}}return 0}function o(t){if("number"==typeof parseInt(t)){var e=parseInt(t);if(e<360&&e>0)return[e,e]}if("string"==typeof t)if(b[t]){var n=b[t];if(n.hueRange)return n.hueRange}else if(t.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var r=d(t)[0];return[r,r]}return[0,360]}function s(t){return a(t).saturationRange}function a(t){t>=334&&t<=360&&(t-=360);for(var e in b){var n=b[e];if(n.hueRange&&t>=n.hueRange[0]&&t<=n.hueRange[1])return b[e]}return"Color not found"}function u(t){if(null===p)return Math.floor(t[0]+Math.random()*(t[1]+1-t[0]));var e=t[1]||1,n=t[0]||0,r=(p=(9301*p+49297)%233280)/233280;return Math.floor(n+r*(e-n))}function c(t){function e(t){var e=t.toString(16);return 1==e.length?"0"+e:e}var n=f(t);return"#"+e(n[0])+e(n[1])+e(n[2])}function h(t,e,n){var r=n[0][0],i=n[n.length-1][0],o=n[n.length-1][1],s=n[0][1];b[t]={hueRange:e,lowerBounds:n,saturationRange:[r,i],brightnessRange:[o,s]}}function f(t){var e=t[0];0===e&&(e=1),360===e&&(e=359),e/=360;var n=t[1]/100,r=t[2]/100,i=Math.floor(6*e),o=6*e-i,s=r*(1-n),a=r*(1-o*n),u=r*(1-(1-o)*n),c=256,h=256,f=256;switch(i){case 0:c=r,h=u,f=s;break;case 1:c=a,h=r,f=s;break;case 2:c=s,h=r,f=u;break;case 3:c=s,h=a,f=r;break;case 4:c=u,h=s,f=r;break;case 5:c=r,h=s,f=a}return[Math.floor(255*c),Math.floor(255*h),Math.floor(255*f)]}function d(t){t=3===(t=t.replace(/^#/,"")).length?t.replace(/(.)/g,"$1$1"):t;var e=parseInt(t.substr(0,2),16)/255,n=parseInt(t.substr(2,2),16)/255,r=parseInt(t.substr(4,2),16)/255,i=Math.max(e,n,r),o=i-Math.min(e,n,r),s=i?o/i:0;switch(i){case e:return[(n-r)/o%6*60||0,s,i];case n:return[60*((r-e)/o+2)||0,s,i];case r:return[60*((e-n)/o+4)||0,s,i]}}function l(t){var e=t[0],n=t[1]/100,r=t[2]/100,i=(2-n)*r;return[e,Math.round(n*r/(i<1?i:2-i)*1e4)/100,i/2*100]}function v(t){for(var e=0,n=0;n!==t.length&&!(e>=Number.MAX_SAFE_INTEGER);n++)e+=t.charCodeAt(n);return e}var p=null,b={};!function(){h("monochrome",null,[[0,0],[100,0]]),h("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),h("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),h("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),h("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),h("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),h("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),h("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}();var _=function(i){if(void 0!==(i=i||{}).seed&&null!==i.seed&&i.seed===parseInt(i.seed,10))p=i.seed;else if("string"==typeof i.seed)p=v(i.seed);else{if(void 0!==i.seed&&null!==i.seed)throw new TypeError("The seed value must be an integer or string");p=null}var o,s,a;if(null!==i.count&&void 0!==i.count){var u=i.count,c=[];for(i.count=null;u>c.length;)p&&i.seed&&(i.seed+=1),c.push(_(i));return i.count=u,c}return o=t(i),s=e(o,i),a=n(o,s,i),r([o,s,a],i)};return _}();t&&t.exports&&(e=t.exports=i),e.randomColor=i}()})),q=["red","pink","blue","orange","purple","monochrome"],z={luminosity:"light",hue:q[c(0,5)]},L=new I(function(t){for(var e=0,n=t;e<n.length;e+=1){var r=n[e],i=r.contentRect,o=i.width.toFixed(2)+" x "+i.height.toFixed(2);r.target.firstElementChild.textContent=o}}),B=0,D=[];l(document.getElementById("container"),2);for(var W=document.querySelectorAll(".block"),G=0,H=d(document.querySelectorAll(".leaf"));G<H.length;G+=1){var N=H[G];L.observe(N)}setTimeout(v,2e3)}();
//# sourceMappingURL=app.js.map