(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"1jzt":function(e,t,r){(function(a){var n,i;r("hEkN"),r("a1Th"),r("h7Nl"),r("Btvt"),r("8+KV"),i=void 0!==a?a:"undefined"!=typeof window?window:this,void 0===(n=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},r=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var r in t){if(!t.hasOwnProperty(r))return;e[r]=t[r]}})),e},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,r=String(e),a=r.length,n=-1,i="",o=r.charCodeAt(0);++n<a;){if(0===(t=r.charCodeAt(n)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===n&&48<=t&&t<=57||1===n&&48<=t&&t<=57&&45===o?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?r.charAt(n):"\\"+r.charAt(n)}return"#"+i},n=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,r,a){0===t&&document.body.focus(),a||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,r))},o=function(t,r,a,n){if(r.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:a,toggle:n}});document.dispatchEvent(i)}};return function(s,l){var c,d,u,f,p={cancelScroll:function(e){cancelAnimationFrame(f),f=null,e||o("scrollCancel",c)},animateScroll:function(a,s,l){p.cancelScroll();var d=r(c||t,l||{}),h="[object Number]"===Object.prototype.toString.call(a),m=h||!a.tagName?null:a;if(h||m){var g=e.pageYOffset;d.header&&!u&&(u=document.querySelector(d.header));var v,y,b,S,E,w,O,I,A=function(t){return t?(r=t,parseInt(e.getComputedStyle(r).height,10)+t.offsetTop):0;var r}(u),L=h?a:function(t,r,a,i){var o=0;if(t.offsetParent)for(;o+=t.offsetTop,t=t.offsetParent;);return o=Math.max(o-r-a,0),i&&(o=Math.min(o,n()-e.innerHeight)),o}(m,A,parseInt("function"==typeof d.offset?d.offset(a,s):d.offset,10),d.clip),x=L-g,C=n(),R=0,N=(v=x,b=(y=d).speedAsDuration?y.speed:Math.abs(v/1e3*y.speed),y.durationMax&&b>y.durationMax?y.durationMax:y.durationMin&&b<y.durationMin?y.durationMin:parseInt(b,10));0===e.pageYOffset&&e.scrollTo(0,0),O=a,I=d,h||history.pushState&&I.updateURL&&history.pushState({smoothScroll:JSON.stringify(I),anchor:O.id},document.title,O===document.documentElement?"#top":"#"+O.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(a,Math.floor(L),!1):(o("scrollStart",d,a,s),p.cancelScroll(!0),e.requestAnimationFrame((function t(r){var n,l,c;S||(S=r),R+=r-S,w=g+x*(l=E=1<(E=0===N?0:R/N)?1:E,"easeInQuad"===(n=d).easing&&(c=l*l),"easeOutQuad"===n.easing&&(c=l*(2-l)),"easeInOutQuad"===n.easing&&(c=l<.5?2*l*l:(4-2*l)*l-1),"easeInCubic"===n.easing&&(c=l*l*l),"easeOutCubic"===n.easing&&(c=--l*l*l+1),"easeInOutCubic"===n.easing&&(c=l<.5?4*l*l*l:(l-1)*(2*l-2)*(2*l-2)+1),"easeInQuart"===n.easing&&(c=l*l*l*l),"easeOutQuart"===n.easing&&(c=1- --l*l*l*l),"easeInOutQuart"===n.easing&&(c=l<.5?8*l*l*l*l:1-8*--l*l*l*l),"easeInQuint"===n.easing&&(c=l*l*l*l*l),"easeOutQuint"===n.easing&&(c=1+--l*l*l*l*l),"easeInOutQuint"===n.easing&&(c=l<.5?16*l*l*l*l*l:1+16*--l*l*l*l*l),n.customEasing&&(c=n.customEasing(l)),c||l),e.scrollTo(0,Math.floor(w)),function(t,r){var n=e.pageYOffset;if(t==r||n==r||(g<r&&e.innerHeight+n)>=C)return p.cancelScroll(!0),i(a,r,h),o("scrollStop",d,a,s),!(f=S=null)}(w,L)||(f=e.requestAnimationFrame(t),S=r)})))}}},h=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(d=t.target.closest(s))&&"a"===d.tagName.toLowerCase()&&!t.target.closest(c.ignore)&&d.hostname===e.location.hostname&&d.pathname===e.location.pathname&&/#/.test(d.href)){var r,n;try{r=a(decodeURIComponent(d.hash))}catch(t){r=a(d.hash)}if("#"===r){if(!c.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(r);(n=n||"#top"!==r?n:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var r=e.location.hash;r=r||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:r||e.pageYOffset},document.title,r||e.location.href)}}(c),p.animateScroll(n,d))}},m=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(a(history.state.anchor)))||p.animateScroll(t,null,{updateURL:!1})}};return p.destroy=function(){c&&(document.removeEventListener("click",h,!1),e.removeEventListener("popstate",m,!1),p.cancelScroll(),f=u=d=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";p.destroy(),c=r(t,l||{}),u=c.header?document.querySelector(c.header):null,document.addEventListener("click",h,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",m,!1)}(),p}}(i)}.apply(t,[]))||(e.exports=n)}).call(this,r("yLpj"))},"9H8W":function(e,t,r){},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),l=a(r("pVnL")),c=a(r("q1tI")),d=a(r("17x9")),u=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),g=function(e){var t=u(e),r=p(t);return m[r]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),c.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function O(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function A(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)})).join("")+"<img "+c+o+s+r+a+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,n=e.spreadProps,i=e.ariaHidden,o=c.default.createElement(R,(0,l.default)({src:t},n,{ariaHidden:i}));return r.length>1?c.default.createElement("picture",null,a(r),o):o},R=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:a,src:n},h,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var N=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!v&&b&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(v||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=p(t),m[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,g=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,S=e.itemProp,w=e.loading,A=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,l.default)({opacity:L?1:0,transition:N?"opacity "+y+"ms":"none"},s),T="boolean"==typeof v?"lightgray":v,M={transitionDelay:y+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},N&&M,{},s,{},f),j={title:t,alt:this.state.isVisible?"":r,style:V,className:p,itemProp:S};if(m){var Y=m,H=h(m);return c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),T&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&M)}),H.base64&&c.default.createElement(C,{ariaHidden:!0,src:H.base64,spreadProps:j,imageVariants:Y,generateSources:I}),H.tracedSVG&&c.default.createElement(C,{ariaHidden:!0,src:H.tracedSVG,spreadProps:j,imageVariants:Y,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,E(Y),c.default.createElement(R,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:A})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:r,title:t,loading:w},H,{imageVariants:Y}))}}))}if(g){var z=g,W=h(g),P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete P.display,c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},T&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:T,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},N&&M)}),W.base64&&c.default.createElement(C,{ariaHidden:!0,src:W.base64,spreadProps:j,imageVariants:z,generateSources:I}),W.tracedSVG&&c.default.createElement(C,{ariaHidden:!0,src:W.tracedSVG,spreadProps:j,imageVariants:z,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,E(z),c.default.createElement(R,{alt:r,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:A})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:r,title:t,loading:w},W,{imageVariants:z}))}}))}return null},t}(c.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),T=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});N.propTypes={resolutions:k,sizes:T,fixed:d.default.oneOfType([k,d.default.arrayOf(k)]),fluid:d.default.oneOfType([T,d.default.arrayOf(T)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var M=N;t.default=M},EK0E:function(e,t,r){"use strict";var a,n=r("dyZX"),i=r("CkkT")(0),o=r("KroJ"),s=r("Z6vF"),l=r("czNK"),c=r("ZD67"),d=r("0/R4"),u=r("s5qY"),f=r("s5qY"),p=!n.ActiveXObject&&"ActiveXObject"in n,h=s.getWeak,m=Object.isExtensible,g=c.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(d(e)){var t=h(e);return!0===t?g(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(u(this,"WeakMap"),e,t)}},b=e.exports=r("4LiD")("WeakMap",v,y,c,!0,!0);f&&p&&(l((a=c.getConstructor(v,"WeakMap")).prototype,y),s.NEED=!0,i(["delete","has","get","set"],(function(e){var t=b.prototype,r=t[e];o(t,e,(function(t,n){if(d(t)&&!m(t)){this._f||(this._f=new a);var i=this._f[e](t,n);return"set"==e?this:i}return r.call(this,t,n)}))})))},EXIE:function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d}));var a,n=r("1jzt"),i=r.n(n),o=r("dwco"),s=r.n(o);function l(){return s.a.polyfill(),a=new i.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function c(){if(!a)throw Error("Not founded SmoothScroll instance");return a.destroy(),a=null}function d(e){if(!a)throw Error("Not founded SmoothScroll instance");return a.animateScroll(e),a}},"G+iy":function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAC20lEQVQ4y6WS62/SUBiH+R/9YPxgoonZBxONmZq5C3EyYMCUjTEKtDAys+l0cTDpxsUJwymMTd2FMqAFShnlWihsAdy4zNMWZ6JmJtq8aU7fnue8T36t6Pw/LtHFqstf/wj/7+ROp3P5brCn3e78Gb64/9L8++R6ve7xblw+udlo+AOBdrv9ExZsre71K8NSKp2+6AgRgjVny3deoI6rIzKGYYS3IkHs9FuzX6K8dmdoftUJHsHW7m/y2ULhZv/w9buP6EKxBwtD9gliaHjcLYH6FJM0RZ63W93W2Wm9XsrnSoV8tcx0mo0xjVZ+455iQLYdDgt2op6Pw913f3RKYRixeRSoV211qpcdE1anwu5Vot4J1KNaWX9s31AuOm6JVTaPT7DjA2u3dMuoPBiDCMacZOEEC+EMKANRhhNVJFE1xlk4zprJmpk6VmNZC+ritIXAzhp1xWvURJ3AkbwhkjdGC3CsKBRYcxXjSg9eRXJQjFG/sp23znppF7K05I0LSVaN0TxClJF4BSYYY7RoBHCsYIjkhBO5I6J5OFkdQuZP2EoP9ge3n7i3Z1M1/WFucodQB2PaXZIni0a8ZEqwpkQFiTNGXsRE1sSL9kya6sHWde+4PzJLVmcOjgaXnA8X3o5YPWAajJemd1MPFlb6n1vHXFsIwYCmOVWTugIYhvVgi92pwWgELwExS/pkLlPntGNFc6IChWlQ4FAdlgEdQzQPBKXurdAPuKu3rs3wwSDxsvJjSOHbs6SOtVhG5tuboxsSl/9p4NCUZA3RAihusjt4EOLhVrMxsYSCD8OFjJe0+xQUymiwzIBsWnx7QOzamtohgLzg0oOd/jD/n4jSJCldeQ9iAEoAhjB6+nNcdUBNyqGXoxqx7+uzT2H9YRbGi0LaJpKVrfpSySQHEzg+tvrBnDoGYYBIpr4kZO92LHRDafMOjuvgVE21GdKFjmCgxsMIWZWvbVIkCeDv0zL/AXdg2JwAAAAASUVORK5CYII=","width":72,"height":72,"src":"/static/98dc9960dca9b7a0a4da8cbc4c459f03/e5b88/profile.png","srcSet":"/static/98dc9960dca9b7a0a4da8cbc4c459f03/e5b88/profile.png 1x,\\n/static/98dc9960dca9b7a0a4da8cbc4c459f03/e7bd6/profile.png 1.5x,\\n/static/98dc9960dca9b7a0a4da8cbc4c459f03/a12fc/profile.png 2x"}}},"site":{"siteMetadata":{"author":"Temple","introduction":"CAU SW 2020  무럭무럭 자라나는 코린이입니다 :)","social":{"twitter":"","github":"temple2001","medium":"","facebook":"","linkedin":"","instagram":""}}}}}')},INYr:function(e,t,r){"use strict";var a=r("XKFU"),n=r("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a(a.P+a.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},OGtf:function(e,t,r){var a=r("XKFU"),n=r("eeVq"),i=r("vhPU"),o=/"/g,s=function(e,t,r,a){var n=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),a(a.P+a.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},ZD67:function(e,t,r){"use strict";var a=r("3Lyj"),n=r("Z6vF").getWeak,i=r("y3w9"),o=r("0/R4"),s=r("9gX7"),l=r("SlkY"),c=r("CkkT"),d=r("aagx"),u=r("s5qY"),f=c(5),p=c(6),h=0,m=function(e){return e._l||(e._l=new g)},g=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};g.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var r=v(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,i){var c=e((function(e,a){s(e,c,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=a&&l(a,r,e[i],e)}));return a(c.prototype,{delete:function(e){if(!o(e))return!1;var r=n(e);return!0===r?m(u(this,t)).delete(e):r&&d(r,this._i)&&delete r[this._i]},has:function(e){if(!o(e))return!1;var r=n(e);return!0===r?m(u(this,t)).has(e):r&&d(r,this._i)}}),c},def:function(e,t,r){var a=n(i(t),!0);return!0===a?m(e).set(t,r):a[e._i]=r,e},ufstore:m}},dwco:function(e,t,r){r("Oyvg"),r("eM6i"),r("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var r,a=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:a.prototype.scroll||s,scrollIntoView:a.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,o=(r=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},a.prototype.scroll=a.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},a.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},a.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var r=f(this),a=r.getBoundingClientRect(),i=this.getBoundingClientRect();r!==t.body?(h.call(this,r,r.scrollLeft+i.left-a.left,r.scrollTop+i.top-a.top),"fixed"!==e.getComputedStyle(r).position&&e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+o<e.scrollHeight:"X"===t?e.clientWidth+o<e.scrollWidth:void 0}function d(t,r){var a=e.getComputedStyle(t,null)["overflow"+r];return"auto"===a||"scroll"===a}function u(e){var t=c(e,"Y")&&d(e,"Y"),r=c(e,"X")&&d(e,"X");return t||r}function f(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function p(t){var r,a,n,o,s=(i()-t.startTime)/468;o=s=s>1?1:s,r=.5*(1-Math.cos(Math.PI*o)),a=t.startX+(t.x-t.startX)*r,n=t.startY+(t.y-t.startY)*r,t.method.call(t.scrollable,a,n),a===t.x&&n===t.y||e.requestAnimationFrame(p.bind(e,t))}function h(r,a,o){var l,c,d,u,f=i();r===t.body?(l=e,c=e.scrollX||e.pageXOffset,d=e.scrollY||e.pageYOffset,u=n.scroll):(l=r,c=r.scrollLeft,d=r.scrollTop,u=s),p({scrollable:l,method:u,startTime:f,startX:c,startY:d,x:a,y:o})}}}}()},hEkN:function(e,t,r){"use strict";r("OGtf")("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},lbRd:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r("0mN4");var a=r("G+iy"),n=r("q1tI"),i=r.n(n),o=r("Wbzz"),s=r("9eSz"),l=r.n(s),c=(r("9H8W"),Object(n.forwardRef)((function(e,t){return i.a.createElement(o.StaticQuery,{query:d,render:function(e){var r=e.site.siteMetadata,a=r.author,n=r.social,s=r.introduction;return i.a.createElement("div",{ref:t,className:"bio"},i.a.createElement("div",{className:"author"},i.a.createElement("div",{className:"author-description"},i.a.createElement(l.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:a,style:{borderRadius:"100%"}}),i.a.createElement("div",{className:"author-name"},i.a.createElement("span",{className:"author-name-prefix"},"개발자 지망생 김동영입니다."),i.a.createElement(o.Link,{to:"/about",className:"author-name-content"},i.a.createElement("span",null,"@",a)),i.a.createElement("div",{className:"author-introduction"},s),i.a.createElement("p",{className:"author-socials"},n.instagram&&i.a.createElement("a",{href:"https://www.instagram.com/"+n.instagram},"◊ Instagram"),n.github&&i.a.createElement("a",{href:"https://github.com/"+n.github},"◊ GitHub"),n.medium&&i.a.createElement("a",{href:"https://medium.com/"+n.medium},"◊ Medium"),n.twitter&&i.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"◊ Twitter"),n.facebook&&i.a.createElement("a",{href:"https://www.facebook.com/"+n.facebook},"◊ Facebook"),n.linkedin&&i.a.createElement("a",{href:"https://www.linkedin.com/in/"+n.linkedin+"/"},"◊ LinkedIn"))))))},data:a})}))),d="2466699377"}}]);
//# sourceMappingURL=69ca9dfa785447e3d8b116b383997bcdc8df623a-759da22c06c30ab7ea35.js.map