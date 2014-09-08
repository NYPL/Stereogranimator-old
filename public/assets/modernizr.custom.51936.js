/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-canvas-iepp-cssclasses-load
 */
window.Modernizr=function(a,b,c){function d(a,b){return!!~(""+a).indexOf(b)}function e(a,b){return typeof a===b}function f(a,b){return g(prefixes.join(a+";")+(b||""))}function g(a){o.cssText=a}var h="2.0.6",i={},j=!0,k=b.documentElement,l=b.head||b.getElementsByTagName("head")[0],m="modernizr",n=b.createElement(m),o=n.style,p,q=Object.prototype.toString,r={},s={},t={},u=[],v,w={}.hasOwnProperty,x;!e(w,c)&&!e(w.call,c)?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&e(a.constructor.prototype[b],c)},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")};for(var y in r)x(r,y)&&(v=y.toLowerCase(),i[v]=r[y](),u.push((i[v]?"":"no-")+v));return g(""),n=p=null,a.attachEvent&&function(){var a=b.createElement("div");return a.innerHTML="<elem></elem>",a.childNodes.length!==1}()&&function(a,b){function d(a){var b=-1;while(++b<h)a.createElement(g[b])}a.iepp=a.iepp||{};var e=a.iepp,f=e.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",g=f.split("|"),h=g.length,i=new RegExp("(^|\\s)("+f+")","gi"),j=new RegExp("<(/*)("+f+")","gi"),k=/^\s*[\{\}]\s*$/,l=new RegExp("(^|[^\\n]*?\\s)("+f+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),m=b.createDocumentFragment(),n=b.documentElement,o=n.firstChild,p=b.createElement("body"),q=b.createElement("style"),r=/print|all/,s;e.getCSS=function(a,b){if(a+""===c)return"";var d=-1,f=a.length,g,h=[];while(++d<f){g=a[d];if(g.disabled)continue;b=g.media||b,r.test(b)&&h.push(e.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},e.parseCSS=function(a){var b=[],c;while((c=l.exec(a))!=null)b.push(((k.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(i,"$1.iepp_$2")+c[4]);return b.join("\n")},e.writeHTML=function(){var a=-1;s=s||b.body;while(++a<h){var c=b.getElementsByTagName(g[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+g[a])}m.appendChild(s),n.appendChild(p),p.className=s.className,p.id=s.id,p.innerHTML=s.innerHTML.replace(j,"<$1font")},e._beforePrint=function(){q.styleSheet.cssText=e.parseCSS(e.getCSS(b.styleSheets,"all")),e.writeHTML()},e.restoreHTML=function(){p.innerHTML="",n.removeChild(p),n.appendChild(s)},e._afterPrint=function(){e.restoreHTML(),q.styleSheet.cssText=""},d(b),d(m),e.disablePP||(o.insertBefore(q,o.firstChild),q.media="print",q.className="iepp-printshim",a.attachEvent("onbeforeprint",e._beforePrint),a.attachEvent("onafterprint",e._afterPrint))}(a,b),i._version=h,k.className=k.className.replace(/\bno-js\b/,"")+(j?" js "+u.join(" "):""),i}(this,this.document),function(a,b,c){function d(a){return!a||a=="loaded"||a=="complete"}function e(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&h()}function f(a){var c=b.createElement("script"),f;c.src=a.s,c.onreadystatechange=c.onload=function(){!f&&d(c.readyState)&&(f=1,e(),c.onload=c.onreadystatechange=null)},m(function(){f||(f=1,e())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function g(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var f=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,e()):f(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){e()},0)):f(a)}},0)};f(c)}else c.onload=function(){d||(d=1,m(function(){e()},0))},a.e&&c.onload();m(function(){d||(d=1,e())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function h(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?g(a):f(a)},0):(a(),e()):q=0}function i(a,c,f,g,i,j){function k(){!o&&d(l.readyState)&&(r.r=o=1,!q&&e(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:f,s:c,e:j};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=f),l.onload=l.onreadystatechange=k,a=="img"?l.onerror=k:a=="script"&&(l.onerror=function(){r.e=r.r=1,h()}),p.splice(g,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,e())},H.errorTimeout)}function j(a,b,c){var d=b=="c"?z:y;return q=0,b=b||"j",C(a)?i(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=H;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function b(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function d(a,d,e,f,g){var h=b(a),i=h.autoCallback;if(!h.bypass){d&&(d=D(d)?d:d[a]||d[f]||d[a.split("/").pop().split("?")[0]]);if(h.instead)return h.instead(a,d,e,f,g);e.load(h.url,h.forceCSS||!h.forceJS&&/css$/.test(h.url)?"c":c,h.noexec),(D(d)||D(i))&&e.load(function(){k(),d&&d(h.origUrl,g,f),i&&i(h.origUrl,g,f)})}}function e(a,b){function c(a){if(C(a))d(a,h,b,0,e);else if(B(a))for(i in a)a.hasOwnProperty(i)&&d(a[i],h,b,i,e)}var e=!!a.test,f=e?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var f,g,h=this.yepnope.loader;if(C(a))d(a,0,h,0);else if(A(a))for(f=0;f<a.length;f++)g=a[f],C(g)?d(g,0,h,0):A(g)?H(g):B(g)&&e(g,h);else B(a)&&e(a,h)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=k()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};