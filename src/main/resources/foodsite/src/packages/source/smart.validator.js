
/* Smart UI v7.0.0 (2020-Mar)
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Validator",class{constructor(a,b=""){const c=this;if(a){if(c.rules=a,c.validationSummarySelector=b,c.validationSummarySelector)for(let a=0;a<c.rules.length;a++){const b=c.rules[a],d=document.createElement("span");d.setAttribute("input-selector",b.input),document.querySelector(c.validationSummarySelector).appendChild(d)}c._configureInputs(),c._addEventListeners()}}attach(){const a=this;a._removeEventListeners(),a._addEventListeners()}detach(){const a=this;a.reset(),a._removeEventListeners()}reset(){const a=this;for(let b=0;b<a.rules.length;b++){let c=a.rules[b],d=document.querySelectorAll(c.input);for(let b=0;b<d.length;b++)a._resetAttributes(d[b],c);c.hint=""}}_resetAttributes(a,b){const c=this;a.hasAttribute("smart-validation-success")&&c._removeErrorOrSuccessAttr(a,0),a.hasAttribute("smart-validation-error")&&(c._removeErrorOrSuccessAttr(a,1),c.validationSummarySelector&&(document.querySelector("span[input-selector='"+b.input+"']").innerHTML=""))}validate(a){const b=this;let c,d,e=!0,f=[],g=0;for(let c=0;c<b.rules.length;c+=1)"function"==typeof b.rules[c].type&&g++;for(let h=0;h<b.rules.length;h+=1){if("function"==typeof b.rules[h].type){const i=function(b,h){c=b,!1===c&&(e=!1,d=document.querySelector(h.input),f.push(d)),g--,0==g&&"function"==typeof a&&a&&a(e)};b._validateRule(b.rules[h],i)}else c=b._validateRule(b.rules[h]);!1===c&&(e=!1,d=document.querySelector(b.rules[h].input),f.push(d))}return 0==g?e:void 0}_calculateErrorMsgTooltipPosition(a,b){const c=document.body.getBoundingClientRect(),d=a.getBoundingClientRect(),e=d.top-c.top;b.style.top=e+d.height+"px",b.style.left=d.left+"px"}_addErrorAttr(a,b){function c(b,c,d){let e=a;const f=a.querySelector(".smart-validation-error input.smart-input");f&&(e=f);let g;g=d?()=>b.classList.remove("smart-hidden"):()=>b.classList.add("smart-hidden"),e.addEventListener(c,g),e[c+e.id]=g}const d=this;if(a.setAttribute("smart-validation-error",b),a.classList.add("smart-validation-error"),"input"===a.tagName.toLowerCase()&&"button"!==a.type&&"radio"!==a.type){const b=a.nextSibling;if("undefined"==typeof b.tagName||b.tagName&&"label"!==b.tagName.toLowerCase()&&"smart-error-label-like-after-element"!==b.className){let c=document.createElement("label");c.setAttribute("class","smart-error-label-like-after-element"),a.parentNode.insertBefore(c,b)}}const e=document.createElement("span");e.classList.add("smart-error-holder"),e.classList.add("smart-hidden"),e.classList.add(a.id),e.innerHTML=b;const f=document.body;f.appendChild(e),d._calculateErrorMsgTooltipPosition(a,e),window.addEventListener("orientationchange",function(){setTimeout(function(){d._calculateErrorMsgTooltipPosition(a,e)},300)}),window.addEventListener("resize",function(){d._calculateErrorMsgTooltipPosition(a,e)});const g=a.querySelector(".smart-validation-error input.smart-input");g?(c(e,"click",1),"radio"!==g.type&&"checkbox"!==g.type&&c(e,"focusin",1),c(e,"focusout",0)):(c(e,"click",1),"radio"!==a.type&&"checkbox"!==a.type&&c(e,"focusin",1),c(e,"focusout",0))}_addSuccessAttr(a){a.setAttribute("smart-validation-success",""),a.classList.add("smart-validation-success");const b=a.nextSibling;if(b.tagName&&"label"===b.tagName.toLowerCase()&&"smart-error-label-like-after-element"===b.className){const c=document.createElement("label");c.setAttribute("class","smart-success-label-like-after-element"),a.parentNode.insertBefore(c,b)}if("input"===a.tagName.toLowerCase()&&(b.tagName&&"label"===b.tagName.toLowerCase()&&"smart-error-label-like-after-element"===b.className&&b.remove(),"undefined"==typeof b.tagName||b.tagName&&"label"!==b.tagName.toLowerCase()&&"smart-success-label-like-after-element"!==b.className)){const c=document.createElement("label");c.setAttribute("class","smart-success-label-like-after-element"),a.parentNode.insertBefore(c,b)}}_removeErrorOrSuccessAttr(a,b){const c=a.nextSibling;if(1===b){a.removeAttribute("smart-validation-error"),a.classList.remove("smart-validation-error");const b=document.querySelector("span.smart-error-holder."+a.id);b&&b.remove(),c.tagName&&"label"===c.tagName.toLowerCase()&&"smart-error-label-like-after-element"===c.className&&c.remove()}0===b&&(a.removeAttribute("smart-validation-success"),a.classList.remove("smart-validation-success"),c.tagName&&"label"===c.tagName.toLowerCase()&&"smart-success-label-like-after-element"===c.className&&c.remove())}_validateRule(a,b){const c=this,d=document.querySelectorAll(a.input+":not(.smart-error-holder)");let e,f=!0;if(!d||null===d[0])return;let g=!1;if("function"==typeof a.type&&(g=a.type.call(c,d[0],a),!0===g&&b&&b(!0,a)),"function"==typeof a.type&&!1===g){if("function"==typeof a.hintRender&&!a.hint&&!c._higherPriorityActive(a)){e=a.hintRender.apply(this,[a.message,d[0]]),c._removeLowPriorityHints(a),a.hint=e;for(let b=0;b<d.length;b++)c._removeErrorOrSuccessAttr(d[b],0),c._addErrorAttr(d[b],a.message);c.validationSummarySelector&&(document.querySelector("span[input-selector='"+a.input+"']").innerHTML=a.message)}f=!1,b&&b(!1,a)}else c._hideHintByRule(a);if(d[0]&&!d[0].hasAttribute("smart-validation-error"))if(1<d.length)for(let a=0;a<d.length;a++)c._removeErrorOrSuccessAttr(d[a],1);else c._addSuccessAttr(d[0]);return f}_hideHintByRule(a){const b=this,c=document.querySelectorAll(a.input);let d;if(a){if(d=a.hint,d){for(let a=0;a<c.length;a++)1<c.length?b._removeErrorOrSuccessAttr(c[a],1):(b._removeErrorOrSuccessAttr(c[a],1),b._addSuccessAttr(c[a]));b.validationSummarySelector&&(document.querySelector("span[input-selector='"+a.input+"']").innerHTML=""),d.remove()}a.hint=null}}_removeLowPriorityHints(a){const b=this;let c,d=!1;for(let e=0;e<b.rules.length;e+=1)c=b.rules[e],d&&c.input===a.input&&b._hideHintByRule(c),c===a&&(d=!0)}_removeEventListeners(){const a=this;let b,c,d;for(let e=0;e<a.rules.length;e+=1){b=a.rules[e],d=b.action.split(","),c=document.querySelectorAll(b.input);for(let f=0;f<d.length;f+=1)for(let g,h=0;h<c.length;h++){g=c[h],1===c.length&&(h="");let i=!1;a._isjQWidget(g)&&(i=!0),i&&("blur"===d[f].trim()||"focus"===d[f].trim())&&g&&"input"!==g.nodeName.toLowerCase()&&(g=g.querySelector("input")),g.removeEventListener(d[f].trim(),g[d[f].trim()+b.input+b.message.split(" ").join("_")+e+""+h]),delete g[d[f].trim()+b.input+b.message.split(" ").join("_")+e+""+h]}}}_addEventListeners(){const a=this;let b;for(let c,d=0;d<a.rules.length;d+=1){c=a.rules[d],b=document.querySelectorAll(c.input);for(let e,f=0;f<b.length;f++){e=b[f],1===b.length&&(f="");const g=c.action.split(",");let h=!1;a._isjQWidget(e)&&(h=!0);for(let b=0;b<g.length;b+=1){const i=g[b].trim();h&&("blur"===i||"focus"===i)&&e&&"input"!==e.nodeName.toLowerCase()&&(e=e.querySelector("input"));const j=()=>a._validateRule(c);null!==e&&(e.addEventListener(i,j),e[i+c.input+c.message.split(" ").join("_")+d+""+f]=j)}}}}_configureInputs(){const a=this;a.rules=a.rules||[];for(let b=0;b<a.rules.length;b+=1)a._handleInput(b)}_handleInput(a){const b=this,c=b.rules[a];c.message||(c.message="Validation Failed!"),c.action||(c.action="blur"),c.hintRender||(c.hintRender=()=>document.createElement("div")),c.type?b._handleRule(c):c.type=null}_handleRule(a){const b=this,c=a.type;let d,e=!1;if(d=b["_"+c],d?a.type=function(c){return d.apply(b,[c].concat(a))}:e=!0,e)throw new Error("Wrong parameter: "+a.type)}_required(a,b){const c=this;switch(c._getType(a)){case"smart-input-inner":{let b=a.querySelector("input").value;if(0<b.length)return""!==b.trim();break}case"smart-drop-down-list":{let b=a.querySelector("input[smart-id=\"hiddenInput\"]").value;return!!b&&""!==b.trim()}case"textarea":case"password":case"smart-input":case"smart-text-box-element":case"text":return!!a.value&&""!==a.value.trim();case"radio":case"smart-radio-button":{const a=document.querySelectorAll(b.input);let c=!1;if(null===a||0>=a.length)return;for(let b=0;b<a.length;b++)a[b].checked&&(c=!0);return c}case"smart-check-box":case"checkbox":return a.checked;}return!1}_notNumber(a){const b=this;return b._validateText(a,function(a){if(""===a)return!0;const b=/\d/;return!b.test(a)})}_startWithLetter(a){const b=this;return b._validateText(a,function(a){if(""===a)return!0;const b=/\d/;return!b.test(a.substring(0,1))})}_numeric(a){const b=this;return b._validateText(a,function(a){if(""===a)return!0;const b=new Number(a);return!isNaN(b)&&isFinite(b)})}_phone(a){const b=this;return b._validateText(a,function(a){if(""===a)return!0;const b=/^\(\d{3}\)(\d){3}-(\d){4}$/;return b.test(a)})}_stringLength(a,b){const c=this;let d=!0,e=!0;return b.min&&(d=c._minLength(a,b.min)),b.max&&(e=c._maxLength(a,b.max)),d&&e}_maxLength(a,b){const c=this;return b=parseInt(b,10),c._validateText(a,function(a){return a.length<=b})}_minLength(a,b){const c=this;return b=parseInt(b,10),c._validateText(a,function(a){if(a)return a.length>=b})}_pattern(a,b){const c=this;return c._validateText(a,function(a){return!(""!==a)||b.pattern.test(a)})}_compare(a,b){const c=this;return c._validateText(a,function(c){switch(b.comparisonType){case"!=":return c!=b.comparisonTarget(a,b);case"!==":return c!==b.comparisonTarget(a,b);case"<":return c<b.comparisonTarget(a,b);case"<=":return c<=b.comparisonTarget(a,b);case"==":return c==b.comparisonTarget(a,b);case"===":return c===b.comparisonTarget(a,b);case">":return c>b.comparisonTarget(a,b);case">=":return c>=b.comparisonTarget(a,b);default:return c==b.comparisonTarget(a,b);}})}_custom(a,b){return b.validationCallback(a,b)}_range(a,b){const c=this;return c._validateText(a,function(a){if(""===a)return!0;let c=!0,d=!0;return"function"==typeof b.max.getMonth&&(a=new Date(a)),b.min&&(c=a>=b.min),b.max&&(d=a<=b.max),c&&d})}_email(a){const b=this;return b._validateText(a,function(a){if(""===a)return!0;const b=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return b.test(a)})}_zipCode(a){const b=this;return b._validateText(a,function(a){if(""===a)return!0;const b=/^(^\d{5}$)|(^\d{5}-\d{4}$)|(\d{3}-\d{2}-\d{4})$/;return b.test(a)})}_ssn(a){const b=this;return b._validateText(a,function(a){if(""===a)return!0;const b=/\d{3}-\d{2}-\d{4}/;return b.test(a)})}_validateText(a,b){const c=this;let d;if(c._isTextInput(a)){if(c._isjQWidget(a)){let b=a.querySelector("input");b&&(b=b.value,d=0<b.length?b:a.value)}else d=a.value;return b(d)}return!1}_isjQWidget(a){return!!(0<=a.tagName.toLowerCase().indexOf("smart"))||!!(0<=a.tagName.toLowerCase().indexOf("smart-input"))||!!(0<=a.tagName.toLowerCase().indexOf("smart-password-text-box"))||!!(0<=a.tagName.toLowerCase().indexOf("smart-complex-input"))||!!(0<=a.tagName.toLowerCase().indexOf("smart-formatted-input"))||!!(0<=a.tagName.toLowerCase().indexOf("smart-masked-text-box"))||!!(0<=a.tagName.toLowerCase().indexOf("smart-date-time-picker"))||!!(0<=a.tagName.toLowerCase().indexOf("smart-numeric-text-box"))||!!(0<=a.tagName.toLowerCase().indexOf("smart-check-box"))||!!(0<=a.tagName.toLowerCase().indexOf("smart-radio-button"))||!!(0<=a.tagName.toLowerCase().indexOf("smartcheckbox"))||!!(0<=a.tagName.toLowerCase().indexOf("angular"))}_isTextInput(a){const b=this;if(a){const c=b._getType(a);return"text"===c||"textarea"===c||"password"===c||"smart-input-inner"===c||"smart-numeric-text-box"===c||a.classList.contains("smart-input")||a instanceof Smart.TextBox||a.classList.contains("smart-masked-text-box")||a.classList.contains("smart-text-box")||a.classList.contains("smart-date-time-picker")}}_getType(a){if(!a)return;const b=a.tagName.toLowerCase();let c=b,d=a;const e=a.querySelector(".smart-input"),f=d.querySelector(".smart-input"),g=a.querySelector(".smart-text-box-element"),h=d.querySelector(".smart-text-box-element");if(b&&"input"!==b&&(d=a.querySelector("input"),d&&(c=d.tagName.toLowerCase())),"smart-password-text-box"===b||"smart-password-text-box"===c)return"password";if("smart-check-box"===b||"smart-check-box"===c)return"smart-check-box";if("smart-radio-button"===b||"smart-radio-button"===c)return"smart-radio-button";if("smart-drop-down-list"===b||"smart-drop-down-list"===c)return"smart-drop-down-list";if("smart-numeric-text-box"===b||"smart-numeric-text-box"===c)return"smart-numeric-text-box";if("textarea"===b||"textarea"===c)return"textarea";if(e||f)return"smart-input";if(g||h)return"smart-text-box-element";if(e&&e.value&&0<e.value.length||f&&f.value&&0<f.value.length)return"smart-input-inner";if("input"===b||"input"===c){const b=d.type?d.type.toLowerCase():void 0;if(b)return b;const c=a.type?a.type.toLowerCase():void 0;return c?c:"text"}return b}_higherPriorityActive(a){const b=this;let c,d=!1;for(let e=b.rules.length-1;0<=e;e-=1){if(c=b.rules[e],d&&c.input===a.input&&c.hint)return!0;c===a&&(d=!0)}return!1}});