"use strict";function b64EncodeUnicode(t){return btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,function(t,e){return String.fromCharCode("0x"+e)}))}function b64DecodeUnicode(t){return decodeURIComponent(atob(t).split("").map(function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""))}!function(t){var o=+new Date,c=100,a=[];function d(){var t=+new Date;if(c<t-o){for(var e=0;e<a.length;e++)a[e]();o=t}}var s={},l=document.documentElement,i=3;function n(){var i,n;s.DOMNodeInserted?t.addEventListener("DOMContentLoaded",function(){s.DOMSubtreeModified?l.addEventListener("DOMSubtreeModified",d,!1):(l.addEventListener("DOMNodeInserted",d,!1),l.addEventListener("DOMNodeRemoved",d,!1))},!1):document.onpropertychange?document.onpropertychange=d:(i=document.querySelector("#best-suggestion-boxes"),n=i.length,setTimeout(function t(){var e=document.querySelector("#best-suggestion-boxes"),o=e.length;o!=n&&(i=[]);for(var a=0;a<o;a++)if(e[a]!==i[a]){d(),i=e,n=o;break}setTimeout(t,c)},c))}function e(e){l.addEventListener(e,function t(){s[e]=!0,l.removeEventListener(e,t,!1),0==--i&&n()},!1)}t.addEventListener?(e("DOMSubtreeModified"),e("DOMNodeInserted"),e("DOMNodeRemoved")):n();var r=document.createElement("div");l.appendChild(r),l.removeChild(r),t.liftDOMChange=function(t,e){e&&(c=e),a.push(t)}}(window),function(t,e){t=t||"LIFTReady",e=e||window;var o=[],a=!1,i=!1;function n(){if(!a){a=!0;for(var t=0;t<o.length;t++)o[t].fn.call(window,o[t].ctx);o=[]}}function c(){"complete"===document.readyState&&n()}e[t]=function(t,e){if("function"!=typeof t)throw new TypeError("callback for LIFTReady(fn) must be a function");a?setTimeout(function(){t(e)},1):(o.push({fn:t,ctx:e}),"complete"===document.readyState?setTimeout(n,1):i||(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):(document.attachEvent("onreadystatechange",c),window.attachEvent("onload",n)),i=!0))}}("LIFTReady",window);var NGUYEN_APP={buildHTML:"",chat:function(){return document.createElement("section")},buildChatHTML:function(){var t=NGUYEN_APP.chat();return t.innerHTML='<div class="suggestion-js-boxes__body__header"><nav class="suggestion-js-boxes__body__header-cta-text"><span class="suggestion-js-boxes__body__header-cta-icon"><span class="suggestion-js-boxes__body__header-cta-icon-avatar"></span></span><span class="suggestion-js-boxes__body__header-title-chat">Chat with us</span></nav></div><div class="suggestion-js-boxes__body-display suggestion-js-boxes__body__display"></div><div class="suggestion-js-boxes__body__footer"><div class="suggestion-js-boxes__body__footer-copyright"><a href="https://dangnho.com" target="blank">POWER BY <span>DANG NHO</span></a></div></div>',t.classList.add("suggestion-js-boxes__body"),t.classList.add("chatbox--is-visible"),t},icon:function(){return document.createElement("section")},button:function(){return document.createElement("button")},main:function(){return document.createElement("div")},mainHTML:function(){var t=NGUYEN_APP.main();return t.innerHTML="",t.id="best-suggestion-boxes",t.classList.add("suggestion-js-boxes"),t.appendChild(NGUYEN_APP.buildChatHTML()),t},iconEl:function(){var t=NGUYEN_APP.icon();return t.classList.add("suggestion-js-boxes__icon"),t.classList.add("suggestion-js-boxes__icon-pulse"),t.innerHTML='<svg version="1.1" x="0px" y="0px" viewBox="0 0 60 60" xml:space="preserve"><path d="M0,28.5c0,14.888,13.458,27,30,27c4.263,0,8.379-0.79,12.243-2.349c6.806,3.928,16.213,5.282,16.618,5.339 c0.047,0.007,0.093,0.01,0.139,0.01c0.375,0,0.725-0.211,0.895-0.554c0.192-0.385,0.116-0.85-0.188-1.153 c-2.3-2.3-3.884-7.152-4.475-13.689C58.354,38.745,60,33.704,60,28.5c0-14.888-13.458-27-30-27S0,13.612,0,28.5z M40,28.5 c0-2.206,1.794-4,4-4s4,1.794,4,4s-1.794,4-4,4S40,30.706,40,28.5z M26,28.5c0-2.206,1.794-4,4-4s4,1.794,4,4s-1.794,4-4,4 S26,30.706,26,28.5z M12,28.5c0-2.206,1.794-4,4-4s4,1.794,4,4s-1.794,4-4,4S12,30.706,12,28.5z"></path></svg>',document.querySelector("#best-suggestion-boxes").appendChild(t),t.addEventListener("click",function(){t.classList.toggle("chaticon--is-visible"),NGUYEN_APP.buildChatHTML().classList.contains("chatbox--is-visible")&&document.querySelector("#best-suggestion-boxes .suggestion-js-boxes__body").classList.toggle("chatbox--is-visible"),NGUYEN_APP.buildChatHTML().classList.contains("chatbox--is-visible"),NGUYEN_APP.checkHeight()}),t},buttonEl:function(){var t=NGUYEN_APP.button();return t.classList.add("suggestion-js-boxes__body-toggle"),t.classList.add("suggestion-js-boxes__body__header-cta-btn"),t.innerHTML='<svg version="1.1" x="0px" y="0px" viewBox="0 0 492.002 492.002" xml:space="preserve"><g><g><path d="M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132C494.624,356.041,494.624,338.965,484.136,328.473z"></path></g></g></svg>',document.querySelector("#best-suggestion-boxes .suggestion-js-boxes__body .suggestion-js-boxes__body__header").appendChild(t),t.addEventListener("click",function(){document.querySelector("#best-suggestion-boxes .suggestion-js-boxes__body").classList.toggle("chatbox--is-visible"),document.querySelector("#best-suggestion-boxes .suggestion-js-boxes__icon").classList.toggle("chaticon--is-visible")}),t},checkHeight:function(){var t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);if(t<600){var e=t-(document.querySelector("#best-suggestion-boxes .suggestion-js-boxes__body .suggestion-js-boxes__body__header").offsetHeight+document.querySelector("#best-suggestion-boxes .suggestion-js-boxes__body .suggestion-js-boxes__body__footer").offsetHeight+20+t/5);document.querySelector("#best-suggestion-boxes .suggestion-js-boxes__body .suggestion-js-boxes__body__display").style.maxHeight=e+"px",setTimeout(function(){document.querySelector("#best-suggestion-boxes .suggestion-js-boxes__body .suggestion-js-boxes__body__display").style.maxHeight=e+"px"},1e3)}else 600<=t&&t<1e3&&(document.querySelector("#best-suggestion-boxes .suggestion-js-boxes__body .suggestion-js-boxes__body__display").style.maxHeight="400px",setTimeout(function(){document.querySelector("#best-suggestion-boxes .suggestion-js-boxes__body .suggestion-js-boxes__body__display").style.maxHeight="400px"},1e3))},iniBtnAction:function(){liftDOMChange(function(){var t=document.querySelectorAll(".suggestion-js-boxes__body__display-chat-item");[].forEach.call(t,function(t){t.getAttribute("data-chat-show")&&t.addEventListener("click",function(){t.closest(".suggestion-js-boxes__body__display .suggestion-js-boxes__body__display-chat").classList.remove("chatitem--is-active"),document.getElementById(t.getAttribute("data-chat-show")).classList.add("chatitem--is-active"),NGUYEN_APP.checkHeight()})})})},createChatContent:function(){NGUYEN_APP.jsonLoad("/wp-json/best-suggestion-boxes/v1/all",function(t){for(var e=0;e<t.data.length;e++){var o=0==e?" chatitem--is-active":"";NGUYEN_APP.buildHTML+='<div id="'+t.data[e].id+'" class="suggestion-js-boxes__body__display-chat'+o+'">';for(var a=0;a<t.data[e].items.length;a++){var i="undefined"!=t.data[e].items[a].target&&null!=t.data[e].items[a].target&&""!=t.data[e].items[a].target?" suggestion-js-boxes__body__display-chat-item-sms-arrow":"",n=document.createElement("div"),c="";if(c+='<div class="suggestion-js-boxes__body__display-chat-item-sms'+i+'">',c+=t.data[e].items[a].content,c+="</div>\n",n.classList.add("suggestion-js-boxes__body__display-chat-item"),"undefined"!=t.data[e].items[a].target&&null!=t.data[e].items[a].target&&""!=t.data[e].items[a].target){var d=Math.random().toString(36).substr(2,9);n.setAttribute("data-chat-show",t.data[e].items[a].target),n.setAttribute("id",d)}n.innerHTML=c,NGUYEN_APP.buildHTML+=n.outerHTML}NGUYEN_APP.buildHTML+="</div>\n"}document.querySelector("#best-suggestion-boxes .suggestion-js-boxes__body__display").innerHTML=NGUYEN_APP.buildHTML},function(t){})},init:function(){NGUYEN_APP.createChatContent(),NGUYEN_APP.buttonEl(),NGUYEN_APP.iconEl(),NGUYEN_APP.iniBtnAction()},jsonLoad:function(t,e,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(200===a.status?e&&e(JSON.parse(a.responseText)):o&&o(a))},a.open("GET",t,!0),a.send()}};LIFTReady(function(){var t=document.getElementById("best-suggestion-boxes");void 0!==t&&null!=t&&""!=t||document.body.appendChild(NGUYEN_APP.mainHTML()),NGUYEN_APP.init()});
