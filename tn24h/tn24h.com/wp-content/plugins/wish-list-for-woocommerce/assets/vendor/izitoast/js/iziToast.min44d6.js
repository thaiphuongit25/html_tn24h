!function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.iziToast=e(t)}("undefined"!=typeof global?global:window||this.window||this.global,function(t){"use strict";var e={},o="iziToast",n=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),i=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),s="undefined"!=typeof InstallTrigger,a="ontouchstart"in document.documentElement,r=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],l={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-check"},warning:{color:"yellow",icon:"ico-warning"},error:{color:"red",icon:"ico-error"}},d=568,c={},u={id:null,"class":"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,rtl:!1,position:"bottomRight",target:"",targetFirst:!0,toastOnce:!1,timeout:5e3,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",animateInside:!0,buttons:{},transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var p=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o};p.prototype=window.Event.prototype,window.CustomEvent=p}var m=function(t,e,o){if("[object Object]"===Object.prototype.toString.call(t))for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(o,t[n],n,t);else if(t)for(var i=0,s=t.length;s>i;i++)e.call(o,t[i],i,t)},g=function(t,e){var o={};return m(t,function(e,n){o[n]=t[n]}),m(e,function(t,n){o[n]=e[n]}),o},f=function(t){var e=document.createDocumentFragment(),o=document.createElement("div");for(o.innerHTML=t;o.firstChild;)e.appendChild(o.firstChild);return e},v=function(t){return"#"==t.substring(0,1)||"rgb"==t.substring(0,3)||"hsl"==t.substring(0,3)},h=function(){return{move:function(t,e,o,n){var a,r=.3,l=180;t.style.transform="translateX("+n+"px)",n>0?(a=(l-n)/l,r>a&&e.hide(g(o,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),t,"drag")):(a=(l+n)/l,r>a&&e.hide(g(o,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),t,"drag")),t.style.opacity=a,r>a&&((i||s)&&(t.style.left=n+"px"),t.parentNode.style.opacity=r,this.stopMoving(t,null))},startMoving:function(t,e,o,n){n=n||window.event;var i=a?n.touches[0].clientX:n.clientX,s=t.style.transform.replace("px)","");s=s.replace("translateX(","");var r=i-s;t.classList.remove(o.transitionIn),t.classList.remove(o.transitionInMobile),t.style.transition="",a?document.ontouchmove=function(n){n.preventDefault(),n=n||window.event;var i=n.touches[0].clientX,s=i-r;h.move(t,e,o,s)}:document.onmousemove=function(n){n.preventDefault(),n=n||window.event;var i=n.clientX,s=i-r;h.move(t,e,o,s)}},stopMoving:function(t,e){a?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.transition="transform 0.4s ease, opacity 0.4s ease",t.style.opacity="",t.style.transform="",window.setTimeout(function(){t.style.transition=""},400)}}}(),y=function(t,e,n){var i=t.querySelector("."+o+"-progressbar div"),s=null,a={Paused:!1,Reseted:!1,Closed:!1},r={hideEta:null,maxHideTime:null,currentTime:(new Date).getTime(),updateProgress:function(){if(a.Paused=!!t.classList.contains(o+"-paused"),a.Reseted=!!t.classList.contains(o+"-reseted"),a.Closed=!!t.classList.contains(o+"-closed"),a.Reseted&&(clearInterval(s),i.style.width="100%",y(t,e,n),t.classList.remove(o+"-reseted")),a.Closed&&(clearInterval(s),t.classList.remove(o+"-closed")),!a.Paused&&!a.Reseted&&!a.Closed){r.currentTime=r.currentTime+10;var l=(r.hideEta-r.currentTime)/r.maxHideTime*100;i.style.width=l+"%",(Math.round(l)<0||"object"!=typeof t)&&(clearInterval(s),n.apply())}}};e.timeout&&(r.maxHideTime=parseFloat(e.timeout),r.hideEta=(new Date).getTime()+r.maxHideTime,s=setInterval(r.updateProgress,10))};return e.destroy=function(){m(document.querySelectorAll("."+o+"-wrapper"),function(t,e){t.remove()}),m(document.querySelectorAll("."+o),function(t,e){t.remove()}),document.removeEventListener(o+"-opened",{},!1),document.removeEventListener(o+"-opening",{},!1),document.removeEventListener(o+"-closing",{},!1),document.removeEventListener(o+"-closed",{},!1),c={}},e.settings=function(t){e.destroy(),c=t,u=g(u,t||{})},m(l,function(t,o){e[o]=function(e){var o=g(c,e||{});o=g(t,o||{}),this.show(o)}}),e.hide=function(t,e,i){var s=g(u,t||{});i=i||!1,"object"!=typeof e&&(e=document.querySelector(e)),e.classList.add(o+"-closed"),(s.transitionIn||s.transitionInMobile)&&(e.classList.remove(s.transitionIn),e.classList.remove(s.transitionInMobile)),n||window.innerWidth<=d?s.transitionOutMobile&&e.classList.add(s.transitionOutMobile):s.transitionOut&&e.classList.add(s.transitionOut);var a=e.parentNode.offsetHeight;e.parentNode.style.height=a+"px",e.style.pointerEvents="none",(!n||window.innerWidth>d)&&(e.parentNode.style.transitionDelay="0.2s");try{s.closedBy=i;var r=new CustomEvent(o+"-closing",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(r)}catch(l){console.warn(l)}setTimeout(function(){e.parentNode.style.height="0px",e.parentNode.style.overflow="",window.setTimeout(function(){e.parentNode.remove();try{s.closedBy=i;var t=new CustomEvent(o+"-closed",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(n){console.warn(n)}"undefined"!=typeof s.onClosed&&s.onClosed.apply(null,[s,e,i])},1e3)},200),"undefined"!=typeof s.onClosing&&s.onClosing.apply(null,[s,e,i])},e.show=function(t){var e=this,i=g(c,t||{});if(i=g(u,i),i.toastOnce&&i.id&&document.querySelectorAll("."+o+"#"+i.id).length>0)return!1;var s={toast:document.createElement("div"),toastBody:document.createElement("div"),toastCapsule:document.createElement("div"),icon:document.createElement("i"),cover:document.createElement("div"),buttons:document.createElement("div"),wrapper:null};s.toast.appendChild(s.toastBody),s.toastCapsule.appendChild(s.toast),function(){if(s.toast.classList.add(o),s.toastCapsule.classList.add(o+"-capsule"),s.toastBody.classList.add(o+"-body"),n||window.innerWidth<=d?i.transitionInMobile&&s.toast.classList.add(i.transitionInMobile):i.transitionIn&&s.toast.classList.add(i.transitionIn),i["class"]){var t=i["class"].split(" ");m(t,function(t,e){s.toast.classList.add(t)})}i.id&&(s.toast.id=i.id),i.rtl&&s.toast.classList.add(o+"-rtl"),i.layout>1&&s.toast.classList.add(o+"-layout"+i.layout),i.balloon&&s.toast.classList.add(o+"-balloon"),i.maxWidth&&(isNaN(i.maxWidth)?s.toast.style.maxWidth=i.maxWidth:s.toast.style.maxWidth=i.maxWidth+"px"),""===i.theme&&"light"===i.theme||s.toast.classList.add(o+"-theme-"+i.theme),i.color&&(v(i.color)?s.toast.style.background=i.color:s.toast.classList.add(o+"-color-"+i.color)),i.backgroundColor&&(s.toast.style.background=i.backgroundColor,i.balloon&&(s.toast.style.borderColor=i.backgroundColor))}(),function(){i.image&&(s.cover.classList.add(o+"-cover"),s.cover.style.width=i.imageWidth+"px",s.cover.style.backgroundImage="url("+i.image+")",i.rtl?s.toastBody.style.marginRight=i.imageWidth+10+"px":s.toastBody.style.marginLeft=i.imageWidth+10+"px",s.toast.appendChild(s.cover))}(),function(){i.close?(s.buttonClose=document.createElement("button"),s.buttonClose.classList.add(o+"-close"),s.buttonClose.addEventListener("click",function(t){t.target;e.hide(i,s.toast,"button")}),s.toast.appendChild(s.buttonClose)):i.rtl?s.toast.style.paddingLeft="30px":s.toast.style.paddingRight="30px"}(),function(){i.progressBar&&i.timeout?(s.progressBar=document.createElement("div"),s.progressBarDiv=document.createElement("div"),s.progressBar.classList.add(o+"-progressbar"),s.progressBarDiv.style.background=i.progressBarColor,s.progressBar.appendChild(s.progressBarDiv),s.toast.appendChild(s.progressBar),setTimeout(function(){y(s.toast,i,function(){e.hide(i,s.toast)})},300)):i.progressBar===!1&&i.timeout&&setTimeout(function(){e.hide(i,s.toast)},i.timeout)}(),function(){i.icon&&(s.icon.setAttribute("class",o+"-icon "+i.icon),i.iconText&&s.icon.appendChild(document.createTextNode(i.iconText)),i.rtl?s.toastBody.style.paddingRight="33px":s.toastBody.style.paddingLeft="33px",i.iconColor&&(s.icon.style.color=i.iconColor),s.toastBody.appendChild(s.icon))}(),function(){i.title.length>0&&(s.strong=document.createElement("strong"),s.strong.appendChild(f(i.title)),s.toastBody.appendChild(s.strong),i.titleColor&&(s.strong.style.color=i.titleColor),i.titleSize&&(isNaN(i.titleSize)?s.strong.style.fontSize=i.titleSize:s.strong.style.fontSize=i.titleSize+"px"),i.titleLineHeight&&(isNaN(i.titleSize)?s.strong.style.lineHeight=i.titleLineHeight:s.strong.style.lineHeight=i.titleLineHeight+"px"))}(),function(){i.message.length>0&&(s.p=document.createElement("p"),s.p.appendChild(f(i.message)),s.toastBody.appendChild(s.p),i.messageColor&&(s.p.style.color=i.messageColor),i.messageSize&&(isNaN(i.titleSize)?s.p.style.fontSize=i.messageSize:s.p.style.fontSize=i.messageSize+"px"),i.messageLineHeight&&(isNaN(i.titleSize)?s.p.style.lineHeight=i.messageLineHeight:s.p.style.lineHeight=i.messageLineHeight+"px"))}(),i.title.length>0&&i.message.length>0&&(s.strong.style.paddingRight="10px"),function(){if(i.buttons.length>0){s.buttons.classList.add(o+"-buttons"),i.message.length>0&&(i.rtl?s.p.style.marginLeft="15px":s.p.style.marginRight="15px");var t=0;m(i.buttons,function(o,n){s.buttons.appendChild(f(o[0]));var i=s.buttons.childNodes;i[t].addEventListener("click",function(t){t.preventDefault();var n=o[1];return new n(e,s.toast)}),t++}),s.toastBody.appendChild(s.buttons)}}(),function(){s.toastCapsule.style.visibility="hidden",setTimeout(function(){var t=s.toast.offsetHeight,e=s.toast.currentStyle||window.getComputedStyle(s.toast),o=e.marginTop;o=o.split("px"),o=parseInt(o[0]);var n=e.marginBottom;n=n.split("px"),n=parseInt(n[0]),s.toastCapsule.style.visibility="",s.toastCapsule.style.height=t+n+o+"px",setTimeout(function(){s.toastCapsule.style.height="auto",i.target&&(s.toastCapsule.style.overflow="visible")},1e3)},100)}(),function(){var t=i.position;if(i.target)s.wrapper=document.querySelector(i.target),s.wrapper.classList.add(o+"-target"),i.targetFirst?s.wrapper.insertBefore(s.toastCapsule,s.wrapper.firstChild):s.wrapper.appendChild(s.toastCapsule);else{if(-1==r.indexOf(i.position))return void console.warn("["+o+"] Incorrect position.\nIt can be › "+r);t=n||window.innerWidth<=d?"bottomLeft"==i.position||"bottomRight"==i.position||"bottomCenter"==i.position?o+"-wrapper-bottomCenter":"topLeft"==i.position||"topRight"==i.position||"topCenter"==i.position?o+"-wrapper-topCenter":o+"-wrapper-center":o+"-wrapper-"+t,s.wrapper=document.querySelector("."+o+"-wrapper."+t),s.wrapper||(s.wrapper=document.createElement("div"),s.wrapper.classList.add(o+"-wrapper"),s.wrapper.classList.add(t),document.body.appendChild(s.wrapper)),"topLeft"==i.position||"topCenter"==i.position||"topRight"==i.position?s.wrapper.insertBefore(s.toastCapsule,s.wrapper.firstChild):s.wrapper.appendChild(s.toastCapsule)}isNaN(i.zindex)?console.warn("["+o+"] Invalid zIndex."):s.wrapper.style.zIndex=i.zindex}(),function(){if(i.animateInside){s.toast.classList.add(o+"-animateInside");var t=[200,100,300];if("bounceInLeft"==i.transitionIn&&(t=[400,200,400]),i.title.length>0&&window.setTimeout(function(){s.strong.classList.add("slideIn")},t[0]),i.message.length>0&&window.setTimeout(function(){s.p.classList.add("slideIn")},t[1]),i.icon&&window.setTimeout(function(){s.icon.classList.add("revealIn")},t[2]),i.buttons.length>0&&s.buttons){var e=150;m(s.buttons.childNodes,function(t,o){window.setTimeout(function(){t.classList.add("revealIn")},e),e+=e})}}}(),i.onOpening.apply(null,[i,s.toast]);try{var l=new CustomEvent(o+"-opening",{detail:i,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(p){console.warn(p)}setTimeout(function(){try{var t=new CustomEvent(o+"-opened",{detail:i,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(e){console.warn(e)}i.onOpened.apply(null,[i,s.toast])},1e3),i.pauseOnHover&&(s.toast.addEventListener("mouseenter",function(t){this.classList.add(o+"-paused")}),s.toast.addEventListener("mouseleave",function(t){this.classList.remove(o+"-paused")})),i.resetOnHover&&(s.toast.addEventListener("mouseenter",function(t){this.classList.add(o+"-reseted")}),s.toast.addEventListener("mouseleave",function(t){this.classList.remove(o+"-reseted")})),i.drag&&(a?(s.toast.addEventListener("touchstart",function(t){h.startMoving(this,e,i,t)},!1),s.toast.addEventListener("touchend",function(t){h.stopMoving(this,t)},!1)):(s.toast.addEventListener("mousedown",function(t){t.preventDefault(),h.startMoving(this,e,i,t)},!1),s.toast.addEventListener("mouseup",function(t){t.preventDefault(),h.stopMoving(this,t)},!1)))},e});
