(self.webpackChunkmandlee_github_io=self.webpackChunkmandlee_github_io||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(!i(e[s],o[s]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],o.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(e[s]!==o[s])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!i(e[l[s]],o[l[s]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(p,"canUseDOM",c),p}}},6389:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Se}});var r,a,i,o,c=n(7294),s=n(6125),l=function(){return c.createElement("header",null,c.createElement("div",{className:"flex"},c.createElement("div",{className:"flex-grow"},c.createElement("div",{className:"w-16 h-16"},c.createElement(s.S,{src:"../images/avatar.png",className:" rounded-full",placeholder:"blurred",alt:"Bence Mandli",__imageData:n(3588)}))),c.createElement("div",{className:"flex-none"},c.createElement("p",null,"Hungary - Budapest"),c.createElement("a",{href:"mailto:mandli.bence@gmail.com",className:"block hover:text-indigo-500"},"mandli.bence@gmail.com"),c.createElement("a",{href:"tel:+36306635183",className:"block hover:text-indigo-500"},"+36 30 663 5183"))),c.createElement("h1",{className:"text-4xl font-medium py-4"},"Bence Mándli"),c.createElement("p",{className:"text-xl"},"Senior Frontend Developer with 7 years of experience in frontend development. Skilled in modern Javascript frameworks like React.js and have a lot of experience with ES6 Javascript. While I enjoy all aspects of my job, I think one my favorite part of a project is creating the sitebuild and style, because the results are immediately visible to anyone."))},u=[{company:"EPAM Systems",title:"Senior Frontend Developer",date:"Nov 2020 - Present",description:"I'm currently working as a UIE developer. My job consist of implementing new features and maintaining existing websites for key customer in hospitality industry."},{company:"Hearsay Systems",title:"Senior Frontend Developer",date:"Apr 2019 - Nov 2020",description:"I've worked as a Frontend developer on Sites product. Hearsay Sites is the easiest and fastest way for creating beautiful and high converting agent websites for the financial services industry. My main responsibilities were developing next generation of Sites product, implementing new features and maintaining existing websites for key financial customers."},{company:"HBO Europe",title:"Senior Frontend Developer",date:"May 2017 - Mar 2019",description:"I worked as a frontend developer on HBO GO's web platform through Attrecto Next Tech Digital Solutions. HBO GO is a web streaming platform, which is available in more than 10 countries in Europe. I was part of the team, which developed the new version of HBO GO's frontend. My main responsibilities were implementing new features and coding the final look and feel of the site."},{company:"Attrecto Next Tech Digital Solutions",title:"Frontend Developer",date:"Dec 2014 - Mar 2019",description:"Developed individual executive information systems with Javascript language, AngularJS framework and creating sitebuild for the screens with Sass, CSS. Participation in international, multi-team agile development projects, for US customer. The aim of these projects to visualize the data with charts to help customers to make a right decision."},{company:"Szintézis Informatika Zrt.",title:"Android Developer Intern",date:"Apr 2014 - Sep 2014",description:"Developed an Android application for Széchenyi István University that presented the university's infrastructure. My responsibilities included software design, implementation, testing and writing documentation."}],p=function(){return c.createElement(c.Fragment,null,c.createElement("section",{id:"experience"},c.createElement("h2",null,"Work Experience"),u.map((function(e){var t=e.title,n=e.date,r=e.company,a=e.description;return c.createElement("article",{className:"md:grid grid-cols-3 gap-4 py-2"},c.createElement("div",{className:""},c.createElement("time",{className:"leading-8"},n)),c.createElement("div",{className:"col-span-2"},c.createElement("h3",{className:"text-xl leading-8 font-semibold text-indigo-500"},r),c.createElement("h4",{className:"text-l pb-1 font-medium text-slate-500"},t),c.createElement("p",{className:"tracking-wide"},a)))}))),c.createElement("section",{id:"education"},c.createElement("h2",null,"Education"),c.createElement("article",{className:"md:grid grid-cols-3 gap-4 py-2"},c.createElement("div",{className:""},c.createElement("time",{className:"leading-8"},"Sep 2011 - Jan 2016")),c.createElement("div",{className:"col-span-2"},c.createElement("h3",{className:"text-xl leading-8 font-semibold text-indigo-500"},"Széchenyi István University"),c.createElement("h4",{className:"text-l pb-1 font-medium text-slate-500"},"Bachelor's Degree, Engineering Information Technology"),c.createElement("p",{className:"tracking-wide"},"Thesis: Creation of an Android application promoting and supporting healthy nutrition and lifestyle. The purpose of the project was to showcase the newly released Material Design elements and the steps required to create and Android Application from scratch.")))))},f=["HTML5","JavaScript/ES 6","Sass/CSS3","React JS","Next.js","Jest","Enzyme","Cypress","MUI Styles"],d=function(){return c.createElement("section",{id:"skills"},c.createElement("h2",{className:"text-2xl pb-4 font-medium"},"Skills"),c.createElement("ul",{className:""},f.map((function(e){return c.createElement("li",{key:e,className:"bg-slate-100 hover:bg-indigo-500 hover:text-slate-100 mr-2 mb-2 py-2 px-10 whitespace-nowrap inline-block text-xs"},e)}))))},m=n(5697),h=n.n(m),y=n(4839),g=n.n(y),b=n(2993),v=n.n(b),w=n(6494),T=n.n(w),E="bodyAttributes",A="htmlAttributes",S="titleAttributes",x={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(x).map((function(e){return x[e]})),"charset"),C="cssText",k="href",N="http-equiv",j="innerHTML",I="itemprop",M="name",P="property",H="rel",L="src",D="target",B={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},W="defaultTitle",R="defer",J="encodeSpecialCharacters",q="onChangeClientState",F="titleTemplate",z=Object.keys(B).reduce((function(e,t){return e[B[t]]=t,e}),{}),Y=[x.NOSCRIPT,x.SCRIPT,x.STYLE],K="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=ae(e,x.TITLE),n=ae(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ae(e,W);return t||r||void 0},ee=function(e){return ae(e,q)||function(){}},te=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},ne=function(e,t){return t.filter((function(e){return void 0!==e[x.BASE]})).map((function(e){return e[x.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},re=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&le("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||n===H&&"canonical"===e[n].toLowerCase()||s===H&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==j&&c!==C&&c!==I||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],s=T()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},ae=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ie=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ie(e)}),0)}),oe=function(e){return clearTimeout(e)},ce="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ie:n.g.requestAnimationFrame||ie,se="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||oe:n.g.cancelAnimationFrame||oe,le=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ue=null,pe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,p=e.title,f=e.titleAttributes;me(x.BODY,r),me(x.HTML,a),de(p,f);var d={baseTag:he(x.BASE,n),linkTags:he(x.LINK,i),metaTags:he(x.META,o),noscriptTags:he(x.NOSCRIPT,c),scriptTags:he(x.SCRIPT,l),styleTags:he(x.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,m,h)},fe=function(e){return Array.isArray(e)?e.join(""):e},de=function(e,t){void 0!==e&&document.title!==e&&(document.title=fe(e)),me(x.TITLE,t)},me=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(K),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);a.length===i.length?n.removeAttribute(K):n.getAttribute(K)!==o.join(",")&&n.setAttribute(K,o.join(","))}},he=function(e,t){var n=document.head||document.querySelector(x.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(K,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ye=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)},be=function(e,t,n){switch(e){case x.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[K]=!0,a=ge(n,r),[c.createElement(x.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ye(n),i=fe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+_(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+_(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case E:case A:return{toComponent:function(){return ge(t)},toString:function(){return ye(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[K]=!0,r);return Object.keys(t).forEach((function(e){var n=B[e]||e;if(n===j||n===C){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===j||e===C)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+_(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ve=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,p=void 0===u?"":u,f=e.titleAttributes;return{base:be(x.BASE,t,r),bodyAttributes:be(E,n,r),htmlAttributes:be(A,a,r),link:be(x.LINK,i,r),meta:be(x.META,o,r),noscript:be(x.NOSCRIPT,c,r),script:be(x.SCRIPT,s,r),style:be(x.STYLE,l,r),title:be(x.TITLE,{title:p,titleAttributes:f},r)}},we=g()((function(e){return{baseTag:ne([k,D],e),bodyAttributes:te(E,e),defer:ae(e,R),encode:ae(e,J),htmlAttributes:te(A,e),linkTags:re(x.LINK,[H,k],e),metaTags:re(x.META,[M,O,N,P,I],e),noscriptTags:re(x.NOSCRIPT,[j],e),onChangeClientState:ee(e),scriptTags:re(x.SCRIPT,[L,j],e),styleTags:re(x.STYLE,[C],e),title:$(e),titleAttributes:te(S,e)}}),(function(e){ue&&se(ue),e.defer?ue=ce((function(){pe(e,(function(){ue=null}))})):(pe(e),ue=null)}),ve)((function(){return null})),Te=(a=we,o=i=function(e){function t(){return G(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!v()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case x.SCRIPT:case x.NOSCRIPT:return{innerHTML:t};case x.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return V({},r,((t={})[n.type]=[].concat(r[n.type]||[],[V({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case x.TITLE:return V({},a,((t={})[r.type]=o,t.titleAttributes=V({},i),t));case x.BODY:return V({},a,{bodyAttributes:V({},i)});case x.HTML:return V({},a,{htmlAttributes:V({},i)})}return V({},a,((n={})[r.type]=V({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=V({},t);return Object.keys(e).forEach((function(t){var r;n=V({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)}(Z(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case x.LINK:case x.META:case x.NOSCRIPT:case x.SCRIPT:case x.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Z(e,["children"]),r=V({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},Q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=ve({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);Te.renderStatic=Te.rewind;var Ee=Te,Ae=function(){return c.createElement(Ee,null,c.createElement("html",{lang:"en"}),c.createElement("meta",{charset:"utf-8"}),c.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),c.createElement("title",null,"Bence Mándli - Senior Frontend Developer"),c.createElement("meta",{name:"identifier-url",content:"https://mandlee.github.io/"}),c.createElement("meta",{name:"title",content:"Bence Mándli"}),c.createElement("meta",{name:"description",content:"Focused Senior Frontend Developer with 6 years of experience in frontend development with a wide range of software and services for multiple clients. Skilled in modern Javascript frameworks like Angular.JS, Vue.js and have a lot of experience with ES6(7) Javascript."}),c.createElement("meta",{name:"keywords",content:"javascript, es6, css, scss, sitebuild, react.js, d3js"}),c.createElement("meta",{name:"author",content:"Bence Mándli"}),c.createElement("meta",{property:"og:type",content:"profile"}),c.createElement("meta",{property:"og:title",content:"Bence Mándli"}),c.createElement("meta",{property:"og:url",content:"https://mandlee.github.io/"}),c.createElement("meta",{property:"og:image",content:"https://mandlee.github.io/img/new_avatar.png"}),c.createElement("meta",{property:"profile:first_name",content:"Bence"}),c.createElement("meta",{property:"profile:last_name",content:"Mándli"}),c.createElement("meta",{name:"twitter:card",content:"summary"}),c.createElement("meta",{name:"twitter:site",content:"https://mandlee.github.io/"}),c.createElement("meta",{name:"twitter:title",content:"Bence Mandli - Frontend Developer"}),c.createElement("meta",{name:"twitter:description",content:"Focused Senior Frontend Developer with 6 years of experience in frontend development with a wide range of software and services for multiple clients."}),c.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "http://schema.org/",\n                        "@type": "Person",\n                        "name": "Bence Mándli",\n                        "url": "https://mandlee.github.io/",\n                        "image": "https://mandlee.github.io/img/new_avatar.png",\n                        "sameAs": "https://www.linkedin.com/in/bencemandli/",\n                        "jobTitle": "Senior Frontend Developer"\n                    }\n                '))},Se=function(){return c.createElement(c.Fragment,null,c.createElement(Ae,null),c.createElement("div",{className:"bg-slate-100 md:p-8 min-h-screen"},c.createElement("div",{className:"container mx-auto p-4 md:p-16 bg-white max-w-4xl"},c.createElement(l,null),c.createElement(p,null),c.createElement(d,null)),c.createElement("footer",null,c.createElement("p",{className:"text-center py-4 text-xs"},"Handcrafted with Gatsby and Tailwind"))))}},3588:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFWklEQVQ4yy2QaVDUZRyA/92ZigHCgkSARwKC3HhUQAkBnoAugguti5wCgizHArIo4IUgiAquyOHC7rIHu3/WhRVxwmZqtBpspimrsWZqbDrG+tD0sQ9Ps2sfnnnn/X143uf3Cj3nejjXeZbTJ7tQt5xAVd+EulVNa1MzKmUjzY0qVPWNNNYpqSwtJT0lmaA1/rz0wvN4LHuF1SuWERHiT2piBDsSwhGGrgxxuX+A/p4+us+ep+tUB20tLbQ0qWioPU52RjqxoRtJjo8jMyWJ2HWBbA4JIGHTBpJiw2gozWPBcoOlRZEH8yaE0RujDGuGuTb4TNx7oYfe7gt0qNWkxETi+/KLeD3/HMHLX2GZIODn6cE7MaHs2B5NZlICigM7KS/IpuTQPo7k70XQT+rQjmsZGxljWHOdKwOXuTakofjgATZ7L6dgWwRn8tIYrsihec9WAle+StAaH3a/t8XNruREtzjj3XjStscg6CYmMRmMuM7x0THGRkbpu9hHY0EWC+dr+cHYx6/iII/1vXw+UI+mZBd+q5aT9nYcuelJSNOTyM1MJjczBWl6MoJucgKT0YTZaHJLDXoD5zq7uNlUxNNZDb/e1vLk1gg/idd5qGnHeaKQ+GAJKVui+DBrB/l73kO2b8cz9qYiWC1mDHo9tmkbpqkpt3ygpwdTWznfmwb5xWng6V0zP9pG+eRyO/NqBenhb/L+9hiOSNOR56ShkKajkGagkGYiOOwiU3o9otXGtNmCxTLNcG83tlPHsHU2sNh/kt9mJ3CeVjJ4VIalsZCy5M2UZLzNkbydFB/MpCR/N2WyPZTJ9iI4Zx2YDAZ3oWgVsVhsWIcu8cXVNu4PdvGgX81Xl09yu60Su/oYixdqMdUdQlevQC7NpFy2l4rCfVTKs6mU5yA452YxTxmwWqzcEu1MW2eYG+rn0fVz/D1r4Il+kKXeTj7tUvKLbpCHgx3caS/F1laFXLqTyg+zqTqcQ02RlJojuQi3nXMY9TpsFhsOuwPrtMityQm+Gu7lL3GC724OcPesigc9J/jdPMz97gYma/IZqFZQnL+H6sP7qSnK5XhJHnWl+c+EOu1N7DY7DvssM1aRKZOVT3U3+NnUz91TddxrqEFXksvS0AmWrrRQK01DcXA31fL9HCuScrwkH2WZjPryAgTHjIh2bJQ5h9Nd6BK61hcntfwoavjDNsKjnk6WLqj4dvIsBpWciv1pVBRkcUxxgNriPJSlMhoqCmk6KkcwaMcx6g3MO+/gmHG4S20WK0ajhcXxSzy8eZ7vzFdZ7GvietV+JpSHaJJnUVaQTY0i1y10lblkqqrDCFaziTnHnLvwlmtt0YXN/ZefW8a5099Kd3EWrQdSGKuT8dlQO1eqpJQd3E192SEaKwqoLy+k8aic5uoihDm7HafDyYJzno8WFpixWOlsP09HrZLHooYnd818bdHwxVg3X2ov8kh/kfuXlKRGxhAdGktRbhYt1QrUdcW01hQj2KfNzM/OYdKZaW85w7boD5Cs2kTi+q08Ekf595t7/LN0h6cfW/nznpHHtmGqcvLwWhaCx8sB+K4MJjFiC7KsLFRVxQgdbV2kvpNNWPA2JB5hSFaGEuQTTYBXFKlxGWjPnOa+foTF0WtcbW7m/dg0vF57izWrNrLm9Q34eazHZ8U6JB4bCAuKRtgYuA2f5aEEeEYS7BNDiG88wT5xhPjGEfB6FJIVEWzwj2etJJbVr4UjWbmJQO8IAjzD/yeMNzzD3TP/VaEI6/234mKdXyJrJQluoYu1vvGs80tgvV8iQT6xblx310OB3lG84R1JgOemZ1KvCAK8Iwn0ieI/IQuk5qL++hQAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/a9dfc1fbbc19353d9867e2025f53aceb/e651c/avatar.png","srcSet":"/static/a9dfc1fbbc19353d9867e2025f53aceb/7c5b8/avatar.png 173w,\\n/static/a9dfc1fbbc19353d9867e2025f53aceb/6ed2a/avatar.png 345w,\\n/static/a9dfc1fbbc19353d9867e2025f53aceb/e651c/avatar.png 690w","sizes":"(min-width: 690px) 690px, 100vw"},"sources":[{"srcSet":"/static/a9dfc1fbbc19353d9867e2025f53aceb/1403b/avatar.webp 173w,\\n/static/a9dfc1fbbc19353d9867e2025f53aceb/35a22/avatar.webp 345w,\\n/static/a9dfc1fbbc19353d9867e2025f53aceb/0b79c/avatar.webp 690w","type":"image/webp","sizes":"(min-width: 690px) 690px, 100vw"}]},"width":690,"height":696}')}}]);
//# sourceMappingURL=component---src-pages-index-js-f3b3ea88a1bc215b963f.js.map